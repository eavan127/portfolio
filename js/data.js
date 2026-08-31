/* ============================================================
   Content data — edit here, the page rebuilds itself.
   repo: GitHub URL | live: deployed URL | null = not published
   ============================================================ */

const PALETTES = [
  { id:'emerald',  name:'Emerald & Antique Gold',
    note:'Heritage luxury. Deep forest green with a muted gold — reads established and serious, never loud.',
    sw:['#0B2E22','#0F5132','#C9A227','#E4CF8A'] },
  { id:'sapphire', name:'Midnight Sapphire & Ice Blue',
    note:'Corporate-tech confidence. The safest choice for recruiters — trust, clarity, zero risk.',
    sw:['#0C1B33','#1B3A6B','#4C8BF5','#9FC1FA'] },
  { id:'burgundy', name:'Burgundy & Champagne',
    note:'Editorial warmth. Wine red against soft champagne — distinctive, mature, memorable on a page of blue portfolios.',
    sw:['#3B0F22','#6B1F3A','#C9A227','#E3C89B'] },
  { id:'teal',     name:'Deep Teal & Copper',
    note:'Architectural. Cool teal grounded by warm copper — the most balanced pairing here, and the closest in energy to the orange you had.',
    sw:['#08302F','#0E4749','#C97B4A','#E7B08A'] },
  { id:'indigo',   name:'Indigo & Violet',
    note:'Contemporary AI. Reads modern and technical without going neon — fits an ML portfolio naturally.',
    sw:['#1E1B4B','#312E81','#8B5CF6','#C4B5FD'] },
  { id:'graphite', name:'Graphite & Cyan',
    note:'Engineer\'s terminal. Near-black graphite with a single precise cyan — minimal, sharp, developer-forward.',
    sw:['#0F172A','#1E293B','#0891B2','#67E8F9'] }
];

