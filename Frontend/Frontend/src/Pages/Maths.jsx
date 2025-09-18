// src/ClassSelectionPage.js
import React from 'react';
// Make sure you have react-router-dom installed
// npm install react-router-dom
import { useNavigate } from 'react-router';

// Icons from Lucide-React
import { BookMarked, ArrowRight } from 'lucide-react';
import Navbar from '../Components/Navbar';

// --- Data for the Class Cards ---
const classData = [
  {
    grade: 9,
    title: 'Class 9th',
    description: 'Build your foundation in Science, Mathematics, Social Studies, and English.',
    accentColor: 'blue',
    path: '/maths/9',
  },
  {
    grade: 10,
    title: 'Class 10th',
    description: 'Prepare for your board exams with comprehensive modules and practice tests.',
    accentColor: 'green',
    path: '/maths/10',
  },
  {
    grade: 11,
    title: 'Class 11th',
    description: 'Dive into specialized streams like Science, Commerce, or Arts with advanced topics.',
    accentColor: 'yellow',
    path: '/maths/11',
  },
  {
    grade: 12,
    title: 'Class 12th',
    description: 'Master complex concepts and excel in your final board and competitive exams.',
    accentColor: 'purple',
    path: '/maths/12',
  },
];

// --- Reusable UI Component for Class Cards ---
const ClassCard = ({ title, description, accentColor, onClick }) => {
  const colorVariants = {
    blue: {
      border: 'hover:border-blue-500/50',
      shadow: 'hover:shadow-blue-500/10',
      text: 'text-blue-400',
    },
    green: {
      border: 'hover:border-green-500/50',
      shadow: 'hover:shadow-green-500/10',
      text: 'text-green-400',
    },
    yellow: {
      border: 'hover:border-yellow-500/50',
      shadow: 'hover:shadow-yellow-500/10',
      text: 'text-yellow-400',
    },
    purple: {
      border: 'hover:border-purple-500/50',
      shadow: 'hover:shadow-purple-500/10',
      text: 'text-purple-400',
    },
  };
  
  const currentTheme = colorVariants[accentColor] || colorVariants.blue;

  return (
    <div
      onClick={onClick}
      className={`bg-slate-800/40 p-6 rounded-2xl border border-slate-700/80 backdrop-blur-lg
                 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer
                 shadow-lg flex flex-col text-center items-center
                 ${currentTheme.border} ${currentTheme.shadow}`}
    >
      <div className={`p-4 bg-slate-900/50 rounded-full border border-slate-700 mb-4`}>
        <BookMarked size={32} className={currentTheme.text} />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-slate-400 mt-2 text-sm leading-relaxed">{description}</p>
      </div>
      <div className={`flex items-center gap-2 font-semibold mt-6 ${currentTheme.text}`}>
        View Syllabus <ArrowRight size={16} />
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function Maths() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="min-h-screen w-full bg-slate-900 text-slate-200 font-sans
                   bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <header className="text-center py-10">
         
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Select your class to access a curated set of interactive Mathematics Simulations
          </p>
        </header>

        {/* Class Cards Section */}
        <main className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {classData.map((classInfo) => (
              <ClassCard
                key={classInfo.grade}
                title={classInfo.title}
                description={classInfo.description}
                accentColor={classInfo.accentColor}
                onClick={() => navigate(classInfo.path)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
    </>
  );
}