// src/components/DesmosAPIComponent.jsx
import React, { useEffect, useRef, useState } from 'react';

const Desmos = () => {
  // Create a ref for the DOM element that will contain the calculator
  const desmosContainerRef = useRef(null);
  // Create a ref to hold the calculator instance
  const calculatorRef = useRef(null);
  // State to hold the interactive value from our slider
  const [aValue, setAValue] = useState(1);

  // This effect runs only once when the component mounts
  useEffect(() => {
    // Ensure the Desmos library is loaded
    if (window.Desmos) {
      // Initialize the calculator in our container div
      calculatorRef.current = window.Desmos.GraphingCalculator(desmosContainerRef.current);
      
      // Set an initial expression
      calculatorRef.current.setExpression({ id: 'parabola', latex: `y = ${aValue}x^2` });
    }

    // Cleanup function to destroy the calculator when the component unmounts
    return () => {
      if (calculatorRef.current) {
        calculatorRef.current.destroy();
        calculatorRef.current = null;
      }
    };
  }, []); // Empty dependency array means this runs only once

  // This effect runs whenever the 'aValue' state changes
  useEffect(() => {
    // Update the Desmos graph if the calculator instance exists
    if (calculatorRef.current) {
      calculatorRef.current.setExpression({ id: 'parabola', latex: `y = ${aValue}x^2` });
    }
  }, [aValue]); // Re-run this effect when aValue changes

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-slate-700">Interactive Parabola: $y = ax^2$</h2>
      
      {/* The div where the calculator will be rendered */}
      <div ref={desmosContainerRef} style={{ height: '400px', border: '1px solid #ccc' }}></div>

      {/* Custom slider to control the 'a' value */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-600">
          Value of 'a': <span className="font-bold text-blue-600">{aValue.toFixed(1)}</span>
        </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={aValue}
          onChange={(e) => setAValue(parseFloat(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Desmos;