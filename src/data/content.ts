import { TargetIndustry, FounderProfile, CoreValue, ServiceCategory } from '../types';

export const COMPANY_INFO = {
  name: "Elite Vanguard Leadership Group",
  legalName: "Elite Vanguard Leadership Group LLC",
  contactPerson: "Walter",
  email: "whorton1104@yahoo.com",
  phoneRaw: "2406051962",
  phoneFormatted: "(240) 605-1962",
  phoneLink: "tel:2406051962",
  tagline: "Translating Military Principles into High-Performance Operational Excellence",
  positioning: "Luxury Executive Consulting × Veteran Leadership × Operational Excellence × Institutional Authority",

  // Verbatim Company Description (DO NOT MODIFY)
  description: "Elite Vanguard Leadership Group LLC is a veteran-led management consulting and leadership development firm dedicated to translating time-tested military principles into high-performance commercial and operational excellence. The firm specializes in bridging the critical gap between executive strategy and frontline execution, equipping organizations with the discipline, accountability, and operational precision needed to navigate complex, high-stakes environments.",

  // Verbatim Mission Statement (DO NOT MODIFY)
  mission: "To equip organizations and frontline leaders with the discipline, operational rigor, and decisive execution of battle-tested military leadership, bridging the gap between executive strategy and field performance to achieve uncompromising mission success.",

  // Verbatim Vision Statement (DO NOT MODIFY)
  vision: "To be the premier veteran-led leadership development and operational consulting partner, recognized nationwide for transforming workplace cultures, building resilient supervisors, and driving excellence across high-consequence industries and public infrastructure.",
};

// Verbatim Core Team Values (DO NOT MODIFY)
export const CORE_VALUES: CoreValue[] = [
  {
    number: "01",
    title: "Uncompromising Integrity",
    description: "Do what is right, especially when no one is watching. We build enduring trust through total transparency, ethical conduct, and keeping our word in every engagement.",
  },
  {
    number: "02",
    title: "Accountability & Execution (Own the Outcome)",
    description: "Leadership begins with personal responsibility. We believe in setting clear standards, taking absolute ownership of results, and eliminating excuses at every level of operation.",
  },
  {
    number: "03",
    title: "Lead from the Front",
    description: "Authentic authority is earned through presence, competence, and service. We train leaders who set the pace, share the burdens of their teams, and inspire by direct example rather than distant oversight.",
  },
  {
    number: "04",
    title: "Mission First, People Always",
    description: "Achieving operational objectives and taking care of personnel are not competing priorities. High-performing teams thrive when standards remain uncompromising while people are valued, mentored, and supported.",
  },
  {
    number: "05",
    title: "Decisive Adaptability",
    description: "In dynamic and high-pressure environments, clarity and composure are essential. We cultivate the discipline to assess risk quickly, make sound decisions with incomplete information, and execute with confidence.",
  },
];

