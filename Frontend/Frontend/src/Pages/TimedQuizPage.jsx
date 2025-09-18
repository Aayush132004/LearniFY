import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { timedQuizData } from '../utils/timedQuizData';

// Icons
import { BookMarked, Timer, Check, X, Award, Repeat, Home } from 'lucide-react';
import Navbar from '../Components/Navbar';

const TIME_PER_QUESTION = 20; // 20 seconds per question

// --- Sub-components for better organization ---

const ClassSelectionCard = ({ title, onClick }) => (
    <div
      onClick={onClick}
      className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-lg
                 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer
                 shadow-lg text-center items-center hover:border-teal-500/40 hover:shadow-teal-500/10">
      <div className="p-4 bg-slate-950 rounded-full border border-slate-700 mb-4 inline-block">
        <BookMarked size={32} className="text-teal-400" />
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
);

export default function TimedQuizPage() {
    const navigate = useNavigate();
    const timerRef = useRef(null);

    // State management
    const [quizState, setQuizState] = useState('selecting'); // 'selecting', 'playing', 'finished'
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(TIME_PER_QUESTION);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState(null); // 'correct' or 'incorrect'

    // Timer logic
    useEffect(() => {
        if (quizState === 'playing' && !feedback) {
            timerRef.current = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [quizState, currentQuestionIndex, feedback]);

    // Effect to handle when timer runs out
    useEffect(() => {
        if (timer === 0) {
            clearInterval(timerRef.current);
            setFeedback('incorrect'); // Mark as incorrect if time runs out
            setTimeout(handleNextQuestion, 1500);
        }
    }, [timer]);

    const startQuiz = (classId) => {
        setQuestions(timedQuizData[classId]);
        setQuizState('playing');
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setFeedback(null);
            setTimer(TIME_PER_QUESTION);
        } else {
            setQuizState('finished');
        }
    };

    const handleAnswerSelect = (option) => {
        if (feedback) return; // Prevent changing answer after submission

        clearInterval(timerRef.current);
        setSelectedAnswer(option);
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        if (option === correctAnswer) {
            setScore(prev => prev + 1);
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
        setTimeout(handleNextQuestion, 1500); // Auto-advance after 1.5 seconds
    };

    const handleRestartQuiz = () => {
        setQuizState('selecting');
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimer(TIME_PER_QUESTION);
        setSelectedAnswer(null);
        setFeedback(null);
    };

    const progressPercentage = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;
    const currentQuestion = questions[currentQuestionIndex];

    // --- RENDER VIEWS ---

    if (quizState === 'selecting') {
        return (
            <>
            <Navbar/>
            <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans
                           bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]">
                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    <header className="text-center py-10">
                        <h1 className="text-5xl text-5xl font-normal tracking-tight text-white mb-3">Select Your Class</h1>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">Choose your class to start the mixed-subject challenge.</p>
                    </header>
                    <main className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {['9', '10', '11', '12'].map(classId => (
                            <ClassSelectionCard key={classId} title={`Class ${classId}`} onClick={() => startQuiz(classId)} />
                        ))}
                    </main>
                </div>
            </div>
            </>
        );
    }

    if (quizState === 'finished') {
        return (
           <>
           <Navbar/>
             <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4 text-white text-center
                           bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]">
                <Award size={64} className="text-teal-400" />
                <h1 className="text-4xl font-bold mt-4">Challenge Complete!</h1>
                <p className="text-slate-400 mt-2">Here's how you performed.</p>
                <div className="mt-8 text-6xl font-bold">
                    {score} <span className="text-3xl text-slate-500">/ 10</span>
                </div>
                <p className="text-lg mt-2">Correct Answers</p>
                <div className="flex gap-4 mt-10">
                    <button onClick={handleRestartQuiz} className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full font-semibold transition-colors">
                        <Repeat size={18} /> Play Again
                    </button>
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-full font-semibold transition-colors">
                        <Home size={18} /> Back to Hub
                    </button>
                </div>
            </div>
            </>
        );
    }

    return (
        <>
        <Navbar/>
        <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans flex flex-col
                       bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]">
             <main className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-3xl">
                    {/* Header with Progress and Timer */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <p className="text-slate-400">Question {currentQuestionIndex + 1} of {questions.length}</p>
                            <p className="text-2xl font-bold text-white">Mixed Subject Challenge</p>
                        </div>
                        <div className={`relative h-20 w-20 flex items-center justify-center font-bold text-2xl rounded-full
                                       ${timer <= 5 ? 'text-red-400 bg-red-500/10' : 'text-teal-400 bg-teal-500/10'}`}>
                           <Timer className="absolute opacity-20" size={32}/>
                           {timer}
                        </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2.5 mb-8">
                        <div className="bg-teal-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
                    </div>

                    {/* Question and Options */}
                    <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                        <h2 className="text-2xl font-semibold text-white leading-snug">{currentQuestion.questionText}</h2>
                        <div className="mt-8 space-y-4">
                            {currentQuestion.options.map((option, index) => {
                                let buttonClass = 'bg-slate-800 hover:bg-slate-700';
                                if (feedback) {
                                    if (option === currentQuestion.correctAnswer) {
                                        buttonClass = 'bg-green-500/20 text-green-300 ring-2 ring-green-500';
                                    } else if (option === selectedAnswer) {
                                        buttonClass = 'bg-red-500/20 text-red-300 ring-2 ring-red-500';
                                    } else {
                                        buttonClass = 'bg-slate-800 opacity-50';
                                    }
                                }

                                return (
                                    <button key={index} onClick={() => handleAnswerSelect(option)}
                                        className={`w-full text-left p-4 rounded-lg font-medium transition-all flex justify-between items-center ${buttonClass}`}
                                        disabled={!!feedback}>
                                        <span>{option}</span>
                                        {feedback && option === currentQuestion.correctAnswer && <Check size={20} />}
                                        {feedback && option === selectedAnswer && option !== currentQuestion.correctAnswer && <X size={20} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
    );
}