
const exams = [
  // After 10th Exams
  { name: "AP POLYCEt",full_form:"Andhra Pradesh Polytechnic Common Entrance Test",eligibility:"Completed 10th grade (SSC) from Andhra Pradesh", level: "After 10th", stream: "Engineering", type: "Govt", description:"Admission to diploma courses in engineering and non-engineering fields and Offers entry into various polytechnic colleges in AP" ,career_paths: "Diploma Engineer, Technician, Further studies in engineering",link:" https://polycetap.nic.in"},
  { name: "JEECUP",full_form:"Joint Entrance Examination Council Uttar Pradesh",eligibility:"Completed 10th grade from Uttar Pradesh",level:"After 10th",stream:"Engineering",type:"Govt",description:"Admission to diploma courses in engineering, technology, and management and Entry into polytechnic institutions in UP",career_paths:"Diploma Engineer, Technician, Further studies in engineering",link:" https://jeecup.admissions.nic.in"},
  { name: "Sainik Schools",full_form:"Sainik Schools Entrance Examination",eligibility:"Boys aged 10–12 years, studying in 6th grade", level: "After 10th", stream: "Defense", type: "Govt", description: "Admission to Sainik Schools for military-oriented education and Focuses on discipline and leadership training",career_paths:"Preparation for NDA, Military Officer" ,link:"https://aissee.nta.nic.in"},
  {name:"RIMC",full_form:"Rashtriya Indian Military College Entrance Exam",eligibility:"Boys aged 11.5–13 years, studying in 7th grade",level:"After 10th",stream:"Defense",type:"Govt",description:"Admission to RIMC for military training and education and Emphasizes all-round development and leadership",career_paths:"Preparation for NDA, Military Officer",link:"https://rimc.gov.in"},
  {name:"Military Schools",full_form:"Military Schools Common Entrance Test",eligibility:"Boys aged 10–12 years, studying in 6th grade",level:"After 10th",stream:"Defense",type:"Govt",description:"Admission to Military Schools for defense-oriented education and Provides holistic education with military training",career_paths:"Preparation for NDA, Military Officer",link:" https://www.rashtriyamilitaryschools.edu.in"},
  { name: "ITI Admissions",full_form:"Industrial Training Institutes",eligibility:"Completed 10th grade", level: "After 10th", stream: "Vocational", type: "Govt", description: "Admission to various vocational training programs andOffers diverse trades like electrician, fitter, welder, etc..",career_paths:"Skilled Technician, Tradesman, Employment in industries",link:" https://ncvtmis.gov.in" },
  { name: "NTSE",full_form:"National Talent Search Examination",eligibility:"10th-grade students", level: "After 10th", stream: "Commerce", type: "Private", description: "Scholarship program to identify and nurture talented students and Two-stage exam: State and National levels",career_paths:"Scholarship for higher studies, Recognition" ,link:"https://ncert.nic.in"},
  { name: "NMMS",full_form:"National Means-cum-Merit Scholarship",eligibility:"8th-grade students from economically weaker sections",level: "After 10th", stream: "Arts", type: "Private", description: "Financial assistance for continued education and Scholarship of ₹12,000 per annum",career_paths:"Scholarship for higher studies, Recognition",link:"https://scholarships.gov.in"},
  { name: "Navodaya Vidyalaya (Class 11 Entry)",full_form:"Jawahar Navodaya Vidyalaya Selection Test",eligibility:"Completed 10th grade", level: "After 10th", stream: "Engineering", type: "Private", description: "Admission to Class 11 in Navodaya Vidyalayas and Focus on rural talent and holistic development",career_paths:"Quality education in rural areas, Preparation for competitive exams",link:"https://navodaya.gov.in" },
  { name: "NIOS",full_form:"National Institute of Open Schooling",eligibility:"No formal qualification required; flexible entry", level: "After 10th", stream: "Design", type: "Abroad", description: "Flexible learning for continued education and Offers flexibility in learning pace and subject choice",career_paths:"Continued education, Skill development",link:"https://nios.ac.in" },

  // After 12th Exams (Engineering & Medical)
  { name: "JEE Main",full_form:"Joint Entrance Examination – Main",eligibility:"12th PCM", level: "After 12th", stream: "Engineering", type: "Govt", description: "Admission to NITs, IIITs, some GFTIs" ,career_paths:"B.Tech, B.Arch, Engineering",link:" https://jeemain.nta.nic.in"},
  { name: "JEE Advanced",full_form:"Joint Entrance Examination – Advanced",eligibility:"Qualified in JEE Main (top rank)",level: "After 12th", stream: "Engineering", type: "Govt", description: "For admission to IITs",career_paths:"B.Tech, Dual Degrees in IITs",link:"https://jeeadv.ac.in" },
  { name: "BITSAT",full_form:"Birla Institute of Technology and Science Admission Test",eligibility:"12th PCM", level: "After 12th", stream: "Engineering", type: "Private", description: "Birla Institute of Technology and Science Admission Test",career_paths:"B.E., B.Pharm., M.Sc.",link:"https://www.bitsadmission.com" },
  { name: "VITEEE",full_form:"Vellore Institute of Technology Engineering Entrance Exam",eligibility:"12th PCM", level: "After 12th", stream: "Engineering", type: "Private", description: "VIT Engineering Entrance Examination",career_paths:"B.Tech",link:"https://viteee.vit.ac.in" },
 
  { name: "SRMJEEE",full_form:"SRM Joint Engineering Entrance Examination",eligibility:"12th PCM", level: "After 12th", stream: "Engineering", type: "Private", description: "SRM University Engineering Entrance Exam",career_paths:"B.Tech",link:"https://www.srmist.edu.in/admission-india" },
  { name: "COMEDK",full_form:"Consortium of Medical, Engineering and Dental Colleges of Karnataka",eligibility:"12th PCM", level: "After 12th", stream: "Engineering", type: "Govt", description: "Admission to private engineering colleges in Karnataka and Open to all India students",career_paths:"B.Tech, B.Arch",link:"https://www.comedk.org" },
  { name: "NEET-UG",full_form:"National Eligibility cum Entrance Test – UG",eligibility:"12th PCB", level: "After 12th", stream: "Medical", type: "Govt", description: "Admission to MBBS, BDS, BAMS, BHMS, etc." ,career_paths:"Doctor, Dentist, AYUSH, Veterinary",link:" https://neet.nta.nic.in"},
  { name: "ICAR AIEEA",full_form:"Indian Council of Agricultural Research Entrance",eligibility:"12th PCB / PCM", level: "After 12th", stream: "Agriculture", type: "Govt", description: "Admission to agriculture, horticulture, fisheries, etc. and Seats in top agri universities",career_paths:"B.Sc. Agri., Vet., Horti, Fisheries",link:"https://icar.nta.nic.in" },

  // Commerce & Management Exams
  { name: "CUET",full_form:"Common University Entrance Test for admission to central universities",eligibility:"12th any stream", level: "After 12th", stream: "Commerce", type: "Govt", description: "Admission to UG courses in central universities and Language + domain subjects + general test",career_paths:"BA, BSc, BCom, BBA, etc.",link:"https://cuet.samarth.ac.in" },
  { name: "IPMAT",full_form:"Integrated Program in Management Aptitude Test",eligibility:"12th any stream", level: "After 12th", stream: "Commerce", type: "Govt", description: "Admission to IIM Indore, IIM Rohtak and Aptitude + English + Personal Interview" ,career_paths:"5-Year BBA+MBA at IIMs",link:"https://www.iimidr.ac.in"},
  { name: "NPAT",full_form:"NMIMS Programs After Twelfth",eligibility:"12th any stream", level: "After 12th", stream: "Commerce", type: "Private", description: "Admission to NMIMS BBA, B.Sc. Finance, etc. and Business and finance-focused programs",career_paths:"BBA, B.Com, B.Sc. Finance",link:"https://nmims.edu/npat" },
  { name: "SET",full_form:"Symbiosis Entrance Test",eligibility:"12th any stream", level: "After 12th", stream: "Commerce", type: "Govt", description:"Admission to BBA, BCA, etc. at Symbiosis and Includes Writing Ability Test (WAT) sometimes",career_paths:"BBA, BCA, Liberal Arts",link:" https://www.set-test.org" },
  { name: "Christ Entrance",full_form:"Christ University Entrance Test",eligibility:"12th any stream", level: "After 12th", stream: "Commerce", type: "Aboard", description: "Admission to BBA, B.Com, etc. and Also includes Micro presentation and Interview" ,career_paths:"commerce, Management",link:"https://christuniversity.in"},
  {name:"CA Foundation",full_form:"Chartered Accountant – Foundation Level",eligibility:"12th pass (any stream, preferably Commerce)",level:"After Graduation",stream:"Finance",type:"Govt",description:"Entry-level exam for becoming a Chartered Accountant and Conducted twice a year (May, Nov); subjects include Accounts, Law, Math, Economics",career_paths:"CA Article Assistant → Chartered Accountant → CFO, Auditor, Tax Consultant",link:" https://www.icai.org/post/foundation-course"},
  {name:"CA Intermediate",full_form:"Chartered Accountant – Intermediate Level",eligibility:"Passed CA Foundation / Commerce Graduation",level:"After Graduation",stream:"Finance",type:"Govt",description:"Next stage toward becoming a CA and Includes 8 papers; students also undergo 3 years of articleship training ",career_paths:"Works in audit, tax, accounts, consultancy",link:"https://www.icai.org/post/intermediate-course"},
  {name:"CA Final",full_form:"Chartered Accountant – Final Level",eligibility:"Completed CA Inter + Articleship",level:"After Graduation",stream:"Finance",type:"Govt",description:"Final exam for qualifying as CA and Subjects: Financial Reporting, Strategic Finance, Taxation, etc.",career_paths:"Independent practice, join firms/companies, CFO role",link:"https://www.icai.org/post/final-course-new-scheme-of-education-and-training"},

  // Arts/Humanities Exams
  { name: "CUET",full_form:"Common University Entrance Test for Humanities programs",eligibility:"12th any stream", level: "After 12th", stream: "Arts", type: "Govt", description: "Admission to UG courses in central universities and Language + domain subjects + general test",career_paths:"BA, BSc, BCom, BBA, etc.",link:"https://cuet.samarth.ac.in" },
  { name: "TISS BAT", level: "After 12th", stream: "Arts", type: "Private", description: "Tata Institute of Social Sciences (Bachelors Admission Test)",link:"https://admissions.tiss.edu" },
  { name: "Ashoka/Flame University Entrances",full_form:"Individual Univ. Assessments",eligibility:"12th any stream", level: "After 12th", stream: "Arts", type: "Aboard", description: "Admission to liberal arts universities and Includes SOP, interviews, aptitude, etc.",career_paths:"Interdisciplinary education", link:"https://www.ashoka.edu.in"},

  // Law Exams
  { name: "CLAT",full_form:"Common Law Admission Test for National Law Universities",eligibility:"12th any stream", level: "After 12th", stream: "Law", type: "Govt", description: "Admission to NLUs and top law schools and Top-tier law colleges across India" ,career_paths:"BA LLB",link:" https://consortiumofnlus.ac.in"},
  { name: "AILET",full_form:"All India Law Entrance Test for National Law University Delhi",eligibility:"12th any stream", level: "After 12th", stream: "Law", type: "Govt", description: "Admission to Alliance University Law and Private university entrance",career_paths:"BA LLB,BBA LLB",link:"https://nationallawuniversitydelhi.in"},
  { name: "LSAT-India",full_form:"Law School Admission Test for various law schools",eligibility:"12th any stream", level: "After 12th", stream: "Law", type: "Govt", description: " Admission to law schools (non-NLUs and Logical reasoning based entrance",career_paths:"BA LLB, LLB",link:"https://www.discoverlaw.in"},

  // Defense Exams
  { name: "NDA",full_form:"National Defence Academy",eligibility:"12th PCM", level: "After 12th", stream: "Defense", type: "Govt", description: "Entry into Indian Army/Navy/Air Force and SSB + Written test; service commission",career_paths:"Military Officer",link:"https://upsc.gov.in" },
  { name: "Indian Navy B.Tech",full_form:"Indian Navy B.Tech Entry Scheme",eligibility:"12th PCM", level: "After 12th", stream: "Defense", type: "Govt", description: "Direct SSB call + Technical training and Based on JEE Main scores",career_paths:"Naval Technical Officer",link:"https://www.joinindiannavy.gov.in" },
  { name: "Military School",full_form:"Military College of Telecommunication Engineering Entrance",eligibility:"12th PCM or Equivalent", level: "After 12th", stream: "Defense", type: "Private", description: "Entry into military engineering colleges and Focus on Communication & Tech roles",career_paths:"B.Tech + Army Officer Training",link:"https://www.rashtriyamilitaryschools.edu.in" },

  // Design & Architecture
  { name: "NID DAT",full_form:"National Institute of Design - Design Aptitude Test",eligibility:"12th any stream", level: "After 12th", stream: "Design", type: "Govt", description: "Admission to NID UG programs and Two phases: Prelims + Mains (Studio Test)",career_paths:"Product Designer, UI/UX, Visual Arts",link:" https://admissions.nid.edu" },
  { name: "UCEED",full_form:"Undergraduate Common Entrance Exam for Design",eligibility:"12th any stream", level: "After 12th", stream: "Design", type: "Govt", description: "Admission to IITs’ B.Des programs and Portfolio and visual thinking-based",career_paths:"Designer, Creative Technologist" ,link:"https://www.uceed.iitb.ac.in"},
  { name: "NIFT",full_form:"National Institute of Fashion Technology Exam",eligibility:"12th any stream", level: "After 12th", stream: "Design", type: "Private", description: "Admission to B.Des, B.FTech and GAT + CAT + Situation Test",career_paths:"Fashion Designer, Textile Tech, Merchandising",link:"https://www.nift.ac.in" },
  { name: "NATA",full_form:"National Aptitude Test in Architecture",eligibility:"12th PCM + Math", level: "After 12th", stream: "Architecture", type: "Govt", description: "Admission to B.Arch and Drawing + Aptitude + Math",career_paths:"Architect, Urban Planner" ,link:"https://www.nata.in"},

  // Post Graduation Exams (Law, Medical, Civil Services)
  { name: "UPSC CSE",full_form:"Union Public Service Commission Civil Services Examination",eligibility:"Graduation (any stream)", level: "After Graduation", stream: "Civil Services", type: "Govt", description: "Recruitment for IAS, IPS, IFS, IRS, etc. and Includes Prelims, Mains, and Interview",career_paths:"Top Govt. Officer roles",link:"https://upsc.gov.in" },
  { name: "NEET PG",full_form:"National Eligibility cum Entrance Test – PG",eligibility:"12th PCB", level: "After Graduation", stream: "Medical", type: "Govt", description: "Admission to MBBS, BDS, BAMS, BHMS, etc. and Gateway to all medical colleges in India" ,career_paths:"Doctor, Dentist, AYUSH, Veterinary",link:"https://nbe.edu.in"},
  { name: "CLAT PG",full_form:"Common Law Admission Test – PG	",eligibility:"LLB", level: "After Graduation", stream: "Law", type: "GOVT", description: "Admission to LLM programs and Also used for PSU legal jobs (e.g., ONGC, BHEL)",career_paths:"Legal Research, Academia",link:" https://consortiumofnlus.ac.in" },
  { name: "AILET PG",full_form:"Alliance University LLM Entrance",eligibility:"LLB",level: "After Graduation", stream: "Law", type: "Govt", description: "All India Law Entrance Test for Postgraduate law programs and Focus on corporate law, legal tech ",career_paths:"Lawyer, LLM, Legal Analyst",link:"https://nationallawuniversitydelhi.in" },
  { name: " GATE",full_form:"Graduate Aptitude Test in Engineering",eligibility:"B.Tech/B.E./M.Sc", level:"After Graduation",stream:"Engineering",type:"Govt",description:"M.Tech, ME, MS admissions, PSU recruitment and GATE score valid for 3 years; used by DRDO, ISRO, IOCL, etc.",career_paths:"postgraduate Engineering, Scientist, PSU Officer",link:"https://gate2025.iitr.ac.in"},
  // Banking & Insurance
  { name: "IBPS PO",full_form:"Institute of Banking Personnel Selection – Probationary Officer",eligibility:"Graduation (any stream)", level: "After Graduation", stream: "Banking", type: "Govt", description: "Recruitment of Probationary Officers (PO) in Public Sector Banks and Selection via Prelims, Mains, and Interview. Covers 11 public sector banks.",career_paths:"Bank PO (Management trainee → Branch Manager → AGM → GM)",link:"https://ibps.in" },
  {name:"IBPS Clerk",full_form:"Institute of Banking Personnel Selection – Clerk",eligibility:"Graduation",level:"After Graduation",stream:"Banking",type:"Govt",description:"Recruitment of Clerks/Assistants in PSBs and Focus on accuracy and speed. No interview for clerical posts",career_paths:"Clerk → Officer via internal exams",link:"https://ibps.in"},
  {name:"IBPS SO",full_form:"Institute of Banking Personnel Selection – Specialist Officer",eligibility:"Graduation in relevant fields (IT, HR, Law, Marketing, Agriculture)",level:"After Graduation",stream:"Banking",type:"Govt",description:"Recruitment of Specialist Officers and Roles: IT Officer, HR Officer, Marketing Officer, Law Officer, Agriculture Field Officer, etc.",career_paths:"specialist Officers in domain like IT, HR, Law etc.",link:"https://ibps.in"},
  { name: "SBI PO",full_form:"State Bank of India – Probationary Officer",eligibility:"Graduation", level: "After Graduation", stream: "Banking", type: "Govt", description: "Recruitment of PO in SBI and Prestigious post; includes psychometric tests & GD after mains.",career_paths:"SBI PO → Manager → AGM → DGM → GM",link:"https://sbi.co.in" },
  {name:"SBI Clerk",full_form:"State Bank of India – Junior Associate",eligibility:"Graduation",level:"After Graduation",strean:"Banking",type:"Govt",description:"Recruitment of clerical staff in SBI and Includes local language test. High competition due to perks & job security.",career_paths:"Clerical to Officer (via promotion)",link:"https://sbi.co.in"},

  // Management Exams
  { name: "CAT",full_form:"Common Admission Test",eligibility:"Graduation", level: "After Graduation", stream: "Management", type: "Govt", description: " MBA admissions in IIMs and top MBA colleges and Includes QA, DILR, VARC sections; highly competitive ",career_paths:"Manager, Consultant, Entrepreneur",link:"https://iimcat.ac.in" },
  { name: "XAT",full_form:"Xavier Aptitude Test",eligibility:"Graduation", level: "After Graduation", stream: "Management", type: "Govt", description: "Admission to XLRI and 160+ colleges and Includes Decision Making section",career_paths:"HR, Strategy, Operations",link:"https://xatonline.in" },
  { name: "SNAP",full_form:"Symbiosis National Aptitude Test",eligibility:"Graduation", level: "After Graduation", stream: "Management", type: "Govt", description: "Admission to Symbiosis institutes for MBA and Faster-paced exam, moderate difficulty",career_paths:"MBA, Marketing, HR",link:"https://www.snaptest.org" },

  { name: "CTET",full_form:"Central/State Teacher Eligibility Test",eligibility:"B.Ed + Graduation",level: "After Graduation",stream: "Teaching", type: "Govt",description: "Eligibility for school teaching positions",career_paths:"Govt. School Teacher",link:"https://ctet.nic.in"},
  {name: "TET (State Wise)",full_form:"Teacher Eligibility Test",eligibility:"B.ED +graduation",level: "After Graduation",stream: "Teaching",type: "Govt",description: "Eligibility for school teaching positions",career_paths:"Govt. School Teache",link:"https://aptet.apcfss.in" },
  {name: "UGC NET",full_form:"University Grants Commission National Eligibility Test",eligibility:"PG in relevant subject",level: "Post Graduation",stream: "Teaching",type: "Govt",description: "Eligibility for Assistant Professor, JRF and Two papers: General & Subject-specific",career_paths:"Researcher, Professor",link:"https://ugcnet.nta.nic.in"},
  {name: "KVS Exam",full_form:"Kendriya Vidyalaya Sangathan Exam",eligibility:"Graduation + B.Ed",level: "After Graduation",stream: "Teaching",type: "Govt",description: "Recruitment for KVS teachers and Includes demo, interview & written exam",career_paths:"PGT, TGT, PRT Teacher in KVS",link:"https://kvsangathan.nic.in"},
  {name: "CSIR-UGC NET",full_form:" Council of Scientific and Industrial Research-University Grants Commission National Eligibility Test",eligibility:"M.Sc. or Equivalent",level: "Post Graduation",stream: "Science",type: "Research",description: "Eligibility for JRF, Lectureship in science and Used in top research labs & institutions",career_paths:"Research, PhD, Teaching",link:"https://csirnet.nta.nic.in"},
  {name: "ICMR JRF",full_form:"Indian Council of Medical Research - JRF Exam",eligibility:"M.Sc./MA in basic science",level: "Post Graduation",stream: "Medical",type: "Research",description: " Junior Research Fellowship and Stipend-based research entry",career_paths:"Medical & Life Sciences Research",link:"https://main.icmr.nic.in" },
  {name: "IELTS",full_form:"International English Language Testing System",eligibility:"No formal eligibility",level: "After 12th",stream: "Language Proficiency",type: "Abroad",description: "English proficiency for UK, Canada, Aus, etc. and Academic & General modules",career_paths:"Study Abroad, Work Abroad",link:"https://www.ielts.org"},
  {name: "TOEFL",full_form:"Test of English as a Foreign Language",eligibility:"No formal eligibility",level: "After 12th",stream: "Language Proficiency",type: "Abroad", description: "English proficiency for USA, Canada, etc.",career_paths:"Study Abroad",link:"https://www.ets.org/toefl"},
  {name: "GRE",full_form:"Graduate Record Examination",eligibility:"Graduation",level: "After Graduation",stream: "Language Proficiency",type: "Abroad", description: "MS, PhD admissions abroad and Verbal, Quant, AWA",career_paths:"STEM & Business in US, EU",link:"https://www.ets.org/gre" },
  {name: "BARC",full_form:"Bhabha Atomic Research Centre Exam",eligibility:"B.Tech/B.Sc/M.Sc",level: "After Graduation",stream: "Engineering",type: "Research",description: "Scientific Officer Training (OCES/DGFS) and Selection based on GATE or BARC test + Interview",career_paths:"Scientist at BARC or other DAE units",link:"https://www.barc.gov.in/careers" },
  {name: "GMAT",full_form:"Graduate Management Admission Test",eligibility:"Graduation", level: "After Graduation",stream: "Management",type: "Abroad",description: "Global MBA admissions and Adaptive difficulty format",career_paths:"Business schools abroad & India",link:" https://www.mba.com"},
  {name: "SAT",full_form:"Scholastic Assessment Test",eligibility:"12th or equivalent",level: "After 12th",stream: "General",type: "Abroad",description: "UG admission to US/foreign universities and Used for scholarships abroad",career_paths:"Liberal Arts, Engineering,",link:"https://satsuite.collegeboard.org/sat"}
            
];
// ===== main script =====
const examList = document.getElementById("examList"); 
const search = document.getElementById("searchInput");
const level = document.getElementById("level");
const stream = document.getElementById("stream");
const type = document.getElementById("type");

