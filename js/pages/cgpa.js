const courseCatalog = {
    electrical: {
        label: "Electrical Engineering",
        semesters: {
            sem1: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "ELL1401", name: "Digital Electronics", credits: 4, graded: true, category: "Department Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "ELL1001", name: "Circuit Theory", credits: 4, graded: true, category: "Department Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" }
            ],
            sem3: [
                { code: "ELL2303", name: "Semiconductor Materials and Interfaces", credits: 3, graded: true, category: "Department Core" },
                { code: "ELL1205", name: "Signals and Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "ELL2500", name: "Electromechanical Energy Conversion", credits: 4, graded: true, category: "Department Core" },
                { code: "ELP1001", name: "Circuits Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "MTL2006", name: "Introduction to Probability and Stochastic Processes", credits: 4, graded: true, category: "Institute Core" },
                { code: "COL1101", name: "Programming with Data Structures", credits: 4, graded: true, category: "Institute Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "ELL2400", name: "Electromagnetic Fields and Waves", credits: 3, graded: true, category: "Department Core" },
                { code: "ELL2304", name: "Semiconductor Devices", credits: 3, graded: true, category: "Department Core" },
                { code: "ELL2100", name: "Systems and Control", credits: 4, graded: true, category: "Department Core" },
                { code: "ELL2501", name: "Power Electronics", credits: 3, graded: true, category: "Department Core" },
                { code: "ELP2500", name: "Electromechanical Energy Conversion Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELL2201", name: "Optimization and Machine Learning", credits: 3, graded: true, category: "Department Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "ELL3305", name: "Analog Systems I", credits: 1.5, graded: true, category: "Department Core" },
                { code: "ELL3402", name: "Computer Architecture", credits: 3, graded: true, category: "Department Core" },
                { code: "ELP2400", name: "Electromagnetic Fields and Waves Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELP2100", name: "Systems and Control Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "ELP3305", name: "Analog Systems Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELL3401", name: "Communication Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "ACA", name: "Analog Circuits Applications Basket", credits: 1.5, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem6: [
                { code: "ELL3101", name: "Sensing, Measurement & Estimation", credits: 3, graded: true, category: "Department Core" },
                { code: "ELL2600", name: "Power Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "ELP3000", name: "EE DIY I", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELP3401", name: "Communication Systems Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELP3402", name: "Computer Architecture Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem7: [
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "ES", name: "Environment and Sustainability Basket", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "BIO", name: "Biology Course", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "EEP", name: "BTech or Capstone Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem8: [
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ]
        }
    },
    ee_power: {
        label: "Electrical Engineering (Power and Automation)",
        semesters: {
            sem1: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "ELL1401", name: "Digital Electronics", credits: 4, graded: true, category: "Department Core" },
                { code: "ELL1001", name: "Circuit Theory", credits: 4, graded: true, category: "Department Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" }
            ],
            sem3: [
                { code: "ELL1205", name: "Signals and Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "ELL2500", name: "Electromechanical Energy Conversion", credits: 4, graded: true, category: "Department Core" },
                { code: "ELP1001", name: "Circuits Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "MTL2006", name: "Introduction to Probability and Stochastic Processes", credits: 4, graded: true, category: "Institute Core" },
                { code: "COL1101", name: "Programming with Data Structures", credits: 4, graded: true, category: "Institute Core" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "ELL2600", name: "Power Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "ELL2100", name: "Systems and Control", credits: 4, graded: true, category: "Department Core" },
                { code: "ELL2501", name: "Power Electronics", credits: 3, graded: true, category: "Department Core" },
                { code: "ELP2500", name: "Electromechanical Energy Conversion Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELL2201", name: "Optimization and Machine Learning", credits: 3, graded: true, category: "Department Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "ELL3502", name: "e-Mobility Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ELL3305", name: "Analog Systems I", credits: 1.5, graded: true, category: "Department Core" },
                { code: "ELL3403", name: "Embedded Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ELL3601", name: "Renewable Grid Operation and Control", credits: 3, graded: true, category: "Department Core" },
                { code: "ELP2600", name: "Power Systems Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELP2501", name: "Power Electronics Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELP2100", name: "Systems and Control Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "ELP3305", name: "Analog Systems Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "ACA", name: "Analog Circuits Applications Basket", credits: 1.5, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem6: [
                { code: "ELL3101", name: "Sensing, Measurement & Estimation", credits: 3, graded: true, category: "Department Core" },
                { code: "ELP3000", name: "EE DIY I", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELP3403", name: "Embedded Systems Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELP3502", name: "e-Mobility Systems Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "ELL3602", name: "Power Systems Protection", credits: 3, graded: true, category: "Department Core" },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem7: [
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "BIO", name: "Biology Course", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "EE3", name: "BTech or Capstone Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem8: [
                { code: "ES", name: "Environment and Sustainability Basket", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ]
        }
    },
    energy: {
        label: "Energy Engineering",
        semesters: {
            sem1: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "ESL1000", name: "Energy Resources and Utilization", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "MEL1140", name: "Thermodynamics", credits: 4, graded: true, category: "Institute Core" },
                { code: "MLL1001", name: "Introduction to Materials Science and Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "ESL2020", name: "Semiconductors for Energy Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL2060", name: "Circuit Analysis and Control Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL2061", name: "Electrical Machines", credits: 3, graded: true, category: "Department Core" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "ESL2044", name: "Thermo-Fluids for Energy Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "ESL2100", name: "Fundamentals of Energy Engineering", credits: 4, graded: true, category: "Department Core" },
                { code: "ESL2462", name: "Electronics and Embedded Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL2463", name: "Power Electronics and Motor Drives", credits: 4, graded: true, category: "Department Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "ESL3464", name: "Power System Modeling, Analysis and Control", credits: 4, graded: true, category: "Department Core" },
                { code: "ESL3500", name: "Plasmas Concepts for Energy Applications", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL3641", name: "Energy Storage", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL3790", name: "Economics, Planning and Financing of Energy Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL3873", name: "Computational Methods for Energy Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ESP3100", name: "Energy Engineering Lab", credits: 1.5, graded: true, category: "Lab" },
                { code: "ESP3460", name: "Electrical Energy Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem6: [
                { code: "ESL3100", name: "Energy Efficiency and Demand Side Management", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL3171", name: "Design and Analysis of Energy Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL3172", name: "Artificial Intelligence for Energy Systems", credits: 3, graded: true, category: "Department Core" },
                { code: "ESL3752", name: "Hydrogen Economy", credits: 3, graded: true, category: "Department Core" },
                { code: "ESP3110", name: "Energy Innovation Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem7: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "ES1", name: "ES1 BTech or Capstone Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    },
    mechanical: {
        label: "Mechanical Engineering",
        semesters: {
            sem1: [
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEL1002", name: "Engineering Mechanics", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "MLL1001", name: "Introduction to Materials Science and Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEL2001", name: "Solid Mechanics", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL2002", name: "Kinematics and Dynamics of Machines", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL2011", name: "Engineering Thermodynamics", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL2012", name: "Fluid Mechanics", credits: 4, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "MEL2003", name: "Mechanical Engineering Design and Drawing", credits: 3, graded: true, category: "Department Core" },
                { code: "MEL2014", name: "Energy Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL2015", name: "Manufacturing Processes - I", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL2004", name: "Operations Research", credits: 3, graded: true, category: "Department Core" },
                { code: "MTL2008", name: "Introduction to Probability and Statistics", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP2013", name: "Thermofluids Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "MEL3012", name: "Heat and Mass Transfer", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL3015", name: "Manufacturing Processes II", credits: 4, graded: true, category: "Department Core" },
                { code: "MEP3014", name: "Heat Transfer and Thermal Systems Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "MEL3001", name: "Design of Machines", credits: 4, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem6: [
                { code: "MEL3011", name: "Control Systems Engineering", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL3013", name: "Renewable Energy Systems and Sustainability", credits: 3, graded: true, category: "Department Core" },
                { code: "MEL3003", name: "Manufacturing and Service System Design", credits: 3, graded: true, category: "Department Core" },
                { code: "MEL3002", name: "Machine Learning for Mechanical Engineering", credits: 3, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem7: [
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "MED4001", name: "B.Tech Project (BTP) - I", credits: 3, graded: true, category: "Project" }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE6", name: "Department Elective 6", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    },
    pie: {
        label: "Production and Industrial Engineering",
        semesters: {
            sem1: [
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEL1002", name: "Engineering Mechanics", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "MLL1001", name: "Introduction to Materials Science and Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEL2001", name: "Solid Mechanics", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL2002", name: "Kinematics and Dynamics of Machines", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL2021", name: "Near Net Shape Manufacturing", credits: 3.5, graded: true, category: "Department Core" },
                { code: "MEL2024", name: "Thermal Science for Manufacturing", credits: 4, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "MEL2003", name: "Mechanical Engineering Design and Drawing", credits: 3, graded: true, category: "Department Core" },
                { code: "MEL2022", name: "Metal Forming and Press Tools", credits: 3.5, graded: true, category: "Department Core" },
                { code: "MEL2023", name: "Welding and Allied Processes", credits: 3.5, graded: true, category: "Department Core" },
                { code: "MEL2004", name: "Operations Research", credits: 3, graded: true, category: "Department Core" },
                { code: "MTL2008", name: "Introduction to Probability and Statistics", credits: 4, graded: true, category: "Institute Core" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem5: [
                { code: "MEL3021", name: "Material Removal Processes", credits: 3.5, graded: true, category: "Department Core" },
                { code: "MEL3025", name: "Stochastic Modeling and Simulation", credits: 3, graded: true, category: "Department Core" },
                { code: "MEP3027", name: "Operations Research Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DOM", name: "Design of Machines", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem6: [
                { code: "MEL3024", name: "Sustainable Manufacturing", credits: 2, graded: true, category: "Department Core" },
                { code: "MEL3003", name: "Manufacturing and Service System Design", credits: 3, graded: true, category: "Department Core" },
                { code: "MEL3002", name: "Machine Learning for Mechanical Engineering", credits: 3, graded: true, category: "Department Core" },
                { code: "MEL3022", name: "Introduction to Metrology", credits: 2.5, graded: true, category: "Department Core" },
                { code: "MEL3023", name: "Micro and Nano Manufacturing", credits: 3, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem7: [
                { code: "MEP4021", name: "Industrial Engineering Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "MED4001", name: "B.Tech Project (BTP) - I", credits: 3, graded: true, category: "Project" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "IAC", name: "Industrial Automation and Controls", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    },
    materials: {
        label: "Materials Engineering",
        semesters: {
            sem1: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "MLL1001", name: "Introduction to Materials Science and Engineering", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "MLL2001", name: "Introduction to Thermodynamics of Materials", credits: 4, graded: true, category: "Department Core" },
                { code: "MLL2002", name: "Structure and Characterization of Materials", credits: 4, graded: true, category: "Department Core" },
                { code: "MLL2003", name: "Introduction to Polymeric Materials", credits: 4, graded: true, category: "Department Core" },
                { code: "AML1000", name: "Engineering Mechanics", credits: 4, graded: true, category: "Institute Core" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "MLL2004", name: "Phase Equilibria and Transformation", credits: 3, graded: true, category: "Department Core" },
                { code: "MLL2005", name: "Mechanical Behaviour of Materials", credits: 4, graded: true, category: "Department Core" },
                { code: "MLL2006", name: "Modern Data Analytics in Materials Science", credits: 3, graded: true, category: "Department Core" },
                { code: "MLP2007", name: "Characterization Lab", credits: 2, graded: true, category: "Lab" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "COL1101", name: "Programming with Data Structures", credits: 4, graded: true, category: "Institute Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "MLL3001", name: "Electronic, Optical and Magnetic Properties of Materials", credits: 4, graded: true, category: "Department Core" },
                { code: "MLL3002", name: "Materials Modeling", credits: 3, graded: true, category: "Department Core" },
                { code: "MLL3002B", name: "Materials Processing", credits: 3, graded: true, category: "Department Core" },
                { code: "MLP3004", name: "Mechanical Behaviour of Materials Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem6: [
                { code: "MLL3005", name: "Corrosion and Degradation of Materials", credits: 4, graded: true, category: "Department Core" },
                { code: "MLL3006", name: "Materials Selection and Design", credits: 3, graded: true, category: "Department Core" },
                { code: "MLL3007", name: "Metals Extraction and Urban Mining", credits: 4, graded: true, category: "Department Core" },
                { code: "MLP3008", name: "Functional Materials Laboratory", credits: 1.5, graded: true, category: "Lab" },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "MS1", name: "MS1 Capstone or B.Tech Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem7: [
                { code: "MLL4002", name: "Energy Materials", credits: 3, graded: true, category: "Department Core" },
                { code: "MLL4003", name: "Materials and Sustainable Developments", credits: 2, graded: true, category: "Department Core" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ]
        }
    },
    design: {
        label: "Design",
        semesters: {
            sem1: [
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "CML1002", name: "The Art and Science of Building Molecules and Materials", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1002", name: "Waves and Oscillations", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "DDP1026", name: "Introduction to Design", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "AML1000", name: "Engineering Mechanics", credits: 4, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "DDL2001", name: "Methods for Design Thinking", credits: 3, graded: true, category: "Department Core" },
                { code: "DDP2110", name: "Aesthetics in Design", credits: 3, graded: true, category: "Department Core" },
                { code: "DDL2111", name: "Understanding Design and Environment", credits: 3, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "BIO", name: "Biology Course", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "DDP2121", name: "Computer Aided Design", credits: 3, graded: true, category: "Department Core" },
                { code: "DDP2201", name: "Materials and Prototyping", credits: 3, graded: true, category: "Department Core" },
                { code: "DDL2120", name: "Behavioural Design", credits: 3, graded: true, category: "Department Core" },
                { code: "DPP2280", name: "Art and Craft Practicum", credits: 1, graded: true, category: "Department Core" },
                { code: "DDT2900", name: "Social Immersion", credits: 1, graded: true, category: "Department Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "DDL2000", name: "Ergonomics and Human Factors", credits: 3, graded: true, category: "Department Core" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "DDP3008", name: "Design Communication and Presentation", credits: 3, graded: true, category: "Department Core" },
                { code: "DDL3001", name: "Systems and Lifecycle Perspectives in Design", credits: 3, graded: true, category: "Department Core" },
                { code: "DDP3195", name: "Design Project 1 on Sustainable Development Goals", credits: 3, graded: true, category: "Project" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem6: [
                { code: "DDL3299", name: "Emerging Trends and Technologies in Design", credits: 3, graded: true, category: "Department Core" },
                { code: "DDP3006", name: "UX Design for Contemporary Technologies", credits: 3, graded: true, category: "Department Core" },
                { code: "DDP3295", name: "Design Project-2", credits: 3, graded: true, category: "Project" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem7: [
                { code: "DDL4004", name: "Design Management and Entrepreneurship", credits: 3, graded: true, category: "Department Core" },
                { code: "DDP4195", name: "Design Project-3", credits: 3, graded: true, category: "Project" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem8: [
                { code: "DDP4295", name: "Design Project cum Thesis-4", credits: 9, graded: true, category: "Project" }
            ]
        }
    },
    mnc: {
        label: "Mathematics & Computing",
        semesters: {
            sem1: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Department Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Department Core" },
                { code: "MTL1080", name: "Discrete Mathematical Structures", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "MTL2003", name: "Optimization Methods and Applications", credits: 4, graded: true, category: "Department Core" },
                { code: "MTL2006", name: "Introduction to Probability and Stochastic Processes", credits: 4, graded: true, category: "Department Core" },
                { code: "MTL2005", name: "Algebra", credits: 4, graded: true, category: "Department Core" },
                { code: "COL1101", name: "Programming with Data Structures", credits: 4, graded: true, category: "Institute Core" },
                { code: "ES", name: "Engineering Science Basket", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "MTL2007", name: "Numerical Analysis and Computation", credits: 4, graded: true, category: "Department Core" },
                { code: "MTL2042", name: "Analysis and Design of Algorithms", credits: 4, graded: true, category: "Department Core" },
                { code: "MTL2022", name: "Introduction to Analysis", credits: 4, graded: true, category: "Department Core" },
                { code: "AIL2011", name: "Introduction to Data Science", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "ES", name: "Engineering Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "MTL3075", name: "Partial Differential Equations and Applications", credits: 4, graded: true, category: "Department Core" },
                { code: "MTP3090", name: "Numerical Analysis Computing Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "BIO", name: "Biology Course", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "MFC1", name: "MT Flexible Core 1", credits: 4, graded: true, category: "Flexible Core", editable: true, custom: true }
            ],
            sem6: [
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "MFC2", name: "MT Flexible Core 2", credits: 4, graded: true, category: "Flexible Core", editable: true, custom: true },
                { code: "MFC3", name: "MT Flexible Core 3", credits: 4, graded: true, category: "Flexible Core", editable: true, custom: true }
            ],
            sem7: [
                { code: "MTD4050", name: "BTech Project", credits: 3, graded: true, category: "Project" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE6", name: "Department Elective 6", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    },
    textile: {
        label: "Textile Engineering",
        semesters: {
            sem1: [
                { code: "MTL1001", name: "Mathematics I", credits: 4, graded: true, category: "Institute Core" },
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "CML1002", name: "Building Molecules and Materials", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Lab", credits: 2, graded: true, category: "Lab" },
                { code: "DAN1100", name: "Life Skills", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "TXL1101", name: "Structure and Properties of Fibres", credits: 4, graded: true, category: "Department Core" },
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "MTL1002", name: "Mathematics II", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1002", name: "Waves and Oscillations", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Lab", credits: 2, graded: true, category: "Lab" }
            ],
            sem3: [
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "MTL1208", name: "Introduction to Probability and Statistics", credits: 4, graded: true, category: "Institute Core" },
                { code: "TXL2201", name: "Yarn Manufacture I", credits: 3, graded: true, category: "Department Core" },
                { code: "TXP2201", name: "Yarn Manufacture Laboratory-I", credits: 1, graded: true, category: "Lab" },
                { code: "TXL2101", name: "Chemistry and Physics of Polymers", credits: 3, graded: true, category: "Department Core" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "TXL2202", name: "Yarn Manufacture II", credits: 3, graded: true, category: "Department Core" },
                { code: "TXL2301", name: "Fabric Manufacture I", credits: 3, graded: true, category: "Department Core" },
                { code: "TXP2202", name: "Yarn Manufacture Laboratory-II", credits: 1, graded: true, category: "Lab" },
                { code: "TXP2301", name: "Fabric Manufacture Laboratory-I", credits: 1, graded: true, category: "Lab" },
                { code: "TXL2401", name: "Preparation and Colouration of Textiles I", credits: 3, graded: true, category: "Department Core" },
                { code: "TXP2401", name: "Textile Preparation and Dyeing Lab", credits: 1, graded: true, category: "Lab" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "COL1011", name: "Programming with Data Structures", credits: 4, graded: true, category: "Institute Core" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "TXL3301", name: "Fabric Manufacture II", credits: 3, graded: true, category: "Department Core" },
                { code: "TXP3301", name: "Fabric Manufacture Laboratory-II", credits: 1, graded: true, category: "Lab" },
                { code: "TXL3401", name: "Preparation and Colouration of Textiles-II", credits: 3, graded: true, category: "Department Core" },
                { code: "TXL3402", name: "Technology of Textile Finishing", credits: 3, graded: true, category: "Department Core" },
                { code: "TXL3101", name: "Polymer to Fibre Engineering", credits: 3, graded: true, category: "Department Core" },
                { code: "TXP3101", name: "Polymer to Fiber Engineering Lab", credits: 1, graded: true, category: "Lab" },
                { code: "TXP3401", name: "Textile Printing and Finishing Lab", credits: 1, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ],
            sem6: [
                { code: "TXL4301", name: "Mechanics and Generative Design of Fabrics", credits: 3, graded: true, category: "Department Core" },
                { code: "TXL3202", name: "Yarn Structure and Characterization", credits: 3, graded: true, category: "Department Core" },
                { code: "TXD3501", name: "Major Project-I", credits: 3, graded: true, category: "Project" },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem7: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE6", name: "Department Elective 6", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE7", name: "Department Elective 7", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE6", name: "Department Elective 6", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ]
        }
    },
    ep: {
        label: "Engineering Physics",
        semesters: {
            sem1: [
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEL1140", name: "Thermodynamics", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1002", name: "Waves and Oscillations", credits: 3, graded: true, category: "Department Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1002", name: "The Art and Science of Building Molecules and Materials", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1012", name: "Mathematical Physics", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "PYL2003", name: "Classical Mechanics", credits: 4, graded: true, category: "Department Core" },
                { code: "ELL1401", name: "Digital Electronics", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL2013", name: "Quantum Mechanics I", credits: 4, graded: true, category: "Department Core" },
                { code: "PYL2023", name: "Electrodynamics", credits: 4, graded: true, category: "Department Core" },
                { code: "PYP2003", name: "Engineering Physics Laboratory-I", credits: 3, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "PYL2004", name: "Optics and Photonics", credits: 4, graded: true, category: "Department Core" },
                { code: "PYL2014", name: "Statistical Physics", credits: 4, graded: true, category: "Department Core" },
                { code: "PYL2024", name: "Quantum Mechanics II", credits: 4, graded: true, category: "Department Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "PYP2004", name: "Engineering Physics Laboratory-II", credits: 3, graded: true, category: "Lab" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "PYL3005", name: "Artificial Intelligence and its Applications in Physics", credits: 3, graded: true, category: "Department Core" },
                { code: "PYL3015", name: "Condensed Matter Physics", credits: 4, graded: true, category: "Department Core" },
                { code: "PYL3025", name: "Computational Physics", credits: 4, graded: true, category: "Department Core" },
                { code: "PYL3035", name: "Experimental Methods in Physics", credits: 3, graded: true, category: "Department Core" },
                { code: "PYP3005", name: "Engineering Physics Laboratory-III", credits: 3, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem6: [
                { code: "PYL3006", name: "Nuclear and Elementary Particle Physics", credits: 4, graded: true, category: "Department Core" },
                { code: "PYP3006", name: "Engineering Physics Laboratory-IV", credits: 3, graded: true, category: "Lab" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "PH1", name: "PH1 Capstone or B.Tech Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem7: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE6", name: "Department Elective 6", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    },
    ecm: {
        label: "Engineering & Computational Mechanics",
        semesters: {
            sem1: [
                { code: "AML1000", name: "Engineering Mechanics", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" }
            ],
            sem2: [
                { code: "AML1050", name: "Engineering Thermodynamics", credits: 4, graded: true, category: "Department Core" },
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" }
            ],
            sem3: [
                { code: "AML2010", name: "Solid Mechanics", credits: 4, graded: true, category: "Department Core" },
                { code: "AML2020", name: "Fluid Mechanics", credits: 4, graded: true, category: "Department Core" },
                { code: "COL1101", name: "Programming with Data Structures", credits: 4, graded: true, category: "Institute Core" },
                { code: "MLL1001", name: "Introduction to Materials Science and Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "AML2050", name: "Applied Mathematics for Engineers", credits: 3, graded: true, category: "Department Core" },
                { code: "AML2060", name: "Experimental Methods", credits: 4, graded: true, category: "Department Core" },
                { code: "AML2070", name: "Biomechanics", credits: 3, graded: true, category: "Department Core" },
                { code: "AML2080", name: "Heat Transfer", credits: 3, graded: true, category: "Department Core" },
                { code: "AMP2090", name: "Experiments in Solid and Fluid Mechanics", credits: 2, graded: true, category: "Lab" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "AML3000", name: "Numerical Methods for Engineers", credits: 4, graded: true, category: "Department Core" },
                { code: "AML3030", name: "Machine Learning for Mechanics", credits: 4, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "STREAM1", name: "AM1 Stream Core 1", credits: 3, graded: true, category: "Stream Core", editable: true, custom: true }
            ],
            sem6: [
                { code: "AML3050", name: "Basics of Product Design", credits: 4, graded: true, category: "Department Core" },
                { code: "AML3080", name: "Dynamics of Mechanical Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "STREAM2", name: "AM1 Stream Core 2", credits: 4, graded: true, category: "Stream Core", editable: true, custom: true }
            ],
            sem7: [
                { code: "AMD4000", name: "BTP (Part -1)", credits: 3, graded: true, category: "Project" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "STREAM3", name: "AM1 Stream Core 3", credits: 2, graded: true, category: "Stream Core", editable: true, custom: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE6", name: "Department Elective 6", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    },
    cse: {
        label: "Computer Science and Engineering",
        semesters: {
            sem1: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Department Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "ELL1205", name: "Signals and Systems", credits: 4, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "COL1002", name: "Discrete Mathematical Structures", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "COL1101", name: "Programming with Data Structures", credits: 4, graded: true, category: "Department Core" },
                { code: "COL2015", name: "Digital Logic and System Design", credits: 4, graded: true, category: "Department Core" },
                { code: "MTL2006", name: "Introduction to Probability and Stochastic Processes", credits: 4, graded: true, category: "Institute Core" },
                { code: "COL2010", name: "Data Science", credits: 4, graded: true, category: "Department Core" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "COL2090", name: "Design Practices", credits: 4, graded: true, category: "Department Core" },
                { code: "COL2051", name: "Algorithm Design and Analysis", credits: 4, graded: true, category: "Department Core" },
                { code: "COL2016", name: "Computer Architecture", credits: 4, graded: true, category: "Department Core" },
                { code: "COL2026", name: "Foundations of Programming Languages", credits: 3, graded: true, category: "Department Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "BIO", name: "Biology Course", credits: 2, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "COL2034", name: "Introduction to Computer Networks", credits: 4, graded: true, category: "Department Core" },
                { code: "COL2031", name: "Operating Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "SDT1", name: "SDT Course 1", credits: 4, graded: true, category: "Specialized Track", editable: true, custom: true },
                { code: "SDT2", name: "SDT Course 2", credits: 4, graded: true, category: "Specialized Track", editable: true, custom: true }
            ],
            sem6: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "SDT3", name: "SDT Course 3", credits: 4, graded: true, category: "Specialized Track", editable: true, custom: true },
                { code: "SDT4", name: "SDT Course 4", credits: 3, graded: true, category: "Specialized Track", editable: true, custom: true }
            ],
            sem7: [
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "CS1", name: "CS1 Capstone or B.Tech Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem8: [
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    },
    chemical: {
        label: "Chemical Engineering",
        semesters: {
            sem1: [
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "CML1002", name: "The Art and Science of Building Molecules and Materials", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "CHL1001", name: "Transport Phenomena", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "CHL1000", name: "Introduction to Chemical Engineering", credits: 1, graded: true, category: "Department Core" },
                { code: "CHL1002", name: "Material and Energy Balances", credits: 4, graded: true, category: "Department Core" },
                { code: "CHL2001", name: "Numerical Analysis for Chemical Engineers", credits: 4, graded: true, category: "Department Core" },
                { code: "CHL2002", name: "Chemical Engineering Thermodynamics", credits: 4, graded: true, category: "Department Core" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "MTL2008", name: "Introduction to Probability and Statistics", credits: 4, graded: true, category: "Institute Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "CHL2003", name: "Fluid Mechanics", credits: 3, graded: true, category: "Department Core" },
                { code: "CHL2004", name: "Heat and Mass Transfer", credits: 4, graded: true, category: "Department Core" },
                { code: "CHL2005", name: "Introduction to Chemical Reaction Engineering", credits: 4, graded: true, category: "Department Core" },
                { code: "COL1101", name: "Programming with Data Structures", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "CHT", name: "CH1 Technology Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "CHL3003", name: "Fluid Particle Mechanics", credits: 3, graded: true, category: "Department Core" },
                { code: "CHL3004", name: "Mass Transfer Operations", credits: 3, graded: true, category: "Department Core" },
                { code: "CHL3005", name: "Reaction Engineering for Environment and Sustainability", credits: 3, graded: true, category: "Department Core" },
                { code: "CHL3001", name: "Data Analysis and Machine Learning for Process Systems", credits: 4, graded: true, category: "Department Core" },
                { code: "CHP3101", name: "Chemical Engineering Laboratory-I", credits: 1.5, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem6: [
                { code: "CHL3006", name: "Process Dynamics and Control", credits: 4, graded: true, category: "Department Core" },
                { code: "CHL3007", name: "Process Technology and Economics", credits: 3, graded: true, category: "Department Core" },
                { code: "CHL3008", name: "Equipment and Plant Design", credits: 3, graded: true, category: "Department Core" },
                { code: "CHP3102", name: "Chemical Engineering Laboratory-II", credits: 1.5, graded: true, category: "Lab" },
                { code: "CHP3103", name: "Chemical Engineering Laboratory-III", credits: 1.5, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "CH1", name: "CH1 Capstone or B.Tech Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem7: [
                { code: "CHP3104", name: "Chemical Engineering Laboratory-IV", credits: 1.5, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ],
            sem8: [
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true }
            ]
        }
    },
    civil: {
        label: "Civil Engineering",
        semesters: {
            sem1: [
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "AML1000", name: "Engineering Mechanics", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "PYL1003", name: "Mechanics and Special Theory of Relativity", credits: 3, graded: true, category: "Institute Core" },
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "CVL3101", name: "Construction Contract and Practices", credits: 2, graded: true, category: "Department Core" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" }
            ],
            sem3: [
                { code: "CVL1501", name: "Mechanics of Solids", credits: 2, graded: true, category: "Department Core" },
                { code: "CVL1701", name: "Mechanics of Fluids", credits: 2, graded: true, category: "Department Core" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "CVL2001", name: "Climate Change and Adaptation", credits: 2, graded: true, category: "Department Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" }
            ],
            sem4: [
                { code: "CVP2502", name: "Solid Mechanics and Structural Analysis Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "CVL4102", name: "Modern Construction Management", credits: 3, graded: true, category: "Department Core" },
                { code: "CVL3601", name: "Introduction to Highway Engineering", credits: 3, graded: true, category: "Department Core" },
                { code: "CVP3601", name: "Highway Materials Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "CVL2702", name: "Hydraulics", credits: 3, graded: true, category: "Department Core" },
                { code: "CVP2702", name: "Fluid Mechanics and Hydraulics Lab", credits: 1, graded: true, category: "Lab" },
                { code: "CVL2401", name: "Geological Engineering", credits: 2, graded: true, category: "Department Core" },
                { code: "CVP2401", name: "Geological Engineering Lab", credits: 1, graded: true, category: "Lab" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem6: [
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem7: [
                { code: "CVL3704", name: "Design of Irrigation and Hydraulic Structures", credits: 3, graded: true, category: "Department Core" },
                { code: "CVP3704", name: "Design of Irrigation and Hydraulic Structures Laboratory", credits: 1, graded: true, category: "Lab" },
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem8: [
                { code: "DE6", name: "Department Elective 6", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "CVL1005", name: "Disaster Mitigation and Management", credits: 3, graded: true, category: "Department Core" },
                { code: "OC1", name: "Open Category Course 1", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "OC2", name: "Open Category Course 2", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ]
        }
    },
    biotech: {
        label: "Biochemical Engineering and Biotechnology",
        semesters: {
            sem1: [
                { code: "ELL1000", name: "Introduction to Electrical Engineering", credits: 4, graded: true, category: "Institute Core" },
                { code: "MEP1000", name: "Engineering Visualization", credits: 2, graded: true, category: "Institute Core" },
                { code: "MEP1001", name: "Manufacturing for Product Innovation", credits: 2, graded: true, category: "Institute Core" },
                { code: "CML1001", name: "Structural Insights into Atoms and Molecules", credits: 3, graded: true, category: "Institute Core" },
                { code: "CMP1000", name: "Chemistry Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1001", name: "Mathematics I Calculus", credits: 4, graded: true, category: "Institute Core" },
                { code: "DAN1100", name: "Life Skills 1", credits: 0.75, graded: false, category: "Non-Graded" }
            ],
            sem2: [
                { code: "COL1000", name: "Introduction to Programming", credits: 4, graded: true, category: "Institute Core" },
                { code: "PYL1001", name: "Introduction to Electrodynamics", credits: 3, graded: true, category: "Institute Core" },
                { code: "PYP1000", name: "Physics Laboratory", credits: 2, graded: true, category: "Lab" },
                { code: "MTL1002", name: "Mathematics II Linear Algebra and Differential Equations", credits: 4, graded: true, category: "Institute Core" },
                { code: "BBL1201", name: "Mass and Energy Balances in Biochemical Engineering", credits: 4, graded: true, category: "Department Core" }
            ],
            sem3: [
                { code: "MTL2008", name: "Introduction to Probability and Statistics", credits: 4, graded: true, category: "Institute Core" },
                { code: "SBL1100", name: "Biology for Engineers: Microbes in Health and Disease", credits: 2, graded: true, category: "Institute Core" },
                { code: "BBL2102", name: "Microbiology", credits: 4, graded: true, category: "Department Core" },
                { code: "BBL2103", name: "Fluid Mechanics for Biochemical Engineers", credits: 4, graded: true, category: "Department Core" },
                { code: "MEL1140", name: "Thermodynamics", credits: 4, graded: true, category: "Institute Core" },
                { code: "SBP1100", name: "Experimental Biology for Engineers", credits: 1, graded: true, category: "Lab" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem4: [
                { code: "BBL2204", name: "Heat and Mass Transfer", credits: 4, graded: true, category: "Department Core" },
                { code: "BBL2205", name: "Biochemical Thermodynamics", credits: 3, graded: true, category: "Department Core" },
                { code: "BBL2206", name: "Enzyme Science and Engineering", credits: 4, graded: true, category: "Department Core" },
                { code: "BBL2207", name: "Molecular Biology and Genetics", credits: 4.5, graded: true, category: "Department Core" },
                { code: "BBL2208", name: "Biochemistry", credits: 4, graded: true, category: "Department Core" },
                { code: "DAN2100", name: "Life Skills 2", credits: 0.75, graded: false, category: "Non-Graded" },
                { code: "BS", name: "Basic Science Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem5: [
                { code: "BBL3213", name: "Bioreaction Engineering", credits: 4.5, graded: true, category: "Department Core" },
                { code: "BBL3214", name: "Bioseparation Engineering", credits: 4.5, graded: true, category: "Department Core" },
                { code: "BBL3111", name: "Recombinant DNA Technology", credits: 3.5, graded: true, category: "Department Core" },
                { code: "BBL3112", name: "Systems Biology", credits: 3, graded: true, category: "Department Core" },
                { code: "BBL3110", name: "Bioinformatics", credits: 4, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true }
            ],
            sem6: [
                { code: "DE1", name: "Department Elective 1", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE2", name: "Department Elective 2", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true },
                { code: "BBP4053", name: "Capstone Project", credits: 3, graded: true, category: "Project", editable: true, custom: true }
            ],
            sem7: [
                { code: "BBL4115", name: "Biotech Product Development", credits: 2, graded: true, category: "Department Core" },
                { code: "BBL4116", name: "Bioprocess Plant Design", credits: 4, graded: true, category: "Department Core" },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE3", name: "Department Elective 3", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ],
            sem8: [
                { code: "GE", name: "General Engineering Basket", credits: 4, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "HS", name: "Humanities and Social Sciences Basket", credits: 3, graded: true, category: "Institute Basket", editable: true, custom: true },
                { code: "DE4", name: "Department Elective 4", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "DE5", name: "Department Elective 5", credits: 3, graded: true, category: "Department Elective", editable: true, custom: true },
                { code: "OC", name: "Open Category Course", credits: 3, graded: true, category: "Open Course", editable: true, custom: true, openCourse: true }
            ]
        }
    }
};

const gradeOptions = [
    { label: "Choose", value: "" },
    { label: "A", value: "10" },
    { label: "A-", value: "9" },
    { label: "B", value: "8" },
    { label: "B-", value: "7" },
    { label: "C", value: "6" },
    { label: "C-", value: "5" },
    { label: "D", value: "4" },
    { label: "F", value: "0" }
];

let currentSubjects = [];
let subjectIdCounter = 0;

function initializeCgpaPage() {
    applyStoredDepartmentSelection();
    setResultState("Ready when you are", "Your SGPA estimate will appear here after you enter grades.", "neutral");
    ["previousCGPA", "previousCredits"].forEach(function (id) {
        const field = document.getElementById(id);
        if (field) {
            field.addEventListener("input", updateCGPADisplay);
        }
    });
    renderSubjects();
    updateDashboard();
    updateCGPADisplay();
}

function applyStoredDepartmentSelection() {
    let profile = {};

    try {
        profile = JSON.parse(localStorage.getItem("studentProfile") || "{}");
    } catch (error) {
        profile = {};
    }

    const branchField = document.getElementById("branch");
    if (!branchField) {
        return;
    }

    const departmentKey = normalizeStoredDepartment(profile.departmentKey || profile.branch);
    if (departmentKey && branchField.querySelector('option[value="' + departmentKey + '"]')) {
        branchField.value = departmentKey;
    }
}

function normalizeStoredDepartment(value) {
    const raw = String(value || "").trim().toLowerCase();
    const aliasMap = {
        "computer science": "cse",
        "computer science and engineering": "cse",
        "textile engineering": "textile",
        "textile and fibre engineering": "textile",
        "materials engineering": "materials",
        "materials science and engineering": "materials",
        "mathematics and computing": "mnc",
        "mathematics & computing": "mnc",
        "engineering physics": "ep",
        "production and industrial engineering": "pie",
        "mechanical engineering": "mechanical",
        "energy engineering": "energy",
        "engineering & computational mechanics": "ecm",
        "engineering and computational mechanics": "ecm",
        "electrical engineering": "electrical",
        "electrical engineering (power and automation)": "ee_power",
        "chemical engineering": "chemical",
        "civil engineering": "civil",
        "design": "design",
        "biochemical engineering and biotechnology": "biotech"
    };

    return aliasMap[raw] || raw;
}

function loadSubjects() {
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;

    if (!branch || !semester) {
        setResultState("Selection needed", "Choose both branch and semester to load the calculator.", "warning");
        currentSubjects = [];
        renderSubjects();
        updateDashboard();
        updateCGPADisplay();
        return;
    }

    currentSubjects = getSemesterTemplate(branch, semester).map(function (subject) {
        return {
            id: createSubjectId(),
            code: subject.code || "",
            name: subject.name || "",
            credits: subject.credits,
            graded: subject.graded !== false,
            category: subject.category || "Custom",
            editable: Boolean(subject.editable),
            openCourse: Boolean(subject.openCourse),
            custom: Boolean(subject.custom),
            grade: ""
        };
    });

    renderSubjects();
    updateDashboard();
    updateCGPADisplay();
    setResultState("Semester loaded", "Add grades and extra subjects to build your semester accurately.", "neutral");
}

function getSemesterTemplate(branch, semester) {
    const catalog = courseCatalog[branch] && courseCatalog[branch].semesters[semester];
    if (catalog && catalog.length) {
        return catalog.slice();
    }

    const semesterNumber = parseInt(semester.replace("sem", ""), 10) || 0;
    const template = [];

    if (semesterNumber >= 3) {
        template.push({
            code: "",
            name: "",
            credits: 4,
            graded: true,
            category: "Department Core",
            editable: true,
            custom: true
        });
        template.push({
            code: "",
            name: "",
            credits: 3,
            graded: true,
            category: "Lab / Project",
            editable: true,
            custom: true
        });
    }

    if (semesterNumber >= 5) {
        template.push({
            code: "OC-1",
            name: "Open Course",
            credits: 3,
            graded: true,
            category: "Open Course",
            editable: true,
            custom: true,
            openCourse: true
        });
        template.push({
            code: "NG-1",
            name: "Language Skill / Life Skill",
            credits: 1,
            graded: false,
            category: "Non-Graded",
            editable: true,
            custom: true
        });
    }

    return template;
}

function addCustomSubject() {
    currentSubjects.push({
        id: createSubjectId(),
        code: "",
        name: "",
        credits: 3,
        graded: true,
        category: "Custom Subject",
        editable: true,
        custom: true,
        openCourse: false,
        grade: ""
    });

    renderSubjects();
    updateDashboard();
}

function addOpenCourse() {
    currentSubjects.push({
        id: createSubjectId(),
        code: "OC",
        name: "Open Course",
        credits: 3,
        graded: true,
        category: "Open Course",
        editable: true,
        custom: true,
        openCourse: true,
        grade: ""
    });

    renderSubjects();
    updateDashboard();
}

function renderSubjects() {
    const subjectsDiv = document.getElementById("subjects");

    if (!currentSubjects.length) {
        subjectsDiv.innerHTML = `
            <div class="empty-state">
                <h3>No semester loaded</h3>
                <p>Select a branch and semester to begin entering grades.</p>
            </div>
        `;
        return;
    }

    const groupedSubjects = currentSubjects.reduce(function (groups, subject) {
        const groupName = subject.category || "Other";
        if (!groups[groupName]) {
            groups[groupName] = [];
        }
        groups[groupName].push(subject);
        return groups;
    }, {});

    subjectsDiv.innerHTML = Object.keys(groupedSubjects).map(function (groupName) {
        return `
            <section class="subject-group">
                <div class="subject-group-head">
                    <h3>${escapeHtml(groupName)}</h3>
                    <span>${groupedSubjects[groupName].length} item${groupedSubjects[groupName].length === 1 ? "" : "s"}</span>
                </div>
                <div class="subjects-grid">
                    ${groupedSubjects[groupName].map(renderSubjectCard).join("")}
                </div>
            </section>
        `;
    }).join("");

    currentSubjects.forEach(function (subject) {
        syncSubjectToDom(subject.id);
    });
}

function renderSubjectCard(subject, index) {
    const gradeMarkup = subject.graded
        ? `<label class="grade-field">
                <span>Select Grade</span>
                <select class="grade" data-subject-id="${subject.id}" onchange="handleGradeChange(${subject.id}, this.value)">
                    ${gradeOptions.map(function (option) {
                        return `<option value="${option.value}" ${String(subject.grade) === option.value ? "selected" : ""}>${option.label}</option>`;
                    }).join("")}
                </select>
           </label>`
        : `<div class="pass-badge">Non-Graded / Pass Style</div>`;

    const editFields = subject.editable
        ? `
            <div class="custom-fields">
                <label class="field compact-field">
                    <span>Subject</span>
                    <input
                        type="text"
                        value="${escapeAttribute(subject.name)}"
                        data-subject-id="${subject.id}"
                        data-field="name"
                        placeholder="Subject name"
                        oninput="handleSubjectInput(${subject.id}, 'name', this.value)"
                    >
                </label>
                <div class="compact-grid">
                    <label class="field compact-field">
                        <span>Code</span>
                        <input
                            type="text"
                            value="${escapeAttribute(subject.code)}"
                            data-subject-id="${subject.id}"
                            data-field="code"
                            placeholder="e.g. TXL2101"
                            oninput="handleSubjectInput(${subject.id}, 'code', this.value)"
                        >
                    </label>
                    <label class="field compact-field">
                        <span>Credits</span>
                        <input
                            type="number"
                            value="${escapeAttribute(subject.credits)}"
                            min="0"
                            step="0.25"
                            data-subject-id="${subject.id}"
                            data-field="credits"
                            oninput="handleSubjectInput(${subject.id}, 'credits', this.value)"
                        >
                    </label>
                </div>
                <label class="toggle-field">
                    <input
                        type="checkbox"
                        ${subject.graded ? "" : "checked"}
                        onchange="toggleNonGraded(${subject.id}, this.checked)"
                    >
                    <span>Non-Graded course</span>
                </label>
            </div>
        `
        : `
            <h3>${escapeHtml(subject.code ? subject.code + " " + subject.name : subject.name)}</h3>
            <p>${subject.graded ? "Counts toward CGPA" : "Non-graded course such as Life Skills / Language Skills"}</p>
        `;

    const topTitle = subject.editable
        ? `<p>${subject.openCourse ? "Editable open course slot" : "Editable subject row"}</p>`
        : `<p>${subject.graded ? "Counts toward CGPA" : "Non-graded course"}</p>`;

    return `
        <article class="subject-card ${subject.editable ? "subject-card-editable" : ""}" data-subject-id="${subject.id}">
            <div class="subject-topline">
                <span class="subject-index">${String(index + 1).padStart(2, "0")}</span>
                <span class="subject-credit-badge">${formatCredits(subject.credits)} credits</span>
            </div>

            ${subject.editable ? `
                <div class="subject-title-block">
                    <h3>${escapeHtml(subject.category)}</h3>
                    ${topTitle}
                </div>
                ${editFields}
            ` : `
                <h3>${escapeHtml(subject.code ? subject.code + " " + subject.name : subject.name)}</h3>
                ${topTitle}
            `}

            <div class="subject-actions">
                ${gradeMarkup}
            </div>

            ${subject.editable ? `
                <div class="subject-footer">
                    <button type="button" class="remove-subject-btn" onclick="removeSubject(${subject.id})">Remove</button>
                </div>
            ` : ""}
        </article>
    `;
}

function syncSubjectToDom(subjectId) {
    const subject = currentSubjects.find(function (item) {
        return item.id === subjectId;
    });

    if (!subject) {
        return;
    }

    const card = document.querySelector('.subject-card[data-subject-id="' + subjectId + '"]');
    if (!card) {
        return;
    }

    const badge = card.querySelector(".subject-credit-badge");
    if (badge) {
        badge.textContent = formatCredits(subject.credits) + " credits";
    }
}

function handleSubjectInput(subjectId, field, value) {
    const subject = currentSubjects.find(function (item) {
        return item.id === subjectId;
    });

    if (!subject) {
        return;
    }

    if (field === "credits") {
        const parsedCredits = parseFloat(value);
        subject.credits = Number.isNaN(parsedCredits) ? 0 : parsedCredits;
    } else {
        subject[field] = value;
        if (field === "name" && looksNonGraded(value) && subject.graded) {
            subject.graded = false;
            renderSubjects();
            updateDashboard();
            setResultState("Non-graded detected", "This looks like a Life Skills or Language Skills course, so it was marked non-graded. You can change it anytime.", "neutral");
            return;
        }
    }

    syncSubjectToDom(subjectId);
    updateDashboard();
    updateCGPADisplay();
}

function handleGradeChange(subjectId, value) {
    const subject = currentSubjects.find(function (item) {
        return item.id === subjectId;
    });

    if (!subject) {
        return;
    }

    subject.grade = value;
    updateDashboard();
    updateCGPADisplay();
}

function toggleNonGraded(subjectId, checked) {
    const subject = currentSubjects.find(function (item) {
        return item.id === subjectId;
    });

    if (!subject) {
        return;
    }

    subject.graded = !checked;
    if (!subject.graded) {
        subject.grade = "";
        if (!subject.category || subject.category === "Custom Subject" || subject.category === "Open Course") {
            subject.category = "Non-Graded";
        }
    } else if (subject.category === "Non-Graded") {
        subject.category = subject.openCourse ? "Open Course" : "Custom Subject";
    }

    renderSubjects();
    updateDashboard();
    updateCGPADisplay();
}

function removeSubject(subjectId) {
    currentSubjects = currentSubjects.filter(function (item) {
        return item.id !== subjectId;
    });

    renderSubjects();
    updateDashboard();
    updateCGPADisplay();
}

function collectStats() {
    let totalCourses = currentSubjects.length;
    let gradedCourses = 0;
    let completedGrades = 0;
    let totalCredits = 0;
    let completedCredits = 0;
    let totalPoints = 0;

    currentSubjects.forEach(function (subject) {
        const credits = parseFloat(subject.credits) || 0;
        if (!subject.graded) {
            return;
        }

        gradedCourses += 1;
        totalCredits += credits;

        const gradeValue = parseFloat(subject.grade);
        if (!Number.isNaN(gradeValue)) {
            completedGrades += 1;
            completedCredits += credits;
            totalPoints += credits * gradeValue;
        }
    });

    return {
        totalCourses: totalCourses,
        gradedCourses: gradedCourses,
        completedGrades: completedGrades,
        totalCredits: totalCredits,
        completedCredits: completedCredits,
        totalPoints: totalPoints,
        cgpa: completedCredits > 0 ? totalPoints / completedCredits : null,
        progress: gradedCourses > 0 ? Math.round((completedGrades / gradedCourses) * 100) : 0
    };
}

function calculateCGPA() {
    const stats = collectStats();

    if (!stats.totalCourses) {
        setResultState("No data yet", "Load your subjects first to calculate SGPA.", "neutral");
        return;
    }

    if (stats.completedGrades < stats.gradedCourses) {
        setResultState("Almost there", "Please fill all graded subjects before final SGPA calculation.", "warning");
        return;
    }

    if (stats.cgpa === null) {
        setResultState("Nothing graded", "This semester only has non-graded subjects right now.", "warning");
        return;
    }

    updateDashboard(true);
    updateCGPADisplay();
    setResultState("SGPA calculated", "Your estimated SGPA is " + stats.cgpa.toFixed(2) + " for this semester.", "success");
}

function updateDashboard(forceComplete) {
    const stats = collectStats();

    document.getElementById("statCredits").innerText = stats.totalCredits ? formatCredits(stats.totalCredits) : "0";
    document.getElementById("statGraded").innerText = stats.gradedCourses;
    document.getElementById("statCompleted").innerText = stats.completedGrades;
    document.getElementById("statCgpa").innerText = stats.cgpa !== null ? stats.cgpa.toFixed(2) : "--";
    document.getElementById("heroCgpaValue").innerText = stats.cgpa !== null ? stats.cgpa.toFixed(2) : "--";
    document.getElementById("progressText").innerText = stats.progress + "%";
    document.getElementById("progressFill").style.width = stats.progress + "%";

    if (!stats.totalCourses) {
        document.getElementById("heroCgpaLabel").innerText = "Load subjects to start";
        return;
    }

    if (stats.completedGrades === 0) {
        document.getElementById("heroCgpaLabel").innerText = "Add grades for instant prediction";
        return;
    }

    if (forceComplete || stats.completedGrades === stats.gradedCourses) {
        document.getElementById("heroCgpaLabel").innerText = "Full semester estimate ready";
    } else {
        document.getElementById("heroCgpaLabel").innerText = stats.completedGrades + " of " + stats.gradedCourses + " grades entered";
    }
}

function updateCGPADisplay() {
    const stats = collectStats();
    const previousCGPA = parseFloat(document.getElementById("previousCGPA").value);
    const previousCredits = parseFloat(document.getElementById("previousCredits").value);
    const projectedCGPA = getProjectedCgpa(stats, previousCGPA, previousCredits);

    document.getElementById("displayCumCGPA").innerText = !Number.isNaN(previousCGPA) ? previousCGPA.toFixed(2) : "--";
    document.getElementById("projectedCGPA").innerText = projectedCGPA !== null ? projectedCGPA.toFixed(2) : "--";
}

function addCGPARecord() {
    const previousCGPA = parseFloat(document.getElementById("previousCGPA").value);
    const previousCredits = parseFloat(document.getElementById("previousCredits").value);

    if (Number.isNaN(previousCGPA) || previousCGPA < 0 || previousCGPA > 10) {
        alert("Please enter a valid previous CGPA between 0 and 10.");
        return;
    }

    const history = JSON.parse(localStorage.getItem("cgpaHistory") || "[]");
    history.push({
        branch: document.getElementById("branch").value || "unknown",
        semester: document.getElementById("semester").value || "current",
        cgpa: previousCGPA,
        credits: Number.isNaN(previousCredits) ? null : previousCredits,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem("cgpaHistory", JSON.stringify(history));
    setResultState("Baseline saved", "Your previous CGPA baseline was saved on this browser.", "success");
}

function printCgpaReport() {
    if (!currentSubjects.length) {
        alert("Load your semester first before printing.");
        return;
    }

    const report = buildGradeSheetDocument();
    const printWindow = window.open("", "_blank", "width=1000,height=1400");

    if (!printWindow) {
        alert("Pop-up blocked. Please allow pop-ups and try again.");
        return;
    }

    printWindow.document.open();
    printWindow.document.write(report.documentHtml);
    printWindow.document.close();
    printWindow.focus();
    printWindow.onload = function () {
        printWindow.print();
    };
}

function downloadResultImage() {
    if (!currentSubjects.length) {
        alert("Load your semester first before downloading the image.");
        return;
    }

    const report = buildGradeSheetDocument();
    const svg = buildGradeSheetSvgReport(report);

    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const blobUrl = URL.createObjectURL(svgBlob);
    const image = new Image();

    image.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = report.imageWidth;
        canvas.height = report.imageHeight;
        const context = canvas.getContext("2d");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0);
        URL.revokeObjectURL(blobUrl);

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "iitd-grade-sheet.png";
        link.click();
    };

    image.src = blobUrl;
}

function setResultState(title, message, tone) {
    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("result");
    const insightCard = resultText.closest(".insight-card");

    resultTitle.innerText = title;
    resultText.innerText = message;

    insightCard.classList.remove("tone-neutral", "tone-warning", "tone-success");
    insightCard.classList.add("tone-" + tone);
}

function looksNonGraded(name) {
    const normalized = String(name || "").toLowerCase();
    return normalized.indexOf("life skill") !== -1 || normalized.indexOf("language skill") !== -1;
}

function getSelectedText(id) {
    const element = document.getElementById(id);
    if (!element) {
        return "";
    }
    const selectedOption = element.options[element.selectedIndex];
    return selectedOption ? selectedOption.text : "";
}

function createSubjectId() {
    subjectIdCounter += 1;
    return subjectIdCounter;
}

function formatCredits(value) {
    const numeric = parseFloat(value) || 0;
    return Number.isInteger(numeric) ? String(numeric) : numeric.toFixed(2);
}

function mapGradeValueToLabel(value) {
    const match = gradeOptions.find(function (option) {
        return option.value === String(value);
    });
    return match ? match.label : "-";
}

function trimText(text, limit) {
    return text.length > limit ? text.slice(0, limit - 3) + "..." : text;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

function escapeXml(value) {
    return escapeHtml(value);
}

function getProjectedCgpa(stats, previousCGPA, previousCredits) {
    if (!stats || stats.cgpa === null) {
        return null;
    }

    if (!Number.isNaN(previousCGPA) && !Number.isNaN(previousCredits) && previousCredits > 0) {
        const totalCredits = previousCredits + stats.totalCredits;
        if (totalCredits <= 0) {
            return null;
        }

        return ((previousCGPA * previousCredits) + (stats.cgpa * stats.totalCredits)) / totalCredits;
    }

    return stats.cgpa;
}

function buildGradeSheetSvgReport(report) {
    const pageMargin = 30;
    const columnWidths = [62, 132, 80, 126, 300, 92, 72, 120, 70];
    const columnStarts = [];
    let runningLeft = pageMargin;

    columnWidths.forEach(function (width) {
        columnStarts.push(runningLeft);
        runningLeft += width;
    });

    const headers = ["S.No.", "Academic Session", "Semester", "Course ID", "Course Name", "Course Type", "Grade", "Status", "Credits"];
    const tableWidth = columnWidths.reduce(function (sum, width) { return sum + width; }, 0);
    const rowHeight = 38;
    const tableTop = 390;
    const summaryTop = tableTop + rowHeight + (report.reportRows.length * rowHeight) + 24;
    const summaryGap = 10;
    const summaryBoxHeight = 60;
    const rowOneWidths = [280, 280, 280];
    const rowTwoWidths = [280, 280];
    const summaryLabels = [
        ["Semester SGPA", report.sgpaLabel],
        ["Cumulative CGPA", report.cgpaLabel],
        ["Semester Credits", report.totalCreditsLabel],
        ["Previous Credits", report.previousCreditsLabel],
        ["Total Credits", report.cumulativeCreditsLabel]
    ];

    const headerRects = headers.map(function (header, index) {
        return `
            <rect x="${columnStarts[index]}" y="${tableTop}" width="${columnWidths[index]}" height="${rowHeight}" fill="#f8fafc" stroke="#cbd5e1" />
            <text x="${columnStarts[index] + 8}" y="${tableTop + 24}" font-size="14" font-weight="700" fill="#1f2937">${escapeXml(header)}</text>
        `;
    }).join("");

    const bodyRows = report.reportRows.map(function (row, rowIndex) {
        const y = tableTop + rowHeight + (rowIndex * rowHeight);
        const cells = [
            String(row.serial),
            row.session,
            String(row.semester),
            row.code,
            trimText(row.name, 34),
            row.type,
            row.grade,
            row.status || "-",
            row.credits
        ];

        return cells.map(function (cell, index) {
            const alignRight = index === 8;
            const textX = alignRight ? columnStarts[index] + columnWidths[index] - 8 : columnStarts[index] + 8;
            const anchor = alignRight ? "end" : "start";
            return `
                <rect x="${columnStarts[index]}" y="${y}" width="${columnWidths[index]}" height="${rowHeight}" fill="#ffffff" stroke="#d7dee8" />
                <text x="${textX}" y="${y + 24}" font-size="12.5" text-anchor="${anchor}" fill="#111827">${escapeXml(cell)}</text>
            `;
        }).join("");
    }).join("");

    const summaryBoxes = summaryLabels.map(function (item, index) {
        const isSecondRow = index >= 3;
        const x = isSecondRow
            ? pageMargin + ((index - 3) * (rowTwoWidths[0] + summaryGap))
            : pageMargin + (index * (rowOneWidths[0] + summaryGap));
        const y = isSecondRow ? summaryTop + summaryBoxHeight + summaryGap : summaryTop;
        const width = isSecondRow ? rowTwoWidths[index - 3] : rowOneWidths[index];
        return `
            <rect x="${x}" y="${y}" width="${width}" height="${summaryBoxHeight}" fill="#ffffff" stroke="#cbd5e1" />
            <text x="${x + 12}" y="${y + 21}" font-size="12" fill="#475569">${escapeXml(item[0])}</text>
            <text x="${x + 12}" y="${y + 46}" font-size="20" font-weight="700" fill="#0f172a">${escapeXml(item[1])}</text>
        `;
    }).join("");

    const watermarkText = "Made by student on " + report.generatedLabel;
    const watermarks = [
        { x: 250, y: 535, rotate: -26 },
        { x: 560, y: 450, rotate: -26 },
        { x: 870, y: 365, rotate: -26 }
    ].map(function (mark) {
        return `
            <text x="${mark.x}" y="${mark.y}" transform="rotate(${mark.rotate} ${mark.x} ${mark.y})" font-size="32" font-weight="700" fill="rgba(15,23,42,0.15)">
                ${escapeXml(watermarkText)}
            </text>
        `;
    }).join("");

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${report.imageWidth}" height="${report.imageHeight}" viewBox="0 0 ${report.imageWidth} ${report.imageHeight}">
            <rect width="100%" height="100%" fill="#ffffff" />
            ${watermarks}
            <text x="${pageMargin}" y="34" font-size="13" fill="#374151">${escapeXml(report.generatedLabel)}</text>
            <text x="${report.imageWidth / 2}" y="34" text-anchor="middle" font-size="13" fill="#111827">IIT Delhi Grade Sheet</text>
            <text x="${pageMargin}" y="82" font-size="22" font-weight="700" fill="#111827">IIT DELHI</text>
            <text x="${pageMargin}" y="144" font-size="60" fill="#111827">IIT Delhi</text>
            <text x="${report.imageWidth - 188}" y="92" font-size="24" fill="#111827">IIT Delhi Grade Sheet</text>
            <image href="${escapeAttribute(report.logoUrl)}" x="${report.imageWidth - 142}" y="112" width="82" height="82" preserveAspectRatio="xMidYMid meet" />
            <rect x="${pageMargin}" y="200" width="${report.imageWidth - (pageMargin * 2)}" height="114" fill="#ffffff" stroke="#111827" />
            <text x="${pageMargin + 20}" y="238" font-size="15" fill="#111827">Entry No:</text>
            <text x="${pageMargin + 102}" y="238" font-size="15" font-weight="700" fill="#111827">${escapeXml(report.profile.entryNo)}</text>
            <text x="${pageMargin + 450}" y="238" font-size="15" fill="#111827">Student</text>
            <text x="${pageMargin + 450}" y="259" font-size="15" fill="#111827">Name:</text>
            <text x="${pageMargin + 536}" y="248" font-size="15" font-weight="700" fill="#111827">${escapeXml(trimText(report.profile.fullName.toUpperCase(), 24))}</text>
            <text x="${pageMargin + 20}" y="292" font-size="15" fill="#111827">Programme:</text>
            <text x="${pageMargin + 102}" y="292" font-size="15" font-weight="700" fill="#111827">BTECH</text>
            <text x="${pageMargin + 450}" y="292" font-size="15" fill="#111827">Department:</text>
            <text x="${pageMargin + 536}" y="292" font-size="15" font-weight="700" fill="#111827">${escapeXml(trimText(report.branchLabel, 24))}</text>
            <text x="${pageMargin}" y="342" font-size="16" font-weight="700" fill="#111827">Disclaimer:</text>
            <text x="${pageMargin}" y="366" font-size="13.5" fill="#111827">1. The grade sheet below is based on data entered in this portal by the student.</text>
            <text x="${pageMargin}" y="384" font-size="13.5" fill="#111827">2. For CGPA/SGPA calculation formula, please refer to the official course of study.</text>
            ${headerRects}
            ${bodyRows}
            ${summaryBoxes}
            <text x="${report.imageWidth - pageMargin}" y="${summaryTop + summaryBoxHeight + summaryGap + 82}" text-anchor="end" font-size="16" fill="#111827">1/1</text>
        </svg>
    `;
}

function buildGradeSheetDocument() {
    const stats = collectStats();
    const profile = getReportProfile();
    const branchLabel = getSelectedText("branch") || profile.branch || "Department not selected";
    const previousCGPA = parseFloat(document.getElementById("previousCGPA").value);
    const previousCredits = parseFloat(document.getElementById("previousCredits").value);
    const projectedCGPA = getProjectedCgpa(stats, previousCGPA, previousCredits);
    const semesterNumber = parseInt((document.getElementById("semester").value || "").replace("sem", ""), 10) || "";
    const academicSession = getAcademicSessionLabel();
    const generatedAt = new Date();
    const generatedLabel = generatedAt.toLocaleString("en-IN", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
    const reportRows = currentSubjects.map(function (subject, index) {
        return {
            serial: index + 1,
            session: academicSession,
            semester: semesterNumber || "-",
            code: subject.code || "--",
            name: subject.name || "Custom Subject",
            type: getCourseTypeLabel(subject, branchLabel),
            grade: getReportGrade(subject),
            status: getReportStatus(subject),
            credits: formatCredits(subject.credits)
        };
    });
    const logoUrl = new URL("../assets/images/iitdlogo.png", window.location.href).href;

    const sgpaLabel = stats.cgpa !== null ? stats.cgpa.toFixed(3) : "--";
    const cgpaLabel = projectedCGPA !== null ? projectedCGPA.toFixed(3) : "--";
    const totalCreditsLabel = formatCredits(stats.totalCredits);
    const previousCreditsLabel = !Number.isNaN(previousCredits) && previousCredits > 0 ? formatCredits(previousCredits) : "--";
    const cumulativeCreditsLabel = !Number.isNaN(previousCredits) && previousCredits > 0 ? formatCredits(previousCredits + stats.totalCredits) : totalCreditsLabel;
    const disclaimerMarkup = [
        "The grade sheet below is based on data entered in this portal by the student.",
        "For CGPA/SGPA calculation formula, please refer to the official course of study."
    ].map(function (line, index) {
        return `<div>${index + 1}. ${escapeHtml(line)}</div>`;
    }).join("");

    const tableRowsMarkup = reportRows.map(function (row) {
        return `
            <tr>
                <td>${row.serial}</td>
                <td>${escapeHtml(row.session)}</td>
                <td>${escapeHtml(String(row.semester))}</td>
                <td>${escapeHtml(row.code)}</td>
                <td class="course-name-cell">${escapeHtml(row.name)}</td>
                <td>${escapeHtml(row.type)}</td>
                <td>${escapeHtml(row.grade)}</td>
                <td>${escapeHtml(row.status)}</td>
                <td>${escapeHtml(row.credits)}</td>
            </tr>
        `;
    }).join("");

    const sheetMarkup = `
        <div class="iit-sheet">
            <div class="iit-sheet-watermark">Made by student on ${escapeHtml(generatedLabel)}</div>
            <div class="iit-sheet-topline">
                <div>IIT DELHI</div>
                <div>IIT Delhi Grade Sheet</div>
            </div>

            <div class="iit-sheet-heading">
                <div class="iit-sheet-title">IIT Delhi</div>
                <img class="iit-sheet-logo" src="${escapeAttribute(logoUrl)}" alt="IIT Delhi Logo" />
            </div>

            <div class="iit-sheet-profile">
                <div class="profile-item"><span>Entry No:</span><strong>${escapeHtml(profile.entryNo)}</strong></div>
                <div class="profile-item"><span>Student Name:</span><strong>${escapeHtml(profile.fullName.toUpperCase())}</strong></div>
                <div class="profile-item"><span>Programme:</span><strong>BTECH</strong></div>
                <div class="profile-item"><span>Department:</span><strong>${escapeHtml(branchLabel)}</strong></div>
            </div>

            <div class="iit-sheet-disclaimer">
                <strong>Disclaimer:</strong>
                ${disclaimerMarkup}
            </div>

            <table class="iit-grade-table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Academic Session</th>
                        <th>Semester</th>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Course Type</th>
                        <th>Grade</th>
                        <th>Status</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRowsMarkup}
                </tbody>
            </table>

            <div class="iit-sheet-summary">
                <div class="summary-box">
                    <span>Semester SGPA</span>
                    <strong>${escapeHtml(sgpaLabel)}</strong>
                </div>
                <div class="summary-box">
                    <span>Cumulative CGPA</span>
                    <strong>${escapeHtml(cgpaLabel)}</strong>
                </div>
                <div class="summary-box">
                    <span>Semester Earned Credits</span>
                    <strong>${escapeHtml(totalCreditsLabel)}</strong>
                </div>
                <div class="summary-box">
                    <span>Previous Earned Credits</span>
                    <strong>${escapeHtml(previousCreditsLabel)}</strong>
                </div>
                <div class="summary-box">
                    <span>Total Earned Credits</span>
                    <strong>${escapeHtml(cumulativeCreditsLabel)}</strong>
                </div>
            </div>

            <div class="iit-sheet-footer">1/1</div>
        </div>
    `;

    const styles = `
        <style>
            @page {
                size: A4 portrait;
                margin: 14mm;
            }

            body {
                margin: 0;
                background: #ffffff;
                color: #000000;
                font-family: Arial, Helvetica, sans-serif;
            }

            .iit-sheet {
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
                padding: 10px 0 18px;
                color: #000000;
                background: #ffffff;
                font-size: 13px;
                line-height: 1.45;
                position: relative;
                box-sizing: border-box;
                overflow: hidden;
            }

            .iit-sheet-watermark {
                position: absolute;
                top: 44%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(-24deg);
                font-size: 34px;
                font-weight: 700;
                letter-spacing: 0.06em;
                color: rgba(15, 23, 42, 0.14);
                white-space: nowrap;
                pointer-events: none;
                user-select: none;
                z-index: 0;
            }

            .iit-sheet-topline {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 12px;
                margin-bottom: 8px;
                position: relative;
                z-index: 1;
            }

            .iit-sheet-topline div:first-child {
                font-weight: 700;
            }

            .iit-sheet-topline div:last-child {
                text-align: right;
            }

            .iit-sheet-heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 14px;
                position: relative;
                z-index: 1;
            }

            .iit-sheet-title {
                font-size: 26px;
                font-weight: 400;
            }

            .iit-sheet-logo {
                width: 58px;
                height: 58px;
                object-fit: contain;
            }

            .iit-sheet-profile {
                display: grid;
                grid-template-columns: 1fr 1.3fr;
                gap: 10px 32px;
                border: 1px solid #222222;
                padding: 10px 16px;
                margin-bottom: 18px;
                position: relative;
                z-index: 1;
            }

            .profile-item {
                display: grid;
                grid-template-columns: 80px 1fr;
                gap: 8px;
                align-items: start;
                font-size: 14px;
            }

            .profile-item strong {
                font-weight: 700;
            }

            .iit-sheet-disclaimer {
                margin: 0 0 14px;
                font-size: 13px;
                position: relative;
                z-index: 1;
            }

            .iit-grade-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 11px;
                table-layout: fixed;
                position: relative;
                z-index: 1;
            }

            .iit-grade-table th,
            .iit-grade-table td {
                border: 1px solid #cfcfcf;
                padding: 5px 4px;
                text-align: left;
                vertical-align: top;
                word-break: break-word;
            }

            .iit-grade-table th {
                font-weight: 700;
                background: #ffffff;
            }

            .iit-grade-table td:nth-child(1),
            .iit-grade-table td:nth-child(3),
            .iit-grade-table td:nth-child(6),
            .iit-grade-table td:nth-child(7),
            .iit-grade-table td:nth-child(8),
            .iit-grade-table td:nth-child(9) {
                white-space: nowrap;
            }

            .course-name-cell {
                min-width: 0;
                width: 100%;
            }

            .summary-row td {
                font-size: 11px;
                font-weight: 700;
                background: #ffffff;
            }

            .iit-sheet-footer {
                text-align: right;
                font-size: 11px;
                margin-top: 10px;
                position: relative;
                z-index: 1;
            }

            .iit-sheet-summary {
                display: grid;
                grid-template-columns: repeat(5, minmax(0, 1fr));
                gap: 8px;
                margin-top: 12px;
                position: relative;
                z-index: 1;
            }

            .summary-box {
                border: 1px solid #cfcfcf;
                padding: 6px 8px;
                min-width: 0;
            }

            .summary-box span {
                display: block;
                font-size: 10px;
                color: #444444;
                margin-bottom: 3px;
            }

            .summary-box strong {
                display: block;
                font-size: 12px;
                word-break: break-word;
            }

            .iit-grade-table th:nth-child(1),
            .iit-grade-table td:nth-child(1) { width: 5%; }
            .iit-grade-table th:nth-child(2),
            .iit-grade-table td:nth-child(2) { width: 10%; }
            .iit-grade-table th:nth-child(3),
            .iit-grade-table td:nth-child(3) { width: 8%; }
            .iit-grade-table th:nth-child(4),
            .iit-grade-table td:nth-child(4) { width: 10%; }
            .iit-grade-table th:nth-child(5),
            .iit-grade-table td:nth-child(5) { width: 24%; }
            .iit-grade-table th:nth-child(6),
            .iit-grade-table td:nth-child(6) { width: 8%; }
            .iit-grade-table th:nth-child(7),
            .iit-grade-table td:nth-child(7) { width: 6%; }
            .iit-grade-table th:nth-child(8),
            .iit-grade-table td:nth-child(8) { width: 13%; }
            .iit-grade-table th:nth-child(9),
            .iit-grade-table td:nth-child(9) { width: 12%; }

            @media print {
                html, body {
                    width: 100%;
                    overflow: hidden;
                }

                .iit-sheet {
                    max-width: 100%;
                    padding: 6px 0 12px;
                }
            }

            @media (max-width: 900px) {
                .iit-sheet-summary {
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }
            }

            @media (max-width: 640px) {
                .iit-sheet-summary {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
            }
        </style>
    `;

    const documentHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>IIT Delhi Grade Sheet</title>
            ${styles}
        </head>
        <body>
            ${sheetMarkup}
        </body>
        </html>
    `;

    return {
        documentHtml: documentHtml,
        sheetMarkup: sheetMarkup,
        profile: profile,
        branchLabel: branchLabel,
        generatedLabel: generatedLabel,
        reportRows: reportRows,
        sgpaLabel: sgpaLabel,
        cgpaLabel: cgpaLabel,
        totalCreditsLabel: totalCreditsLabel,
        previousCreditsLabel: previousCreditsLabel,
        cumulativeCreditsLabel: cumulativeCreditsLabel,
        logoUrl: logoUrl,
        imageWidth: 1240,
        imageHeight: Math.max(1754, summaryTopEstimate(reportRows.length))
    };
}

function summaryTopEstimate(rowCount) {
    return 620 + (rowCount * 38);
}

function getReportProfile() {
    let profile = {};

    try {
        profile = JSON.parse(localStorage.getItem("studentProfile") || "{}");
    } catch (error) {
        profile = {};
    }

    return {
        fullName: profile.fullName || localStorage.getItem("currentUser") || localStorage.getItem("username") || "Student",
        branch: profile.branch || getSelectedText("branch") || "Department not selected",
        entryNo: profile.entryNo || profile.entryNumber || profile.rollNumber || profile.rollNo || "NOT PROVIDED"
    };
}

function getAcademicSessionLabel() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const startYear = month >= 6 ? year : year - 1;
    const endYear = (startYear + 1).toString().slice(-2);
    return startYear + "-" + endYear;
}

function getCourseTypeLabel(subject, branchLabel) {
    const category = String(subject.category || "").toLowerCase();
    const name = String(subject.name || "").toLowerCase();
    const code = String(subject.code || "").toUpperCase();
    const branch = String(branchLabel || "").toLowerCase();

    if (!subject.graded) {
        if (name.indexOf("life skill") !== -1) {
            return "OC";
        }
        if (name.indexOf("language") !== -1 || name.indexOf("english") !== -1) {
            return "OF";
        }
        return "NG";
    }

    if (category === "department core" || category === "stream core" || category === "specialized track" || category === "flexible core") {
        return "DC";
    }

    if (category === "department elective") {
        return "DE";
    }

    if (category === "open course") {
        return "OC";
    }

    if (category === "project") {
        return "PR";
    }

    if (category === "lab") {
        return "LB";
    }

    if (category === "institute basket") {
        if (name.indexOf("basic science") !== -1 || name.indexOf("biology") !== -1) {
            return "BS";
        }
        if (name.indexOf("general engineering") !== -1) {
            return "GE";
        }
        if (name.indexOf("humanities") !== -1) {
            return "HS";
        }
        if (name.indexOf("environment") !== -1) {
            return "ES";
        }
        return "IB";
    }

    if (category === "institute core") {
        if (/^(MTL|CML|CMP|PYL|PYP|SBL|SBP)/.test(code)) {
            return "BS";
        }
        if (/^(ELL|MEP|AML)/.test(code)) {
            return "GE";
        }
        if (/^COL/.test(code)) {
            return branch.indexOf("computer science") !== -1 ? "DC" : "GE";
        }
        return "IC";
    }

    return "DC";
}

function getReportGrade(subject) {
    if (!subject.graded) {
        return "S";
    }

    if (!subject.grade) {
        return "-";
    }

    return mapGradeValueToLabel(subject.grade);
}

function getReportStatus(subject) {
    if (!subject.graded) {
        return "";
    }

    if (!subject.grade) {
        return "Pending";
    }

    return String(subject.grade) === "0" ? "Fail" : "";
}