// Target Audience Categories (Exact 5 Categories Provided)
export const TARGET_INDUSTRIES: TargetIndustry[] = [
  {
    id: "operations-logistics",
    title: "Mid-Market & Enterprise Operations & Logistics",
    shortLabel: "Operations & Logistics",
    description: "Bridging the strategy-execution divide across supply chains, distribution centers, fleet management, and complex multi-facility operations where timing and coordination are mission-critical.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    applications: [
      "Supply Chain & Fleet Coordination",
      "Multi-Facility Operational Rigor",
      "Shift-Level Accountability Systems",
      "Crisis Response & Bottleneck Mitigation"
    ]
  },
  {
    id: "municipal-public-sector",
    title: "Municipal, Utilities & Public Sector Agencies",
    shortLabel: "Municipal & Public Sector",
    description: "Equipping public sector administrators, water/power utility supervisors, and transit directors with structured command discipline to manage vital civic infrastructure with zero margin for error.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    applications: [
      "Public Works & Utility Supervision",
      "Inter-Agency Communication Protocols",
      "Frontline Supervisor Empowerment",
      "Public Infrastructure Reliability"
    ]
  },
  {
    id: "defense-contractors-sdvosb",
    title: "Defense Contractors & Veteran-Owned Businesses (SDVOSBs)",
    shortLabel: "Defense Contractors & SDVOSBs",
    description: "Aligning mission parameters, contract execution discipline, and executive-level governance for aerospace, defense suppliers, and Service-Disabled Veteran-Owned Small Businesses operating in regulated domains.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    applications: [
      "Mission-Centric Program Governance",
      "High-Consequence Compliance & Safety",
      "Veteran Leadership Talent Integration",
      "Cross-Functional Squad Accountability"
    ]
  },
  {
    id: "construction-engineering",
    title: "Commercial Construction, Engineering & Field Services",
    shortLabel: "Construction & Engineering",
    description: "Translating field leadership, jobsite safety accountability, and trade coordination into on-time, on-budget delivery for general contractors, MEP trades, and civil engineering teams.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsuxh6AmJvAx7IJPQdvpdtaUPm6KdMmMQn8IKfmdob-QceFcq9ltOt6A6&s=10",
    applications: [
      "Jobsite Foremen Leadership Academies",
      "Subcontractor Coordination & Standards",
      "Field Safety Culture & Zero-Defect Habits",
      "Project Recovery & High-Pressure Execution"
    ]
  },
  {
    id: "management-academies",
    title: "First-Time & Mid-Level Management Cohorts (Corporate Leadership Academies)",
    shortLabel: "Corporate Leadership Academies",
    description: "Instilling foundational command presence, active mentorship, and decisive decision-making into rising supervisors and new managers stepping up from individual contributor roles.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    applications: [
      "Transition from Contributor to Leader",
      "Decisive Decision-Making Frameworks",
      "Constructive Accountability & Feedback",
      "Frontline Team Morale & Cohesion"
    ]
  }
];

