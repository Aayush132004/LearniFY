// This object nests data by subject, then by class for easy lookup.
export const simulationsData = {
  physics: {
    '9': [
      { id: 'forces-and-motion-basics', name: 'Forces & Motion', imageUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html', explanation: 'This simulation explores Newton\'s Laws of Motion. You can apply forces to objects to see how their motion changes. Observe the concepts of friction, acceleration ($$a = F/m$$), and net force in a visual, interactive way.' },
      { id: 'energy-skate-park', name: 'Energy Skate Park', imageUrl: 'https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_en.html', explanation: 'Learn about the conservation of energy. As the skater moves along the track, their Potential Energy ($$PE = mgh$$) is converted into Kinetic Energy ($$KE = 1/2 mv^2$$) and back. Notice how the total energy remains constant in the absence of friction.' },
    ],
    '10': [
        { id: 'bending-light', name: 'Bending Light', imageUrl: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html', explanation: 'This simulation demonstrates the phenomenon of refraction, where light bends as it passes from one medium to another. It\'s governed by Snell\'s Law, $$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$$, which relates the angles of incidence and refraction to the refractive indices of the media.' },
        { id: 'circuit-construction-kit-dc', name: 'DC Circuit Builder', imageUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html', explanation: 'Explore the basics of electric circuits. This simulation allows you to build virtual circuits with batteries, resistors, and wires, helping to visualize Ohm\'s Law ($$V=IR$$) and understand how current flows and voltage is distributed in series and parallel circuits.' },
    ],
    '11': [
      { id: 'projectile-motion', name: 'Projectile Motion', imageUrl: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html', explanation: 'Analyze the motion of an object thrown into the air. The key principle is that the horizontal motion (constant velocity) and vertical motion (constant acceleration due to gravity, $$g$$) are independent of each other. The path of the projectile forms a parabola.' },
      { id: 'gravity-and-orbits', name: 'Gravity and Orbits', imageUrl: 'https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html', explanation: 'This simulation explores Newton\'s Law of Universal Gravitation, $$F = G(m_1m_2/r^2)$$. See how the gravitational force between two objects creates stable orbits. Adjust the masses and initial velocities to see how the orbital paths change.' },
    ],
    '12': [
      { id: 'faradays-law', name: 'Faraday\'s Law', imageUrl: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_en.html', explanation: 'This demonstrates Faraday\'s Law of Electromagnetic Induction. It shows that a changing magnetic flux ($$\Phi_B$$) through a coil of wire induces an electromotive force (EMF) or voltage ($$\\epsilon = -N(d\Phi_B/dt)$$), which can drive a current. This is the fundamental principle behind electric generators.' },
      { id: 'capacitor-lab-basics', name: 'Capacitor Lab', imageUrl: 'https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/capacitor-lab-basics/latest/capacitor-lab-basics_en.html', explanation: 'Learn about capacitors, devices that store electrical energy. The capacitance ($$C = Q/V$$) is determined by the geometry of the plates, such as their area and the distance between them. This simulation lets you visualize the electric field and stored energy.' },
    ]
  },
  chemistry: {
    '9': [
      { id: 'build-an-atom', name: 'Build an Atom', imageUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html', explanation: 'Discover the basic structure of an atom. The number of protons determines the element, the number of neutrons determines the isotope, and the number of electrons determines the ion\'s charge. The mass number is the sum of protons and neutrons.' },
      { id: 'states-of-matter-basics', name: 'States of Matter', imageUrl: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html', explanation: 'Observe the behavior of atoms and molecules in solid, liquid, and gas phases. The state of matter is determined by the balance between the kinetic energy of the particles and the intermolecular forces between them. Heating increases kinetic energy, causing phase changes.' },
    ],
    '10': [
        { id: 'balancing-chemical-equations', name: 'Balancing Equations', imageUrl: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html', explanation: 'This interactive tool teaches the Law of Conservation of Mass, which states that atoms are neither created nor destroyed in a chemical reaction. To satisfy this law, chemical equations must be balanced, meaning there must be an equal number of atoms of each element on both the reactant and product sides.' },
        { id: 'acid-base-solutions', name: 'Acid-Base Solutions', imageUrl: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html', explanation: 'Explore the properties of acids and bases. The pH scale measures the concentration of hydronium ions ($$H_3O^+$$) in a solution. Strong acids completely dissociate in water, while weak acids only partially dissociate, creating an equilibrium.' },
    ],
    '11': [
      { id: 'molecule-shapes', name: 'Molecule Shapes', imageUrl: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html', explanation: 'This simulation demonstrates the VSEPR (Valence Shell Electron Pair Repulsion) theory. It states that electron pairs in the valence shell of a central atom repel each other and will arrange themselves to be as far apart as possible, which determines the overall geometry of the molecule.' },
      { id: 'gas-properties', name: 'Gas Properties', imageUrl: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_en.html', embedUrl: 'https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_en.html', explanation: 'Explore the relationships between pressure, volume, temperature, and the number of particles in a gas. This simulation visualizes the Ideal Gas Law ($$PV=nRT$$) and helps understand that macroscopic properties of a gas are a result of the collective motion of its molecules.' },
    ],
    '12': [
        { id: 'molarity', name: 'Molarity', imageUrl: 'https://phet.colorado.edu/sims/html/molarity/latest/molarity-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/molarity/latest/molarity_en.html', explanation: 'Understand solution concentration. Molarity ($$M$$) is a unit of concentration, defined as the number of moles of solute per liter of solution. This simulation helps visualize how adding more solute or changing the volume of the solvent affects the concentration.' },
    ]
  },
  maths: {
    '9': [
      { id: 'graphing-lines', name: 'Graphing Lines', imageUrl: 'https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_en.html', explanation: 'Explore linear equations in the form $$y = mx + c$$. The parameter $$m$$ represents the slope (the steepness of the line), and $$c$$ represents the y-intercept (the point where the line crosses the vertical axis). Manipulating these values changes the line\'s position and orientation.' },
    ],
    '10': [
      { id: 'graphing-quadratics', name: 'Graphing Quadratics', imageUrl: 'https://phet.colorado.edu/sims/html/graphing-quadratics/latest/graphing-quadratics-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/graphing-quadratics/latest/graphing-quadratics_en.html', explanation: 'Investigate quadratic functions, which have the general form $$y = ax^2 + bx + c$$. Their graphs are parabolas. This simulation helps visualize how the coefficients $$a$$, $$b$$, and $$c$$ affect the shape, position, and orientation of the parabola.' },
      { id: 'trig-tour', name: 'Trigonometry Tour', imageUrl: 'https://phet.colorado.edu/sims/html/trig-tour/latest/trig-tour-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/trig-tour/latest/trig-tour_en.html', explanation: 'This simulation connects the concept of the unit circle to the graphs of trigonometric functions like sine, cosine, and tangent. As a point rotates around the circle, its coordinates trace out the familiar wave patterns of these functions, illustrating their periodic nature.' },
    ],
    '11': [
      { id: 'vector-addition', name: 'Vector Addition', imageUrl: 'https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_en.html', explanation: 'Vectors are quantities that have both magnitude and direction. This simulation helps visualize how to add vectors graphically using the head-to-tail method. The resultant vector is the vector drawn from the tail of the first vector to the head of the last vector.' },
    ],
    '12': [
      { id: 'calculus-grapher', name: 'Calculus Grapher', imageUrl: 'https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher-600.png', embedUrl: 'https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_en.html', explanation: 'Explore the fundamental concepts of calculus. The derivative of a function at a point represents the slope or instantaneous rate of change, while the integral represents the accumulated area under the curve. This tool visualizes the relationship between a function and its derivative and integral.' },
    ]
  }
};

// A helper function to find a simulation by its ID
export const findSimulation = (id) => {
  for (const subject in simulationsData) {
    for (const classNum in simulationsData[subject]) {
      const found = simulationsData[subject][classNum].find(sim => sim.id === id);
      if (found) return found;
    }
  }
  return null;
};