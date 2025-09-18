import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { 
  BrainCircuit, 
  FlaskConical, 
  Atom, 
  FunctionSquare, 
  Target,
  AreaChart,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Clock,
  Languages
} from 'lucide-react';
import Navbar from './Navbar';

// Language content
const content = {
  en: {
    platformTag: 'Professional Learning Platform',
    heroTitle: 'Master Your Skills with',
    brandName: 'LearniFY',
    heroDescription: 'Transform your learning journey with AI-powered simulations, personalized study paths, and immersive virtual laboratories designed for academic excellence and professional growth.',
    startLearning: 'Start Learning Now',
    watchDemo: 'Watch Demo',
    exploreModules: 'Explore Learning Modules',
    modulesDescription: 'Dive deep into interactive simulations and AI-powered learning experiences that adapt to your pace and style.',
    launchModule: 'Launch Module',
    stats: {
      learners: 'Active Learners',
      success: 'Success Rate',
      hours: 'Hours Learned'
    },
    modules: [
      {
        title: ' Quiz Engine',
        description: 'Adaptive quizzes that evolve with your learning pace, providing personalized challenges and insights to accelerate your mastery.',
        
      },
      {
        title: 'AI Subjective Analysis',
        description: 'Revolutionary AI system that evaluates complex reasoning, provides detailed feedback, and guides your critical thinking development.',
        
      },
      {
        title: 'Virtual Physics Lab',
        description: 'Immersive quantum mechanics, thermodynamics, and electromagnetic simulations with real-world physics engine accuracy.',
       
      },
      {
        title: 'Virtual Chemistry Lab',
        description: 'Advanced molecular modeling, reaction kinetics, and spectroscopy analysis in a risk-free virtual environment.',
        
      },
      {
        title: 'Virtual Mathematics Lab',
        description: 'Interactive calculus, linear algebra, and topology visualization with dynamic 3D mathematical object manipulation.',
      
      },
      {
        title: 'Advanced Analytics Studio',
        description: 'Professional-grade data visualization, statistical analysis, and machine learning model interpretation tools.',
      
      }
    ]
  },
  hi: {
    platformTag: 'व्यावसायिक शिक्षा मंच',
    heroTitle: 'अपने कौशल में महारत हासिल करें',
    brandName: 'LearniFY',
    heroDescription: 'AI-संचालित सिमुलेशन, व्यक्तिगत अध्ययन पथ, और शैक्षणिक उत्कृष्टता और व्यावसायिक विकास के लिए डिज़ाइन की गई इमर्सिव वर्चुअल प्रयोगशालाओं के साथ अपनी सीखने की यात्रा को बदलें।',
    startLearning: 'अभी सीखना शुरू करें',
    watchDemo: 'डेमो देखें',
    exploreModules: 'शिक्षा मॉड्यूल देखें',
    modulesDescription: 'इंटरैक्टिव सिमुलेशन और AI-संचालित शिक्षा अनुभवों में गहराई से जाएं जो आपकी गति और शैली के अनुकूल हों।',
    launchModule: 'मॉड्यूल लॉन्च करें',
    stats: {
      learners: 'सक्रिय शिक्षार्थी',
      success: 'सफलता दर',
      hours: 'सीखे गए घंटे'
    },
    modules: [
      {
        title: 'व्यक्तिगत प्रश्नोत्तरी इंजन',
        description: 'AI द्वारा संचालित अनुकूली प्रश्नोत्तरी जो आपकी सीखने की गति के साथ विकसित होती है, व्यक्तिगत चुनौतियां और अंतर्दृष्टि प्रदान करती है।',
        tag: 'AI अनुकूली'
      },
      {
        title: 'AI व्यक्तिपरक विश्लेषण',
        description: 'क्रांतिकारी AI सिस्टम जो जटिल तर्क का मूल्यांकन करता है, विस्तृत फीडबैक प्रदान करता है, और आपकी आलोचनात्मक सोच के विकास का मार्गदर्शन करता है।',
        tag: 'न्यूरल AI'
      },
      {
        title: 'वर्चुअल भौतिकी प्रयोगशाला',
        description: 'वास्तविक दुनिया की भौतिकी इंजन सटीकता के साथ इमर्सिव क्वांटम मैकेनिक्स, थर्मोडायनामिक्स, और इलेक्ट्रोमैग्नेटिक सिमुलेशन।',
        tag: 'क्वांटम सिम'
      },
      {
        title: 'वर्चुअल रसायन प्रयोगशाला',
        description: 'जोखिम-मुक्त वर्चुअल वातावरण में उन्नत आणविक मॉडलिंग, प्रतिक्रिया गतिकी, और स्पेक्ट्रोस्कोपी विश्लेषण।',
        tag: 'आणविक'
      },
      {
        title: 'वर्चुअल गणित प्रयोगशाला',
        description: 'डायनामिक 3D गणितीय ऑब्जेक्ट मैनिपुलेशन के साथ इंटरैक्टिव कैलकुलस, लिनियर अल्जेब्रा, और टोपोलॉजी विज़ुअलाइज़ेशन।',
        tag: 'डायनामिक 3D'
      },
      {
        title: 'उन्नत एनालिटिक्स स्टूडियो',
        description: 'पेशेवर-ग्रेड डेटा विज़ुअलाइज़ेशन, सांख्यिकीय विश्लेषण, और मशीन लर्निंग मॉडल व्याख्या उपकरण।',
        tag: 'प्रो एनालिटिक्स'
      }
    ]
  }
};