let selectedExams = [];

function displayExams(data) {
  examList.innerHTML = "";
  data.forEach((exam, idx) => {
    const card = document.createElement("div");
    card.className = "exam-card";
    card.innerHTML = `
      <div class="exam-title">🎓 ${exam.name}</div>
      <div class="exam-details">
        <p><strong>Full Form:</strong> ${exam.full_form}</p>
        <p><strong>Eligibility:</strong> ${exam.eligibility}</p>
        <p><strong>Level:</strong> ${exam.level}</p>
        <p><strong>Stream:</strong> ${exam.stream}</p>
        <p><strong>Type:</strong> ${exam.type}</p>
        <p><strong>Career Paths:</strong> ${exam.career_paths}</p>
        <button onclick="toggleMore(${idx})">🔎 Expand More</button>
        <div id="more-${idx}" class="more-details" style="display:none;">
          <p><strong>Description:</strong> ${exam.description}</p>
          ${exam.link ? `<p><a href="${exam.link}" target="_blank">🔗 Official Site</a></p>` : ""}
        </div>
        <button onclick="addToCompare(${idx})">📊 Compare</button>
      </div>`;
    examList.appendChild(card);
  });
}

function toggleMore(i) {
  const more = document.getElementById(`more-${i}`);
  more.style.display = more.style.display === "none" ? "block" : "none";
}

