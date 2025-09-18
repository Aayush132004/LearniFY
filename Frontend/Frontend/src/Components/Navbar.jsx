import React, { useState, useEffect } from 'react';
import { Menu, X, User, Home } from 'lucide-react';
import { useNavigate } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-xl shadow-slate-950/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-white bg-clip-text text-transparent">
              LearniFY
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center space-x-2 p-2 text-slate-400 hover:text-teal-400 transition-colors">
              <Home size={20} />
              <span className="text-sm font-medium" onClick={()=>navigate("/")}>Home</span>
            </button>
            <button className="flex items-center space-x-2 p-2 text-slate-400 hover:text-white transition-colors">
              
             
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className="flex items-center w-full px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                <Home size={20} className="mr-3" />
                Home
              </button>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}