// Toggle sub-course dropdown
function toggleSubCourse(element) {
    // Close any other open sub-course (optional)
    const openItems = document.querySelectorAll('.sub-course.open');
    openItems.forEach(item => {
      if (item !== element) {
        item.classList.remove('open');
      }
    });
  
    // Toggle the clicked one
    element.classList.toggle('open');
  }
  
  // Course details (dummy content for now)
  const courseDetails = {
    
  "Diploma in Mechanical Engineering": {
  study: "Thermodynamics, Fluid Mechanics, Strength of Materials, Machine Design, Manufacturing Technology.",
  career: "Mechanical Engineer, Design Engineer, Maintenance Engineer, Quality Control Engineer.",
  difficulty: "Moderate",
  duration: "3 years"
},

"Diploma in Electrical Engineering": {
  study: "Circuit Theory, Electrical Machines, Power Systems, Control Systems, Electrical Measurements.",
  career: "Electrical Engineer, Power Plant Operator, Control System Engineer, Maintenance Technician.",
  difficulty: "Moderate",
  duration: "3 years"
},

"Diploma in Civil Engineering": {
  study: "Structural Engineering, Building Materials, Surveying, Construction Technology, Geotechnical Engineering.",
  career: "Civil Engineer, Site Supervisor, Quantity Surveyor, Construction Manager.",
  difficulty: "Moderate",
  duration: "3 years"
},

"Diploma in Automobile Engineering": {
  study: "Automobile Engines, Vehicle Dynamics, Auto Electrical Systems, Transmission Systems, Engine Testing.",
  career: "Automobile Engineer, Service Advisor, Vehicle Inspector, Production Engineer.",
  difficulty: "Moderate",
  duration: "3 years"
},

"Diploma in Electronics & Communication": {
  study: "Electronic Devices, Digital Electronics, Communication Systems, Microcontrollers, Signal Processing.",
  career: "Electronics Engineer, Communication Engineer, Service Technician, Embedded Systems Developer.",
  difficulty: "Moderate",
  duration: "3 years"
},
"Diploma in Medical Lab Technology (DMLT)": {
  study: "Clinical Biochemistry, Microbiology, Hematology, Pathology, Medical Lab Equipment Handling.",
  career: "Lab Technician, Pathology Lab Assistant, Medical Lab Technologist.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Radiology Technology": {
  study: "Radiographic Techniques, X-Ray Imaging, CT & MRI Techniques, Radiation Physics, Patient Care.",
  career: "Radiology Technician, CT/MRI Technologist, Diagnostic Imaging Assistant.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Operation Theatre Technology": {
  study: "Surgical Procedures, Sterilization Techniques, OT Equipment Handling, Patient Monitoring.",
  career: "OT Technician, Surgical Assistant, Anaesthesia Technician.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Nursing Care Assistant": {
  study: "Basic Nursing Skills, Patient Hygiene, Emergency Care, First Aid, Communication Skills.",
  career: "Nursing Assistant, Patient Care Assistant, Home Health Aide.",
  difficulty: "Easy to Moderate",
  duration: "1 to 2 years"
},

"Diploma in Physiotherapy": {
  study: "Human Anatomy, Physiotherapy Techniques, Electrotherapy, Exercise Therapy, Rehabilitation.",
  career: "Physiotherapy Assistant, Rehab Assistant, Sports Injury Assistant.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Agriculture": {
  study: "Soil Science, Agronomy, Crop Production, Irrigation Methods, Farm Management.",
  career: "Agriculture Technician, Farm Supervisor, Agricultural Officer.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Horticulture": {
  study: "Plant Propagation, Nursery Management, Floriculture, Landscape Gardening, Fruit & Vegetable Cultivation.",
  career: "Horticulturist, Nursery Manager, Landscape Designer.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Dairy Technology": {
  study: "Dairy Farming, Milk Processing, Dairy Equipment Handling, Quality Control, Dairy Microbiology.",
  career: "Dairy Technologist, Milk Plant Supervisor, Quality Control Officer.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Food Processing": {
  study: "Food Preservation, Food Chemistry, Processing Techniques, Packaging Technology, Quality Assurance.",
  career: "Food Processing Technician, Quality Analyst, Food Safety Officer.",
  difficulty: "Moderate",
  duration: "2 years"
},

"Diploma in Organic Farming": {
  study: "Organic Manures, Biofertilizers, Natural Pest Management, Sustainable Farming, Soil Health Management.",
  career: "Organic Farmer, Farm Consultant, Agripreneur.",
  difficulty: "Moderate",
  duration: "1 to 2 years"
},

"Diploma in Graphic Designing": {
  study: "Design Principles, Adobe Photoshop, Illustrator, Typography, Branding, Digital Art.",
  career: "Graphic Designer, Creative Illustrator, Branding Specialist.",
  difficulty: "Moderate",
  duration: "1 year"
},

"Diploma in Photography": {
  study: "Photography Basics, Lighting, Portrait & Landscape Photography, Editing Techniques, DSLR Handling.",
  career: "Photographer, Photo Editor, Event Photographer.",
  difficulty: "Easy to Moderate",
  duration: "1 year"
},

"Diploma in Animation": {
  study: "2D/3D Animation, Character Design, Storyboarding, Visual Effects, Animation Software.",
  career: "Animator, VFX Artist, Motion Graphic Designer.",
  difficulty: "Moderate",
  duration: "1 to 2 years"
},

"Diploma in Fashion Designing": {
  study: "Fashion Illustration, Garment Construction, Textile Science, Pattern Making, Fashion Marketing.",
  career: "Fashion Designer, Fashion Illustrator, Boutique Owner.",
  difficulty: "Moderate",
  duration: "1 to 2 years"
},

"Diploma in Interior Designing": {
  study: "Design Principles, Space Planning, CAD, Lighting & Color Theory, Interior Materials.",
  career: "Interior Designer, Space Planner, Design Consultant.",
  difficulty: "Moderate",
  duration: "1 to 2 years"
},

"Diploma in Office Management": {
  study: "Office Administration, Communication Skills, Computer Applications, Accounting Basics, HR Functions.",
  career: "Office Manager, Executive Assistant, Administrative Officer.",
  difficulty: "Easy to Moderate",
  duration: "1 year"
},

"Diploma in Retail Management": {
  study: "Retail Operations, Customer Relationship, Merchandising, Inventory Control, Store Management.",
  career: "Retail Manager, Store Supervisor, Sales Executive.",
  difficulty: "Moderate",
  duration: "1 to 2 years"
},

"Diploma in Hotel Management": {
  study: "Food Production, Housekeeping, Front Office, Hospitality Management, Hotel Accounting.",
  career: "Hotel Manager, Front Office Executive, F&B Supervisor.",
  difficulty: "Moderate",
  duration: "2 to 3 years"
},

"Diploma in Event Management": {
  study: "Event Planning, Budgeting, Marketing, Hospitality, Logistics & Coordination.",
  career: "Event Manager, Wedding Planner, Corporate Event Coordinator.",
  difficulty: "Moderate",
  duration: "1 year"
},

"Diploma in Travel and Tourism": {
  study: "Tourism Principles, Travel Agency Operations, Ticketing, Tourism Marketing, Customer Service.",
  career: "Travel Consultant, Tour Guide, Reservation Executive.",
  difficulty: "Moderate",
  duration: "1 to 2 years"
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
  