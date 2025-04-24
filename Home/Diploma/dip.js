// Toggle sub-course dropdown
function toggleSubCourse(element) {
    const openItems = document.querySelectorAll('.sub-course.open');
    openItems.forEach(item => {
      if (item !== element) {
        item.classList.remove('open');
      }
    });
  
    element.classList.toggle('open');
  }
  
  // Course details for Diploma Stream
  const courseDetails = {
    // Polytechnic Diplomas
   "Diploma in Civil Engineering": {
    "study": "Building materials, Structural analysis, Construction technology, Surveying.",
    "career": "Civil Engineer, Site Supervisor, Construction Manager.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Mechanical Engineering": {
    "study": "Mechanics, Thermodynamics, Fluid dynamics, Material science.",
    "career": "Mechanical Engineer, Design Engineer, Maintenance Engineer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Electrical Engineering": {
    "study": "Electrical circuits, Control systems, Power generation, Electronics.",
    "career": "Electrical Engineer, Circuit Designer, Power Systems Engineer.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Electronics and Communication Engineering": {
    "study": "Digital electronics, Communication systems, Microprocessors, Signal processing.",
    "career": "Electronics Engineer, Communication Technician, Signal Analyst.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Computer Science Engineering": {
    "study": "Programming, Data structures, Computer networks, Software engineering.",
    "career": "Software Developer, IT Analyst, Web Developer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Information Technology": {
    "study": "Networking, Database management, Web development, Cloud computing.",
    "career": "IT Technician, Network Engineer, Systems Administrator.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Automobile Engineering": {
    "study": "Automotive technology, Vehicle dynamics, Internal combustion engines, Vehicle repair.",
    "career": "Automobile Engineer, Service Technician, Vehicle Designer.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Aeronautical Engineering": {
    "study": "Aerodynamics, Aircraft design, Propulsion systems, Avionics.",
    "career": "Aeronautical Engineer, Aircraft Designer, Flight Test Engineer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Chemical Engineering": {
    "study": "Chemical processes, Thermodynamics, Fluid mechanics, Process control.",
    "career": "Chemical Engineer, Process Developer, Quality Control Analyst.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Architecture Assistantship": {
    "study": "Architectural drawing, Construction technology, Building design, Urban planning.",
    "career": "Architectural Assistant, Draftsman, Building Designer.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Interior Design": {
    "study": "Interior design principles, Furniture design, Color theory, Space planning.",
    "career": "Interior Designer, Space Planner, Furniture Designer.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Fashion Design": {
    "study": "Textile science, Pattern making, Fashion illustration, Garment construction.",
    "career": "Fashion Designer, Textile Designer, Fashion Stylist.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Hotel Management": {
    "study": "Hotel operations, Hospitality management, Front desk operations, Catering.",
    "career": "Hotel Manager, Catering Manager, Event Coordinator.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Travel and Tourism": {
    "study": "Tourism management, Travel operations, Tourism marketing, Geography.",
    "career": "Tour Operator, Travel Agent, Tour Guide.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Pharmacy": {
    "study": "Pharmacology, Pharmaceutical chemistry, Drug manufacturing, Dispensing medicines.",
    "career": "Pharmacist, Pharmaceutical Sales Representative, Drug Safety Specialist.",
    "difficulty": "Moderate",
    "duration": "2 years"
},
"Diploma in Civil Engineering (Construction Management)": {
    "study": "Project management, Building technology, Structural design, Construction planning.",
    "career": "Construction Manager, Project Coordinator, Site Engineer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Textile Engineering": {
    "study": "Textile manufacturing, Yarn production, Fabric technology, Textile machinery.",
    "career": "Textile Engineer, Production Manager, Quality Control Specialist.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Diploma in Mining Engineering": {
    "study": "Mineral processing, Mining methods, Mine safety, Environmental impact.",
    "career": "Mining Engineer, Mine Supervisor, Safety Officer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Marine Engineering": {
    "study": "Marine propulsion, Ship construction, Naval architecture, Marine systems.",
    "career": "Marine Engineer, Ship Design Engineer, Naval Officer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Diploma in Environmental Engineering": {
    "study": "Environmental management, Pollution control, Waste treatment, Water conservation.",
    "career": "Environmental Engineer, Waste Management Consultant, Sustainability Officer.",
    "difficulty": "High",
    "duration": "3 years"
},

  
    // ITI Trades
   "Fitter": {
  "study": "Fitting, Machining, Assembly, and Maintenance of mechanical parts.",
  "career": "Fitter, Mechanical Technician, Maintenance Engineer.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Electrician": {
  "study": "Electrical installations, maintenance, and repair work.",
  "career": "Electrician, Electrical Engineer, Maintenance Technician.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Plumber": {
  "study": "Plumbing installation, maintenance, and repair work.",
  "career": "Plumber, Pipe Fitter, Water Supply Technician.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Welder": {
  "study": "Welding techniques, metallurgy, and joining metal parts.",
  "career": "Welder, Welding Technician, Fabricator.",
  "difficulty": "High",
  "duration": "2 years"
},
"Mechanic (Motor Vehicle)": {
  "study": "Repair, maintenance, and servicing of motor vehicles.",
  "career": "Automobile Mechanic, Service Engineer, Maintenance Technician.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Carpenter": {
  "study": "Woodworking, joinery, and carpentry techniques.",
  "career": "Carpenter, Furniture Designer, Woodworker.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Turner": {
  "study": "Metalworking, lathe operation, and machine tool technology.",
  "career": "Turner, Machinist, Mechanical Technician.",
  "difficulty": "High",
  "duration": "2 years"
},
"Diesel Mechanic": {
  "study": "Repair and maintenance of diesel engines and machinery.",
  "career": "Diesel Mechanic, Automotive Technician, Maintenance Engineer.",
  "difficulty": "High",
  "duration": "2 years"
},
"Draughtsman (Civil)": {
  "study": "Drawing and design of building and construction plans.",
  "career": "Civil Draughtsman, Architect Assistant, Construction Technician.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Draughtsman (Mechanical)": {
  "study": "Drawing and design of mechanical engineering components.",
  "career": "Mechanical Draughtsman, Design Engineer, CAD Technician.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Information Technology (IT) and ESM": {
  "study": "Basics of IT systems, hardware, software, and electronics.",
  "career": "IT Technician, Hardware Engineer, Network Technician.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Wireman": {
  "study": "Electrical wiring, installation, and maintenance techniques.",
  "career": "Wireman, Electrician, Electrical Technician.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Refrigeration and Air Conditioning Mechanic": {
  "study": "Repair and maintenance of refrigeration and AC systems.",
  "career": "Refrigeration Technician, AC Mechanic, HVAC Technician.",
  "difficulty": "High",
  "duration": "2 years"
},
"Painter (General)": {
  "study": "Surface preparation, painting techniques, and color mixing.",
  "career": "Painter, Surface Coating Technician, Construction Worker.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Sheet Metal Worker": {
  "study": "Sheet metal working, cutting, welding, and shaping.",
  "career": "Sheet Metal Worker, Fabricator, Welder.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Mason (Building Constructor)": {
  "study": "Building construction, bricklaying, plastering, and masonry.",
  "career": "Mason, Builder, Construction Worker.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Laboratory Assistant (Chemistry)": {
  "study": "Chemical analysis, laboratory techniques, and safety.",
  "career": "Lab Assistant, Research Technician, Quality Control Officer.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Radiology Technician": {
  "study": "Radiographic imaging techniques, patient care, and safety.",
  "career": "Radiology Technician, Medical Imaging Specialist, X-ray Technician.",
  "difficulty": "High",
  "duration": "2 years"
},
"Sewing Technology": {
  "study": "Fabrication, garment making, and sewing techniques.",
  "career": "Fashion Designer, Tailor, Sewing Machine Operator.",
  "difficulty": "Medium",
  "duration": "2 years"
},
"Food Production": {
  "study": "Cooking techniques, food preparation, and hospitality.",
  "career": "Chef, Food Production Manager, Hotel Staff.",
  "difficulty": "Medium",
  "duration": "2 years"
},

  
    // Engineering Pathways
   "Civil Engineering": {
  study: "Design, construction, and maintenance of infrastructure.",
  career: "Civil Engineer, Structural Engineer, Construction Manager.",
  difficulty: "High",
  duration: "4 years"
},
"Mechanical Engineering": {
  study: "Mechanisms, thermodynamics, materials science, and mechanical systems.",
  career: "Mechanical Engineer, Design Engineer, Manufacturing Engineer.",
  difficulty: "High",
  duration: "4 years"
},
"Electrical Engineering": {
  study: "Electrical systems, circuits, power generation, and electronics.",
  career: "Electrical Engineer, Power Engineer, Electronics Engineer.",
  difficulty: "High",
  duration: "4 years"
},
"Computer Science Engineering": {
  study: "Programming, algorithms, software development, and computer systems.",
  career: "Software Developer, Systems Architect, Data Scientist.",
  difficulty: "High",
  duration: "4 years"
},
"Electronics and Communication Engineering": {
  study: "Signal processing, communication systems, and digital electronics.",
  career: "Electronics Engineer, Communication Systems Engineer, Network Engineer.",
  difficulty: "High",
  duration: "4 years"
},
"Aerospace Engineering": {
  study: "Aircraft design, aerodynamics, propulsion systems, and space exploration.",
  career: "Aerospace Engineer, Aircraft Design Engineer, Space Systems Engineer.",
  difficulty: "High",
  duration: "4 years"
},
"Chemical Engineering": {
  study: "Chemical processes, material science, and industrial production.",
  career: "Chemical Engineer, Process Engineer, Environmental Engineer.",
  difficulty: "High",
  duration: "4 years"
},
"Biotechnology Engineering": {
  study: "Biological processes, genetic engineering, and pharmaceutical applications.",
  career: "Biotechnologist, Research Scientist, Bioprocess Engineer.",
  difficulty: "High",
  duration: "4 years"
},
"Automobile Engineering": {
  study: "Vehicle design, automotive systems, and manufacturing processes.",
  career: "Automobile Engineer, Vehicle Design Engineer, Production Manager.",
  difficulty: "High",
  duration: "4 years"
},
"Environmental Engineering": {
  study: "Environmental protection, waste management, and sustainable engineering.",
  career: "Environmental Engineer, Waste Management Engineer, Sustainability Consultant.",
  difficulty: "Medium",
  duration: "4 years"
},

  
    // Creative & Design Courses
   "Graphic Design": {
  "study": "Visual communication, typography, and image manipulation.",
  "career": "Graphic Designer, Art Director, UI/UX Designer.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Interior Design": {
  "study": "Space planning, furniture design, and material selection.",
  "career": "Interior Designer, Architect, Space Planner.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Fashion Design": {
  "study": "Fashion illustration, textile science, and garment construction.",
  "career": "Fashion Designer, Fashion Consultant, Textile Designer.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Product Design": {
  "study": "Industrial design, prototyping, and material science.",
  "career": "Product Designer, Industrial Designer, UX Designer.",
  "difficulty": "High",
  "duration": "3 years"
},
"Animation and Multimedia Design": {
  "study": "2D/3D animation, motion graphics, and video production.",
  "career": "Animator, Multimedia Artist, Game Designer.",
  "difficulty": "High",
  "duration": "3 years"
},
"Game Design": {
  "study": "Game mechanics, storytelling, and interactive design.",
  "career": "Game Designer, Game Developer, 3D Artist.",
  "difficulty": "High",
  "duration": "3 years"
},
"Web Design and Development": {
  "study": "HTML/CSS, UI/UX design, and web development tools.",
  "career": "Web Designer, Front-End Developer, UX/UI Developer.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Photography": {
  "study": "Camera techniques, lighting, and digital editing.",
  "career": "Photographer, Photo Editor, Visual Storyteller.",
  "difficulty": "Medium",
  "duration": "2-3 years"
},
"Film and Video Production": {
  "study": "Cinematography, editing, and film direction.",
  "career": "Film Director, Cinematographer, Video Editor.",
  "difficulty": "High",
  "duration": "3 years"
},
"Visual Communication": {
  "study": "Graphic design, visual media, and marketing communication.",
  "career": "Visual Designer, Brand Strategist, Creative Director.",
  "difficulty": "Medium",
  "duration": "3 years"
},

    // Hospitality & Tourism
   "Hotel Management": {
    study: "Hotel operations, hospitality marketing, food & beverage management, customer service.",
    career: "Hotel Manager, Event Planner, Catering Manager, Guest Relations Officer.",
    difficulty: "Medium",
    duration: "3 years"
},
"Tourism Management": {
    study: "Tourism policies, travel planning, tour operations, sustainable tourism.",
    career: "Tour Manager, Travel Consultant, Event Coordinator, Tour Operator.",
    difficulty: "Medium",
    duration: "3 years"
},
"Culinary Arts": {
    study: "Cooking techniques, menu planning, food safety, culinary skills.",
    career: "Chef, Pastry Chef, Culinary Consultant, Restaurant Manager.",
    difficulty: "High",
    duration: "2-3 years"
},
"Event Management": {
    study: "Event planning, logistics, event marketing, guest management.",
    career: "Event Planner, Conference Coordinator, Wedding Planner, Event Manager.",
    difficulty: "Medium",
    duration: "2-3 years"
},
"Travel and Tourism": {
    study: "Tourism planning, sustainable travel, cultural heritage, travel services.",
    career: "Travel Agent, Tour Guide, Travel Consultant, Tourism Director.",
    difficulty: "Medium",
    duration: "3 years"
},
"Hospitality Administration": {
    study: "Hospitality management, business operations, finance, human resources in hospitality.",
    career: "Hotel Manager, Resort Manager, Hospitality Consultant, Operations Manager.",
    difficulty: "High",
    duration: "3-4 years"
},
"Spa Management": {
    study: "Spa operations, wellness programs, customer service, spa therapies.",
    career: "Spa Manager, Wellness Consultant, Spa Therapist, Spa Marketing Specialist.",
    difficulty: "Medium",
    duration: "2-3 years"
},
"Travel Writing and Journalism": {
    study: "Travel writing, journalism, storytelling, media ethics, photography.",
    career: "Travel Writer, Blogger, Journalist, Content Creator.",
    difficulty: "Medium",
    duration: "2-3 years"
},
"Hotel and Restaurant Management": {
    study: "Hotel operations, restaurant management, food & beverage management, customer relations.",
    career: "Hotel Manager, Restaurant Manager, Catering Manager, Operations Director.",
    difficulty: "High",
    duration: "3 years"
},
"Tourism and Hospitality Marketing": {
    study: "Marketing strategies, tourism marketing, hospitality branding, digital marketing.",
    career: "Marketing Manager, Tourism Marketing Director, Brand Strategist, Public Relations Specialist.",
    difficulty: "Medium",
    duration: "2-3 years"
},

  
    // Healthcare & Services
    "Nursing": {
  "study": "Nursing theory, patient care, medical terminology, anatomy, and physiology.",
  "career": "Registered Nurse, Nurse Practitioner, Nurse Educator, Nurse Manager.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Physiotherapy": {
  "study": "Anatomy, physiology, musculoskeletal disorders, rehabilitation techniques.",
  "career": "Physiotherapist, Rehabilitation Specialist, Sports Physiotherapist.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Pharmacy": {
  "study": "Pharmacology, medicinal chemistry, drug interactions, clinical pharmacy.",
  "career": "Pharmacist, Clinical Pharmacist, Research Scientist, Pharmaceutical Sales.",
  "difficulty": "High",
  "duration": "4 years"
},
"Medicine": {
  "study": "Human anatomy, biochemistry, pathology, pharmacology, clinical practices.",
  "career": "Doctor, Surgeon, Medical Researcher, Specialist Consultant.",
  "difficulty": "Very High",
  "duration": "5-6 years"
},
"Public Health": {
  "study": "Epidemiology, health policy, environmental health, disease prevention.",
  "career": "Public Health Administrator, Health Educator, Epidemiologist.",
  "difficulty": "Medium",
  "duration": "3-4 years"
},
"Dentistry": {
  "study": "Oral anatomy, dental materials, pathology, preventive dentistry, clinical techniques.",
  "career": "Dentist, Oral Surgeon, Orthodontist, Dental Hygienist.",
  "difficulty": "High",
  "duration": "5 years"
},
"Medical Laboratory Technology": {
  "study": "Clinical microbiology, hematology, clinical biochemistry, laboratory safety.",
  "career": "Laboratory Technician, Medical Technologist, Clinical Laboratory Scientist.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Radiology": {
  "study": "Medical imaging techniques, radiographic anatomy, patient safety, diagnostic radiology.",
  "career": "Radiologic Technologist, Radiology Technologist, MRI Technologist, X-Ray Technician.",
  "difficulty": "Medium",
  "duration": "2-3 years"
},
"Optometry": {
  "study": "Eye anatomy, optics, vision science, eye diseases, optical instruments.",
  "career": "Optometrist, Optician, Vision Therapist.",
  "difficulty": "Medium",
  "duration": "4 years"
},
"Health Administration": {
  "study": "Healthcare systems, healthcare laws, healthcare management, hospital administration.",
  "career": "Healthcare Manager, Health Services Administrator, Medical Office Manager.",
  "difficulty": "Medium",
  "duration": "3-4 years"
}

  };
  
  // Show details when a branch is clicked
  function showBranchDetails(branchName) {
    const details = courseDetails[branchName];
  
    if (details) {
      document.getElementById('detailTitle').textContent = branchName;
      document.getElementById('studyContent').textContent = details.study;
      document.getElementById('careerContent').textContent = details.career;
      document.getElementById('difficultyContent').textContent = details.difficulty;
      document.getElementById('durationContent').textContent = details.duration;
  
      document.getElementById('detailsSection').style.display = 'block';
    }
  }
  