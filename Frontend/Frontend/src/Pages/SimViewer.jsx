import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { findSimulation } from '../utils/simulations'; // Import the find function

// Icons from Lucide-React
import { ChevronLeft, Lightbulb } from 'lucide-react';

export default function SimViewer() {
    const { subject, classId, simulationId } = useParams();
    const navigate = useNavigate();
    const [simulation, setSimulation] = useState(null);

    useEffect(() => {
        const foundSim = findSimulation(simulationId);
        setSimulation(foundSim);
    }, [simulationId]);

    if (!simulation) {
        return (
            <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center">
                <p className="text-slate-400">Loading Simulation...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans
                       flex flex-col
                       bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]">

            <header className="relative flex items-center justify-center h-16 flex-shrink-0 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50">
                <button
                    onClick={() => navigate(`/${subject}/${classId}`)}
                    className="absolute left-4 sm:left-6 lg:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                    <ChevronLeft size={20} />
                    Back to List
                </button>
                <h1 className="text-2xl font-bold text-white">
                    {simulation.name}
                </h1>
            </header>

            <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 sm:p-6 lg:p-8">
                {/* Left Column: Simulation Iframe */}
                <main className="lg:col-span-2 w-full h-full min-h-[60vh] flex flex-col bg-slate-900/50 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
                    <iframe
                        src={simulation.embedUrl}
                        title={simulation.name}
                        className="w-full flex-grow border-0"
                        allowFullScreen
                    ></iframe>
                </main>

                {/* Right Column: Explanation */}
                <aside className="lg:col-span-1 bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
                    <div className="flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-teal-400" />
                        <h2 className="text-xl font-bold text-white">Key Concepts</h2>
                    </div>
                    <div className="prose prose-invert prose-slate mt-4 text-slate-400">
                        <p>{simulation.explanation}</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}