const PROJECTS = [
  {
    cat:['ai','data'], catLabel:'AI / RAG',
    title:'NEXA — AI-Assisted Tariff Automation',
    sub:'Jabil IT ECP Bootcamp 3.0 · Use Case 2',
    date:'Jun 2026', award:'Champion',
    desc:'An end-to-end retrieval-augmented pipeline that replaces an 8-step manual customs-classification workflow with AI-assisted, human-validated batch processing for Jabil\'s Global Trade Compliance team.',
    impact:[
      'Cut batch processing from <strong>12.5 hours to ~15 minutes</strong> — a 98% reduction — and removed 75% of manual review steps by auto-approving HS codes at ≥95% confidence.',
      'Reached <strong>88–95% accuracy</strong> on 10-digit HTS classification versus 80–92% for manual work alone, so the speed gain came with a quality gain rather than a trade-off.',
      'A role-based LangChain analytics agent evaluates all <strong>17 Malaysian free trade agreements</strong> for the optimal duty rate, cutting an estimated $2,000–$2,500 of error exposure per batch.',
      'Hardened with a circuit-breaker layer against Ollama outages and prompt-injection attempts — the pipeline degrades safely instead of returning confident nonsense.'
    ],
    tech:['Python','FastAPI','LangChain','Ollama','RAG','nomic-embed-text','qwen2.5:1.5b','Supabase','pandas'],
    repo:'https://github.com/eavan127/NEXA-AI-Powered-Tariff', live:null
  },
  {
    cat:['vr','ai'], catLabel:'VR / Unity',
    title:'CulturaVerse — AI-Powered VR Literature Platform',
    sub:'Team Lumenix · CICSC 2026 · Project Leader',
    date:'Feb — May 2026', award:'Bronze · Middle East Final',
    desc:'A cross-platform VR, PC and mobile application that lets students hold real-time spoken conversations with literary characters, so a set text becomes a person you can actually interrogate.',
    impact:[
      'Led a <strong>six-member team</strong> from concept to a Middle East Regional Final placement — owning scope, technical direction and the pitch.',
      'Shipped <strong>2 interactive AI character scenes</strong> with real-time <strong>6-class emotion detection</strong> that reshapes the VR environment as the conversation shifts.',
      'Voice loop runs on GROQ Cloud with Google Cloud STT/TTS and a local <strong>Ollama fallback</strong>, so a dead API never kills a live demo.',
      'User testing confirmed the emotion-adaptive triggers fired correctly across scenes — the adaptive layer was validated, not just implemented.'
    ],
    tech:['Unity 6','C#','GROQ Cloud API','Ollama','Google Cloud STT/TTS','NLP','WebGL'],
    repo:'https://github.com/eavan127/LUMENIX_CulturaVerseVR', live:'https://lumenix.itch.io/cultura-verse-vr', liveLabel:'Play on itch.io'
  },
  {
    cat:['ai','cv'], catLabel:'Computer Vision',
    title:'PawSecure — AI Stray Animal Rescue Platform',
    sub:'Production rebuild of the KitaHack 2026 entry',
    date:'May 2026', award:null,
    desc:'A CCTV-driven rescue platform for Malaysian NGOs and SPCA branches — detect an injured stray, triage its severity, put it on a live map, and track it through to a confirmed rescue.',
    impact:[
      'Fine-tuned a <strong>YOLO11-nano detector on 4,168 labelled images over 50 epochs</strong> for real-time stray detection from CCTV frames.',
      'Built <strong>ResNet18 512-dimension embeddings</strong> stored in pgvector, so the same animal reported twice is recognised as one animal rather than two.',
      'Four-tier injury classification from <strong>OpenCV HSV analysis</strong> gives rescuers a triage order instead of an undifferentiated queue.',
      'Complete NGO workflow — report, live map, claim, rescue confirmation, permanent archive — across <strong>5 JWT-secured REST endpoints</strong> on Supabase Postgres.'
    ],
    tech:['Python','FastAPI','YOLO11','ResNet18','OpenCV','TypeScript','Supabase','pgvector','OpenStreetMap'],
    repo:'https://github.com/eavan127/PawSecure', live:null
  },
  {
    cat:['ai'], catLabel:'Deep Learning',
    title:'Project Overwatch — RF Signal Intelligence',
    sub:'SEDIC 2026 · RF / Signal Track',
    date:'Aug 2026', award:null,
    desc:'A from-scratch neural network that reads raw radio IQ data and identifies civilian modulations, military waveforms and hostile jamming — including when several overlap in the same window.',
    impact:[
      'Designed a <strong>dual-branch CNN (~148,938 parameters)</strong> trained from scratch, since no pretrained backbone exists for raw RF IQ.',
      'One branch reads raw IQ to preserve phase, the other reads an STFT spectrogram for frequency movement; energy-gated attention pooling fuses both — <strong>neither representation alone does both jobs</strong>.',
      '<strong>Multi-label sigmoid head across 8 classes</strong> means a jammer overlaid on a real signal correctly reports both, instead of forcing one winner.',
      'Built a <strong>~58,800-example dataset</strong> from four sources with synthetic generators for FHSS and jamming, and locked behaviour behind <strong>104 passing tests</strong>.'
    ],
    tech:['Python','PyTorch','CNN','STFT','Signal Processing','RadioML 2018.01A','pytest'],
    repo:'https://github.com/eavan127/sedicAI_NEXA', live:null
  },
  {
    cat:['ai'], catLabel:'NLP / RAG',
    title:'Malaysian Dialect Translation RAG',
    sub:'Independent NLP research build',
    date:'Apr 2026', award:null,
    desc:'A hybrid retrieval system translating Kelantan, Sabah and Sarawak dialects into Standard Malay — low-resource language pairs where standard MT models simply hallucinate.',
    impact:[
      'Combined <strong>phrase-aware lookup across a 148-term dictionary</strong> with FAISS vector search over Sentence Transformer embeddings, so exact matches stay exact and the rest degrade gracefully.',
      'Engineered <strong>confidence-governed rejection</strong> — the system declines uncertain translations rather than inventing one, which is the difference between a demo and a usable tool.',
      'Added noisy-text normalisation for real-world spelling variation, and benchmarked retrieval across a <strong>30-sentence test set spanning all 3 dialects</strong>.'
    ],
    tech:['Python','Streamlit','FAISS','Sentence Transformers','Vector Search','scikit-learn'],
    repo:'https://github.com/eavan127/rag_dialect', live:null
  },
  {
    cat:['ai'], catLabel:'Multi-Agent AI',
    title:'AWS-IQ — Multi-Agent Onboarding System',
    sub:'AWS × UTP GenAI Hackathon',
    date:'Jun 2026', award:'Silver Award',
    desc:'A multi-agent AI onboarding assistant built on Amazon Bedrock that ingests a new hire\'s document inbox and turns unstructured files into structured, queryable onboarding knowledge.',
    impact:[
      'Placed <strong>1st Runner-Up</strong> against university-wide competition, built inside a hackathon window.',
      'Orchestrated <strong>multiple cooperating Bedrock agents</strong> through a skill-driven ETL pipeline rather than one monolithic prompt.',
      'Wired a custom <strong>folder-watcher MCP server</strong> so dropping a file into an inbox directory triggers the whole pipeline automatically.'
    ],
    tech:['Amazon Bedrock','AWS','Python','MCP','Kiro','ETL'],
    repo:null, live:null
  },
  {
    cat:['cv','ai'], catLabel:'Mobile AI',
    title:'PawGuard AI — Disaster-Ready Animal Rescue',
    sub:'KitaHack 2026 · Google Developer Groups',
    date:'Jan — May 2026', award:null,
    desc:'The mobile origin of PawSecure — an on-device AI app helping the public and NGOs identify, report and adopt stray animals, with disaster scenarios as the driving use case.',
    impact:[
      'Real-time on-device detection at <strong>15–30 FPS</strong> using TensorFlow Lite, so identification works without a network connection in a disaster zone.',
      'Breed classification across <strong>70+ dog and cat breeds</strong> with confidence-based verification before a report is accepted.',
      'Dual-audience product design — one app serving public reporters and NGO rescuers with genuinely different workflows.'
    ],
    tech:['Flutter','Dart','Firebase','TensorFlow Lite','Google Cloud Vision','Gemini AI','Google Maps'],
    repo:'https://github.com/Jessy123123/PawGuard_AI', live:null
  },
  {
    cat:['data'], catLabel:'Database Design',
    title:'Scandal Couture — Retail DBMS',
    sub:'Oracle relational database coursework',
    date:'May — Jul 2026', award:null,
    desc:'A full relational database for a fictional retail boutique, modelled from business requirements through to a working Oracle schema with real query workloads.',
    impact:[
      'Designed and implemented a <strong>94-table Oracle schema</strong> — 29 entity tables plus 65 bridge tables resolving many-to-many relationships.',
      'Modelled the complete ERD in draw.io before writing DDL, so the schema was argued on paper rather than patched in SQL.',
      'Authored <strong>multi-table joins spanning up to 8 tables</strong> and views answering real business questions across sales, loyalty, procurement and inventory.',
      'Diagnosed and resolved Oracle integrity-constraint failures during load — the part of database work that only shows up once data is real.'
    ],
    tech:['Oracle 21c XE','SQL*Plus','SQL Developer','ERD','draw.io'],
    repo:null, live:null
  },
  {
    cat:['web','ai'], catLabel:'Mobile / 3D',
    title:'MyRumah — AI Interior Design Marketplace',
    sub:'B2C / B2B2C furniture commerce app',
    date:'Jan 2026', award:null,
    desc:'A furniture marketplace where you photograph your room, let Gemini redesign it, and drop real 3D furniture models into the space before you spend anything.',
    impact:[
      '<strong>AI Architect</strong> turns a room photo into professional redesign concepts via Google Gemini 2.5 Flash — the inspiration step usually costs a designer\'s fee.',
      '<strong>Virtual Place</strong> renders drag-and-drop 3D furniture in-browser with Three.js and React Three Fiber, targeting the size-and-fit returns that hurt furniture retailers most.',
      'Built a complete multi-merchant commerce flow — grouped carts, vouchers, cards, e-wallets and FPX — plus a separate merchant role with its own storefront and analytics.'
    ],
    tech:['React Native','Expo','TypeScript','Three.js','React Three Fiber','Google Gemini'],
    repo:'https://github.com/eavan127/myrumah', live:null
  },
  {
    cat:['web'], catLabel:'Web / GovTech',
    title:'MyMULA Junior — Digital Legal Guardian',
    sub:'Digital identity & consent protocol',
    date:'Jan 2026', award:null,
    desc:'Malaysia\'s first "Digital Legal Guardian" concept — replacing the paperwork minors need for healthcare, scholarships and business registration with instant biometric guardian consent.',
    impact:[
      'Collapsed a process measured in <strong>days of paperwork and in-person visits into seconds</strong> of biometric approval on a phone.',
      'Designed two linked applications — a Junior app and a Guardian app — with real-time approval requests, digital curfew controls and cryptographic signature verification.',
      'Integrated a <strong>Gemini-powered assistant</strong> and Google Translate multi-language support so the platform is usable across Malaysia\'s language mix.'
    ],
    tech:['HTML5','TailwindCSS','JavaScript','Python','Flask','Google Gemini'],
    repo:'https://github.com/eavan127/MyMULA-Junior', live:'https://my-mula-junior.vercel.app', liveLabel:'Live demo'
  },
  {
    cat:['sys','data'], catLabel:'Data Structures',
    title:'SwiftQueue — Virtual Queue Redesign',
    sub:'ADS TEB1113 · group project',
    date:'Jul 2026', award:null,
    desc:'A before/after study of Ticketmaster\'s 2022 Taylor Swift presale collapse, arguing that a single correct data-structure choice is what separated the failure from a working system.',
    impact:[
      'Implemented a <strong>linked queue in JavaScript</strong> and set it head-to-head against the naive baseline design on identical load.',
      'Built an interactive Ticketmaster-styled dashboard with a <strong>live simulation across 4 screens</strong> — enqueue, position assignment, refresh and seat selection.',
      'Framed the whole comparison around <strong>one data-structure decision</strong>, which makes the complexity argument visible rather than theoretical.'
    ],
    tech:['JavaScript','Linked Queue','HTML/CSS','Algorithm Analysis'],
    repo:'https://github.com/Jessy123123/ADS_TEB1113_SwiftQueue', live:null
  },
  {
    cat:['sys','web'], catLabel:'Desktop App',
    title:'Sortify — Recycling Habit System',
    sub:'OH MY CODE 16.0 · Group 13 · Team Leader',
    date:'Jul 2025', award:'14.63 / 15',
    desc:'A desktop application that helps users sort recyclables correctly and rewards them for doing it — built in VB.NET with Microsoft Access under competition time pressure.',
    impact:[
      'Led the team to a coursework score of <strong>14.63 out of 15</strong>, owning planning, delegation and technical direction.',
      'Keyword search identifies whether an item is recyclable and which bin it belongs in — the actual friction point that stops people recycling.',
      'Closed the loop with image-upload proof and an in-app reward wallet, turning a lookup tool into a <strong>habit-formation system</strong>.'
    ],
    tech:['VB.NET','Microsoft Access','WinForms','SQL'],
    repo:'https://github.com/eavan127/OMC_Sortify', live:null
  },
  {
    cat:['sys'], catLabel:'OOP / C#',
    title:'Sea Shark — Educational C# Platformer',
    sub:'Object-Oriented Programming project',
    date:'Mar 2026', award:null,
    desc:'A gamified undersea platformer that teaches C# concepts through play — players navigate levels, collect keys, and answer quizzes with immediate feedback.',
    impact:[
      'Built the level system on a proper <strong>abstract base class with polymorphic quiz loading</strong>, so Beginner and Advanced levels extend rather than duplicate.',
      'Demonstrates all four OOP pillars in a system that does something — encapsulation, inheritance, polymorphism and abstraction carrying real gameplay logic.',
      'Delivered as a six-member group project alongside a solo assignment build.'
    ],
    tech:['C#','.NET','OOP','Console Application'],
    repo:'https://github.com/eavan127/OOP_seashark', live:null
  },
  {
    cat:['sys'], catLabel:'Algorithms',
    title:'Algorithms & Data Structures Lab Set',
    sub:'ADS TEB1113 · full course archive',
    date:'May — Jul 2026', award:null,
    desc:'The complete C++ solution set for the Algorithms and Data Structures course — every weekly task, from matrix manipulation through to advanced dynamic programming.',
    impact:[
      'Covers <strong>easy through advanced tiers</strong> each week: rotated matrices, binary search for a matrix median, maximum-area rectangle of 1s in a binary matrix.',
      'Written in C++ with an emphasis on <strong>complexity reasoning</strong>, not just passing output.',
      'Indexed and dated in the repository so the progression through the course is legible at a glance.'
    ],
    tech:['C++','Algorithms','Dynamic Programming','Binary Search'],
    repo:'https://github.com/eavan127/ADS_TEB1113', live:null
  },
  {
    cat:['web'], catLabel:'Web',
    title:'Open Computing Club — Official Website',
    sub:'OCC, Universiti Teknologi PETRONAS',
    date:'Jan 2026', award:null,
    desc:'The public website for UTP\'s Open Computing Club — "the space between creativity and code" — covering events, opportunities and member onboarding.',
    impact:[
      'Shipped and <strong>deployed live on Vercel</strong>, serving as the club\'s actual public front door rather than a mockup.',
      'Fully responsive layout with an opportunities board that keeps the club\'s calls-to-action visible to prospective members.'
    ],
    tech:['HTML5','CSS3','JavaScript','Vercel'],
    repo:'https://github.com/eavan127/occ_club_web', live:'https://occ-club-web.vercel.app', liveLabel:'Live site'
  },
  {
    cat:['web'], catLabel:'Web',
    title:'Crispy — Restaurant Landing Page',
    sub:'Front-end design exercise',
    date:'Nov 2025', award:null,
    desc:'A responsive restaurant landing page built to practise scroll-driven animation and appetite-led visual design.',
    impact:[
      'Scroll-reveal animation throughout, tuned so motion supports the reading order instead of competing with it.',
      'Fully responsive across desktop, tablet and mobile, <strong>deployed live on Vercel</strong>.'
    ],
    tech:['HTML5','CSS3','JavaScript','Vercel'],
    repo:'https://github.com/eavan127/fried_chicken_website', live:'https://fried-chicken-website-six.vercel.app', liveLabel:'Live site'
  }
];