// 4 Co-Founders Architecture (Preserving Verbatim Biographies for Walter Horton & Trevor McLeod)
export const FOUNDER_PROFILES: FounderProfile[] = [
  {
    id: "walter-horton",
    name: "Walter Horton",
    role: "Co-Founder & Executive Consultant",
    badge: "U.S. Army Veteran • The Old Guard",
    // Verbatim Biography (DO NOT MODIFY)
    bio: "Leadership is foundational for Walter Horton, born from early mentorship under his father—a master’s in physical education holder—and honed across military, corporate, municipal, and entrepreneurial sectors. A decorated U.S. Army veteran, Walter earned his leadership certification in 1986 in Baumholder, West Germany, before serving as cadre in Bad Kreuznach, where he directed daily operations for 35 to 80 newly arrived troops under the command of Lt. Gen. Calvin Waller and Gen. Colin Powell. He was personally selected by Command Sergeant Major Maurice Zepeda for assignment to the prestigious 3rd U.S. Infantry Regiment (The Old Guard) at Fort Myer, serving as an escort to the President of the United States. During the summer 1987 Twilight Tattoo on The Ellipse, Walter was recognized in formation when Secretary of State George P. Shultz—serving as Honorary Reviewing Officer on behalf of President Reagan—walked the ranks to present him with the regimental crest pin. Walter seamlessly transitioned this operational discipline into the private sector, driving key initiatives for private equity firms in Washington, D.C. and New York, before serving as Supervisor of Transportation at NYC’s Jacobi Hospital, managing a 38-person team. After relocating to Maryland, he launched his own successful business enterprise and was inducted into the Rotary Club of Midtown Baltimore by his mentor, real estate mogul J.R. Owens—continuing a lifelong legacy of driving team success, accountability, and community leadership.",
    image: "./public/image/walter.jpg",
    highlights: [
      "3rd U.S. Infantry Regiment (The Old Guard) Presidential Escort",
      "Cadre Leader under Gen. Colin Powell & Lt. Gen. Calvin Waller Command",
      "President Reagan Twilight Tattoo Crest Pin Recipient (Presented by Sec. George P. Shultz)",
      "Former Supervisor of Transportation, Jacobi Hospital NYC (38-Person Team)",
      "Private Equity Operations, Washington D.C. & New York",
      "Rotary Club of Midtown Baltimore Inductee"
    ],
    isPlaceholder: false
  },
  {
    id: "trevor-mcleod",
    name: "Trevor McLeod",
    role: "Co-Founder & Operational Consultant",
    badge: "U.S. Army Veteran • IBEW Local #3 Journeyperson",
    // Verbatim Biography (DO NOT MODIFY)
    bio: "Trevor McLeod is a U.S. Army veteran, retired Local Union #3 International Brotherhood of Electrical Workers Journeyperson, and dedicated community leader defined by his service, mentorship, and work ethic. Throughout a distinguished trade career, Trevor led complex infrastructure and transit initiatives across New York City—including major projects on the Second Avenue Subway line and post-9/11 restoration at the Freedom Tower—frequently stepping up wherever skilled leadership was required. A Prince Hall Mason holding key positions such as Junior Warden and District Deputy Grand Patron, he consistently gives back by organizing annual NYC Kidney and Prostate Cancer walks, coaching championship Pop Warner youth football, and serving as a primary organizer for middle and high school job fairs. Even in retirement, Trevor leads by example within the electrical industry by proctoring journeyperson exams, interviewing apprentices, and actively guiding the next generation—including his son—toward excellence.",
    image: "./public/image/Trevor.jpg",
    highlights: [
      "U.S. Army Veteran",
      "Retired Local Union #3 IBEW Journeyperson",
      "Infrastructure Leader: Second Avenue Subway & Freedom Tower Post-9/11 Restoration",
      "Prince Hall Mason (Junior Warden & District Deputy Grand Patron)",
      "Electrical Industry Exam Proctor & Apprentice Interviewer",
      "Community Organizer: Health Walks, Pop Warner Football & Career Fairs"
    ],
    isPlaceholder: false
  },
  {
    id: "founder-03",
    name: "Henry King",
    role: "Co-Founder & Senior LeaderShip",
    badge: "Executive Leadership Profile",
    bio: "Henry King brings decades of military distinction and organizational strategy to Elite Vanguard Leadership Group. A decorated U.S. Army veteran and graduate of the Drill Sergeant School and Primary Leadership Development Course (PLDC), Henry’s military service includes the Global War on Terrorism Service Medal and the National Defense Service Medal. Holding a Bachelor of Science in Industrial-Organizational Psychology, he bridges military discipline with human behavior to build resilient teams, streamline operations, and cultivate high-performance leadership.",
    image: "./public/image/henry.png",
    highlights: [
      "Executive Operational Leadership",
      "High-Consequence Sector Strategy",
      "Frontline Program Deployment",
      "Enterprise Capability Building"
    ],
    isPlaceholder: true
  },
  {
    id: "founder-04",
    name: "Sean Norris",
    role: "Co-Founder & Strategic Operations , Banking Industry",
    badge: "Military Leader & Finance",
    bio: "Sean Norris is a distinguished leader with a career spanning over 30 years in the banking and finance industries. A graduate of St. John’s with a Master’s degree in Finance, he bridges deep financial acumen with practical operational leadership. He honed his command and tactical skills through rigorous military service and leadership development, graduating from the Primary Leadership Development Course (PLDC). Bilingual in Spanish, Sean excels in building global teams, optimizing financial performance, and driving market strategy. His military background provides him with a resilient approach to risk and organizational challenge, which he applies to create resilient operational frameworks and high-performance teams.",
    image: "./public/image/sean.jpg",
    highlights: [
      "Organizational Governance & Strategy",
      "Cross-Functional Team Mentorship",
      "Field Accountability Systems",
      "Operational Risk Mitigation"
    ],
    isPlaceholder: true
  }
];

