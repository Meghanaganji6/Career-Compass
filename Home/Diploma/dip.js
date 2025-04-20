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
    'Diploma in Mechanical Engineering': {
      study: 'Thermodynamics, Mechanics, Manufacturing Processes.',
      career: 'Mechanical Technician, CAD Designer, Supervisor.',
      difficulty: 'Medium',
      duration: '3 Years'
    },
    'Diploma in Civil Engineering': {
      study: 'Construction, Structural Engineering, Surveying.',
      career: 'Site Supervisor, Junior Engineer, CAD Draftsman.',
      difficulty: 'Medium',
      duration: '3 Years'
    },
    'Diploma in Computer Science': {
      study: 'Programming, Networking, Database Management.',
      career: 'IT Support, Junior Developer, Technician.',
      difficulty: 'Medium',
      duration: '3 Years'
    },
  
    // ITI Trades
    'Electrician': {
      study: 'Electrical Circuits, Wiring, Safety Protocols.',
      career: 'Electrician, Electrical Technician.',
      difficulty: 'Low-Medium',
      duration: '1-2 Years'
    },
    'Fitter': {
      study: 'Fitting Tools, Assembling, Workshop Practice.',
      career: 'Fitter Technician, Plant Operator.',
      difficulty: 'Medium',
      duration: '1-2 Years'
    },
    'Welder': {
      study: 'Welding Techniques, Safety Measures.',
      career: 'Welder, Fabrication Technician.',
      difficulty: 'Medium',
      duration: '1-2 Years'
    },
  
    // Engineering Pathways
    'Lateral Entry to B.Tech': {
      study: 'Advanced Engineering Concepts based on Diploma.',
      career: 'Engineering Graduate, Specialized Fields.',
      difficulty: 'High',
      duration: '3 Years (after Diploma)'
    },
    'Apprenticeships & Internships': {
      study: 'Practical Exposure, Industry Projects.',
      career: 'Hands-on Technician, Industrial Training.',
      difficulty: 'Varies',
      duration: '6 Months - 1 Year'
    },
  
    // Creative & Design Courses
    'Diploma in Fashion Designing': {
      study: 'Textile Science, Fashion Illustration, Apparel Design.',
      career: 'Fashion Designer, Stylist, Boutique Owner.',
      difficulty: 'Medium',
      duration: '1-2 Years'
    },
    'Diploma in Graphic Design': {
      study: 'Design Tools, Typography, Branding.',
      career: 'Graphic Designer, UI/UX Assistant.',
      difficulty: 'Medium',
      duration: '1-2 Years'
    },
    'Diploma in Animation': {
      study: '2D/3D Animation, VFX, Multimedia Tools.',
      career: 'Animator, Video Editor, Game Artist.',
      difficulty: 'Medium',
      duration: '1-2 Years'
    },
  
    // Hospitality & Tourism
    'Diploma in Hotel Management': {
      study: 'Food & Beverage, Front Office, Hospitality Management.',
      career: 'Hotel Staff, Front Desk Manager.',
      difficulty: 'Medium',
      duration: '1-3 Years'
    },
    'Diploma in Tourism Studies': {
      study: 'Travel Planning, Cultural Studies.',
      career: 'Tour Guide, Travel Executive.',
      difficulty: 'Low',
      duration: '1-3 Years'
    },
  
    // Healthcare & Services
    'Diploma in Nursing Assistant': {
      study: 'Basic Nursing, Patient Care, First Aid.',
      career: 'Nursing Assistant, Home Health Aide.',
      difficulty: 'Medium',
      duration: '1-2 Years'
    },
    'Diploma in Medical Lab Technology': {
      study: 'Lab Testing, Diagnostics, Pathology.',
      career: 'Lab Technician, Medical Lab Assistant.',
      difficulty: 'Medium',
      duration: '1-2 Years'
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
  