const EXPERIENCE = [
  {
    lead:true, role:'Logistics Head of Department', org:'MPU 4.0, Universiti Teknologi PETRONAS',
    when:'2026 — Present',
    desc:'Direct logistics planning and cross-team coordination for MPU 4.0 departmental activities, owning scheduling and resource allocation across department-wide events.',
    soft:['Leadership','Resource Planning','Cross-team Coordination','Accountability']
  },
  {
    lead:true, role:'Team Lead — CICSC 2026', org:'China University of Petroleum (Beijing) · Abu Dhabi, UAE (remote)',
    when:'Mar — Jun 2026',
    desc:'Led a six-member UTP team through to the Middle East Regional Final of the China International College Students\' Innovation Competition, coordinating research, prototype development and pitch delivery for CulturaVerse.',
    soft:['Team Leadership','International Collaboration','Pitching','Project Direction','Working Under Pressure']
  },
  {
    lead:false, role:'Speaker — AI Ready ASEAN Master Training', org:'UTP-ASEAN Student Association',
    when:'Nov 2025 — Present',
    desc:'Deliver structured training across three modules on AI fundamentals, practical applications and responsible adoption, facilitating discussion on ethical AI and regional innovation readiness with ASEAN master trainers.',
    soft:['Public Speaking','Teaching','Facilitation','Technical Communication']
  },
  {
    lead:true, role:'Secretary & Logistics Supervisor — ASEAN Student Forum 2026', org:'UTP-ASEAN Student Association',
    when:'Aug 2025 — Present',
    desc:'Hold dual roles: managing meeting documentation, minutes and internal coordination as Secretary, while supervising logistics planning, venue preparation and resourcing for forum activities.',
    soft:['Organisation','Documentation','Supervision','Multi-role Time Management']
  },
  {
    lead:false, role:'Monitoring & Evaluation Officer', org:'UTP-ASEAN Student Association',
    when:'Mar 2025 — Present',
    desc:'Support monitoring and evaluation of ongoing activities — organising data, preparing reports and collecting feedback so decisions are made on evidence rather than impression.',
    soft:['Analytical Thinking','Data Organisation','Reporting','Feedback Collection']
  },
  {
    lead:true, role:'Team Leader — OH MY CODE 16.0, Group 13', org:'Universiti Teknologi PETRONAS',
    when:'Jul 2025',
    desc:'Directed planning, task delegation and technical execution for a VB.NET and Microsoft Access system solution under competition time constraints, achieving a project score of 14.63 out of 15.',
    soft:['Leadership','Delegation','Technical Execution','Deadline Management']
  },
  {
    lead:false, role:'Emcee — PETRONAS SECURE NEX Hackathon 2025', org:'UTP SYNTECH',
    when:'Aug 2025',
    desc:'Hosted the Opening Ceremony, Closing Ceremony and Pitching Sessions, holding clear communication and smooth transitions between teams, judges and organisers in a live, fast-moving environment.',
    soft:['Public Speaking','Composure','Live Coordination','Stakeholder Communication']
  },
  {
    lead:true, role:'Head of Facilitators Department — Down To Earth 2024', org:'Universiti Teknologi PETRONAS · SJK(C) Chung Sun',
    when:'Sep — Nov 2024',
    desc:'Directed a facilitator team delivering a community outreach programme at a primary school, designing interactive activities that introduced the UN Sustainable Development Goals to young students.',
    soft:['Team Management','Programme Design','Community Engagement','Adaptability']
  },
  {
    lead:false, role:'Member & Industrial Visit Participant', org:'CYBERHAX UTP',
    when:'Sep 2024 — Present',
    desc:'Active member engaging in cybersecurity workshops, Hack The Box meetups and peer learning; joined the BlackBerry industrial visit covering security operations, offensive security, governance, application and cloud security.',
    soft:['Continuous Learning','Security Awareness','Peer Collaboration','Industry Exposure']
  },
  {
    lead:false, role:'Engagement Committee — RISE Social Practice Programme 2025', org:'with Tsinghua University, China',
    when:'Jan 2025',
    desc:'Coordinated community-focused social initiatives with Tsinghua University delegates, contributing to CSR activity planning and facilitating engagement sessions between student groups.',
    soft:['Cross-cultural Communication','CSR Planning','Diplomacy']
  },
  {
    lead:false, role:'Volunteer Committee — CSR Orphanage Programme', org:'The Salvation Army, Ipoh',
    when:'Feb 2025',
    desc:'Led interactive activities and games for children, collaborating with ASEAN student delegates from Vietnam, the Philippines, Indonesia, Myanmar and Cambodia to deliver the programme.',
    soft:['Empathy','Cross-cultural Teamwork','Social Responsibility','Initiative']
  },
  {
    lead:false, role:'Adjudication Committee', org:'10th Northern Malaysia Mandarin Debate Tournament',
    when:'Dec 2024 — May 2025',
    desc:'Supported the adjudication process, coordinating judging workflows and evaluation materials to hold fairness and consistent scoring across every session.',
    soft:['Impartiality','Process Coordination','Attention to Detail','Conflict Handling']
  },
  {
    lead:false, role:'Media Committee & Ruan Chamber Member', org:'UTPCO Chinese Orchestra, UTP',
    when:'Jan 2025 — Present',
    desc:'Design promotional posters and visual materials for event publicity using Adobe Illustrator and Photoshop, while performing as a Ruan chamber member in ensemble rehearsals and drawing on Grade 7 piano theory.',
    soft:['Visual Design','Creative Communication','Discipline','Ensemble Teamwork']
  }
];

