const questionsDB = {
  '9': {
    physics: [
      { 
        id: 'phy901', 
        text: "State and explain Newton's First Law of Motion. Why is it also known as the Law of Inertia?",
        keyPoints: [
          "An object remains in a state of rest or of uniform motion in a straight line unless compelled to change that state by an applied force.",
          "Inertia is the natural tendency of an object to resist a change in its state of motion or of rest.",
          "The mass of an object is a measure of its inertia.",
          "The first law gives a qualitative definition of force."
        ] 
      },
      { 
        id: 'phy902', 
        text: "Distinguish between mass and weight. If an object's mass is 10 kg, what is its weight on Earth (g = 9.8 m/s²)?",
        keyPoints: [
          "Mass is the amount of matter in an object, constant everywhere. SI unit is kg.",
          "Weight is the force of gravity acting on an object (W=mg), varies with location. SI unit is Newton (N).",
          "Mass is a scalar quantity, while weight is a vector quantity.",
          "Calculation: W = 10 kg * 9.8 m/s² = 98 N."
        ] 
      },
      { 
        id: 'phy903', 
        text: "Define kinetic energy and potential energy. Give an example where potential energy is converted to kinetic energy.",
        keyPoints: [
          "Kinetic Energy (KE) is the energy possessed by an object due to its motion (KE = 1/2 mv²).",
          "Potential Energy (PE) is the energy stored in an object due to its position or configuration (e.g., PE = mgh).",
          "Example: A ball held at a height has potential energy. When released, it falls, and its PE is converted into KE as its speed increases."
        ] 
      },
      { 
        id: 'phy904', 
        text: "What is the universal law of gravitation? Write the mathematical formula.",
        keyPoints: [
          "Every object in the universe attracts every other object with a force.",
          "This force is directly proportional to the product of their masses.",
          "The force is inversely proportional to the square of the distance between their centers.",
          "Formula: F = G(m1*m2)/r², where G is the universal gravitational constant."
        ] 
      },
      { 
        id: 'phy905', 
        text: "What are longitudinal and transverse waves? Give one example of each.",
        keyPoints: [
          "Transverse waves: Particles of the medium vibrate perpendicular to the direction of wave propagation. Example: Light waves, ripples on water.",
          "Longitudinal waves: Particles of the medium vibrate parallel to the direction of wave propagation. Example: Sound waves.",
          "Longitudinal waves consist of compressions and rarefactions."
        ] 
      },
    ],
    chemistry: [
      { 
        id: 'chem901', 
        text: "Describe the characteristics of particles of matter.",
        keyPoints: [
          "Particles of matter have space between them.",
          "Particles of matter are continuously moving (possess kinetic energy).",
          "Particles of matter attract each other.",
          "The kinetic energy of particles increases with a rise in temperature."
        ] 
      },
      { 
        id: 'chem902', 
        text: "What is a solution, a suspension, and a colloid? Give one example of each.",
        keyPoints: [
          "Solution: A homogeneous mixture, particles are very small and don't scatter light. Example: Saltwater.",
          "Suspension: A heterogeneous mixture, particles are large, visible, and settle down. Example: Sandy water.",
          "Colloid: Appears homogeneous but is heterogeneous, particles are intermediate in size and scatter light (Tyndall effect). Example: Milk."
        ] 
      },
      { 
        id: 'chem903', 
        text: "Explain the postulates of Dalton's atomic theory.",
        keyPoints: [
          "All matter is made of very tiny particles called atoms.",
          "Atoms are indivisible particles, which cannot be created or destroyed in a chemical reaction.",
          "Atoms of a given element are identical in mass and chemical properties.",
          "Atoms of different elements have different masses and chemical properties.",
          "Atoms combine in the ratio of small whole numbers to form compounds."
        ] 
      },
      { 
        id: 'chem904', 
        text: "What is the mole concept? How many atoms are there in 1 mole of a substance?",
        keyPoints: [
          "A mole is a unit that represents a specific quantity of particles (atoms, molecules, ions).",
          "One mole of any substance contains Avogadro's number of particles.",
          "Avogadro's number is approximately 6.022 x 10²³ particles.",
          "The mass of one mole of a substance is equal to its relative atomic or molecular mass in grams (molar mass)."
        ] 
      },
      { 
        id: 'chem905', 
        text: "Describe Rutherford's alpha-particle scattering experiment and list its main conclusions.",
        keyPoints: [
          "Experiment: Fast-moving alpha particles were made to fall on a thin gold foil.",
          "Observation 1: Most alpha particles passed straight through.",
          "Observation 2: Some particles were deflected by small angles.",
          "Observation 3: Very few particles (1 in 12,000) appeared to rebound.",
          "Conclusion 1: Most of the space inside an atom is empty.",
          "Conclusion 2: The positive charge is concentrated in a very small volume (the nucleus).",
          "Conclusion 3: The nucleus is dense and positively charged."
        ] 
      },
    ],
    maths: [
      { 
        id: 'math901', 
        text: "Explain the difference between rational and irrational numbers with examples.",
        keyPoints: [
          "Rational numbers can be expressed in the form p/q, where p and q are integers and q is not zero.",
          "Rational numbers have terminating or non-terminating repeating decimal expansions. Examples: 1/2, 3, 0.333...",
          "Irrational numbers cannot be expressed in the form p/q.",
          "Irrational numbers have non-terminating non-repeating decimal expansions. Examples: √2, π."
        ] 
      },
      { 
        id: 'math902', 
        text: "State and prove the Remainder Theorem for polynomials.",
        keyPoints: [
          "Statement: Let p(x) be any polynomial of degree greater than or equal to one and let 'a' be any real number. If p(x) is divided by the linear polynomial x – a, then the remainder is p(a).",
          "Proof involves writing p(x) in the form of the division algorithm: p(x) = (x – a) q(x) + r(x).",
          "Since the degree of r(x) < degree of (x-a), the degree of r(x) is 0, meaning r(x) is a constant, say r.",
          "Substituting x = a gives p(a) = (a – a) q(a) + r, which simplifies to p(a) = r."
        ] 
      },
      { 
        id: 'math903', 
        text: "What is Heron's formula used for? Write the formula and explain the terms.",
        keyPoints: [
          "Heron's formula is used to find the area of a triangle when the lengths of all three sides are known.",
          "It is particularly useful for scalene triangles where the height is not easily known.",
          "Formula: Area = √[s(s-a)(s-b)(s-c)]",
          "Here, a, b, and c are the lengths of the sides of the triangle.",
          "'s' is the semi-perimeter of the triangle, calculated as s = (a+b+c)/2."
        ] 
      },
      { 
        id: 'math904', 
        text: "If a transversal intersects two parallel lines, what are the relationships between the pairs of angles formed?",
        keyPoints: [
          "Corresponding angles are equal.",
          "Alternate interior angles are equal.",
          "Alternate exterior angles are equal.",
          "Consecutive interior angles (or co-interior angles) are supplementary (add up to 180°)."
        ] 
      },
      { 
        id: 'math905', 
        text: "In which quadrant or on which axis do the points (-2, 4), (3, -1), (-1, 0), and (0, 5) lie?",
        keyPoints: [
          "(-2, 4): x is negative, y is positive. Lies in Quadrant II.",
          "(3, -1): x is positive, y is negative. Lies in Quadrant IV.",
          "(-1, 0): y is zero. Lies on the negative x-axis.",
          "(0, 5): x is zero. Lies on the positive y-axis."
        ] 
      },
    ]
  },
  '10': {
    physics: [
      {
        id: 'phy1001',
        text: "Explain the laws of reflection of light using a diagram. What is the difference between a real and a virtual image?",
        keyPoints: [
          "First Law: The angle of incidence is equal to the angle of reflection (∠i = ∠r).",
          "Second Law: The incident ray, the reflected ray, and the normal to the surface at the point of incidence all lie in the same plane.",
          "Diagram showing incident ray, reflected ray, normal, and angles.",
          "Real Image: Formed when light rays actually converge after reflection/refraction. Can be obtained on a screen. Usually inverted.",
          "Virtual Image: Formed when light rays appear to diverge from a point. Cannot be obtained on a screen. Usually erect."
        ]
      },
      {
        id: 'phy1002',
        text: "What is Ohm's Law? Define resistance and state its SI unit. Draw a V-I graph for an ohmic conductor.",
        keyPoints: [
          "Ohm's Law: At constant temperature, the current flowing through a conductor is directly proportional to the potential difference across its ends.",
          "Mathematical expression: V ∝ I, or V = IR.",
          "Resistance is the property of a conductor to resist the flow of charges through it. SI unit is the ohm (Ω).",
          "The V-I graph for an ohmic conductor is a straight line passing through the origin."
        ]
      },
      {
        id: 'phy1003',
        text: "Explain Fleming's Left-Hand Rule. What is its application?",
        keyPoints: [
          "Rule: Stretch the thumb, forefinger, and middle finger of your left hand so that they are mutually perpendicular.",
          "Forefinger points in the direction of the magnetic field.",
          "Middle finger points in the direction of the current.",
          "Thumb points in the direction of the force or motion experienced by the conductor.",
          "Application: It is used to find the direction of force on a current-carrying conductor in a magnetic field, which is the principle behind electric motors."
        ]
      },
      {
        id: 'phy1004',
        text: "What are the defects of vision known as myopia and hypermetropia? How are they corrected?",
        keyPoints: [
          "Myopia (Nearsightedness): A person can see nearby objects clearly but not distant objects. Image is formed in front of the retina. Corrected using a concave lens.",
          "Hypermetropia (Farsightedness): A person can see distant objects clearly but not nearby objects. Image is formed behind the retina. Corrected using a convex lens."
        ]
      },
      {
        id: 'phy1005',
        text: "List three properties of magnetic field lines.",
        keyPoints: [
          "Magnetic field lines emerge from the North pole and merge at the South pole (outside the magnet).",
          "They are closed and continuous curves.",
          "The tangent at any point on a field line gives the direction of the magnetic field at that point.",
          "No two magnetic field lines can intersect each other.",
          "The density of field lines indicates the strength of the magnetic field."
        ]
      }
    ],
    chemistry: [
      {
        id: 'chem1001',
        text: "What is a combination reaction and a decomposition reaction? Give one example of each with a balanced chemical equation.",
        keyPoints: [
          "Combination Reaction: Two or more reactants combine to form a single product. Example: CaO + H₂O → Ca(OH)₂.",
          "Decomposition Reaction: A single reactant breaks down to give simpler products. Often requires energy (heat, light, electricity). Example: 2FeSO₄(s) --(Heat)→ Fe₂O₃(s) + SO₂(g) + SO₃(g)."
        ]
      },
      {
        id: 'chem1002',
        text: "Explain the concept of pH. What happens to the pH of a solution if it is acidified or made more alkaline?",
        keyPoints: [
          "pH is a scale used to specify the acidity or basicity of an aqueous solution.",
          "pH < 7 is acidic, pH = 7 is neutral, pH > 7 is alkaline (basic).",
          "It is the negative logarithm of the hydrogen ion concentration (pH = -log[H⁺]).",
          "Acidifying a solution increases H⁺ concentration and decreases its pH.",
          "Making a solution more alkaline decreases H⁺ concentration (increases OH⁻) and increases its pH."
        ]
      },
      {
        id: 'chem1003',
        text: "Why does carbon form a very large number of compounds?",
        keyPoints: [
          "Catenation: Carbon has the unique ability to form strong covalent bonds with other carbon atoms, creating long chains, branched chains, and rings.",
          "Tetravalency: Carbon has a valency of four, so it is capable of bonding with four other atoms (of carbon or other elements).",
          "Small size of the carbon atom allows it to form strong and stable bonds."
        ]
      },
      {
        id: 'chem1004',
        text: "What are isomers? Draw the structural isomers of butane (C₄H₁₀).",
        keyPoints: [
          "Isomers are compounds that have the same molecular formula but different structural formulas (different arrangements of atoms).",
          "Butane (C₄H₁₀) has two structural isomers.",
          "First isomer: n-butane (a straight chain of 4 carbon atoms).",
          "Second isomer: isobutane or 2-methylpropane (a branched chain)."
        ]
      },
      {
        id: 'chem1005',
        text: "Explain Mendeleev's Periodic Law and list two of its achievements.",
        keyPoints: [
          "Law: The properties of elements are the periodic function of their atomic masses.",
          "Achievement 1: He left gaps for undiscovered elements (like eka-aluminium, eka-silicon) and predicted their properties, which were later found to be correct.",
          "Achievement 2: He was able to correct the atomic masses of some elements (e.g., Beryllium).",
          "Achievement 3: His table helped in the systematic study of elements and their compounds."
        ]
      }
    ],
    maths: [
      {
        id: 'math1001',
        text: "State the fundamental theorem of arithmetic. Use it to find the LCM and HCF of 12 and 18.",
        keyPoints: [
          "Theorem: Every composite number can be expressed (factorized) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur.",
          "Prime factorization of 12 = 2² x 3¹.",
          "Prime factorization of 18 = 2¹ x 3².",
          "HCF is the product of the smallest power of each common prime factor: 2¹ x 3¹ = 6.",
          "LCM is the product of the greatest power of each prime factor involved: 2² x 3² = 4 x 9 = 36."
        ]
      },
      {
        id: 'math1002',
        text: "Find the roots of the quadratic equation x² - 3x - 10 = 0 using factorization.",
        keyPoints: [
          "The goal is to find two numbers that multiply to -10 and add to -3.",
          "The numbers are -5 and 2.",
          "Rewrite the equation: x² - 5x + 2x - 10 = 0.",
          "Factor by grouping: x(x - 5) + 2(x - 5) = 0.",
          "Factor out the common term: (x + 2)(x - 5) = 0.",
          "Set each factor to zero to find the roots: x + 2 = 0 or x - 5 = 0.",
          "The roots are x = -2 and x = 5."
        ]
      },
      {
        id: 'math1003',
        text: "State and prove the Basic Proportionality Theorem (Thales' Theorem).",
        keyPoints: [
          "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.",
          "Proof involves constructing perpendiculars and joining vertices.",
          "Uses the formula for the area of a triangle (Area = 1/2 * base * height).",
          "Shows the ratio of areas of two triangles on the same base and between the same parallels is related to the ratio of their sides."
        ]
      },
      {
        id: 'math1004',
        text: "Derive the distance formula between two points in a Cartesian plane.",
        keyPoints: [
          "Let the two points be P(x₁, y₁) and Q(x₂, y₂).",
          "Draw perpendiculars from P and Q to the x-axis.",
          "Construct a right-angled triangle using these points.",
          "The length of the horizontal side will be |x₂ - x₁|.",
          "The length of the vertical side will be |y₂ - y₁|.",
          "Apply the Pythagorean theorem: (PQ)² = (|x₂ - x₁|)² + (|y₂ - y₁|)².",
          "The distance formula is PQ = √[(x₂ - x₁)² + (y₂ - y₁)²]."
        ]
      },
      {
        id: 'math1005',
        text: "Prove the trigonometric identity: sin²θ + cos²θ = 1.",
        keyPoints: [
          "Consider a right-angled triangle ABC, with the right angle at B and angle A = θ.",
          "Let AB = base, BC = perpendicular, and AC = hypotenuse.",
          "By definition, sinθ = Perpendicular/Hypotenuse = BC/AC.",
          "By definition, cosθ = Base/Hypotenuse = AB/AC.",
          "sin²θ + cos²θ = (BC/AC)² + (AB/AC)² = (BC² + AB²)/AC².",
          "By Pythagorean theorem, BC² + AB² = AC².",
          "Therefore, (AC²)/AC² = 1. Hence proved."
        ]
      }
    ]
  },
  '11': {
    physics: [
        {
            id: 'phy1101',
            text: "Explain projectile motion. Derive the equation for the time of flight and maximum height of a projectile fired at an angle θ with the horizontal.",
            keyPoints: [
                "Projectile motion is the motion of an object thrown into the air, subject only to the acceleration of gravity.",
                "Resolve initial velocity u into horizontal (u cosθ) and vertical (u sinθ) components.",
                "Time of Flight (T): The total time the object is in the air. Use v = u + at for vertical motion up to max height (v=0), so t = u sinθ / g. Total time T = 2t = 2u sinθ / g.",
                "Maximum Height (H): Use v² = u² + 2as for vertical motion. 0 = (u sinθ)² - 2gH. So, H = u² sin²θ / (2g)."
            ]
        },
        {
            id: 'phy1102',
            text: "State the law of conservation of energy. Show that the total mechanical energy of a freely falling body is conserved.",
            keyPoints: [
                "Law: Energy can neither be created nor destroyed; it can only be converted from one form to another. The total energy of an isolated system remains constant.",
                "Consider a body of mass m falling from height H.",
                "At the top (point A): PE = mgH, KE = 0. Total Energy E_A = mgH.",
                "At a distance x below (point B): PE = mg(H-x), KE = 1/2 mv². Since v²=2gx, KE=mgx. Total Energy E_B = mg(H-x) + mgx = mgH.",
                "At the bottom (point C): PE = 0, KE = 1/2 mv². Since v²=2gH, KE=mgH. Total Energy E_C = mgH.",
                "Since E_A = E_B = E_C, the total mechanical energy is conserved."
            ]
        },
        {
            id: 'phy1103',
            text: "What is the theorem of parallel axes and perpendicular axes for moment of inertia?",
            keyPoints: [
                "Parallel Axes Theorem: The moment of inertia (I) of a body about any axis is equal to the sum of its moment of inertia about a parallel axis passing through its center of mass (I_cm) and the product of its mass (M) and the square of the distance (d) between the two axes. I = I_cm + Md².",
                "Perpendicular Axes Theorem: For a planar lamina, the moment of inertia about an axis perpendicular to its plane (I_z) is equal to the sum of its moments of inertia about two perpendicular axes lying in the plane of the body and intersecting at the point where the perpendicular axis passes through it. I_z = I_x + I_y."
            ]
        },
        {
            id: 'phy1104',
            text: "Explain the first law of thermodynamics. What are isothermal and adiabatic processes?",
            keyPoints: [
                "First Law: It is a statement of conservation of energy. The change in internal energy of a system (ΔU) is equal to the heat supplied to the system (Q) minus the work done by the system (W). ΔU = Q - W.",
                "Isothermal Process: A process that occurs at a constant temperature (ΔT = 0). For an ideal gas, internal energy depends only on temperature, so ΔU = 0, and Q = W.",
                "Adiabatic Process: A process that occurs with no heat transfer between the system and its surroundings (Q = 0). The first law becomes ΔU = -W."
            ]
        },
        {
            id: 'phy1105',
            text: "What is simple harmonic motion (SHM)? Write the differential equation for SHM.",
            keyPoints: [
                "SHM is a special type of periodic motion where the restoring force is directly proportional to the displacement from the mean position and is always directed towards the mean position.",
                "Force F = -kx, where k is the force constant and x is the displacement.",
                "Since F=ma, we have ma = -kx, or a = -(k/m)x.",
                "The acceleration a is d²x/dt². So the differential equation is d²x/dt² = -(k/m)x, or d²x/dt² + ω²x = 0, where ω² = k/m."
            ]
        }
    ],
    chemistry: [
        {
            id: 'chem1101',
            text: "Explain hybridization using the example of methane (CH₄).",
            keyPoints: [
                "Hybridization is the concept of mixing atomic orbitals to form new hybrid orbitals suitable for bonding.",
                "Carbon's ground state electronic configuration is 1s²2s²2p². In its excited state, it is 1s²2s¹2p³.",
                "In methane, the one 2s orbital and three 2p orbitals of carbon mix to form four new, equivalent sp³ hybrid orbitals.",
                "These four sp³ orbitals are arranged in a tetrahedral geometry with bond angles of 109.5°.",
                "Each sp³ orbital overlaps with the 1s orbital of a hydrogen atom to form four C-H sigma bonds."
            ]
        },
        {
            id: 'chem1102',
            text: "State Le Chatelier's principle. How does a change in pressure affect the equilibrium of the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?",
            keyPoints: [
                "Principle: If a change of condition (like temperature, pressure, or concentration) is applied to a system in equilibrium, the system will shift in a direction that counteracts the change.",
                "For the Haber process (N₂ + 3H₂ ⇌ 2NH₃), there are 4 moles of gas on the reactant side and 2 moles on the product side.",
                "According to Le Chatelier's principle, if the pressure is increased, the equilibrium will shift to the side with fewer moles of gas to reduce the pressure.",
                "Therefore, increasing the pressure will shift the equilibrium to the right, favoring the formation of more ammonia (NH₃)."
            ]
        },
        {
            id: 'chem1103',
            text: "What are quantum numbers? Describe the significance of the four quantum numbers.",
            keyPoints: [
                "Quantum numbers are a set of numbers that describe the properties of an electron in an atom, such as its energy and angular momentum.",
                "Principal Quantum Number (n): Describes the main energy level or shell. (n = 1, 2, 3...)",
                "Azimuthal Quantum Number (l): Describes the shape of the orbital or subshell (s, p, d, f). (l = 0 to n-1)",
                "Magnetic Quantum Number (m_l): Describes the orientation of the orbital in space. (m_l = -l to +l)",
                "Spin Quantum Number (m_s): Describes the intrinsic angular momentum or spin of the electron. (m_s = +1/2 or -1/2)"
            ]
        },
        {
            id: 'chem1104',
            text: "Explain the concept of formal charge and calculate the formal charge on each atom in the ozone molecule (O₃).",
            keyPoints: [
                "Formal charge is the charge assigned to an atom in a molecule, assuming that electrons in all chemical bonds are shared equally between atoms.",
                "Formula: FC = (Valence Electrons) - (Non-bonding Electrons) - 1/2(Bonding Electrons).",
                "For a common resonance structure of O₃ (O=O-O), the central O has FC = 6-2-1/2(6) = +1.",
                "The double-bonded O has FC = 6-4-1/2(4) = 0.",
                "The single-bonded O has FC = 6-6-1/2(2) = -1."
            ]
        },
        {
            id: 'chem1105',
            text: "What is Hess's Law of Constant Heat Summation? Explain its significance.",
            keyPoints: [
                "Hess's Law states that the total enthalpy change for a chemical reaction is the same, regardless of the number of steps the reaction is carried out in.",
                "It is a consequence of the law of conservation of energy.",
                "Significance: It allows us to calculate the enthalpy change for reactions that are difficult or impossible to measure directly.",
                "We can do this by manipulating the equations of known reactions (and their enthalpy changes) to arrive at the target reaction."
            ]
        }
    ],
    maths: [
        {
            id: 'math1101',
            text: "What is a function? Explain the difference between a one-one function and an onto function with examples.",
            keyPoints: [
                "A function is a relation from a set A to a set B such that every element of set A has one and only one image in set B.",
                "One-one (Injective): A function where different elements in the domain have different images in the codomain. Example: f(x) = x+1.",
                "Onto (Surjective): A function where every element in the codomain is the image of at least one element in the domain (Range = Codomain). Example: f(x) = x from R to R.",
                "A function that is both one-one and onto is called a bijective function."
            ]
        },
        {
            id: 'math1102',
            text: "Explain the principle of mathematical induction.",
            keyPoints: [
                "It is a mathematical proof technique used to prove a statement P(n) is true for all natural numbers n.",
                "Step 1 (Base Case): Prove that the statement is true for the initial value, usually n=1. So, prove P(1) is true.",
                "Step 2 (Inductive Hypothesis): Assume that the statement is true for an arbitrary natural number k. Assume P(k) is true.",
                "Step 3 (Inductive Step): Using the assumption from Step 2, prove that the statement is also true for n=k+1. Prove P(k+1) is true.",
                "If all steps are completed, the statement P(n) is true for all natural numbers n."
            ]
        },
        {
            id: 'math1103',
            text: "What is the modulus of a complex number? Find the modulus of z = 3 + 4i.",
            keyPoints: [
                "A complex number is of the form z = a + ib, where a and b are real numbers and i = √-1.",
                "The modulus of a complex number z, denoted as |z|, represents its distance from the origin in the complex (Argand) plane.",
                "The formula is |z| = √(a² + b²).",
                "For z = 3 + 4i, a=3 and b=4.",
                "|z| = √(3² + 4²) = √(9 + 16) = √25 = 5."
            ]
        },
        {
            id: 'math1104',
            text: "What is the definition of a derivative of a function at a point using the first principle?",
            keyPoints: [
                "The derivative of a function f(x) at a point x=a, denoted f'(a), represents the instantaneous rate of change of the function at that point.",
                "It is geometrically interpreted as the slope of the tangent to the curve y=f(x) at the point (a, f(a)).",
                "The first principle definition is given by a limit:",
                "f'(x) = lim (h→0) [f(x+h) - f(x)] / h."
            ]
        },
        {
            id: 'math1105',
            text: "What is a conic section? Name the different types of conic sections.",
            keyPoints: [
                "A conic section is a curve obtained by intersecting a plane with a double-napped cone.",
                "The type of conic section depends on the angle at which the plane intersects the cone.",
                "The different types are:",
                "Circle: Formed when the plane is perpendicular to the axis of the cone.",
                "Ellipse: Formed when the plane is tilted at an angle to the axis.",
                "Parabola: Formed when the plane is parallel to a generator (slant side) of the cone.",
                "Hyperbola: Formed when the plane intersects both nappes of the cone."
            ]
        }
    ]
  },
  '12': {
    physics: [
        {
            id: 'phy1201',
            text: "State and explain Coulomb's Law in electrostatics. Compare it with Newton's Law of Gravitation.",
            keyPoints: [
                "Coulomb's Law: The electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them. Formula: F = k|q₁q₂|/r².",
                "Similarity with Gravitation: Both are inverse square laws and act along the line joining the centers of the bodies/charges.",
                "Difference 1: Electrostatic force can be attractive or repulsive, while gravitational force is always attractive.",
                "Difference 2: Electrostatic force is much stronger than gravitational force and depends on the medium, while gravitational force does not."
            ]
        },
        {
            id: 'phy1202',
            text: "State Kirchhoff's laws for electrical circuits.",
            keyPoints: [
                "Kirchhoff's First Law (Junction Rule or KCL): The algebraic sum of currents entering a junction is zero (ΣI = 0). This is based on the conservation of charge.",
                "Kirchhoff's Second Law (Loop Rule or KVL): The algebraic sum of the changes in potential around any closed loop in a circuit is zero (ΣΔV = 0). This is based on the conservation of energy."
            ]
        },
        {
            id: 'phy1203',
            text: "What is electromagnetic induction? State Faraday's laws of EMI.",
            keyPoints: [
                "Electromagnetic Induction (EMI) is the phenomenon of producing an electromotive force (EMF) across an electrical conductor in a changing magnetic field.",
                "Faraday's First Law: Whenever the magnetic flux linked with a circuit changes, an EMF is induced in the circuit.",
                "Faraday's Second Law: The magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux linked with the circuit (ε ∝ dΦ_B/dt).",
                "Lenz's Law gives the direction of the induced current (ε = -dΦ_B/dt)."
            ]
        },
        {
            id: 'phy1204',
            text: "Explain Huygens' principle. Use it to verify the law of reflection.",
            keyPoints: [
                "Huygens' Principle: Each point on a wavefront acts as a source of secondary wavelets, which spread out in all directions with the speed of the wave. The new wavefront is the tangential surface to all these secondary wavelets.",
                "To verify law of reflection, draw an incident wavefront on a reflecting surface.",
                "Construct secondary wavelets from points on the incident wavefront.",
                "The time taken for the wavelet from one end to reach the surface is the same as the time for the wavelet from the other end to travel to the new reflected wavefront.",
                "Using congruent triangles in the geometric construction, prove that the angle of incidence equals the angle of reflection (∠i = ∠r)."
            ]
        },
        {
            id: 'phy1205',
            text: "What is the photoelectric effect? List Einstein's observations that classical wave theory could not explain.",
            keyPoints: [
                "Photoelectric Effect: The emission of electrons from a metal surface when light of a suitable frequency is incident on it.",
                "Failure of Wave Theory 1 (Instantaneous Emission): The effect is instantaneous, but wave theory predicted a time lag for electrons to absorb enough energy.",
                "Failure of Wave Theory 2 (Threshold Frequency): The effect only occurs above a certain minimum (threshold) frequency, regardless of intensity. Wave theory predicted it should occur at any frequency if the intensity is high enough.",
                "Failure of Wave Theory 3 (Kinetic Energy vs Intensity): The maximum kinetic energy of photoelectrons depends on the frequency of light, not its intensity. Wave theory predicted that higher intensity should lead to higher kinetic energy."
            ]
        }
    ],
    chemistry: [
        {
            id: 'chem1201',
            text: "Define molarity and molality. Which one is considered better for expressing concentration and why?",
            keyPoints: [
                "Molarity (M): The number of moles of solute dissolved in one liter of solution.",
                "Molality (m): The number of moles of solute dissolved in one kilogram of the solvent.",
                "Molality is considered better for expressing concentration.",
                "Reason: Molarity depends on the volume of the solution, which can change with temperature. Molality depends on the mass of the solvent, which is independent of temperature changes."
            ]
        },
        {
            id: 'chem1202',
            text: "Explain the Nernst equation for a single electrode potential.",
            keyPoints: [
                "The Nernst equation relates the reduction potential of an electrochemical reaction (half-cell or full cell) to the standard electrode potential, temperature, and activities (often approximated by concentrations) of the chemical species.",
                "It shows how the cell potential changes from its standard value under non-standard conditions.",
                "For a single electrode reaction Mⁿ⁺(aq) + ne⁻ → M(s), the equation is:",
                "E = E° - (RT/nF)ln(1/[Mⁿ⁺]) or E = E° - (2.303RT/nF)log(1/[Mⁿ⁺]).",
                "E is cell potential, E° is standard cell potential, R is gas constant, T is temperature, n is number of electrons, F is Faraday constant."
            ]
        },
        {
            id: 'chem1203',
            text: "What is the difference between the order of a reaction and its molecularity?",
            keyPoints: [
                "Order of Reaction: It is the sum of the powers of the concentration terms in the experimentally determined rate law expression. It is an experimental quantity and can be an integer, fraction, or zero.",
                "Molecularity: It is the number of reacting species (atoms, ions, or molecules) that must collide simultaneously to bring about a chemical reaction. It is a theoretical concept, can only be a positive integer, and is only defined for elementary (single-step) reactions."
            ]
        },
        {
            id: 'chem1204',
            text: "Explain why transition metals form colored compounds.",
            keyPoints: [
                "Transition metals have partially filled d-orbitals.",
                "When light falls on them, the d-electrons can absorb energy and get excited from a lower energy d-orbital to a higher energy d-orbital. This is called a d-d transition.",
                "The energy absorbed corresponds to a certain frequency (color) in the visible spectrum.",
                "The compound appears to be the color of the transmitted light, which is the complementary color of the light absorbed."
            ]
        },
        {
            id: 'chem1205',
            text: "Describe the SN1 and SN2 mechanisms for nucleophilic substitution reactions.",
            keyPoints: [
                "SN2 (Substitution Nucleophilic Bimolecular): It is a single-step reaction. The nucleophile attacks the carbon atom from the side opposite to the leaving group. The rate depends on the concentration of both the substrate and the nucleophile. It results in an inversion of configuration (Walden inversion). Favored by primary alkyl halides.",
                "SN1 (Substitution Nucleophilic Unimolecular): It is a two-step reaction. The first step is the slow formation of a carbocation intermediate. The second step is the fast attack of the nucleophile on the carbocation. The rate depends only on the concentration of the substrate. It results in racemization (a mixture of retention and inversion). Favored by tertiary alkyl halides."
            ]
        }
    ],
    maths: [
        {
            id: 'math1201',
            text: "What is a relation? Explain the difference between reflexive, symmetric, and transitive relations.",
            keyPoints: [
                "A relation R from a set A to a set B is a subset of the Cartesian product A × B.",
                "Reflexive: A relation R on a set A is reflexive if (a, a) ∈ R for every a ∈ A. (Every element is related to itself).",
                "Symmetric: A relation R on a set A is symmetric if (a, b) ∈ R implies that (b, a) ∈ R for all a, b ∈ A.",
                "Transitive: A relation R on a set A is transitive if (a, b) ∈ R and (b, c) ∈ R implies that (a, c) ∈ R for all a, b, c ∈ A.",
                "A relation that is reflexive, symmetric, and transitive is an equivalence relation."
            ]
        },
        {
            id: 'math1202',
            text: "What is the product rule for differentiation? Find the derivative of f(x) = x²sin(x).",
            keyPoints: [
                "Product Rule: If f(x) = u(x)v(x), then the derivative f'(x) = u'(x)v(x) + u(x)v'(x).",
                "For f(x) = x²sin(x), let u(x) = x² and v(x) = sin(x).",
                "Find the derivatives of the parts: u'(x) = 2x and v'(x) = cos(x).",
                "Apply the rule: f'(x) = (2x)(sin(x)) + (x²)(cos(x)).",
                "The derivative is 2x sin(x) + x² cos(x)."
            ]
        },
        {
            id: 'math1203',
            text: "Explain integration by parts.",
            keyPoints: [
                "Integration by parts is a technique for integrating the product of two functions.",
                "It is derived from the product rule for differentiation.",
                "The formula is: ∫u dv = uv - ∫v du.",
                "The key is to choose 'u' and 'dv' correctly. The ILATE rule (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential) is often used as a guideline for choosing 'u'."
            ]
        },
        {
            id: 'math1204',
            text: "What are direction cosines of a line? If a line makes angles α, β, and γ with the positive x, y, and z axes respectively, prove that cos²α + cos²β + cos²γ = 1.",
            keyPoints: [
                "Direction cosines of a line are the cosines of the angles that the line makes with the positive directions of the coordinate axes.",
                "They are usually denoted by l, m, n, where l = cosα, m = cosβ, n = cosγ.",
                "Proof: Consider a vector OP along the line with magnitude r. Its coordinates are (x, y, z).",
                "From the geometry, x = r cosα, y = r cosβ, z = r cosγ.",
                "The magnitude of the vector is r = √(x² + y² + z²).",
                "Substituting for x, y, z gives r² = (r cosα)² + (r cosβ)² + (r cosγ)².",
                "Dividing by r² gives 1 = cos²α + cos²β + cos²γ."
            ]
        },
        {
            id: 'math1205',
            text: "State Bayes' Theorem.",
            keyPoints: [
                "Bayes' theorem describes the probability of an event, based on prior knowledge of conditions that might be related to the event.",
                "It is used to update the probability for a hypothesis as more evidence becomes available.",
                "Let E₁ and E₂ be two mutually exclusive and exhaustive events and A be any event associated with them.",
                "Then the formula for the probability of E₁ given that A has occurred is:",
                "P(E₁|A) = [P(E₁) * P(A|E₁)] / [P(E₁) * P(A|E₁) + P(E₂) * P(A|E₂)]."
            ]
        }
    ]
  }
};

// Use module.exports for Node.js backend environments
module.exports = questionsDB;