// Language Toggle Component
const LanguageToggle = ({ language, setLanguage }) => {
  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-1 flex items-center gap-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
            language === 'en' 
              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' 
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          <Languages size={14} />
          EN
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
             ${
            language === 'hi' 
              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' 
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          हि
        </button>
      </div>
    </div>
  );
};

// Enhanced ModuleCard with professional styling
const ModuleCard = ({ icon, title, description, tag, tagColor, onClick, index, launchText }) => {
  return (
    <div 
      className="group relative bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl 
                 border border-slate-800/50 shadow-xl
                 hover:bg-slate-900/70 hover:border-slate-700/60 hover:shadow-2xl
                 transform hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
      onClick={onClick}
    >
      <div className="relative z-10">
        {/* Header with icon and tag */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-slate-950/60 backdrop-blur-sm rounded-xl border border-slate-700/40
                         group-hover:bg-slate-800/60 group-hover:border-slate-600/50 
                         transition-all duration-300">
            {icon}
          </div>
          
          {tag && (
            <div className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm
                           border transition-all duration-300 ${tagColor}`}>
              <div className="flex items-center gap-1">
                <Sparkles size={10} />
                {tag}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-slate-100 group-hover:text-white 
                         transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-slate-400 group-hover:text-slate-300 text-sm leading-relaxed 
                        transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Action button */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-teal-400
                          group-hover:text-teal-300 transition-all duration-300">
            <span>{launchText}</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          {/* Progress indicator */}
          <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 
                         transition-opacity duration-300">
            <TrendingUp size={14} className="text-slate-500" />
            <div className="w-8 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Statistics component
const StatsCard = ({ icon, number, label, color }) => (
  <div className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-xl border border-slate-800/50
                 hover:bg-slate-800/50 hover:border-slate-700/60 transition-all duration-300
                 group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-lg ${color}`}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-medium text-slate-100 group-hover:text-white transition-colors">
          {number}
        </div>
        <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          {label}
        </div>
      </div>
    </div>
  </div>
);

// Main Dashboard Component
export default function Dashboard() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToModules = () => {
    const modulesSection = document.getElementById('learning-modules');
    if (modulesSection) {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentContent = content[language];

  const learningModules = [
    {
      icon: <Target size={24} className="text-orange-400" />,
      title: currentContent.modules[0].title,
      description: currentContent.modules[0].description,
      tag: currentContent.modules[0].tag,
      tagColor: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
      path: '/timed-quiz',
    },
    {
      icon: <BrainCircuit size={24} className="text-blue-400" />,
      title: currentContent.modules[1].title,
      description: currentContent.modules[1].description,
      tag: currentContent.modules[1].tag,
      tagColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      path: '/subjective',
    },
    {
      icon: <Atom size={24} className="text-green-400" />,
      title: currentContent.modules[2].title,
      description: currentContent.modules[2].description,
      tag: currentContent.modules[2].tag,
      tagColor: 'bg-green-500/10 text-green-300 border-green-500/20',
      path: '/physics',
    },
    {
      icon: <FlaskConical size={24} className="text-yellow-400" />,
      title: currentContent.modules[3].title,
      description: currentContent.modules[3].description,
      tag: currentContent.modules[3].tag,
      tagColor: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
      path: '/chemistry',
    },
    {
      icon: <FunctionSquare size={24} className="text-purple-400" />,
      title: currentContent.modules[4].title,
      description: currentContent.modules[4].description,
      tag: currentContent.modules[4].tag,
      tagColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      path: '/mathematics',
    },
    {
      icon: <AreaChart size={24} className="text-lime-400" />,
      title: currentContent.modules[5].title,
      description: currentContent.modules[5].description,
      tag: currentContent.modules[5].tag,
      tagColor: 'bg-lime-500/10 text-lime-300 border-lime-500/20',
      path: '/analytics',
    },
  ];

  

  return (
    <>
      <Navbar />
      <LanguageToggle language={language} setLanguage={setLanguage} />
      
      <div className="min-h-screen w-full bg-slate-950 text-slate-300 font-sans relative overflow-hidden">
        {/* Enhanced background gradients */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(45,212,191,0.15),rgba(255,255,255,0))]" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(59,130,246,0.1),rgba(255,255,255,0))]" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_60%,rgba(168,85,247,0.08),rgba(255,255,255,0))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          {/* Hero section */}
          <header className="text-center py-16 md:py-24">
            <div className={`transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 
                             rounded-full text-sm text-teal-300 font-medium mb-8 backdrop-blur-sm">
                <Sparkles size={16} />
                {currentContent.platformTag}
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-tight">
                <span className="block text-slate-100 mb-2">
                  {currentContent.heroTitle}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 font-medium">
                  {currentContent.brandName}
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
                {currentContent.heroDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <button 
                  onClick={scrollToModules}
                  className="px-8 py-4 bg-green-600
                           text-white font-medium rounded-xl transform hover:-translate-y-1 hover:shadow-xl 
                           hover:shadow-teal-500/25 transition-all duration-300">
                  {currentContent.startLearning}
                </button>
              
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                
              </div>
            </div>
          </header>

          {/* Learning modules */}
          <main id="learning-modules" className={`pb-16 transform transition-all duration-700 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-100 mb-4">
                {currentContent.exploreModules}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto font-light">
                {currentContent.modulesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningModules.map((module, index) => (
                <ModuleCard 
                  key={module.title}
                  {...module}
                  index={index}
                  launchText={currentContent.launchModule}
                  onClick={() => navigate(module.path)} 
                />
              ))}
            </div>
          </main>

         
        </div>
      </div>
    </>
  );
}