function addToCompare(i) {
  const ex = exams[i];
  if (!selectedExams.includes(ex)) selectedExams.push(ex);
  if (selectedExams.length === 2) showComparePopup();
}

// ✅ Fixed version of showComparePopup
function showComparePopup() {
  const popup = document.createElement("div");
  popup.className = "compare-popup";
  popup.innerHTML = `
    <div class="compare-box">
      <h2>📊 Compare Exams</h2>
      <div class="compare-columns">
        ${selectedExams.map(ex => `
          <div class="compare-column">
            <h3>${ex.name}</h3>
            <p><strong>Level:</strong> ${ex.level}</p>
            <p><strong>Stream:</strong> ${ex.stream}</p>
            <p><strong>Type:</strong> ${ex.type}</p>
            <p><strong>Description:</strong> ${ex.description}</p>
          </div>`).join("")}
      </div>
      <button onclick="closeCompare()">❌ Close</button>
    </div>`;

  // Floating style so it stays above footer
  popup.style.position = "fixed";
  popup.style.top = "10%";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.zIndex = "9999";
  popup.style.background = "#fff";
  popup.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
  popup.style.borderRadius = "10px";
  popup.style.padding = "20px";
  popup.style.maxWidth = "90%";
  popup.style.width = "600px";

  document.body.appendChild(popup);
}

function closeCompare() {
  document.querySelector(".compare-popup").remove();
  selectedExams = [];
}

function filterExams() {
  const s = search.value.toLowerCase();
  const L = level.value;
  const S = stream.value;
  const T = type.value;

  const filtered = exams.filter(ex =>
    (ex.name.toLowerCase().includes(s) || (ex.full_form && ex.full_form.toLowerCase().includes(s))) &&
    (!L || ex.level === L) &&
    (!S || ex.stream === S) &&
    (!T || ex.type === T)
  );

  // Display only the exams that match, and stop rendering more after footer
  if (filtered.length > 0) {
    displayExams(filtered);
  } else {
    // If no exams match, just show the footer and nothing else
    examList.innerHTML = `
      <div class="exam-card">
        <p>No exams found. Please try a different search.</p>
      </div>`;
  }
}

// Add event listeners for input changes
search.addEventListener("input", filterExams);
level.addEventListener("change", filterExams);
stream.addEventListener("change", filterExams);
type.addEventListener("change", filterExams);

// initial render
displayExams(exams);