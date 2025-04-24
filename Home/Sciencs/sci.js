const branchData = {
  "Computer Science & Engineering (CSE)": {
    study: "Programming, Data Structures, Algorithms, AI, DBMS, OS, Networking.",
    career: "Software Developer, Data Scientist, System Analyst.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Mechanical Engineering": {
    study: "Thermodynamics, Machine Design, Manufacturing, Mechanics, Fluid Dynamics.",
    career: "Design Engineer, Automotive Engineer, Mechanical Consultant.",
    difficulty: "High",
    duration: "4 years"
  },
  "Electrical Engineering (EE)": {
    study: "Electric Circuits, Power Systems, Control Systems, Machines, Electromagnetics.",
    career: "Electrical Engineer, Power System Analyst, Control Engineer.",
    difficulty: "High",
    duration: "4 years"
  },
  "Civil Engineering": {
    study: "Structural Analysis, Construction Materials, Surveying, Geotechnics.",
    career: "Site Engineer, Structural Engineer, Urban Planner.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Electronics & Communication Engineering (ECE)": {
    study: "Digital Electronics, Signal Processing, VLSI, Embedded Systems, Communication Systems.",
    career: "Embedded Engineer, Telecom Engineer, VLSI Designer.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Chemical Engineering": {
    study: "Reaction Engineering, Process Design, Thermodynamics, Transport Phenomena.",
    career: "Process Engineer, Petrochemical Engineer, Quality Control Engineer.",
    difficulty: "High",
    duration: "4 years"
  },
  "Aerospace Engineering": {
    study: "Aerodynamics, Propulsion, Flight Mechanics, Aircraft Structures.",
    career: "Aerospace Engineer, Flight Systems Analyst, R&D Engineer.",
    difficulty: "Very High",
    duration: "4 years"
  },
  "Artificial Intelligence & Machine Learning (AI & ML)": {
    study: "Machine Learning, Deep Learning, Neural Networks, NLP, AI Algorithms.",
    career: "AI Engineer, Machine Learning Specialist, Research Scientist.",
    difficulty: "High",
    duration: "4 years"
  },
  "Data Science": {
    study: "Statistics, Data Mining, Machine Learning, Big Data Analytics, Visualization.",
    career: "Data Scientist, BI Developer, Data Analyst.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Cybersecurity": {
    study: "Network Security, Cryptography, Ethical Hacking, Security Protocols.",
    career: "Cybersecurity Analyst, Penetration Tester, Security Consultant.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Information Technology (IT)": {
    study: "Networking, Databases, Web Technologies, Software Engineering.",
    career: "IT Administrator, Software Engineer, Systems Analyst.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Internet of Things (IoT)": {
    study: "Sensors, Embedded Systems, Cloud Computing, IoT Protocols.",
    career: "IoT Developer, Automation Engineer, Embedded Systems Developer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Computer and Information Science (CIC)": {
    study: "Computational Theory, Systems, Data Science, Intelligent Computing.",
    career: "Software Engineer, Researcher, Data Analyst.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Robotics and Automation": {
    study: "Mechatronics, Control Systems, Artificial Intelligence, Robotics Design.",
    career: "Robotics Engineer, Automation Specialist, Control Systems Engineer.",
    difficulty: "High",
    duration: "4 years"
  },
  "Biomedical Engineering": {
    study: "Human Physiology, Biomedical Devices, Signal Processing, Imaging.",
    career: "Biomedical Engineer, Clinical Engineer, R&D in Healthcare Tech.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Mechatronics": {
    study: "Mechanical Systems, Electronics, Embedded Systems, Robotics.",
    career: "Automation Engineer, Mechatronics Specialist, Product Designer.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Environmental Engineering": {
    study: "Pollution Control, Waste Management, Environmental Chemistry, Sustainability.",
    career: "Environmental Consultant, Waste Management Engineer, Government Services.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Agricultural Engineering": {
    study: "Farm Machinery, Irrigation Engineering, Soil Science, Crop Processing.",
    career: "Agricultural Technologist, Irrigation Engineer, Agri-Business Consultant.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Industrial & Production Engineering": {
    study: "Operations Research, Production Planning, Quality Control, Manufacturing Systems.",
    career: "Production Engineer, Supply Chain Analyst, Quality Engineer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Petroleum Engineering": {
    study: "Reservoir Engineering, Drilling, Petroleum Geology, Fluid Mechanics.",
    career: "Drilling Engineer, Reservoir Engineer, Energy Consultant.",
    difficulty: "High",
    duration: "4 years"
  },
  "Bachelor of Architecture (B.Arch)": {
    study: "Architecture Design, Building Construction, Urban Design, Structural Systems.",
    career: "Architect, Urban Planner, Landscape Architect.",
    difficulty: "High",
    duration: "5 years"
  },
  "Interior Design": {
    study: "Space Planning, Color Theory, Furnishings, Lighting Techniques.",
    career: "Interior Designer, Set Designer, Space Planner.",
    difficulty: "Moderate",
    duration: "3–4 years"
  },
  "Urban and Regional Planning": {
    study: "Urban Theory, Sustainable Development, Infrastructure Planning.",
    career: "Urban Planner, GIS Analyst, Policy Advisor.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Landscape Architecture": {
    study: "Ecology, Site Planning, Garden Design, Environmental Design.",
    career: "Landscape Architect, Environmental Consultant.",
    difficulty: "Moderate",
    duration: "5 years"
  },
  "Environmental Design": {
    study: "Sustainable Design, Urban Ecology, Environmental Systems, Green Building.",
    career: "Sustainability Consultant, Environmental Designer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Industrial Design": {
    study: "Product Design, Ergonomics, Materials, Manufacturing Processes.",
    career: "Product Designer, Industrial Engineer, UX Designer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Graphic Design": {
    study: "Typography, Digital Art, Branding, Visual Communication.",
    career: "Graphic Designer, Art Director, UI Designer.",
    difficulty: "Easy to Moderate",
    duration: "3–4 years"
  },
  "Fashion Design": {
    study: "Textile Design, Fashion Illustration, Garment Construction, Fashion Marketing.",
    career: "Fashion Designer, Stylist, Costume Designer.",
    difficulty: "Moderate",
    duration: "3–4 years"
  },
  "Furniture Design": {
    study: "Material Science, Ergonomics, Aesthetics, Joinery Techniques.",
    career: "Furniture Designer, Interior Consultant.",
    difficulty: "Moderate",
    duration: "3–4 years"
  },
  "Transportation Design": {
    study: "Vehicle Aesthetics, User-Centered Design, CAD Modeling, Prototyping.",
    career: "Automotive Designer, Transport Planner.",
    difficulty: "High",
    duration: "4 years"
  },
 "Army (Technical & Non-Technical)": {
    study: "Military Engineering, Communication Systems, Infantry Training.",
    career: "Army Officer, Technical Expert, Combat Engineer.",
    difficulty: "High",
    duration: "Varies"
  },
  "Navy": {
    study: "Naval Operations, Marine Engineering, Navigation, Oceanography.",
    career: "Naval Officer, Marine Engineer, Submarine Specialist.",
    difficulty: "High",
    duration: "3 years (NDA) + 1 year (INA)"
  },
  "Air Force (Flying Branch)": {
    study: "Aerodynamics, Flight Training, Aviation Meteorology, Air Regulations.",
    career: "Fighter Pilot, Transport Pilot, Flying Instructor.",
    difficulty: "Very High",
    duration: "3 years (NDA) + 1.5 years (AFA)"
  },
  "Air Force (Ground Duties – Technical)": {
    study: "Avionics, Radar Systems, Electronics, Mechanical Engineering.",
    career: "Technical Officer, Maintenance Engineer, Radar Analyst.",
    difficulty: "High",
    duration: "3 years (NDA) + 1.5 years (AFA)"
  },
  "Air Force (Ground Duties – Non-Technical)": {
    study: "Logistics, Administration, Meteorology, Accounts & Finance.",
    career: "Administrative Officer, Logistics Manager, Meteorology Officer.",
    difficulty: "Moderate",
    duration: "3 years (NDA) + 1 year (AFA)"
  },
 "MBBS (General Medicine)": {
    study: "Human Anatomy, Physiology, Pathology, Surgery.",
    career: "General Physician, Surgeon, Medical Researcher.",
    difficulty: "High",
    duration: "5.5 years"
  },
  "BDS (Dental Surgery)": {
    study: "Oral Anatomy, Dental Materials, Surgery, Orthodontics.",
    career: "Dentist, Dental Surgeon, Orthodontist.",
    difficulty: "High",
    duration: "5 years"
  },
  "BAMS (Ayurveda)": {
    study: "Ayurvedic Principles, Herbal Medicine, Panchakarma.",
    career: "Ayurvedic Doctor, Herbal Consultant, Wellness Coach.",
    difficulty: "Moderate to High",
    duration: "5.5 years"
  },
  "BHMS (Homeopathy)": {
    study: "Homeopathic Materia Medica, Organon, Pathology.",
    career: "Homeopathic Doctor, Consultant, Researcher.",
    difficulty: "Moderate",
    duration: "5.5 years"
  },
  "BUMS (Unani Medicine)": {
    study: "Unani Philosophy, Ilmul Advia, Surgery, Regimental Therapy.",
    career: "Unani Practitioner, Medical Officer, Wellness Consultant.",
    difficulty: "Moderate",
    duration: "5.5 years"
  },
  "BSMS (Siddha Medicine)": {
    study: "Siddha Principles, Herbal Pharmacology, Diagnosis.",
    career: "Siddha Doctor, Herbal Consultant, Siddha Pharmacist.",
    difficulty: "Moderate",
    duration: "5.5 years"
  },
  "BPT (Physiotherapy)": {
    study: "Anatomy, Exercise Therapy, Electrotherapy, Rehabilitation.",
    career: "Physiotherapist, Rehab Specialist, Sports Therapist.",
    difficulty: "Moderate",
    duration: "4.5 years"
  },
  "B.Sc. Nursing": {
    study: "Nursing Science, Community Health, Pharmacology, Care Ethics.",
    career: "Nurse, Clinical Instructor, Hospital Administrator.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "BOT (Occupational Therapy)": {
    study: "Therapeutic Techniques, Human Development, Psychiatry.",
    career: "Occupational Therapist, Rehabilitation Expert.",
    difficulty: "Moderate",
    duration: "4.5 years"
  },
  "BMLT (Medical Lab Technology)": {
    study: "Biochemistry, Hematology, Microbiology, Diagnostic Equipment.",
    career: "Lab Technician, Pathologist Assistant, Clinical Analyst.",
    difficulty: "Moderate",
    duration: "3–4 years"
  },
 "Bachelor of Pharmacy (B.Pharm)": {
    study: "Pharmacology, Pharmaceutical Chemistry, Drug Design, Medicinal Chemistry.",
    career: "Pharmacist, Pharmaceutical Researcher, Quality Control Analyst.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Master of Pharmacy (M.Pharm)": {
    study: "Advanced Drug Formulation, Clinical Pharmacy, Regulatory Affairs, Pharmaceutical Management.",
    career: "Senior Pharmacist, Research Scientist, Pharmaceutical Consultant.",
    difficulty: "High",
    duration: "2 years"
  },
  "Diploma in Pharmacy (D.Pharm)": {
    study: "Pharmaceutics, Pharmacognosy, Pharmaceutical Chemistry, Microbiology.",
    career: "Pharmacist, Pharmacy Assistant, Retail Pharmacy.",
    difficulty: "Moderate",
    duration: "2 years"
  },
  "Doctor of Pharmacy (Pharm.D)": {
    study: "Clinical Pharmacy, Drug Therapy Management, Patient Safety, Pharmacology.",
    career: "Clinical Pharmacist, Medical Writer, Healthcare Consultant.",
    difficulty: "High",
    duration: "6 years"
  },
  "Ph.D. in Pharmacy": {
    study: "Drug Discovery, Pharmaceutical Sciences, Drug Delivery Systems, Clinical Research.",
    career: "Research Scientist, Academia, Pharmaceutical Expert.",
    difficulty: "Very High",
    duration: "3–5 years"
  },
 "B.Sc Nursing": {
    study: "Nursing Science, Patient Care, Medical Ethics, Clinical Practice.",
    career: "Nurse, Health Practitioner, Nurse Educator.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "GNM (General Nursing & Midwifery)": {
    study: "Nursing Foundation, Medical-Surgical Nursing, Maternal & Child Health Nursing, Community Health Nursing.",
    career: "Nurse, Midwife, Healthcare Assistant.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "M.Sc Nursing": {
    study: "Advanced Nursing Practice, Nursing Research, Clinical Specialization, Management in Nursing.",
    career: "Nurse Educator, Nurse Practitioner, Clinical Nurse Specialist.",
    difficulty: "High",
    duration: "2 years"
  },
  "Post Basic B.Sc Nursing": {
    study: "Advanced Nursing, Nursing Administration, Community Health Nursing, Nursing Education.",
    career: "Nurse Manager, Clinical Instructor, Healthcare Consultant.",
    difficulty: "Moderate",
    duration: "2 years"
  },
  "Ph.D. in Nursing": {
    study: "Nursing Research, Advanced Nursing Practice, Healthcare Systems, Leadership in Nursing.",
    career: "Nurse Scientist, Academic Educator, Nursing Researcher.",
    difficulty: "Very High",
    duration: "3–5 years"
  },
 "B.Sc Biotechnology": {
    study: "Molecular Biology, Genetic Engineering, Cell Culture, Microbiology.",
    career: "Biotech Researcher, Lab Technician, Genetic Counselor.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "B.Tech Biotechnology": {
    study: "Bioprocess Engineering, Genetic Engineering, Molecular Biology, Biochemistry.",
    career: "Biotech Engineer, Research Scientist, Bioprocess Development Specialist.",
    difficulty: "High",
    duration: "4 years"
  },
  "M.Sc Biotechnology": {
    study: "Advanced Molecular Biology, Genetic Engineering, Enzyme Technology, Bioinformatics.",
    career: "Senior Biotech Researcher, Biotech Consultant, Genetic Engineer.",
    difficulty: "High",
    duration: "2 years"
  },
  "M.Tech Biotechnology": {
    study: "Genetic Engineering, Bioinformatics, Bioprocess Engineering, Nanobiotechnology.",
    career: "Biotech Engineer, R&D Scientist, Clinical Research Specialist.",
    difficulty: "High",
    duration: "2 years"
  },
  "Ph.D. in Biotechnology": {
    study: "Advanced Biotech Research, Genetic Engineering, Biomedical Technology, Bioprocess Engineering.",
    career: "Biotech Research Scientist, Professor, Biotech Industry Leader.",
    difficulty: "Very High",
    duration: "3–5 years"
  },
  "B.Sc Life Sciences": {
    study: "Biology, Biochemistry, Genetics, Physiology, Cell Biology.",
    career: "Life Science Researcher, Lab Technician, Environmental Scientist.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "M.Sc Life Sciences": {
    study: "Advanced Cell Biology, Biochemistry, Molecular Biology, Immunology.",
    career: "Senior Researcher, Bioinformatics Analyst, Environmental Consultant.",
    difficulty: "High",
    duration: "2 years"
  },
  "B.Sc Microbiology": {
    study: "Microbial Genetics, Immunology, Virology, Microbial Physiology.",
    career: "Microbiologist, Lab Technician, Research Scientist.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "M.Sc Microbiology": {
    study: "Advanced Microbial Pathogenesis, Microbial Genetics, Immunology, Biotechnology.",
    career: "Microbiologist, Clinical Researcher, Environmental Microbiologist.",
    difficulty: "High",
    duration: "2 years"
  },
  "B.Sc Biochemistry": {
    study: "Biochemical Processes, Enzyme Kinetics, Metabolism, Molecular Biology.",
    career: "Biochemist, Laboratory Technician, Pharmaceutical Researcher.",
    difficulty: "Moderate",
    duration: "3 years"
  }
};


function showBranchDetails(branchName) {
  const data = branchData[branchName];
  if (data) {
    document.getElementById('detailTitle').innerText = branchName + " - Course Details";
    document.getElementById('studyContent').innerText = data.study;
    document.getElementById('careerContent').innerText = data.career;
    document.getElementById('difficultyContent').innerText = data.difficulty;
    document.getElementById('durationContent').innerText = data.duration;
    document.getElementById('detailsSection').style.display = 'block';
  }
}

function toggleSubCourse(element) {
  element.classList.toggle('open');
  const subCourseList = element.querySelector('.exam-list');
  if (subCourseList) {
    subCourseList.style.maxHeight = subCourseList.style.maxHeight ? null : subCourseList.scrollHeight + 'px';
  }
}

function closePaddingOnDoubleClick(event) {
  event.stopPropagation();
  const subCourse = event.target.closest('.sub-course');
  if (subCourse && subCourse.classList.contains('open')) {
    subCourse.classList.remove('open');
    const subCourseList = subCourse.querySelector('.exam-list');
    if (subCourseList) {
      subCourseList.style.maxHeight = null;
    }
  }
}

document.querySelectorAll('.sub-course').forEach(subCourse => {
  subCourse.addEventListener('dblclick', closePaddingOnDoubleClick);
});