const AWARDS = [
  { medal:'🥇', rank:'01', title:'Champion — AI & Data Innovation',
    org:'Jabil IT ECP Bootcamp 3.0, Jabil Circuit', when:'June 2026',
    desc:'First place for NEXA, an AI-assisted tariff classification pipeline built for Jabil\'s Global Trade Compliance department — judged on real operational impact against an existing manual workflow.' },
  { medal:'🥈', rank:'02', title:'Silver Award · 1st Runner-Up',
    org:'AWS × UTP GenAI Hackathon', when:'June 2026',
    desc:'Awarded for AWS-IQ, a multi-agent AI onboarding system built on Amazon Bedrock with a custom MCP folder-watcher pipeline.' },
  { medal:'🥉', rank:'03', title:'Bronze Award · Middle East Regional Final',
    org:'China International College Students\' Innovation Competition (CICSC 2026)', when:'May 2026',
    desc:'Third place at the Middle East Regional Final as Team Lead of Lumenix, for the CulturaVerse AI-powered VR literature platform — an international field.' },
  { medal:'🎓', rank:'04', title:'PETRONAS Education Sponsorship Programme',
    org:'PETRONAS · PESP Scholar', when:'2024 — Present',
    desc:'Full sponsorship awarded through PETRONAS\' national scholarship programme, covering the Foundation and Bachelor of Computer Science degree.' },
  { medal:'🏅', rank:'05', title:'Foundation 4.0 Excellence Award',
    org:'Universiti Teknologi PETRONAS', when:'2025',
    desc:'Awarded for achieving a perfect 4.00 grade point average across the Foundation in Computer Science programme.' },
  { medal:'🎖️', rank:'06', title:'Foundation First Class Award',
    org:'Universiti Teknologi PETRONAS', when:'2025',
    desc:'First Class distinction on completion of the Foundation programme, recognising sustained academic performance across the full year.' }
];

