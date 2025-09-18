import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router';
import ReactMarkdown from 'react-markdown';

// Icons
import { ChevronLeft, BrainCircuit, Sparkles, ChevronRight, Filter } from 'lucide-react';

export default function AIAnalysisPage() {
    const navigate = useNavigate();
    const { classId } = useParams(); // Get class from URL like /subjective/11

    // State management
    const [allQuestions, setAllQuestions] = useState({ physics: [], chemistry: [], maths: [] });
    const [activeFilter, setActiveFilter] = useState('physics');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    // 1. Fetch questions when the component mounts
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                setIsFetching(true);
               const response = await fetch(
  `${import.meta.env.VITE_API_URL}/subjective/problemByClass/${classId}`);

                const result = await response.json();
                if (result.success) {
                    setAllQuestions(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch questions:", error);
            } finally {
                setIsFetching(false);
            }
        };
        fetchQuestions();
    }, [classId]);

    // 2. Memoize the filtered list of questions for efficiency
    const filteredQuestions = useMemo(() => {
        return allQuestions[activeFilter] || [];
    }, [allQuestions, activeFilter]);

    // 3. Handle filter changes
    const handleFilterChange = (subject) => {
        setActiveFilter(subject);
        setCurrentIndex(0); // Reset to the first question of the new subject
        setUserAnswer('');
        setAiResponse('');
    };

    // 4. Handle streaming submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAiResponse('');

        const currentQuestion = filteredQuestions[currentIndex];

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/subjective/analyze`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    questionId: currentQuestion.id,
                    classId,
                    subject: activeFilter,
                    userAnswer: userAnswer,
                }),
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n\n');
                
                for (const line of lines) {
                    if (line.startsWith('data:')) {
                        const json = JSON.parse(line.substring(5));
                        setAiResponse(prev => prev + json.text);
                    }
                }
            }

        } catch (error) {
            console.error("Analysis streaming error:", error);
            setAiResponse('Sorry, an error occurred while analyzing your answer.');
        } finally {
            setIsLoading(false);
        }
    };

    const currentQuestion = filteredQuestions[currentIndex];

    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans
                       bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]">
            <header className="relative flex items-center justify-center h-16 flex-shrink-0 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="absolute left-4 sm:left-6 lg:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <ChevronLeft size={20} /> Back
                </button>
                <h1 className="text-2xl font-bold text-white">AI Subjective Analysis</h1>
            </header>

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 w-full">
                {/* Filter Controls */}
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                    <Filter className="text-teal-400" />
                    <h2 className="font-semibold text-white mr-4">Filter by Subject:</h2>
                    {['physics', 'chemistry', 'maths'].map(subject => (
                        <button key={subject} onClick={() => handleFilterChange(subject)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeFilter === subject ? 'bg-teal-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                            {subject.charAt(0).toUpperCase() + subject.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side: Question & Answer */}
                    <div>
                        <div className="bg-slate-900/50 rounded-t-2xl border-x border-t border-slate-800 p-6">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-white">Question {currentIndex + 1} of {filteredQuestions.length}</h2>
                                <div className="flex gap-2">
                                    <button onClick={() => setCurrentIndex(p => Math.max(0, p - 1))} disabled={currentIndex === 0}
                                        className="p-2 bg-slate-800 rounded-full disabled:opacity-30 hover:bg-slate-700"><ChevronLeft/></button>
                                    <button onClick={() => setCurrentIndex(p => Math.min(filteredQuestions.length - 1, p + 1))} disabled={currentIndex === filteredQuestions.length - 1}
                                        className="p-2 bg-slate-800 rounded-full disabled:opacity-30 hover:bg-slate-700"><ChevronRight/></button>
                                </div>
                            </div>
                            <div className="mt-4 p-4 min-h-[100px] bg-slate-950 rounded-lg border border-slate-700">
                                {isFetching ? <p>Loading questions...</p> : <p className="text-slate-300">{currentQuestion?.text || 'No questions available for this filter.'}</p>}
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)}
                                className="w-full h-48 p-4 bg-slate-950 border-x border-slate-800 text-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition"
                                placeholder="Write your detailed answer here..."
                            />
                            <button type="submit" disabled={isLoading || !userAnswer || !currentQuestion}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-b-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                {isLoading ? 'Analyzing...' : 'Submit for Analysis'}
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Analysis */}
                    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 min-h-[500px]">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="h-6 w-6 text-teal-400" />
                            <h2 className="text-xl font-bold text-white">AI Feedback</h2>
                        </div>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-300">
                           {isLoading && !aiResponse && <p>Thinking...</p>}
                           <ReactMarkdown>{aiResponse}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}