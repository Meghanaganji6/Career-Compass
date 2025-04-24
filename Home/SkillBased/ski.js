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
    
    "Fine Arts": {
  "study": "Painting, Sculpture, Drawing, Printmaking, Visual Arts.",
  "career": "Artist, Art Teacher, Curator, Gallery Manager.",
  "difficulty": "Moderate",
  "duration": "3-4 years"
},
"Graphic Design": {
  "study": "Visual Communication, Typography, Digital Media, Branding.",
  "career": "Graphic Designer, Art Director, Visual Designer.",
  "difficulty": "Moderate",
  "duration": "3-4 years"
},
"Animation": {
  "study": "2D Animation, 3D Animation, Visual Effects, Storyboarding.",
  "career": "Animator, Visual Effects Artist, Game Designer.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Interior Design": {
  "study": "Space Planning, Furniture Design, Color Theory, Lighting.",
  "career": "Interior Designer, Space Planner, Consultant.",
  "difficulty": "Moderate",
  "duration": "3-4 years"
},
"Photography": {
  "study": "Cinematography, Digital Photography, Visual Storytelling, Editing.",
  "career": "Photographer, Photojournalist, Commercial Photographer.",
  "difficulty": "Moderate",
  "duration": "3 years"
},
"Textile Design": {
  "study": "Fabric Design, Textile Materials, Weaving, Dyeing.",
  "career": "Textile Designer, Fashion Designer, Surface Designer.",
  "difficulty": "Moderate",
  "duration": "3-4 years"
},
"Sculpture": {
  "study": "Modeling, Carving, Casting, Public Art, Mixed Media.",
  "career": "Sculptor, Installation Artist, Art Teacher.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Industrial Design": {
  "study": "Product Design, Ergonomics, Materials, Prototyping.",
  "career": "Industrial Designer, Product Developer, Consultant.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Game Design": {
  "study": "Game Mechanics, Storytelling, Interactive Media, Programming.",
  "career": "Game Designer, Game Developer, Level Designer.",
  "difficulty": "High",
  "duration": "3-4 years"
},
"Multimedia Arts": {
  "study": "Video Production, Graphic Design, Animation, Web Design.",
  "career": "Multimedia Artist, Web Developer, Motion Graphics Designer.",
  "difficulty": "Moderate",
  "duration": "3-4 years"
},
"Dance": {
    "study": "Choreography, Dance Techniques, Movement Theory, Performance Art.",
    "career": "Dancer, Choreographer, Dance Instructor, Performance Artist.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Music": {
    "study": "Music Theory, Instrumental Techniques, Vocal Training, Music Composition.",
    "career": "Musician, Composer, Music Teacher, Sound Engineer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Theater": {
    "study": "Acting, Stagecraft, Theater History, Playwriting.",
    "career": "Actor, Director, Playwright, Theater Producer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Film & Television Production": {
    "study": "Cinematography, Film Editing, Screenwriting, Direction.",
    "career": "Filmmaker, Cinematographer, Screenwriter, Film Director.",
    "difficulty": "High",
    "duration": "3 years"
},
"Voice Training": {
    "study": "Vocal Techniques, Voice Control, Speech Therapy, Breathwork.",
    "career": "Voice Artist, Speech Coach, Opera Singer, Radio Host.",
    "difficulty": "Moderate",
    "duration": "2-3 years"
},
"Stage Management": {
    "study": "Stage Coordination, Event Planning, Technical Theater, Production Management.",
    "career": "Stage Manager, Production Assistant, Event Coordinator.",
    "difficulty": "Moderate",
    "duration": "3 years"
},
"Theater Design": {
    "study": "Set Design, Costume Design, Lighting Design, Stage Technology.",
    "career": "Theater Designer, Stage Technologist, Set Decorator.",
    "difficulty": "High",
    "duration": "3 years"
},
"Musical Theater": {
    "study": "Singing, Acting, Dancing, Musical Performance.",
    "career": "Musical Theater Performer, Director, Choreographer.",
    "difficulty": "High",
    "duration": "3 years"
},
"Drama & Performance Studies": {
    "study": "Drama Theory, Performance Art, Directing, Acting Techniques.",
    "career": "Actor, Director, Performance Scholar, Drama Educator.",
    "difficulty": "High",
    "duration": "3 years"
},
"Comedy & Improvisation": {
    "study": "Improv Techniques, Stand-up Comedy, Sketch Writing, Timing and Delivery.",
    "career": "Comedian, Improviser, Sketch Writer, Comedy Director.",
    "difficulty": "Moderate",
    "duration": "2-3 years"
},
"Frontend Development": {
    "study": "HTML, CSS, JavaScript, frameworks like React and Angular.",
    "career": "Frontend Developer, UI/UX Designer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Backend Development": {
    "study": "Server-side programming languages, databases, APIs.",
    "career": "Backend Developer, API Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Full Stack Development": {
    "study": "Both frontend and backend technologies.",
    "career": "Full Stack Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Mobile App Development": {
    "study": "iOS/Android development, React Native, Swift, Kotlin.",
    "career": "Mobile App Developer, iOS Developer, Android Developer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"DevOps": {
    "study": "Continuous integration, cloud services, infrastructure automation.",
    "career": "DevOps Engineer, System Administrator.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Game Development": {
    "study": "C++, Unity, Unreal Engine, 3D modeling.",
    "career": "Game Developer, Game Designer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Data Science": {
    "study": "Python, data analysis, machine learning, statistics.",
    "career": "Data Scientist, Machine Learning Engineer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Cybersecurity": {
    "study": "Network security, encryption, ethical hacking.",
    "career": "Security Analyst, Ethical Hacker.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Artificial Intelligence & Machine Learning": {
    "study": "Algorithms, neural networks, deep learning.",
    "career": "AI Engineer, ML Engineer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Cloud Computing": {
    "study": "Cloud platforms (AWS, Azure, Google Cloud), virtualization.",
    "career": "Cloud Architect, Cloud Engineer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Quality Assurance (QA) Testing": {
    "study": "Manual and automated testing, test scripts, debugging.",
    "career": "QA Engineer, Test Automation Engineer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Blockchain Development": {
    "study": "Cryptography, decentralized applications, smart contracts.",
    "career": "Blockchain Developer, Solidity Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Frontend Development": {
    "study": "HTML, CSS, JavaScript, frameworks like React and Angular.",
    "career": "Frontend Developer, UI/UX Designer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Backend Development": {
    "study": "Server-side programming languages, databases, APIs.",
    "career": "Backend Developer, API Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Full Stack Development": {
    "study": "Both frontend and backend technologies.",
    "career": "Full Stack Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Mobile App Development": {
    "study": "iOS/Android development, React Native, Swift, Kotlin.",
    "career": "Mobile App Developer, iOS Developer, Android Developer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"DevOps": {
    "study": "Continuous integration, cloud services, infrastructure automation.",
    "career": "DevOps Engineer, System Administrator.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Game Development": {
    "study": "C++, Unity, Unreal Engine, 3D modeling.",
    "career": "Game Developer, Game Designer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Data Science": {
    "study": "Python, data analysis, machine learning, statistics.",
    "career": "Data Scientist, Machine Learning Engineer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Cybersecurity": {
    "study": "Network security, encryption, ethical hacking.",
    "career": "Security Analyst, Ethical Hacker.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Artificial Intelligence & Machine Learning": {
    "study": "Algorithms, neural networks, deep learning.",
    "career": "AI Engineer, ML Engineer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Cloud Computing": {
    "study": "Cloud platforms (AWS, Azure, Google Cloud), virtualization.",
    "career": "Cloud Architect, Cloud Engineer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Quality Assurance (QA) Testing": {
    "study": "Manual and automated testing, test scripts, debugging.",
    "career": "QA Engineer, Test Automation Engineer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Blockchain Development": {
    "study": "Cryptography, decentralized applications, smart contracts.",
    "career": "Blockchain Developer, Solidity Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Search Engine Optimization (SEO)": {
    "study": "Keyword research, on-page and off-page SEO, link building.",
    "career": "SEO Specialist, SEO Analyst.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Content Marketing": {
    "study": "Content strategy, blogging, copywriting, video content.",
    "career": "Content Marketing Manager, Copywriter.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Social Media Marketing": {
    "study": "Social media platforms, content creation, audience engagement.",
    "career": "Social Media Manager, Community Manager.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Pay-Per-Click (PPC) Advertising": {
    "study": "Google Ads, Bing Ads, paid campaigns, bid strategies.",
    "career": "PPC Specialist, SEM Specialist.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Email Marketing": {
    "study": "Email campaigns, automation, A/B testing, email segmentation.",
    "career": "Email Marketing Specialist, Campaign Manager.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Affiliate Marketing": {
    "study": "Affiliate programs, partnership management, tracking tools.",
    "career": "Affiliate Manager, Affiliate Marketer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Influencer Marketing": {
    "study": "Influencer partnerships, brand collaboration, campaign strategies.",
    "career": "Influencer Marketing Manager, Social Media Strategist.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Digital Analytics": {
    "study": "Google Analytics, data analysis, reporting, tracking KPIs.",
    "career": "Data Analyst, Digital Marketing Analyst.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Online Public Relations (PR)": {
    "study": "Reputation management, media relations, press releases.",
    "career": "PR Specialist, Digital PR Manager.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Conversion Rate Optimization (CRO)": {
    "study": "A/B testing, website optimization, user experience.",
    "career": "CRO Specialist, UX/UI Analyst.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Video Marketing": {
    "study": "Video production, YouTube SEO, video ads.",
    "career": "Video Marketing Specialist, Video Producer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"E-commerce Marketing": {
    "study": "E-commerce platforms, product listings, sales funnels.",
    "career": "E-commerce Manager, E-commerce Marketing Specialist.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Frontend Development": {
    "study": "HTML, CSS, JavaScript, frameworks like React and Angular.",
    "career": "Frontend Developer, UI/UX Designer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Backend Development": {
    "study": "Server-side programming, databases, APIs.",
    "career": "Backend Developer, API Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Full Stack Development": {
    "study": "Both frontend and backend technologies.",
    "career": "Full Stack Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Web Design": {
    "study": "UI/UX design principles, wireframes, design tools.",
    "career": "Web Designer, UI/UX Designer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Web Animation & Interaction": {
    "study": "CSS animations, JavaScript, interactive elements.",
    "career": "Frontend Developer, Web Animator.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Mobile Web Development": {
    "study": "Responsive design, mobile-first approach, mobile frameworks.",
    "career": "Mobile Web Developer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"E-commerce Web Development": {
    "study": "E-commerce platforms, payment gateways, product listings.",
    "career": "E-commerce Developer, Web Developer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Content Management Systems (CMS)": {
    "study": "WordPress, Joomla, Drupal, content publishing.",
    "career": "CMS Developer, Web Developer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Web Security": {
    "study": "HTTPS, encryption, web vulnerabilities, security protocols.",
    "career": "Web Security Specialist, Security Engineer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Web Performance Optimization": {
    "study": "Website speed, caching, load time optimization.",
    "career": "Web Performance Engineer, Frontend Developer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Web APIs & Integrations": {
    "study": "API integration, REST, SOAP, third-party services.",
    "career": "Backend Developer, API Developer.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Progressive Web Apps (PWA)": {
    "study": "Service workers, offline capabilities, app-like experiences.",
    "career": "PWA Developer, Mobile Developer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Event Management Fundamentals": {
    "study": "Event logistics, budgeting, venue management, vendor coordination.",
    "career": "Event Manager, Event Coordinator, Wedding Planner.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Corporate Event Planning": {
    "study": "Corporate meetings, conferences, team-building activities, corporate branding.",
    "career": "Corporate Event Planner, Conference Coordinator.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Wedding Planning": {
    "study": "Wedding designs, vendor negotiations, timelines, cultural traditions.",
    "career": "Wedding Planner, Bridal Consultant.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Event Marketing & Promotion": {
    "study": "Event advertising, sponsorship, social media strategies, PR campaigns.",
    "career": "Event Marketing Specialist, PR Manager.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Destination Event Planning": {
    "study": "Destination selection, travel coordination, accommodation, cultural experiences.",
    "career": "Destination Event Planner, Travel Coordinator.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Non-Profit Event Planning": {
    "study": "Fundraising events, donor engagement, volunteer coordination, community outreach.",
    "career": "Non-Profit Event Planner, Fundraising Coordinator.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Event Design & Décor": {
    "study": "Event themes, decorations, floral arrangements, lighting, set design.",
    "career": "Event Designer, Set Designer, Floral Designer.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Virtual Event Planning": {
    "study": "Online platforms, virtual event technology, audience engagement.",
    "career": "Virtual Event Planner, Online Conference Coordinator.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Entertainment Management for Events": {
    "study": "Talent booking, event entertainment, audiovisual setup, stage management.",
    "career": "Entertainment Coordinator, Stage Manager.",
    "difficulty": "Medium",
    "duration": "6 months to 1 year"
},
"Sports Event Management": {
    "study": "Event logistics for sports, team coordination, sponsorship, crowd control.",
    "career": "Sports Event Manager, Athletic Coordinator.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Hotel Management": {
    "study": "Hotel operations, guest services, hospitality law, food and beverage management.",
    "career": "Hotel Manager, Front Desk Manager, Concierge.",
    "difficulty": "Medium",
    "duration": "3 to 4 years"
},
"Event Management in Hospitality": {
    "study": "Event planning, venue management, catering, client relations.",
    "career": "Event Planner, Wedding Planner, Conference Coordinator.",
    "difficulty": "Medium",
    "duration": "1 to 2 years"
},
"Tourism Management": {
    "study": "Tourism industry trends, travel logistics, sustainable tourism, marketing.",
    "career": "Tour Operator, Travel Consultant, Destination Manager.",
    "difficulty": "Medium",
    "duration": "3 to 4 years"
},
"Culinary Arts & Hospitality": {
    "study": "Cooking techniques, kitchen management, restaurant operations.",
    "career": "Chef, Restaurant Manager, Catering Manager.",
    "difficulty": "High",
    "duration": "2 to 3 years"
},
"Resort Management": {
    "study": "Resort operations, guest experiences, leisure management.",
    "career": "Resort Manager, Guest Services Manager.",
    "difficulty": "Medium",
    "duration": "3 to 4 years"
},
"Luxury Hospitality Management": {
    "study": "Luxury guest services, high-end hotel management, personalized experiences.",
    "career": "Luxury Hotel Manager, VIP Concierge.",
    "difficulty": "High",
    "duration": "2 to 3 years"
},
"Hospitality Marketing": {
    "study": "Branding, digital marketing strategies, market analysis for hospitality.",
    "career": "Marketing Manager, Digital Marketing Specialist.",
    "difficulty": "Medium",
    "duration": "1 to 2 years"
},
"Sustainable Tourism & Hospitality": {
    "study": "Green tourism, eco-friendly practices, sustainable hospitality management.",
    "career": "Sustainability Consultant, Eco-Tourism Manager.",
    "difficulty": "High",
    "duration": "1 to 2 years"
},
"Hospitality Finance & Accounting": {
    "study": "Financial management, budgeting, cost control, profit analysis.",
    "career": "Hospitality Financial Manager, Accountant, Auditor.",
    "difficulty": "High",
    "duration": "2 to 3 years"
},
"Health & Wellness Tourism": {
    "study": "Spa management, wellness tourism, holistic health practices.",
    "career": "Wellness Tourism Consultant, Spa Manager.",
    "difficulty": "Medium",
    "duration": "1 to 2 years"
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
  