const CERTS = [
  { ico:'☁️', name:'Microsoft Azure AI Fundamentals', issuer:'Microsoft', note:'AI-900 · core AI, ML and cognitive services on Azure' },
  { ico:'🧠', name:'Supervised Machine Learning: Regression and Classification', issuer:'Stanford University / Coursera', note:'Andrew Ng · gradient descent, regularisation, model evaluation' },
  { ico:'✨', name:'Introduction to Generative AI', issuer:'Google Cloud', note:'Foundation models, prompt design and responsible use' },
  { ico:'🖼️', name:'Creating Image Captioning Models', issuer:'Google Cloud', note:'Encoder–decoder architectures with attention' },
  { ico:'🤖', name:'Introduction to Robotics', issuer:'Amazon Web Services', note:'Robotics fundamentals and simulation workflows' },
  { ico:'🗣️', name:'Oxford Online Placement Test — Grade C1', issuer:'Oxford University Press', note:'Advanced English proficiency' },
  { ico:'🏆', name:'1st Place Certificate of Achievement', issuer:'Jabil ECP Bootcamp 2026', note:'Champion, AI & Data Innovation track' },
  { ico:'🥈', name:'1st Runner-Up Certificate of Achievement', issuer:'AWS × UTP GenAI Hackathon 2026', note:'Silver, multi-agent AI on Amazon Bedrock' },
  { ico:'⚖️', name:'Adjudication Committee Certificate', issuer:'10th Northern Malaysia Mandarin Debate Tournament 2025', note:'Judging workflow and evaluation coordination' },
  { ico:'💰', name:'Financial Education for Youth', issuer:'Certificate of Participation', note:'Personal finance and financial literacy foundations' }
];
