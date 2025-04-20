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
  'Chartered Accountancy (CA)': {
    study: 'Financial Accounting, Auditing, Taxation, Corporate Laws.',
    career: 'Chartered Accountant, Financial Analyst, Auditor.',
    difficulty: 'High',
    duration: '3-5 Years'
  },
  'Company Secretary (CS)': {
    study: 'Corporate Law, Taxation, Accounting.',
    career: 'Company Secretary, Compliance Officer.',
    difficulty: 'Medium',
    duration: '3 Years'
  },
  'Cost and Management Accountancy (CMA)': {
    study: 'Costing, Budgeting, Strategic Management.',
    career: 'Cost Accountant, Management Accountant.',
    difficulty: 'High',
    duration: '3 Years'
  },
  'BBA (Bachelor of Business Administration)': {
    study: 'Management, Marketing, HR, Finance.',
    career: 'Business Manager, HR Executive.',
    difficulty: 'Medium',
    duration: '3 Years'
  },
  'BBM (Bachelor of Business Management)': {
    study: 'Business Law, Finance, Operations.',
    career: 'Manager, Marketing Analyst.',
    difficulty: 'Medium',
    duration: '3 Years'
  },
  'MBA (Masters in Business Administration)': {
    study: 'Advanced Business, Management, Leadership.',
    career: 'Business Consultant, Senior Manager.',
    difficulty: 'High',
    duration: '2 Years'
  },
  'BA/B.Sc Economics': {
    study: 'Microeconomics, Macroeconomics, Econometrics.',
    career: 'Economist, Data Analyst.',
    difficulty: 'Medium',
    duration: '3 Years'
  },
  'Bachelor of Finance and Investment Analysis': {
    study: 'Finance, Investment, Risk Analysis.',
    career: 'Investment Banker, Portfolio Manager.',
    difficulty: 'High',
    duration: '3 Years'
  },
  'Actuarial Science': {
    study: 'Probability, Statistics, Finance.',
    career: 'Actuary, Risk Analyst.',
    difficulty: 'Very High',
    duration: '3-5 Years'
  },
  'B.Com General': {
    study: 'Accounting, Business Law, Taxation.',
    career: 'Accountant, Financial Analyst.',
    difficulty: 'Medium',
    duration: '3 Years'
  },
  'B.Com Accounting & Taxation': {
    study: 'Advanced Taxation, Auditing, GST.',
    career: 'Tax Advisor, Auditor.',
    difficulty: 'Medium',
    duration: '3 Years'
  },
  'Tax Consultant': {
    study: 'Tax Law, Financial Regulations.',
    career: 'Tax Advisor, Legal Consultant.',
    difficulty: 'Medium',
    duration: 'Varies'
  },
  'Bachelor of Hotel Management': {
    study: 'Hospitality, Customer Service, Hotel Operations.',
    career: 'Hotel Manager, Event Planner.',
    difficulty: 'Medium',
    duration: '3-4 Years'
  },
  'Tourism Studies': {
    study: 'Travel Management, Cultural Studies.',
    career: 'Tour Guide, Travel Consultant.',
    difficulty: 'Low',
    duration: '3 Years'
  },
  'BA LLB': {
    study: 'Law, Political Science, History.',
    career: 'Lawyer, Legal Advisor.',
    difficulty: 'High',
    duration: '5 Years'
  },
  'B.Ed (Bachelor of Education)': {
    study: 'Education Theory, Pedagogy.',
    career: 'Teacher, Academic Counselor.',
    difficulty: 'Low-Medium',
    duration: '2 Years'
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
