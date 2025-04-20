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
  
  // Course details (Arts stream content)
  const courseDetails = {
    // Fine Arts & Design
    'Bachelor of Fine Arts (BFA)': {
      study: 'Painting, Sculpture, Animation, Graphic Design, Art History.',
      career: 'Artist, Graphic Designer, Animator, Illustrator.',
      difficulty: 'Medium',
      duration: '3-4 Years'
    },
    'Bachelor of Design (B.Des)': {
      study: 'Fashion Design, Product Design, Interior Design, Visual Communication.',
      career: 'Fashion Designer, Product Designer, Interior Designer.',
      difficulty: 'Medium-High',
      duration: '3-4 Years'
    },
    'Animation & Multimedia': {
      study: '3D Animation, Visual Effects, Game Design, Digital Art.',
      career: 'Animator, Game Developer, Visual Effects Artist.',
      difficulty: 'High',
      duration: '3 Years'
    },
  
    // Performing Arts
    'Music and Dance': {
      study: 'Classical Music, Dance Forms, Performance Studies.',
      career: 'Performer, Musician, Dance Instructor, Choreographer.',
      difficulty: 'High',
      duration: '3 Years'
    },
    'Theatre & Drama': {
      study: 'Acting, Theatre Production, Stage Design, Drama Literature.',
      career: 'Actor, Theatre Director, Stage Designer, Drama Instructor.',
      difficulty: 'High',
      duration: '3 Years'
    },
    'Film & TV Production': {
      study: 'Cinematography, Screenwriting, Directing, Film Editing.',
      career: 'Film Director, Cinematographer, Film Editor, Scriptwriter.',
      difficulty: 'High',
      duration: '3-4 Years'
    },
  
    // Social Sciences & Law
    'BA LLB': {
      study: 'Law, Political Science, History, Sociology.',
      career: 'Lawyer, Legal Advisor, Advocate.',
      difficulty: 'High',
      duration: '5 Years'
    },
    'UPSC/State PSC': {
      study: 'General Studies, Political Science, Law, Economy.',
      career: 'Civil Servant, Government Officer.',
      difficulty: 'Very High',
      duration: 'Varies'
    },
    'Judiciary Exams': {
      study: 'Indian Penal Code, Civil Procedure Code, Law of Evidence.',
      career: 'Judge, Magistrate, Legal Professional.',
      difficulty: 'High',
      duration: 'Varies'
    },
  
    // Humanities & Research
    'BA in Psychology/Sociology/History': {
      study: 'Human Behavior, Cognitive Psychology, Sociology, History.',
      career: 'Psychologist, Sociologist, Historian, Researcher.',
      difficulty: 'Medium',
      duration: '3 Years'
    },
    'Social Work (BSW/MSW)': {
      study: 'Social Welfare, Community Development, Human Rights.',
      career: 'Social Worker, NGO Worker, Counselor.',
      difficulty: 'Medium',
      duration: '3-5 Years'
    },
    'Anthropology/Political Science': {
      study: 'Anthropology, Political Theory, Public Policy.',
      career: 'Anthropologist, Political Analyst, Researcher.',
      difficulty: 'Medium-High',
      duration: '3 Years'
    },
  
    // Journalism & Mass Communication
    'BA Journalism & Mass Comm.': {
      study: 'Journalism, Media Studies, Advertising, Public Relations.',
      career: 'Journalist, Reporter, Editor, Media Consultant.',
      difficulty: 'Medium-High',
      duration: '3 Years'
    },
    'Film & Media Studies': {
      study: 'Film Theory, Media Production, Digital Communication.',
      career: 'Film Critic, Media Analyst, Producer, Director.',
      difficulty: 'Medium-High',
      duration: '3 Years'
    },
    'Content Writing & Digital Media': {
      study: 'Content Creation, Digital Marketing, SEO, Social Media Management.',
      career: 'Content Writer, SEO Expert, Digital Marketer.',
      difficulty: 'Medium',
      duration: '3 Years'
    },
  
    // Languages & Education
    'BA in English, Hindi, etc.': {
      study: 'Literature, Language, Linguistics, Translation.',
      career: 'Teacher, Translator, Writer, Editor.',
      difficulty: 'Medium',
      duration: '3 Years'
    },
    'Foreign Languages (French, Spanish)': {
      study: 'Foreign Language Grammar, Translation, Cultural Studies.',
      career: 'Translator, Language Instructor, Diplomat.',
      difficulty: 'Medium-High',
      duration: '3 Years'
    },
    'B.Ed / Teaching': {
      study: 'Education Theory, Pedagogy, Curriculum Development.',
      career: 'Teacher, Academic Counselor, Education Consultant.',
      difficulty: 'Medium',
      duration: '2-4 Years'
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
  