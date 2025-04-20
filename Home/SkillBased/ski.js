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
  
  // Course details (updated with all branches)
  const courseDetails = {
    'Bachelor of Fine Arts (BFA)': {
      study: 'Painting, Sculpture, Applied Arts, Visual Arts Theory.',
      career: 'Fine Artist, Art Teacher, Art Director.',
      difficulty: 'Medium-High',
      duration: '3-4 Years'
    },
    'Graphic Designing': {
      study: 'Photoshop, Illustrator, Typography, Layout Design.',
      career: 'Graphic Designer, UI/UX Designer, Brand Designer.',
      difficulty: 'Medium',
      duration: '6 Months - 1 Year'
    },
    'Animation and Multimedia': {
      study: '2D/3D Animation, Visual Effects, Multimedia Design.',
      career: 'Animator, VFX Artist, Multimedia Developer.',
      difficulty: 'Medium',
      duration: '1 Year'
    },
    'Bachelor of Performing Arts': {
      study: 'Theatre, Dance, Music, Performance Techniques.',
      career: 'Actor, Dancer, Musician, Performance Artist.',
      difficulty: 'Medium',
      duration: '3-4 Years'
    },
    'Dance and Choreography': {
      study: 'Dance Forms, Choreography, Dance Theory.',
      career: 'Choreographer, Dance Teacher, Performer.',
      difficulty: 'Medium',
      duration: '1 Year'
    },
    'Music Production': {
      study: 'Music Theory, Audio Engineering, Sound Design.',
      career: 'Music Producer, Sound Engineer, Composer.',
      difficulty: 'High',
      duration: '1 Year'
    },
    'Bachelor of Computer Application (BCA)': {
      study: 'Programming, Data Structures, Computer Networks.',
      career: 'Software Developer, Web Developer, IT Specialist.',
      difficulty: 'Medium-High',
      duration: '3 Years'
    },
    'Bachelor of Technology (B.Tech)': {
      study: 'Engineering Principles, Computer Science, Electronics.',
      career: 'Software Engineer, Hardware Engineer, Systems Architect.',
      difficulty: 'High',
      duration: '4 Years'
    },
    'Software Engineering': {
      study: 'Software Design, Development Methodologies, Programming Languages.',
      career: 'Software Engineer, Application Developer, Systems Analyst.',
      difficulty: 'High',
      duration: '3-4 Years'
    },
    'Digital Marketing & SEO': {
      study: 'SEO, SEM, Content Strategy, Analytics.',
      career: 'SEO Specialist, Digital Marketing Manager, Content Strategist.',
      difficulty: 'Medium',
      duration: '6-12 Months'
    },
    'Social Media Marketing': {
      study: 'Social Media Strategy, Content Creation, Analytics.',
      career: 'Social Media Manager, Content Strategist, Brand Manager.',
      difficulty: 'Medium',
      duration: '6-12 Months'
    },
    'Full Stack Web Development': {
      study: 'HTML, CSS, JavaScript, Backend technologies (Node.js, Django), APIs.',
      career: 'Full Stack Developer, Web Developer, Backend Developer.',
      difficulty: 'Medium-High',
      duration: '1 Year'
    },
    'Front-end Web Development': {
      study: 'HTML, CSS, JavaScript, React, UI/UX Design.',
      career: 'Frontend Developer, Web Designer, UI Developer.',
      difficulty: 'Medium',
      duration: '6-12 Months'
    },
    'Back-end Web Development': {
      study: 'Server-side Programming, Node.js, Databases, API Development.',
      career: 'Backend Developer, Database Administrator, Server Engineer.',
      difficulty: 'Medium-High',
      duration: '6-12 Months'
    },
    'Event Management': {
      study: 'Event Planning, Logistics, Marketing, Budgeting.',
      career: 'Event Planner, Event Coordinator, Wedding Planner.',
      difficulty: 'Medium',
      duration: '6 Months - 1 Year'
    },
    'Wedding Planning': {
      study: 'Event Design, Coordination, Budgeting, Vendor Management.',
      career: 'Wedding Planner, Event Coordinator, Event Consultant.',
      difficulty: 'Medium',
      duration: '6 Months'
    },
    'Bachelor of Hotel Management': {
      study: 'Hotel Operations, Hospitality Management, Customer Service.',
      career: 'Hotel Manager, Resort Manager, Event Planner.',
      difficulty: 'Medium',
      duration: '3-4 Years'
    },
    'Bachelor of Tourism Studies': {
      study: 'Tourism Management, Travel Agencies, Tourism Economics.',
      career: 'Tourism Manager, Travel Consultant, Tour Guide.',
      difficulty: 'Medium',
      duration: '3-4 Years'
    },
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
  