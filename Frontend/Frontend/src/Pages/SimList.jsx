import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { simulationsData } from '../utils/simulations'; // Import the data

// Icons from Lucide-React
import { PlayCircle, ArrowRight } from 'lucide-react';

// Reusable Simulation Card Component
const SimulationCard = ({ simulation, onClick }) => (
    <div 
    className="group bg-slate-900/50 p-5 rounded-2xl border border-slate-800 backdrop-blur-lg
               transform hover:-translate-y-2 transition-all duration-300 cursor-pointer
               hover:bg-slate-800/60 hover:border-teal-500/40 shadow-lg hover:shadow-teal-500/10
               flex flex-col overflow-hidden"
    onClick={onClick}
  >
    <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
      <img 
        src={simulation.imageUrl} 
        alt={simulation.name} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <PlayCircle size={48} className="text-white opacity-90" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-teal-400 transition-colors">{simulation.name}</h3>
    <div className="flex items-center gap-2 text-teal-400 font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
      Launch Simulation <ArrowRight size={16} />
    </div>
  </div>
);

export default function SimList() {
  const navigate = useNavigate();
  const { subject, classId } = useParams();

  // Get the list of simulations for the current subject and class
  const simsForClass = simulationsData[subject]?.[classId] || [];

  // Capitalize the subject for the title
  const titleSubject = subject ? subject.charAt(0).toUpperCase() + subject.slice(1) : "";

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans
                   bg-[radial-gradient(ellipse_50%_50%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            {titleSubject} Simulations for Class {classId}
          </h1>
        </header>
        <main className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {simsForClass.map((sim) => (
              <SimulationCard
                key={sim.id}
                simulation={sim}
                onClick={() => navigate(`/${subject}/${classId}/${sim.id}`)}
              />
            ))}
          </div>
          {simsForClass.length === 0 && (
            <div className="text-center col-span-full py-20">
              <p className="text-slate-500 text-lg">No {subject} simulations found for Class {classId}.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}