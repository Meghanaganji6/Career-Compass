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
   "Painting": {
  study: "Techniques in various painting mediums, art history, and creativity.",
  career: "Artist, art teacher, art curator, art conservator.",
  difficulty: "Medium",
  duration: "3-4 years"
},
"Sculpture": {
  study: "Sculpture techniques, materials, and 3D art creation.",
  career: "Sculptor, museum curator, installation artist.",
  difficulty: "Medium",
  duration: "3-4 years"
},
"Graphic Design": {
  study: "Visual communication, typography, web design, and branding.",
  career: "Graphic designer, UX/UI designer, branding consultant.",
  difficulty: "Medium",
  duration: "3-4 years"
},
"Fashion Design": {
  study: "Fashion theory, garment construction, textiles, and trend forecasting.",
  career: "Fashion designer, fashion consultant, costume designer.",
  difficulty: "Medium",
  duration: "3-4 years"
},
"Interior Design": {
  study: "Space planning, materials, lighting, and furniture design.",
  career: "Interior designer, architect, furniture designer.",
  difficulty: "Medium",
  duration: "3-4 years"
},
"Animation": {
  study: "2D/3D animation techniques, storytelling, and character design.",
  career: "Animator, game designer, VFX artist, storyboard artist.",
  difficulty: "High",
  duration: "3-4 years"
},
"Photography": {
  study: "Techniques in digital and film photography, lighting, and editing.",
  career: "Photographer, photojournalist, editor, visual content creator.",
  difficulty: "Medium",
  duration: "3 years"
},
"Game Design": {
  study: "Game mechanics, 3D modeling, storytelling, and user experience.",
  career: "Game designer, game developer, interactive media specialist.",
  difficulty: "High",
  duration: "3-4 years"
},
"Industrial Design": {
  study: "Product design, ergonomics, and design thinking.",
  career: "Industrial designer, product developer, design consultant.",
  difficulty: "Medium-High",
  duration: "3-4 years"
},
"Illustration": {
  study: "Drawing techniques, digital illustration, and visual storytelling.",
  career: "Illustrator, book artist, comic artist, digital artist.",
  difficulty: "Medium",
  duration: "3-4 years"
},

  
    // Performing Arts
    "Dance": {
  "study": "Dance techniques, choreography, and performance.",
  "career": "Professional dancer, choreographer, dance instructor.",
  "difficulty": "Medium",
  "duration": "3-4 years"
},
"Theatre": {
  "study": "Acting, stagecraft, directing, and theatre history.",
  "career": "Actor, director, stage manager, playwright.",
  "difficulty": "Medium",
  "duration": "3-4 years"
},
"Music": {
  "study": "Music theory, instrumental techniques, voice training, and performance.",
  "career": "Musician, composer, music producer, music teacher.",
  "difficulty": "Medium",
  "duration": "3-4 years"
},
"Opera": {
  "study": "Vocal techniques, operatic performance, and music interpretation.",
  "career": "Opera singer, vocal coach, music director.",
  "difficulty": "High",
  "duration": "3-5 years"
},
"Film and Television": {
  "study": "Acting, film production, cinematography, and scriptwriting.",
  "career": "Actor, filmmaker, screenwriter, film editor.",
  "difficulty": "Medium",
  "duration": "3-4 years"
},
"Musical Theatre": {
  "study": "Acting, singing, and dancing combined for theatrical performances.",
  "career": "Musical theatre performer, director, choreographer.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Voice Acting": {
  "study": "Voice techniques, animation, dubbing, and voice-over work.",
  "career": "Voice actor, voice-over artist, sound director.",
  "difficulty": "Medium",
  "duration": "2-3 years"
},
"Circus Arts": {
  "study": "Acrobatics, juggling, clowning, and performance artistry.",
  "career": "Circus performer, acrobat, stunt performer.",
  "difficulty": "High",
  "duration": "2-4 years"
},
"Puppetry": {
  "study": "Puppet design, puppetry techniques, and performance.",
  "career": "Puppeteer, puppet designer, theatre performer.",
  "difficulty": "Medium",
  "duration": "2-4 years"
},
"Stage Management": {
  "study": "Theatre production, stage operations, and coordination.",
  "career": "Stage manager, production coordinator, event manager.",
  "difficulty": "Medium",
  "duration": "3-4 years"
},

  
    // Social Sciences & Law
    "Law (LLB)": {
  "study": "Constitutional law, criminal law, civil law, legal theory.",
  "career": "Lawyer, judge, legal advisor, legal consultant.",
  "difficulty": "High",
  "duration": "3 years"
},
"BA LLB (Integrated)": {
  "study": "Legal studies, political science, history, law subjects integrated with humanities.",
  "career": "Advocate, corporate lawyer, judge, legal analyst.",
  "difficulty": "High",
  "duration": "5 years"
},
"Criminal Law": {
  "study": "Criminal law principles, defense tactics, legal procedure, ethics.",
  "career": "Criminal lawyer, public prosecutor, defense attorney.",
  "difficulty": "High",
  "duration": "3 years"
},
"International Law": {
  "study": "International treaties, human rights, diplomacy, global legal systems.",
  "career": "International lawyer, diplomat, legal advisor to UN.",
  "difficulty": "High",
  "duration": "2-3 years"
},
"Constitutional Law": {
  "study": "Constitution, rights, governance, judicial review, interpretation of law.",
  "career": "Constitutional lawyer, judge, public policy advisor.",
  "difficulty": "High",
  "duration": "2-3 years"
},
"Human Rights Law": {
  "study": "Human rights principles, international conventions, human rights violations.",
  "career": "Human rights lawyer, NGO worker, international rights advocate.",
  "difficulty": "Medium",
  "duration": "2-3 years"
},
"Corporate Law": {
  "study": "Corporate governance, business ethics, mergers & acquisitions, tax law.",
  "career": "Corporate lawyer, in-house counsel, legal consultant.",
  "difficulty": "High",
  "duration": "3 years"
},
"Family Law": {
  "study": "Marriage, divorce, inheritance, child custody, family disputes.",
  "career": "Family lawyer, mediator, divorce attorney.",
  "difficulty": "Medium",
  "duration": "2-3 years"
},
"Taxation Law": {
  "study": "Tax regulations, corporate tax, individual tax, tax planning.",
  "career": "Tax lawyer, tax consultant, financial planner.",
  "difficulty": "High",
  "duration": "2-3 years"
},
"Civil Services Preparation": {
  "study": "General studies, aptitude, current affairs, civil law, governance.",
  "career": "IAS officer, IPS officer, IFS officer, civil servant.",
  "difficulty": "Very High",
  "duration": "1-2 years (preparation time)"
},

  
    // Humanities & Research
   "Philosophy": {
  "study": "Logic, ethics, metaphysics, epistemology, history of philosophy.",
  "career": "Philosopher, academic researcher, policy analyst, ethicist.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"History": {
  "study": "Ancient, medieval, modern history, historiography, historical research methods.",
  "career": "Historian, archivist, museum curator, researcher.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Sociology": {
  "study": "Society, social behavior, institutions, social theory, research methods.",
  "career": "Sociologist, social worker, researcher, policy advisor.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Anthropology": {
  "study": "Human evolution, cultural anthropology, archaeology, ethnography.",
  "career": "Anthropologist, archaeologist, cultural researcher.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Political Science": {
  "study": "Government systems, political theory, international relations, political behavior.",
  "career": "Political analyst, civil servant, diplomat, academic researcher.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Psychology": {
  "study": "Human behavior, cognitive processes, mental health, research methods in psychology.",
  "career": "Psychologist, counselor, researcher, human resources specialist.",
  "difficulty": "High",
  "duration": "3 years"
},
"Linguistics": {
  "study": "Language theory, phonetics, syntax, semantics, sociolinguistics.",
  "career": "Linguist, language educator, translator, researcher.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"English Literature": {
  "study": "Literary analysis, English poetry, drama, novels, literary criticism.",
  "career": "English teacher, editor, writer, literary critic.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Archaeology": {
  "study": "Ancient civilizations, excavation techniques, artifacts analysis, archaeological theory.",
  "career": "Archaeologist, museum curator, academic researcher.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Cultural Studies": {
  "study": "Culture theory, media studies, gender studies, critical theory.",
  "career": "Cultural analyst, media consultant, researcher, academic.",
  "difficulty": "Medium",
  "duration": "3 years"
},

  
    // Journalism & Mass Communication
   "Journalism": {
  "study": "Reporting, writing, editing, news gathering, media ethics.",
  "career": "Journalist, news anchor, editor, reporter.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Public Relations": {
  "study": "Media relations, crisis communication, branding, corporate communications.",
  "career": "PR specialist, communications manager, corporate spokesperson.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Advertising": {
  "study": "Marketing strategies, creative advertising, media planning, consumer behavior.",
  "career": "Advertising executive, copywriter, media planner.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Broadcast Journalism": {
  "study": "Audio-visual journalism, news production, scriptwriting, radio and TV broadcasting.",
  "career": "TV reporter, radio journalist, broadcast producer.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Digital Media": {
  "study": "Social media marketing, digital content creation, web analytics, online journalism.",
  "career": "Digital content manager, social media strategist, online journalist.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Film Studies": {
  "study": "Film history, theory, production, screenwriting, cinematography.",
  "career": "Filmmaker, screenwriter, film critic, film editor.",
  "difficulty": "High",
  "duration": "3 years"
},
"Media Studies": {
  "study": "Media theory, mass communication models, media impact, media regulation.",
  "career": "Media researcher, communication consultant, media planner.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Photography": {
  "study": "Photography techniques, photojournalism, digital imaging, visual storytelling.",
  "career": "Photographer, photojournalist, content creator.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Event Management": {
  "study": "Event planning, organizing, public relations, logistics, marketing.",
  "career": "Event manager, wedding planner, corporate event coordinator.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Communication Studies": {
  "study": "Communication theory, interpersonal communication, public speaking, media relations.",
  "career": "Communication consultant, media manager, public speaker.",
  "difficulty": "Medium",
  "duration": "3 years"
},

  
    // Languages & Education
    "English Literature": {
  "study": "Literary analysis, writing, poetry, prose, drama.",
  "career": "Teacher, writer, editor, content creator.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Linguistics": {
  "study": "Phonetics, syntax, semantics, language evolution, sociolinguistics.",
  "career": "Linguist, language analyst, translator.",
  "difficulty": "High",
  "duration": "3 years"
},
"Foreign Languages": {
  "study": "Language fluency, culture, translation, and interpretation.",
  "career": "Translator, interpreter, language teacher, diplomat.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"TESOL": {
  "study": "English language teaching methodologies, phonology, grammar, classroom management.",
  "career": "ESL teacher, language trainer, content creator.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Education Studies": {
  "study": "Educational psychology, teaching methods, curriculum development, educational policies.",
  "career": "Educator, academic advisor, curriculum developer.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Early Childhood Education": {
  "study": "Child development, teaching strategies, family engagement, early learning programs.",
  "career": "Preschool teacher, childcare manager, early childhood consultant.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Special Education": {
  "study": "Inclusive education, disability studies, assistive technologies, individualized teaching strategies.",
  "career": "Special education teacher, disability services coordinator, educational consultant.",
  "difficulty": "High",
  "duration": "3 years"
},
"Educational Psychology": {
  "study": "Learning theories, cognitive development, behavioral psychology, assessment strategies.",
  "career": "School psychologist, educational counselor, academic advisor.",
  "difficulty": "High",
  "duration": "3 years"
},
"Curriculum and Instruction": {
  "study": "Curriculum design, instructional strategies, assessment methods, teacher leadership.",
  "career": "Curriculum developer, instructional coordinator, teacher educator.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Adult Education": {
  "study": "Teaching strategies for adult learners, curriculum development, lifelong learning principles.",
  "career": "Adult education teacher, corporate trainer, education consultant.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Journalism": {
  "study": "Reporting, writing, editing, news gathering, media ethics.",
  "career": "Journalist, news anchor, editor, reporter.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Public Relations": {
  "study": "Media relations, crisis communication, branding, corporate communications.",
  "career": "PR specialist, communications manager, corporate spokesperson.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Advertising": {
  "study": "Marketing strategies, creative advertising, media planning, consumer behavior.",
  "career": "Advertising executive, copywriter, media planner.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Broadcast Journalism": {
  "study": "Audio-visual journalism, news production, scriptwriting, radio and TV broadcasting.",
  "career": "TV reporter, radio journalist, broadcast producer.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Digital Media": {
  "study": "Social media marketing, digital content creation, web analytics, online journalism.",
  "career": "Digital content manager, social media strategist, online journalist.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Film Studies": {
  "study": "Film history, theory, production, screenwriting, cinematography.",
  "career": "Filmmaker, screenwriter, film critic, film editor.",
  "difficulty": "High",
  "duration": "3 years"
},
"Media Studies": {
  "study": "Media theory, mass communication models, media impact, media regulation.",
  "career": "Media researcher, communication consultant, media planner.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Photography": {
  "study": "Photography techniques, photojournalism, digital imaging, visual storytelling.",
  "career": "Photographer, photojournalist, content creator.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Event Management": {
  "study": "Event planning, organizing, public relations, logistics, marketing.",
  "career": "Event manager, wedding planner, corporate event coordinator.",
  "difficulty": "Medium",
  "duration": "3 years"
},
"Communication Studies": {
  "study": "Communication theory, interpersonal communication, public speaking, media relations.",
  "career": "Communication consultant, media manager, public speaker.",
  "difficulty": "Medium",
  "duration": "3 years"
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
  