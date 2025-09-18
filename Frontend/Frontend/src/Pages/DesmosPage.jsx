import React, { useState } from 'react';
import { useNavigate } from 'react-router';

// Icons from Lucide-React
import { ChevronLeft, Calculator, Sparkles } from 'lucide-react';
import Navbar from '../Components/Navbar';

export default function DesmosPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
        <Navbar/>
        <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans
                       flex flex-col
                       bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]">

            {/* Main Page Header */}
            <header className="relative flex items-center justify-center h-16 flex-shrink-0 px-4 sm:px-6 lg:px-8 
                               border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
                
                 
                <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-teal-400" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 
                                   bg-clip-text text-transparent">
                        Graphing Calculator
                    </h1>
                </div>
            </header>

            {/* Main content area to center the calculator */}
            <main className="flex-grow flex items-center justify-center p-4 sm:p-6">

                {/* --- THIS IS THE MODIFIED CONTAINER --- */}
                <div className="w-full max-w-6xl aspect-video flex flex-col 
                                bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 
                                shadow-2xl shadow-teal-500/5 overflow-hidden
                                hover:shadow-teal-500/10 transition-all duration-500
                                ring-1 ring-slate-500/10 hover:ring-teal-500/20">
                    
                    {/* Inner header for the container */}
                    <div className="flex items-center justify-between p-4
                                   border-b border-slate-800 flex-shrink-0
                                   bg-gradient-to-r from-slate-800/50 to-slate-800/30">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-teal-500/10 rounded-xl ring-1 ring-teal-500/20">
                                <Calculator className="h-5 w-5 text-teal-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-200 
                                               bg-clip-text text-transparent">
                                    Desmos Calculator
                                </h2>
                                <p className="text-xs text-slate-400 hidden sm:block">
                                    Advanced graphing interface
                                </p>
                            </div>
                        </div>
                        
                        {/* Status indicator */}
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full transition-colors ${isLoading ? 'bg-orange-400 animate-pulse' : 'bg-teal-400'}`}></div>
                            <span className="text-xs text-slate-400 hidden sm:inline">{isLoading ? 'Loading...' : 'Live'}</span>
                        </div>
                    </div>

                    {/* Iframe for Desmos */}
                    <div className="flex-1 relative bg-black/20 min-h-0">
                        <iframe
                            src="https://www.desmos.com/calculator"
                            title="Desmos Graphing Calculator"
                            className="w-full h-full border-0 rounded-b-2xl"
                            allowFullScreen
                            onLoad={() => setIsLoading(false)}
                        />
                        
                        {/* Loading overlay */}
                        <div className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm 
                                       flex items-center justify-center rounded-b-2xl
                                       pointer-events-none transition-opacity duration-500
                                       ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-8 h-8 border-2 border-teal-400/30 border-t-teal-400 
                                                rounded-full animate-spin"></div>
                                <p className="text-slate-400 text-sm">Loading Calculator...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Subtle footer */}
            <footer className="h-8 flex items-center justify-center text-xs text-slate-500">
                <span>Powered by Desmos • UI by LearniFY</span>
            </footer>
        </div>
        </>
    );
}