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
  "Chartered Accountancy (CA)": {
    study: "Accounting, Auditing, Taxation, Financial Reporting.",
    career: "Chartered Accountant, Auditor, Financial Consultant.",
    difficulty: "Very High",
    duration: "4.5 years"
  },
  "Company Secretary (CS)": {
    study: "Corporate Law, Company Governance, Business Ethics.",
    career: "Company Secretary, Legal Advisor, Compliance Officer.",
    difficulty: "High",
    duration: "3-4 years"
  },
  "Cost and Management Accountancy (CMA)": {
    study: "Cost Accounting, Financial Management, Strategic Planning.",
    career: "Cost Accountant, Finance Manager, Analyst.",
    difficulty: "High",
    duration: "3-4 years"
  },
  "Bachelor of Law (LLB)": {
    study: "Legal Systems, Criminal Law, Civil Law, Constitutional Law.",
    career: "Lawyer, Legal Advisor, Public Prosecutor.",
    difficulty: "High",
    duration: "3 years (after graduation) or 5 years (integrated)"
  },
  "Bachelor of Education (B.Ed)": {
    study: "Pedagogy, Educational Psychology, Teaching Methodologies.",
    career: "Teacher, Education Consultant, School Administrator.",
    difficulty: "Moderate",
    duration: "2 years"
  },
  "Bachelor of Business Administration (BBA)": {
    study: "Business Management, Marketing, HR, Finance.",
    career: "Business Analyst, Marketing Executive, HR Manager.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "Master of Business Administration (MBA)": {
    study: "Business Strategy, Leadership, Economics, Operations.",
    career: "Manager, Entrepreneur, Consultant.",
    difficulty: "High",
    duration: "2 years"
  },
  "Bachelor of Hotel Management (BHM)": {
    study: "Hospitality, Food Production, Housekeeping, Event Planning.",
    career: "Hotel Manager, Event Planner, Chef.",
    difficulty: "Moderate",
    duration: "3-4 years"
  },
  "Bachelor of Fine Arts (BFA)": {
    study: "Painting, Sculpture, Art History, Aesthetics.",
    career: "Artist, Art Director, Illustrator.",
    difficulty: "Moderate",
    duration: "4 years"
  },
  "Bachelor of Design (B.Des)": {
    study: "Industrial Design, Fashion, UX/UI, Interior Design.",
    career: "Designer, Creative Director, UX Specialist.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Bachelor of Journalism and Mass Communication (BJMC)": {
    study: "Journalism, Media Ethics, Advertising, Broadcasting.",
    career: "Journalist, News Anchor, Content Creator.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "Bachelor of Social Work (BSW)": {
    study: "Social Work Theories, Psychology, Community Development.",
    career: "Social Worker, NGO Executive, Counselor.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "Master of Social Work (MSW)": {
    study: "Advanced Social Work Practice, Research, Policy Analysis.",
    career: "Clinical Social Worker, Policy Analyst, Social Advocate.",
    difficulty: "Moderate to High",
    duration: "2 years"
  },
  "Bachelor of Library and Information Science (BLISc)": {
    study: "Library Management, Cataloging, Information Systems.",
    career: "Librarian, Information Analyst, Archivist.",
    difficulty: "Easy to Moderate",
    duration: "1 year"
  },
  "Bachelor of Physical Education (B.P.Ed)": {
    study: "Sports Science, Physical Fitness, Kinesiology.",
    career: "Physical Education Teacher, Coach, Fitness Trainer.",
    difficulty: "Moderate",
    duration: "2 years"
  },
  "Bachelor of Event Management": {
    study: "Event Planning, Marketing, Hospitality, Logistics.",
    career: "Event Manager, Wedding Planner, Public Relations Officer.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "Bachelor of Fashion Technology": {
    study: "Fashion Design, Textiles, Pattern Making, Merchandising.",
    career: "Fashion Designer, Apparel Technologist, Fashion Buyer.",
    difficulty: "Moderate to High",
    duration: "4 years"
  },
  "Bachelor of Animation & Multimedia": {
    study: "Animation, Visual Effects, Graphic Design, Storyboarding.",
    career: "Animator, VFX Artist, Multimedia Designer.",
    difficulty: "Moderate",
    duration: "3-4 years"
  },
  "Bachelor of Audiology and Speech-Language Pathology (BASLP)": {
    study: "Audiology, Speech Disorders, Language Development.",
    career: "Audiologist, Speech Therapist, Clinical Specialist.",
    difficulty: "High",
    duration: "4 years"
  },
  "Bachelor of Rehabilitation Therapy": {
    study: "Rehabilitation Science, Physical Therapy, Assistive Technology.",
    career: "Rehabilitation Therapist, Physiotherapist, Care Coordinator.",
    difficulty: "Moderate",
    duration: "3-4 years"
  },
 "Business Administration": {
    study: "Management principles, leadership, organizational behavior, business law.",
    career: "Business Manager, Operations Manager, Management Consultant.",
    difficulty: "Medium",
    duration: "3 years"
  },
  "Finance": {
    study: "Financial accounting, investment analysis, corporate finance, risk management.",
    career: "Financial Analyst, Investment Banker, Accountant.",
    difficulty: "High",
    duration: "3 years"
  },
  "Marketing": {
    study: "Consumer behavior, market research, branding, digital marketing.",
    career: "Marketing Manager, Brand Strategist, SEO Analyst.",
    difficulty: "Medium",
    duration: "3 years"
  },
  "Human Resource Management": {
    study: "Recruitment, training & development, labor laws, organizational psychology.",
    career: "HR Manager, Talent Acquisition Specialist, Employee Relations Officer.",
    difficulty: "Medium",
    duration: "3 years"
  },
  "International Business": {
    study: "Global trade, international finance, cross-cultural management, global marketing.",
    career: "International Trade Analyst, Global Business Manager, Export Manager.",
    difficulty: "Medium",
    duration: "3 years"
  },
  "Supply Chain & Logistics": {
    study: "Procurement, logistics, inventory management, supply chain technology.",
    career: "Supply Chain Analyst, Logistics Manager, Operations Planner.",
    difficulty: "Medium",
    duration: "3 years"
  },
  "Entrepreneurship": {
    study: "Startup development, innovation, venture capital, business modeling.",
    career: "Entrepreneur, Startup Consultant, Business Developer.",
    difficulty: "Medium",
    duration: "3 years"
  },
  "Hospitality & Tourism Management": {
    study: "Hotel operations, tourism economics, service management, event planning.",
    career: "Hotel Manager, Travel Consultant, Event Manager.",
    difficulty: "Low to Medium",
    duration: "3 years"
  },
  "Project Management": {
    study: "Project planning, budgeting, risk analysis, project lifecycle.",
    career: "Project Manager, PMO Analyst, Risk Manager.",
    difficulty: "Medium",
    duration: "3 years"
  },
  "Business Analytics": {
    study: "Data analysis, business intelligence, statistics, data visualization.",
    career: "Business Analyst, Data Analyst, BI Consultant.",
    difficulty: "High",
    duration: "3 years"
  },
  "B.A. Economics": {
    study: "Microeconomics, Macroeconomics, Economic Theory, Development Economics.",
    career: "Economist, Policy Analyst, Economic Consultant.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "B.Sc. Economics": {
    study: "Quantitative Economics, Statistics, Econometrics, Game Theory.",
    career: "Economic Analyst, Statistician, Research Economist.",
    difficulty: "High",
    duration: "3 years"
  },
  "B.Com Economics": {
    study: "Commerce, Trade, Financial Accounting, Economic Theory.",
    career: "Financial Analyst, Auditor, Business Consultant.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "B.A. Financial Economics": {
    study: "Economics, Finance, Investment Analysis, Risk Management.",
    career: "Financial Economist, Risk Analyst, Investment Advisor.",
    difficulty: "High",
    duration: "3 years"
  },
  "B.Sc. Financial Mathematics": {
    study: "Mathematics, Statistics, Financial Modeling, Derivatives.",
    career: "Quant Analyst, Actuary, Financial Engineer.",
    difficulty: "Very High",
    duration: "3 years"
  },
  "B.Com Finance": {
    study: "Finance, Banking, Investment, Corporate Accounting.",
    career: "Accountant, Finance Manager, Credit Analyst.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "BBA Finance": {
    study: "Business Administration, Financial Management, Budgeting, Investment.",
    career: "Finance Executive, Business Analyst, Banker.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "B.Sc. Banking & Finance": {
    study: "Banking Systems, Finance Principles, Risk Assessment, Capital Markets.",
    career: "Banker, Financial Analyst, Compliance Officer.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "B.A. Public Finance": {
    study: "Public Economics, Fiscal Policy, Taxation, Government Budgeting.",
    career: "Public Policy Advisor, Budget Analyst, Tax Consultant.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  "B.Sc. Quantitative Finance": {
    study: "Mathematics, Statistics, Financial Engineering, Risk Modeling.",
    career: "Quant Trader, Data Analyst, Portfolio Manager.",
    difficulty: "Very High",
    duration: "3 years"
  },
 "B.Com Accounting": {
  study: "Financial Accounting, Cost Accounting, Corporate Law, Economics.",
  career: "Accountant, Auditor, Financial Analyst.",
  difficulty: "Moderate",
  duration: "3 years"
},

"B.Com Taxation": {
  study: "Income Tax, Indirect Tax, Auditing, Financial Management.",
  career: "Tax Consultant, Tax Auditor, Finance Officer.",
  difficulty: "Moderate",
  duration: "3 years"
},

"BBA Accounting & Taxation": {
  study: "Business Accounting, Tax Laws, Corporate Finance, Management.",
  career: "Business Analyst, Tax Advisor, Accountant.",
  difficulty: "Moderate",
  duration: "3 years"
},

"B.Com (Hons) Accounting & Finance": {
  study: "Advanced Accounting, Finance Management, Investment Analysis.",
  career: "Financial Planner, Chartered Accountant, Finance Manager.",
  difficulty: "High",
  duration: "3 years"
},

"B.Sc. Accounting": {
  study: "Accounting Principles, Statistics, Data Analysis, Finance.",
  career: "Accountant, Data Analyst, Budget Analyst.",
  difficulty: "Moderate",
  duration: "3 years"
},

"B.Com Accounting & Auditing": {
  study: "Auditing, Taxation, Corporate Accounting, Law.",
  career: "Internal Auditor, External Auditor, Compliance Officer.",
  difficulty: "Moderate",
  duration: "3 years"
},

"B.Com Professional Accounting": {
  study: "Professional Ethics, Accounting Standards, Business Laws.",
  career: "Chartered Accountant, Finance Executive, Auditor.",
  difficulty: "High",
  duration: "3 years"
},

"B.Com Banking & Taxation": {
  study: "Banking Operations, Taxation Policies, Risk Management.",
  career: "Bank Officer, Tax Specialist, Finance Executive.",
  difficulty: "Moderate",
  duration: "3 years"
},

"B.Com Corporate Accounting": {
  study: "Corporate Laws, Mergers, Consolidation, Advanced Accounting.",
  career: "Corporate Accountant, Finance Manager, Analyst.",
  difficulty: "Moderate",
  duration: "3 years"
},

"B.Com Applied Taxation": {
  study: "Practical Tax Applications, GST, International Taxation.",
  career: "Tax Consultant, GST Practitioner, Financial Officer.",
  difficulty: "Moderate",
  duration: "3 years"
},

"BHM (Bachelor of Hotel Management)": {
      study: "Hotel operations, food and beverage management, front office, housekeeping, hospitality laws.",
    career: "Hotel Manager, Hospitality Consultant, F&B Manager, Event Coordinator.",
    difficulty: "Moderate",
    duration: "3-4 years"
  },
"B.Sc in Hospitality and Hotel Administration": {
    study: "Food production, housekeeping, front office, food and beverage service, hotel accountancy.",
    career: "Hotel Administrator, Cruise Line Executive, Hospitality Trainer.",
    difficulty: "Moderate",
    duration: "3 years"
  },
"BBA in Hospitality Management": {
    study: "Business management with hospitality, marketing, service operations, customer relations.",
    career: "Hospitality Manager, Resort Operations Manager, Event Planner.",
    difficulty: "Moderate",
    duration: "3 years"
  },
"B.Sc in Culinary Arts": {
    study: "Culinary techniques, kitchen management, food science, nutrition, world cuisines.",
    career: "Chef, Culinary Instructor, Food Stylist.",
    difficulty: "Moderate",
    duration: "3 years"
  },
"B.A. in Travel and Tourism Management": {
    study: "Travel operations, tour planning, travel law, tourism marketing, geography.",
    career: "Travel Consultant, Tour Operator, Travel Agency Manager.",
    difficulty: "Low to Moderate",
    duration: "3 years"
  },
"B.Sc in Airlines, Tourism & Hospitality Management": {
    study: "Aviation hospitality, tourism studies, travel management, customer service.",
    career: "Airline Staff, Travel Executive, Hospitality Officer.",
    difficulty: "Moderate",
    duration: "3 years"
  },
"BBA in Tourism and Travel Management": {
    study: "Tourism business, logistics, destination planning, travel documentation.",
    career: "Tour Manager, Destination Marketer, Travel Entrepreneur.",
    difficulty: "Moderate",
    duration: "3 years"
  },
  
"B.Sc Hotel and Catering Management": {
    study: "Catering technology, hotel operations, hygiene standards, food service management.",
    career: "Catering Manager, Banquet Manager, Food Service Director.",
    difficulty: "Moderate",
    duration: "3 years"
  },
"B.A. in Hospitality Management": {
    study: "Hospitality principles, service quality, HR in hospitality, facilities management.",
    career: "Guest Relations Manager, Resort Coordinator, Concierge Supervisor.",
    difficulty: "Low to Moderate",
    duration: "3 years"
  },
"B.Sc Resort and Event Management": {
    study: "Event planning, resort operations, recreation management, hospitality marketing.",
    career: "Event Manager, Resort Manager, Conference Planner.",
    difficulty: "Moderate",
    duration: "3 years"
  },
"Corporate Law": {
  study: "Business contracts, mergers, acquisitions, and regulations.",
  career: "Corporate lawyer, legal advisor, in-house counsel.",
  difficulty: "High",
  duration: "3-5 years"
},
"Criminal Law": {
  study: "Crime, legal procedures, defense strategies, and sentencing.",
  career: "Criminal defense lawyer, prosecutor, legal consultant.",
  difficulty: "High",
  duration: "3-5 years"
},
"International Law": {
  study: "Laws governing relations between countries, human rights, and treaties.",
  career: "Diplomat, international lawyer, human rights advocate.",
  difficulty: "High",
  duration: "3-5 years"
},
"Intellectual Property Law": {
  study: "Copyrights, patents, trademarks, and licensing.",
  career: "IP lawyer, patent attorney, legal consultant.",
  difficulty: "Medium-High",
  duration: "3-5 years"
},
"Family Law": {
  study: "Marriage, divorce, child custody, and family disputes.",
  career: "Family lawyer, mediator, legal advisor.",
  difficulty: "Medium",
  duration: "3-5 years"
},
"Environmental Law": {
  study: "Environmental protection, regulations, and sustainability issues.",
  career: "Environmental lawyer, policy advisor, consultant.",
  difficulty: "Medium",
  duration: "3-5 years"
},
"Constitutional Law": {
  study: "The structure of government, rights, and constitutional principles.",
  career: "Constitutional lawyer, legal scholar, public policy expert.",
  difficulty: "High",
  duration: "3-5 years"
},
"Educational Leadership": {
  study: "Administration, leadership, school management, and educational policies.",
  career: "School administrator, educational consultant, principal.",
  difficulty: "Medium",
  duration: "2-4 years"
},
"Curriculum and Instruction": {
  study: "Development, design, and implementation of curricula.",
  career: "Curriculum designer, education consultant, teacher trainer.",
  difficulty: "Medium",
  duration: "2-3 years"
},
"Special Education": {
  study: "Teaching methods and support strategies for students with disabilities.",
  career: "Special education teacher, education counselor, support specialist.",
  difficulty: "Medium",
  duration: "2-4 years"
},
"Educational Technology": {
  study: "Integration of technology in teaching, e-learning tools, and digital resources.",
  career: "EdTech developer, instructional designer, online learning consultant.",
  difficulty: "Medium",
  duration: "2-3 years"
},
"Psychology of Education": {
  study: "Understanding of how psychology impacts learning and educational environments.",
  career: "School counselor, educational psychologist, researcher.",
  difficulty: "Medium",
  duration: "2-4 years"
},
"Higher Education Administration": {
  study: "University operations, student services, and academic policies.",
  career: "University administrator, student affairs coordinator, dean.",
  difficulty: "Medium",
  duration: "2-4 years"
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