// Service Architecture strictly based on company's stated positioning & target markets
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "leadership-development",
    title: "Leadership Development",
    subtitle: "Instilling Military-Tested Command Discipline & Executive Presence",
    overview: "We translate proven military leadership tenets into practical executive and managerial behaviors, developing leaders who communicate with clarity, lead by example, and maintain composure in high-pressure scenarios.",
    focusAreas: [
      "Executive Command Presence & Communication",
      "Decisive Decision-Making Under Ambiguity",
      "Ethical Leadership & Culture Standardization",
      "Direct Example Leadership (Lead from the Front)"
    ],
    targetAudience: "Executive Directors, Division Heads, Senior Managers",
    deliverables: [
      "Executive Leadership Assessments",
      "Interactive High-Stakes Simulation Modules",
      "Personalized Executive Coaching & Action Plans",
      "Organizational Leadership Playbooks"
    ]
  },
  {
    id: "management-consulting",
    title: "Management Consulting",
    subtitle: "Bridging the Gap Between Executive Strategy and Frontline Reality",
    overview: "Strategic plans often falter at the point of frontline execution. Our consulting engagements diagnose structural friction, streamline command-and-control communication, and install repeatable operational discipline across all organizational layers.",
    focusAreas: [
      "Strategy-to-Execution Gap Analysis",
      "Operational Governance & Command Architecture",
      "Cross-Departmental Friction Removal",
      "Performance Alignment & Accountability Systems"
    ],
    targetAudience: "C-Suite Executives, Operations VPs, Board Members",
    deliverables: [
      "Operational Friction Diagnostics",
      "Strategic Alignment Roadmaps",
      "Cross-Functional Communication Protocols",
      "Executive Governance Frameworks"
    ]
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    subtitle: "Standardizing Zero-Defect Habits & High-Consequence Execution",
    overview: "Drawing upon deep military logistical rigor and high-stakes infrastructure management, we help organizations instill strict operational standards, risk management disciplines, and rigorous execution protocols.",
    focusAreas: [
      "Standard Operating Procedure (SOP) Hardening",
      "High-Consequence Safety & Quality Habit Formation",
      "Logistical Flow & Bottleneck Elimination",
      "Accountability Systems & Outcome Ownership"
    ],
    targetAudience: "Operations Directors, Plant Managers, Fleet Supervisors",
    deliverables: [
      "Standard Operating Procedure Audits",
      "Field Execution Checklists & Toolkits",
      "Quality & Safety Standard Enforcement Systems",
      "Operational Readiness KPI Dashboards"
    ]
  },
  {
    id: "frontline-leadership",
    title: "Frontline Leadership Development",
    subtitle: "Empowering Supervisors, Foremen, and Squad-Level Leaders",
    overview: "Frontline supervisors are the linchpin of organizational execution. We provide practical squad-level leadership training that enables shift managers, foremen, and team leads to inspire their personnel while enforcing uncompromising standards.",
    focusAreas: [
      "First-Line Supervisory Authority & Respect",
      "Jobsite & Shift-Level Communication",
      "Constructive Conflict Resolution & Accountability",
      "Mission First, People Always Balance"
    ],
    targetAudience: "Field Foremen, Shift Supervisors, Crew Leaders",
    deliverables: [
      "Frontline Field Leadership Toolkits",
      "Tactical Supervisor Workshops",
      "On-Site Mentorship & Direct Shadowing",
      "Team Cohesion & Retention Frameworks"
    ]
  },
  {
    id: "corporate-academies",
    title: "Corporate Leadership Academies",
    subtitle: "Scalable Cohort-Based Programs for Emerging & Mid-Level Talent",
    overview: "Custom-tailored leadership academy curriculums designed to train cohorts of emerging managers, embedding institutional values, operational discipline, and decisive execution habits across the enterprise.",
    focusAreas: [
      "Cohort-Based Leadership Progression",
      "Peer-to-Peer Accountability & Team Dynamics",
      "Scenario-Based Problem Solving & Simulations",
      "Mentorship Pipeline & Succession Preparation"
    ],
    targetAudience: "Enterprise HR Leaders, Training Directors, Talent Managers",
    deliverables: [
      "Custom Cohort Curriculum Design",
      "Facilitated Academy Intensives & Seminars",
      "Participant Capstone Projects & Evaluations",
      "Longitudinal Leadership Growth Tracking"
    ]
  },
  {
    id: "strategic-execution",
    title: "Strategic Execution",
    subtitle: "Transforming High-Level Directives into Decisive Operational Results",
    overview: "Ensure your critical organizational initiatives achieve uncompromising mission success. We assist leadership teams in establishing clear operational objectives, assigning absolute ownership, and executing with military precision.",
    focusAreas: [
      "Mission-Critical Objective Structuring",
      "Rapid Operational Deployment Plans",
      "Real-Time Bottleneck & Risk Mitigation",
      "Continuous Review & Execution Cadence"
    ],
    targetAudience: "Program Directors, Transformation Officers, Agency Heads",
    deliverables: [
      "Strategic Execution Cadence Schedules",
      "Mission Command Playbooks",
      "Action Review (AAR) Protocols",
      "Milestone Tracking & Governance Tooling"
    ]
  }
];
