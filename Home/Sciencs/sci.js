const branchData = {
  "Computer Science & Engineering (CSE)": {
    study: "Programming, Data Structures, Algorithms, AI, DBMS, OS, Networking.",
    career: "Software Developer, Data Scientist, System Analyst.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Electronics & Communication (ECE)": {
    study: "Circuits, Signal Processing, Communication Systems, VLSI.",
    career: "Embedded Engineer, Telecom Engineer, R&D Engineer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Artificial Intelligence & Machine Learning (AIML)": {
    study: "Machine Learning, Deep Learning, Neural Networks, Python, Data Science.",
    career: "AI Engineer, ML Researcher, Data Analyst.",
    difficulty: "High",
    duration: "4 years"
  },
  "Mechanical Engineering": {
    study: "Mechanical Design, Thermodynamics, Manufacturing Processes, Robotics.",
    career: "Mechanical Engineer, Design Engineer, Manufacturing Engineer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Civil Engineering": {
    study: "Structural Engineering, Construction, Environmental Engineering, Surveying.",
    career: "Civil Engineer, Construction Manager, Structural Analyst.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Information Technology": {
    study: "Computer Networks, Web Development, IT Security, Databases.",
    career: "IT Specialist, Network Administrator, Web Developer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Electrical Engineering": {
    study: "Electronics, Power Systems, Control Systems, Circuits.",
    career: "Electrical Engineer, Power Systems Engineer, Control Systems Engineer.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Bachelor of Architecture (B.Arch)": {
    study: "Architecture Design, Building Construction, Urban Design, Structural Systems.",
    career: "Architect, Urban Planner, Landscape Architect.",
    difficulty: "High",
    duration: "5 years"
  },
  "Urban Planning": {
    study: "Urban Development, City Infrastructure, Zoning, Sustainable Design.",
    career: "Urban Planner, City Development Officer, Sustainability Expert.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Interior Design": {
    study: "Space Planning, Interior Architecture, Furniture Design, Lighting Design.",
    career: "Interior Designer, Furniture Designer, Lighting Consultant.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Army (Technical & Non-Technical)": {
    study: "Military Engineering, Communication Systems, Infantry Training.",
    career: "Army Officer, Technical Expert, Combat Engineer.",
    difficulty: "High",
    duration: "Varies"
  },
  "Navy (Executive, Engineering, Electrical)": {
    study: "Naval Operations, Ship Engineering, Electrical Systems, Navigation.",
    career: "Naval Officer, Marine Engineer, Submarine Officer.",
    difficulty: "High",
    duration: "Varies"
  },
  "Air Force (Flying Branch, Ground Duty)": {
    study: "Aerodynamics, Aircraft Systems, Aviation Technology, Military Training.",
    career: "Pilot, Ground Duty Officer, Aerospace Engineer.",
    difficulty: "High",
    duration: "Varies"
  },
  "MBBS (General Medicine)": {
    study: "Human Anatomy, Physiology, Pathology, Surgery.",
    career: "General Physician, Surgeon, Medical Researcher.",
    difficulty: "High",
    duration: "5-6 years"
  },
  "BDS (Dental Surgery)": {
    study: "Dental Anatomy, Oral Surgery, Orthodontics, Periodontics.",
    career: "Dentist, Oral Surgeon, Orthodontist.",
    difficulty: "High",
    duration: "5 years"
  },
  "Ayurveda (BAMS)": {
    study: "Ayurvedic Medicine, Herbal Treatments, Panchakarma, Yoga.",
    career: "Ayurvedic Doctor, Herbalist, Wellness Expert.",
    difficulty: "Moderate",
    duration: "5.5 years"
  },
  "Homeopathy (BHMS)": {
    study: "Homeopathic Treatments, Materia Medica, Repertory.",
    career: "Homeopathic Doctor, Alternative Medicine Specialist.",
    difficulty: "Moderate",
    duration: "5.5 years"
  },
  "Veterinary Science (BVSc)": {
    study: "Animal Anatomy, Physiology, Pathology, Animal Diseases.",
    career: "Veterinarian, Animal Health Expert, Researcher.",
    difficulty: "Moderate",
    duration: "5 years"
  },
  "Bachelor of Pharmacy (B.Pharm)": {
    study: "Pharmacology, Pharmaceutical Chemistry, Drug Design, Medicinal Chemistry.",
    career: "Pharmacist, Pharmaceutical Researcher, Quality Control Analyst.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Diploma in Pharmacy (D.Pharm)": {
    study: "Pharmaceutical Science, Medicinal Chemistry, Drug Formulation.",
    career: "Pharmacist, Drug Inspector, Sales Executive.",
    difficulty: "Moderate",
    duration: "2 years"
  },
  "Pharmaceutical Chemistry": {
    study: "Drug Chemistry, Drug Synthesis, Pharmacokinetics.",
    career: "Pharmaceutical Chemist, Quality Control Analyst.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "B.Sc Nursing": {
    study: "Nursing Science, Patient Care, Medical Ethics, Clinical Practice.",
    career: "Nurse, Health Practitioner, Nurse Educator.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "General Nursing and Midwifery (GNM)": {
    study: "Nursing Practices, Childbirth, Neonatal Care.",
    career: "Nurse, Midwife, Healthcare Practitioner.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "Auxiliary Nursing and Midwifery (ANM)": {
    study: "Basic Nursing, Maternal and Child Care, First Aid.",
    career: "Nurse, Midwife, Healthcare Assistant.",
    difficulty: "Moderate",
    duration: "2 years"
  },
  "B.Sc Biotechnology": {
    study: "Biotechnology, Genetic Engineering, Microbiology, Bioinformatics.",
    career: "Biotech Researcher, Genetic Engineer, Biotechnologist.",
    difficulty: "High",
    duration: "3 years"
  },
  "B.Sc Microbiology": {
    study: "Microbial Biology, Biochemistry, Immunology, Environmental Microbiology.",
    career: "Microbiologist, Clinical Researcher, Environmental Consultant.",
    difficulty: "Moderate to High",
    duration: "3 years"
  },
  "B.Sc Genetics": {
    study: "Genetics, Genomics, Genetic Engineering, Evolutionary Biology.",
    career: "Geneticist, Molecular Biologist, Biotech Consultant.",
    difficulty: "High",
    duration: "3 years"
  },
  "B.Sc Life Sciences": {
    study: "Cell Biology, Biochemistry, Molecular Biology, Physiology.",
    career: "Life Science Researcher, Biologist, Pharmacologist.",
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
