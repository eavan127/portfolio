/* ==========================================================================
   Eavan Tan portfolio content.
   Everything readable on the site lives in this file.
   ========================================================================== */

const portfolioData = {

    /* ---------------- Personal ---------------- */
    name: "EAVAN TAN",
    role: "Internship Seeker, May to Dec 2027",
    microline: "Bachelor of Computer Science | Universiti Teknologi PETRONAS | PETRONAS Scholar",
    heroImage: "resources/assets/hero/home/profile.jpg",
    resumeLink: "resources/assets/docs/Eavan_Tan_Resume.pdf",
    email: "eavan_24006152@utp.edu.my",

    bio: [
        "Built an AI pipeline that cut a customs-classification workflow from <strong>12.5 hours to about 15 minutes</strong>.",
        "Fine-tuned computer vision models on real, self-labelled data for a stray-animal detection project.",
        "Built a retrieval-based translation system for a low-resource dialect pair as an independent project.",
        "Led student teams of up to six through university and international-level competitions."
    ],

    socialLinks: {
        linkedin: "https://www.linkedin.com/in/eavan-tan-a13785324",
        github: "https://github.com/eavan127",
        email: "mailto:eavan_24006152@utp.edu.my"
    },

    contactIntro:
        "Open to AI/ML internship placements from May to December 2027, and to interesting problems any time. " +
        "Based in Perak, Malaysia.",

    contactLinks: [
        { icon: "school", label: "University email", value: "eavan_24006152@utp.edu.my", href: "mailto:eavan_24006152@utp.edu.my" },
        { icon: "phone", label: "Phone", value: "+60 10-505-1219", href: "tel:+60105051219" },
        { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/eavan-tan-a13785324", href: "https://www.linkedin.com/in/eavan-tan-a13785324" },
        { icon: "github", label: "GitHub", value: "github.com/eavan127", href: "https://github.com/eavan127" }
    ],

    /* ---------------- Projects ---------------- */
    projectFilters: [
        { id: "all", label: "All Projects", icon: "grid" },
        { id: "ai", label: "AI / ML", icon: "cpu" },
        { id: "cv", label: "Computer Vision", icon: "camera" },
        { id: "vr", label: "VR / Unity", icon: "box" },
        { id: "web", label: "Web & Mobile", icon: "layout" },
        { id: "data", label: "Data & SQL", icon: "database" },
        { id: "sys", label: "Systems & DSA", icon: "code" }
    ],

    projects: [
        {
            cats: ["ai", "data"], glyph: "cpu",
            title: "NEXA: AI-Assisted Tariff Automation",
            sub: "Jabil IT ECP Bootcamp 3.0 · Use Case 2",
            date: "Jun 2026", award: "Champion",
            desc: "An end-to-end retrieval-augmented pipeline replacing an 8-step manual customs-classification workflow with AI-assisted, human-validated batch processing for Jabil's Global Trade Compliance team.",
            impact: [
                "Cut batch processing from <strong>12.5 hours to about 15 minutes</strong>, a 98% reduction, and removed 75% of manual review steps by auto-approving HS codes at ≥95% confidence.",
                "Reached <strong>88 to 95% accuracy</strong> on 10-digit HTS classification versus 80 to 92% manual, so speed came with a quality gain rather than a trade-off.",
                "A role-based LangChain agent evaluates all <strong>17 Malaysian free trade agreements</strong> for the optimal duty rate, cutting an estimated $2,000 to $2,500 error exposure per batch.",
                "Circuit-breaker layer guards against Ollama outages and prompt injection, so the pipeline degrades safely instead of returning confident nonsense."
            ],
            tags: ["Python", "FastAPI", "LangChain", "Ollama", "RAG", "Supabase", "pandas"],
            repo: "https://github.com/eavan127/NEXA-AI-Powered-Tariff", live: null,
            deck: "https://drive.google.com/file/d/1Li6CizwlhdVsPhlAiRMOc4FM3TRB7wub/view",
            video: "https://drive.google.com/file/d/1O3v3ORr7W8zI_I41Uzz-YH745zjbmboO/view"
        },
        {
            cats: ["vr", "ai"], glyph: "box", thumb: "resources/assets/hero/projects/CulturaVerse",
            title: "CulturaVerse: AI-Powered VR Literature Platform",
            sub: "Team Lumenix · CICSC 2026 · Project Leader",
            date: "Feb to May 2026", award: "Bronze",
            desc: "A cross-platform VR, PC and mobile application letting students hold real-time spoken conversations with literary characters, so a set text becomes a person you can interrogate.",
            impact: [
                "Led a <strong>six-member team</strong> from concept to a Middle East Regional Final placement, owning scope, technical direction and the pitch.",
                "Shipped <strong>2 interactive AI character scenes</strong> with real-time <strong>6-class emotion detection</strong> reshaping the VR environment as the conversation shifts.",
                "Voice loop runs on GROQ Cloud with Google Cloud STT/TTS and a local <strong>Ollama fallback</strong>, so a dead API never kills a live demo.",
                "User testing confirmed the emotion-adaptive triggers fired correctly across scenes, so the adaptive layer was validated and not just implemented."
            ],
            tags: ["Unity 6", "C#", "GROQ Cloud API", "Ollama", "Google Cloud STT/TTS", "WebGL"],
            repo: "https://github.com/eavan127/LUMENIX_CulturaVerseVR",
            live: "https://lumenix.itch.io/cultura-verse-vr", liveLabel: "Play on itch.io",
            deck: "https://drive.google.com/file/d/1463D2tVWq5JokGm79TMFmdhEuLfcvH9y/view",
            video: "https://drive.google.com/file/d/1XTl0zifoSe-c_xH7gd8MerCS0Oo6nDJ7/view"
        },
        {
            cats: ["ai", "cv"], glyph: "camera",
            title: "PawSecure: AI Stray Animal Rescue Platform",
            sub: "Production rebuild of the KitaHack 2026 entry",
            date: "May 2026", award: null,
            desc: "A CCTV-driven rescue platform for Malaysian NGOs and SPCA branches. Detect an injured stray, triage its severity, put it on a live map, and track it through to a confirmed rescue.",
            impact: [
                "Fine-tuned a <strong>YOLO11-nano detector on 4,168 labelled images over 50 epochs</strong> for real-time stray detection from CCTV frames.",
                "Built <strong>ResNet18 512-dimension embeddings</strong> in pgvector, so the same animal reported twice is recognised as one animal rather than two.",
                "Four-tier injury classification from <strong>OpenCV HSV analysis</strong> gives rescuers a triage order instead of an undifferentiated queue.",
                "Complete NGO workflow covering report, live map, claim, confirmation and archive across <strong>5 JWT-secured REST endpoints</strong>."
            ],
            tags: ["Python", "FastAPI", "YOLO11", "ResNet18", "OpenCV", "TypeScript", "Supabase", "pgvector"],
            repo: "https://github.com/eavan127/PawSecure", live: null
        },
        {
            cats: ["ai"], glyph: "activity",
            title: "Project Overwatch: RF Signal Intelligence",
            sub: "SEDIC 2026 · RF / Signal Track",
            date: "Aug 2026", award: null,
            desc: "A from-scratch neural network reading raw radio IQ data to identify civilian modulations, military waveforms and hostile jamming, including when several overlap in the same window.",
            impact: [
                "Designed a <strong>dual-branch CNN (~148,938 parameters)</strong> trained from scratch, since no pretrained backbone exists for raw RF IQ.",
                "One branch reads raw IQ to preserve phase, the other an STFT spectrogram for frequency movement; attention pooling fuses both, because <strong>neither alone does both jobs</strong>.",
                "<strong>Multi-label sigmoid head across 8 classes</strong> means a jammer overlaid on a real signal reports both, instead of forcing one winner.",
                "Built a <strong>~58,800-example dataset</strong> from four sources with synthetic FHSS and jamming generators, locked behind <strong>104 passing tests</strong>."
            ],
            tags: ["Python", "PyTorch", "CNN", "STFT", "Signal Processing", "pytest"],
            repo: "https://github.com/eavan127/sedicAI_NEXA",
            live: "https://sedicai-nexa.onrender.com/", liveLabel: "Live demo"
        },
        {
            cats: ["ai"], glyph: "search", thumb: "resources/assets/hero/projects/rag_dialect",
            title: "Malaysian Dialect Translation RAG",
            sub: "Independent NLP research build",
            date: "Apr 2026", award: null,
            desc: "A hybrid retrieval system translating Kelantan, Sabah and Sarawak dialects into Standard Malay, low-resource language pairs where standard MT models simply hallucinate.",
            impact: [
                "Combined <strong>phrase-aware lookup across a 148-term dictionary</strong> with FAISS vector search over Sentence Transformer embeddings.",
                "Engineered <strong>confidence-governed rejection</strong>, so the system declines uncertain translations rather than inventing one.",
                "Added noisy-text normalisation and benchmarked retrieval across a <strong>30-sentence test set spanning all 3 dialects</strong>."
            ],
            tags: ["Python", "Streamlit", "FAISS", "Sentence Transformers", "scikit-learn"],
            repo: "https://github.com/eavan127/rag_dialect",
            live: "https://eavan127-malaysian-dialect-rag.streamlit.app", liveLabel: "Try it live"
        },
        {
            cats: ["ai"], glyph: "users", prototype: true, thumb: "resources/assets/hero/projects/AWS_onboarding",
            title: "AWS-IQ: Multi-Agent Onboarding System",
            sub: "AWS × UTP GenAI Hackathon",
            date: "Jun 2026", award: "Silver",
            desc: "A working prototype, not a finished product: a multi-agent AI onboarding assistant on Amazon Bedrock that ingests a new hire's document inbox and turns unstructured files into structured, queryable onboarding knowledge.",
            impact: [
                "Placed <strong>1st Runner-Up</strong> against university-wide competition, built inside a hackathon window as a proof of concept.",
                "Orchestrated <strong>multiple cooperating Bedrock agents</strong> through a skill-driven ETL pipeline rather than one monolithic prompt.",
                "Wired a custom <strong>folder-watcher MCP server</strong> so dropping a file into an inbox directory triggers the whole pipeline."
            ],
            tags: ["Amazon Bedrock", "AWS", "Python", "MCP", "Kiro", "ETL", "Prototype"],
            repo: "https://github.com/Jessy123123/NEXA_AWS", live: null,
            deck: "https://drive.google.com/file/d/1-qv5TARPRQ_fqVocSOMj84kuIUYQb4eJ/view?usp=sharing",
            video: "https://drive.google.com/file/d/1vVKL1XWWBfPU0lCclDzfB4rcyLU7MG8C/view?usp=sharing"
        },
        {
            cats: ["data"], glyph: "database", thumb: "resources/assets/hero/projects/scandal costume",
            title: "Scandal Couture: Retail DBMS",
            sub: "Oracle relational database coursework",
            date: "May to Jul 2026", award: null,
            desc: "A full relational database for a fictional retail boutique, modelled from business requirements through to a working Oracle schema with real query workloads.",
            impact: [
                "Designed and implemented a <strong>94-table Oracle schema</strong>: 29 entity tables plus 65 bridge tables resolving many-to-many relationships.",
                "Modelled the complete ERD in draw.io before writing DDL, so the schema was argued on paper rather than patched in SQL.",
                "Authored <strong>joins spanning up to 8 tables</strong> and views answering real questions across sales, loyalty, procurement and inventory.",
                "Diagnosed and resolved Oracle integrity-constraint failures during load, the part that only shows up once data is real."
            ],
            tags: ["Oracle 21c XE", "SQL*Plus", "SQL Developer", "ERD", "draw.io"],
            repo: null, live: null,
            report: "https://drive.google.com/file/d/1a15moC4x58jPgWE23v1HmI_Y_5VlgkIg/view",
            erd: "https://drive.google.com/file/d/1VR8zyPSFW1GlZa3aBLnWz53CoUkErxVR/view"
        },
        {
            cats: ["web"], glyph: "shield", thumb: "resources/assets/hero/projects/MYMULA",
            title: "MyMULA Junior: Digital Legal Guardian",
            sub: "Digital identity & consent protocol",
            date: "Jan 2026", award: null,
            desc: "Malaysia's first \"Digital Legal Guardian\" concept, replacing the paperwork minors need for healthcare, scholarships and business registration with instant biometric guardian consent.",
            impact: [
                "Collapsed a process measured in <strong>days of paperwork and in-person visits into seconds</strong> of biometric approval on a phone.",
                "Designed two linked applications, Junior and Guardian, with real-time approval requests, digital curfew controls and signature verification.",
                "Integrated a <strong>Gemini-powered assistant</strong> and multi-language support so the platform works across Malaysia's language mix."
            ],
            tags: ["HTML5", "TailwindCSS", "JavaScript", "Python", "Flask", "Google Gemini"],
            repo: "https://github.com/eavan127/MyMULA-Junior",
            live: "https://my-mula-junior.vercel.app", liveLabel: "Live demo"
        },
        {
            cats: ["sys", "data"], glyph: "layers", thumb: "resources/assets/hero/projects/ADS_swift",
            title: "SwiftQueue: Virtual Queue Redesign",
            sub: "ADS TEB1113 · group project",
            date: "Jul 2026", award: null,
            desc: "A before/after study of Ticketmaster's 2022 Taylor Swift presale collapse, arguing that a single correct data-structure choice separated the failure from a working system.",
            impact: [
                "Implemented a <strong>linked queue in JavaScript</strong> and set it head-to-head against the naive baseline design on identical load.",
                "Built an interactive dashboard with a <strong>live simulation across 4 screens</strong>: enqueue, position assignment, refresh and seat selection.",
                "Framed the comparison around <strong>one data-structure decision</strong>, making the complexity argument visible rather than theoretical."
            ],
            tags: ["JavaScript", "Linked Queue", "HTML/CSS", "Algorithm Analysis"],
            repo: "https://github.com/Jessy123123/ADS_TEB1113_SwiftQueue",
            live: "https://ads-teb-1113-swift-queue.vercel.app/", liveLabel: "Live demo",
            report: "https://drive.google.com/file/d/1oSjGwpiGjUQ8rZ28jBq6LQsFItsS-g8P/view"
        },
        {
            cats: ["sys", "web"], glyph: "check-circle", thumb: "resources/assets/hero/projects/sortify",
            title: "Sortify: Recycling Habit System",
            sub: "OH MY CODE 16.0 · Group 13 · Team Leader",
            date: "Jul 2025", award: "14.63 / 15",
            desc: "A desktop application helping users sort recyclables correctly and rewarding them for doing it, built in VB.NET with Microsoft Access under competition time pressure.",
            impact: [
                "Led the team to a coursework score of <strong>14.63 out of 15</strong>, owning planning, delegation and technical direction.",
                "Keyword search identifies whether an item is recyclable and which bin it belongs in, the actual friction point that stops people recycling.",
                "Closed the loop with image-upload proof and a reward wallet, turning a lookup tool into a <strong>habit-formation system</strong>."
            ],
            tags: ["VB.NET", "Microsoft Access", "WinForms", "SQL"],
            repo: "https://github.com/eavan127/OMC_Sortify", live: null,
            deck: "https://drive.google.com/file/d/15F-FhgvCi6F790AzlqHMGNnlzFaxm3tx/view",
            video: "https://drive.google.com/file/d/1yX1ItTAtRtTbjj5O0PU9agkflwUuQid6/view"
        },
        {
            cats: ["sys"], glyph: "code", thumb: "resources/assets/hero/projects/OOP_seashark",
            title: "Sea Shark: Educational C# Platformer",
            sub: "Object-Oriented Programming project",
            date: "Mar 2026", award: null,
            desc: "A gamified undersea platformer teaching C# concepts through play. Players navigate levels, collect keys, and answer quizzes with immediate feedback.",
            impact: [
                "Built the level system on an <strong>abstract base class with polymorphic quiz loading</strong>, so Beginner and Advanced levels extend rather than duplicate.",
                "Demonstrates all four OOP pillars in a system that does something, so the pillars carry real gameplay logic.",
                "Delivered as a six-member group project alongside a solo assignment build."
            ],
            tags: ["C#", ".NET", "OOP", "Console Application"],
            repo: "https://github.com/eavan127/OOP_seashark", live: null,
            report: "https://drive.google.com/file/d/1_IKnCwnEdPDtljYgVzWG1iBFU3LtSp4C/view"
        },
        {
            cats: ["sys"], glyph: "git-branch",
            title: "Algorithms & Data Structures Lab Set",
            sub: "ADS TEB1113 · full course archive",
            date: "May to Jul 2026", award: null,
            desc: "The complete C++ solution set for the Algorithms and Data Structures course, covering every weekly task from matrix manipulation to advanced dynamic programming.",
            impact: [
                "Covers <strong>easy through advanced tiers</strong> each week: rotated matrices, binary search for a matrix median, maximum-area rectangle of 1s.",
                "Written in C++ with an emphasis on <strong>complexity reasoning</strong>, not just passing output.",
                "Indexed and dated so the progression through the course is legible at a glance."
            ],
            tags: ["C++", "Algorithms", "Dynamic Programming", "Binary Search"],
            repo: "https://github.com/eavan127/ADS_TEB1113", live: null
        },
        {
            cats: ["web"], glyph: "layout", thumb: "resources/assets/hero/projects/occ_website",
            title: "Open Computing Club: Official Website",
            sub: "OCC, Universiti Teknologi PETRONAS",
            date: "Jan 2026", award: null,
            desc: "The public website for UTP's Open Computing Club, \"the space between creativity and code\", covering events, opportunities and member onboarding.",
            impact: [
                "Shipped and <strong>deployed live on Vercel</strong>, serving as the club's actual public front door rather than a mockup.",
                "Fully responsive layout with an opportunities board keeping the club's calls-to-action visible to prospective members."
            ],
            tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
            repo: "https://github.com/eavan127/occ_club_web",
            live: "https://occ-club-web.vercel.app", liveLabel: "Live site"
        },
        {
            cats: ["web"], glyph: "layout", thumb: "resources/assets/hero/projects/fried_chicken",
            title: "Crispy: Restaurant Landing Page",
            sub: "Front-end design exercise",
            date: "Nov 2025", award: null,
            desc: "A responsive restaurant landing page built to practise scroll-driven animation and appetite-led visual design.",
            impact: [
                "Scroll-reveal animation throughout, tuned so motion supports the reading order instead of competing with it.",
                "Fully responsive across desktop, tablet and mobile, <strong>deployed live on Vercel</strong>."
            ],
            tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
            repo: "https://github.com/eavan127/fried_chicken_website",
            live: "https://fried-chicken-website-six.vercel.app", liveLabel: "Live site"
        }
    ],

    /* ---------------- Skills ---------------- */
    skills: [
        {
            group: "AI & Machine Learning",
            items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "RAG", "YOLO11",
                "ResNet18", "FAISS", "Vector Search", "Sentence Transformers", "LangChain", "Ollama",
                "GROQ API", "Amazon Bedrock", "Microsoft Azure AI", "Google Gemini", "PyTorch"]
        },
        {
            group: "Cloud & Backend",
            items: ["FastAPI", "REST API", "PostgreSQL", "Supabase", "Oracle SQL", "DBMS Design",
                "pgvector", "JWT Auth", "AWS", "Firebase", "Git"]
        },
        {
            group: "Languages & Dev Tools",
            items: ["Python", "TypeScript", "C#", "C++", "VB.NET", "SQL", "React", "React Native / Expo",
                "Streamlit", "Unity", "Three.js", "Vercel", "Kiro", "draw.io", "Adobe Illustrator"]
        }
    ],

    languages: [
        { name: "Mandarin", level: "Native", pct: 100 },
        { name: "English", level: "C1 Oxford OOPT", pct: 90 },
        { name: "Malay", level: "Professional", pct: 80 },
        { name: "Cantonese", level: "Working", pct: 60 }
    ],

    /* ---------------- Experience ---------------- */
    experience: [
        {
            role: "Logistics Head of Department",
            org: "MPU 4.0, Universiti Teknologi PETRONAS",
            when: "2026 to Present", type: "Leadership",
            metrics: ["Department-wide events", "Resource allocation"],
            desc: "Direct logistics planning and cross-team coordination for MPU 4.0 departmental activities, owning scheduling and resource allocation across department-wide events.",
            soft: ["Leadership", "Resource Planning", "Cross-team Coordination", "Accountability"]
        },
        {
            role: "Team Lead, CICSC 2026",
            org: "China University of Petroleum (Beijing) · Abu Dhabi, UAE (remote)",
            when: "Mar to Jun 2026", type: "Team Lead",
            metrics: ["6-member team", "Regional Final"],
            desc: "Led a six-member UTP team through to the Middle East Regional Final of the China International College Students' Innovation Competition, coordinating research, prototype development and pitch delivery for CulturaVerse.",
            soft: ["Team Leadership", "International Collaboration", "Pitching", "Project Direction", "Working Under Pressure"]
        },
        {
            photo: "resources/assets/hero/experience/AI ready master trainer.png",
            role: "Speaker, AI Ready ASEAN Master Training",
            org: "UTP-ASEAN Student Association",
            when: "Nov 2025 to Present", type: "Speaker",
            metrics: ["3 training modules"],
            desc: "Deliver structured training across three modules on AI fundamentals, practical applications and responsible adoption, facilitating discussion on ethical AI and regional innovation readiness with ASEAN master trainers.",
            soft: ["Public Speaking", "Teaching", "Facilitation", "Technical Communication"]
        },
        {
            photo: "resources/assets/hero/experience/Assistant_CNP.png",
            role: "Assistant Head, Ceremony and Protocol Department (CNP)",
            org: "ASEAN Student Forum 2025, UTP-ASEAN Student Association",
            when: "Jan 2025 to Aug 2025", type: "Leadership",
            metrics: ["8 months"],
            desc: "Supported ceremony planning and protocol coordination for ASEAN Student Forum 2025 events, including the ASF 2025 Family Day.",
            soft: ["Event Coordination", "Protocol Planning", "Teamwork"]
        },
        {
            role: "Monitoring & Evaluation Officer",
            org: "UTP-ASEAN Student Association",
            when: "Mar 2025 to Present", type: "Committee",
            metrics: [],
            desc: "Support monitoring and evaluation of ongoing activities by organising data, preparing reports and collecting feedback, so decisions are made on evidence rather than impression.",
            soft: ["Analytical Thinking", "Data Organisation", "Reporting", "Feedback Collection"]
        },
        {
            photo: "resources/assets/hero/experience/OMC_leader.png",
            role: "Team Leader, OH MY CODE 16.0 Group 13",
            org: "Universiti Teknologi PETRONAS",
            when: "Jul 2025", type: "Team Lead",
            metrics: ["14.63 / 15 score"],
            desc: "Directed planning, task delegation and technical execution for a VB.NET and Microsoft Access system solution under competition time constraints, achieving a project score of 14.63 out of 15.",
            soft: ["Leadership", "Delegation", "Technical Execution", "Deadline Management"]
        },
        {
            photo: "resources/assets/hero/experience/emcee.png",
            role: "Emcee, PETRONAS SECURE NEX Hackathon 2025",
            org: "UTP SYNTECH",
            when: "Aug 2025", type: "Emcee",
            metrics: ["3 live sessions hosted"],
            desc: "Hosted the Opening Ceremony, Closing Ceremony and Pitching Sessions, holding clear communication and smooth transitions between teams, judges and organisers in a live, fast-moving environment.",
            soft: ["Public Speaking", "Composure", "Live Coordination", "Stakeholder Communication"]
        },
        {
            photo: "resources/assets/hero/experience/Down to Earth.png",
            role: "Head of Facilitators Department, Down To Earth 2024",
            org: "Universiti Teknologi PETRONAS · SJK(C) Chung Sun",
            when: "Sep to Nov 2024", type: "Leadership",
            metrics: ["UN SDG outreach"],
            desc: "Directed a facilitator team delivering a community outreach programme at a primary school, designing interactive activities that introduced the UN Sustainable Development Goals to young students.",
            soft: ["Team Management", "Programme Design", "Community Engagement", "Adaptability"]
        },
        {
            photo: "resources/assets/hero/experience/blackberry_visit.png",
            role: "Member & Industrial Visit Participant",
            org: "CYBERHAX UTP",
            when: "Sep 2024 to Present", type: "Member",
            metrics: ["BlackBerry industrial visit"],
            desc: "Active member engaging in cybersecurity workshops, Hack The Box meetups and peer learning; joined the BlackBerry industrial visit covering security operations, offensive security, governance, application and cloud security.",
            soft: ["Continuous Learning", "Security Awareness", "Peer Collaboration", "Industry Exposure"]
        },
        {
            photo: "resources/assets/hero/experience/RISE social_personal.png",
            role: "Engagement Committee, RISE Social Practice Programme 2025",
            org: "with Tsinghua University, China",
            when: "Jan 2025", type: "Committee",
            metrics: [],
            desc: "Coordinated community-focused social initiatives with Tsinghua University delegates, contributing to CSR activity planning and facilitating engagement sessions between student groups.",
            soft: ["Cross-cultural Communication", "CSR Planning", "Diplomacy"]
        },
        {
            photo: "resources/assets/hero/experience/CSR_orphanage.png",
            role: "Volunteer Committee, CSR Orphanage Programme",
            org: "The Salvation Army, Ipoh",
            when: "Feb 2025", type: "Volunteer",
            metrics: ["5 ASEAN delegations"],
            desc: "Led interactive activities and games for children, collaborating with ASEAN student delegates from Vietnam, the Philippines, Indonesia, Myanmar and Cambodia to deliver the programme.",
            soft: ["Empathy", "Cross-cultural Teamwork", "Social Responsibility", "Initiative"]
        },
        {
            photo: "resources/assets/hero/experience/adjudication.png",
            role: "Adjudication Committee",
            org: "10th Northern Malaysia Mandarin Debate Tournament",
            when: "Dec 2024 to May 2025", type: "Committee",
            metrics: [],
            desc: "Supported the adjudication process, coordinating judging workflows and evaluation materials to hold fairness and consistent scoring across every session.",
            soft: ["Impartiality", "Process Coordination", "Attention to Detail", "Conflict Handling"]
        },
        {
            photo: "resources/assets/hero/experience/media_committee.png",
            role: "Media Committee and Ruan Chamber Member",
            org: "UTPCO Chinese Orchestra, UTP",
            when: "Jan 2025 to Present", type: "Committee",
            metrics: ["Grade 7 piano theory"],
            desc: "Design promotional posters and visual materials for event publicity using Adobe Illustrator and Photoshop, while performing as a Ruan chamber member in ensemble rehearsals.",
            soft: ["Visual Design", "Creative Communication", "Discipline", "Ensemble Teamwork"]
        }
    ],

    /* ---------------- Awards ---------------- */
    awards: [
        {
            medal: "🥇", place: "Champion",
            photo: "resources/assets/hero/awards/Jabil_competition/Jabil_group.png",
            title: "AI & Data Innovation Track",
            org: "Jabil IT ECP Bootcamp 3.0, Jabil Circuit", when: "June 2026",
            desc: "First place for NEXA, an AI-assisted tariff classification pipeline built for Jabil's Global Trade Compliance department, judged on real operational impact against an existing manual workflow."
        },
        {
            medal: "🥈", place: "1st Runner-Up",
            photo: "resources/assets/hero/awards/AWS_hackathon/AWS_group.png",
            title: "Silver Award, GenAI Hackathon",
            org: "AWS × Universiti Teknologi PETRONAS", when: "June 2026",
            desc: "Awarded for AWS-IQ, a multi-agent AI onboarding system built on Amazon Bedrock with a custom MCP folder-watcher pipeline."
        },
        {
            medal: "🥉", place: "3rd Place",
            title: "Bronze Award, Middle East Regional Final",
            org: "China International College Students' Innovation Competition (CICSC 2026)", when: "May 2026",
            desc: "Third place at the Middle East Regional Final as Team Lead of Lumenix, for the CulturaVerse AI-powered VR literature platform, in an international field."
        },
        {
            medal: "🎓", place: "Scholarship",
            photo: "resources/assets/hero/awards/petronas_award.png",
            title: "PETRONAS Education Sponsorship Programme",
            org: "PETRONAS · PESP Scholar", when: "2024 to Present",
            desc: "Full sponsorship awarded through PETRONAS' national scholarship programme, covering the Foundation year and the Bachelor of Computer Science degree."
        },
        {
            medal: "🏅", place: "Excellence",
            photo: "resources/assets/hero/awards/student_excellence.png",
            title: "Foundation 4.0 Excellence Award",
            org: "Universiti Teknologi PETRONAS", when: "2025",
            desc: "Awarded for achieving a perfect 4.00 grade point average across the Foundation in Computer Science programme."
        },
        {
            medal: "🎖️", place: "Distinction",
            photo: "resources/assets/hero/awards/firstclass.png",
            title: "Foundation First Class Award",
            org: "Universiti Teknologi PETRONAS", when: "2025",
            desc: "First Class distinction on completion of the Foundation programme, recognising sustained academic performance across the full year."
        }
    ],

    /* ---------------- Education ---------------- */
    education: [
        {
            badge: "UTP",
            photo: "resources/assets/hero/educations/UTP_bachelor.png",
            degree: "Bachelor of Computer Science",
            years: "2025 to 2028",
            institution: "Universiti Teknologi PETRONAS, Perak, Malaysia",
            chips: [
                { text: "CGPA 3.93", alt: false },
                { text: "PETRONAS Education Sponsorship Programme Scholar", alt: true }
            ]
        },
        {
            badge: "UTP",
            photo: "resources/assets/hero/educations/foundation.png",
            degree: "Foundation in Computer Science",
            years: "2024 to 2025",
            institution: "Universiti Teknologi PETRONAS, Perak, Malaysia",
            chips: [
                { text: "CGPA 4.00", alt: false },
                { text: "Foundation 4.0 Excellence Award · First Class Award", alt: true }
            ]
        },
        {
            badge: "SS",
            photo: "resources/assets/hero/educations/SPM.png",
            degree: "Malaysian Certificate of Education (SPM)",
            years: "2019 to 2023",
            institution: "SM Sung Siew, Sabah, Malaysia",
            chips: [
                { text: "9A: 5A+, 4A, 1B", alt: false },
                { text: "Full Science Stream", alt: true }
            ]
        }
    ],

    /* ---------------- Certifications ---------------- */
    certifications: [
        { emoji: "☁️", photo: "resources/assets/hero/certifications/microsoft_azure.png", issuer: "Microsoft", date: "", name: "Azure AI Fundamentals (AI-900)", note: "Core AI, ML and cognitive services on Azure", link: null },
        { emoji: "🧠", photo: "resources/assets/hero/certifications/supervised.png", issuer: "Stanford University / Coursera", date: "", name: "Supervised Machine Learning: Regression and Classification", note: "Gradient descent, regularisation, model evaluation", link: null },
        { emoji: "✨", photo: "resources/assets/hero/certifications/introduction to generatiive AI.png", issuer: "Google Cloud", date: "", name: "Introduction to Generative AI", note: "Foundation models, prompt design and responsible use", link: null },
        { emoji: "🖼️", photo: "resources/assets/hero/certifications/image_captioning.png", issuer: "Google Cloud", date: "", name: "Creating Image Captioning Models", note: "Encoder and decoder architectures with attention", link: null },
        { emoji: "🤖", photo: "resources/assets/hero/certifications/AWS_robotics.png", issuer: "Amazon Web Services", date: "", name: "Introduction to Robotics", note: "Robotics fundamentals and simulation workflows", link: null },
        { emoji: "🗣️", issuer: "Oxford University Press", date: "", name: "Oxford Online Placement Test, Grade C1", note: "Advanced English proficiency", link: null },
        { emoji: "🏆", photo: "resources/assets/hero/certifications/jabil.png", issuer: "Jabil ECP Bootcamp", date: "2026", name: "1st Place Certificate of Achievement", note: "Champion, AI & Data Innovation track", link: null },
        { emoji: "🥈", photo: "resources/assets/hero/certifications/AWS.jpg", issuer: "AWS × UTP GenAI Hackathon", date: "2026", name: "1st Runner-Up Certificate of Achievement", note: "Silver, multi-agent AI on Amazon Bedrock", link: null },
        { emoji: "⚖️", photo: "resources/assets/hero/certifications/adjudication.png", issuer: "Northern Malaysia Mandarin Debate", date: "2025", name: "Adjudication Committee Certificate", note: "Judging workflow and evaluation coordination", link: null },
        { emoji: "💰", photo: "resources/assets/hero/certifications/financial.png", issuer: "Financial Education for Youth", date: "", name: "Certificate of Participation", note: "Personal finance and financial literacy foundations", link: null },
        { emoji: "🎹", photo: "resources/assets/hero/certifications/Piano Grade 7.jpg", issuer: "Trinity College London", date: "", name: "Trinity Grade 7 (Piano)", note: "Music theory and performance examination", link: null },
        { emoji: "💻", photo: "resources/assets/hero/certifications/OMC.png", issuer: "OH MY CODE 16.0, Universiti Teknologi PETRONAS", date: "2025", name: "Certificate of Achievement", note: "Scored 14.63 / 15 in the coursework competition", link: null },
        { emoji: "🛠️", photo: "resources/assets/hero/certifications/robotics_workshop1.png", issuer: "UTP SYNTECH Organization", date: "2025", name: "Road to ROBOCON Workshop", note: "Robotics project planning and competition readiness", link: null },
        { emoji: "⚡", photo: "resources/assets/hero/certifications/Godamlah_hackathon.png", issuer: "GodamLah! Hackathon", date: "", name: "Certificate of Participation", note: "Hackathon participation", link: null },
        { emoji: "🚀", photo: "resources/assets/hero/certifications/Kolaxus_hackathon.png", issuer: "Kolaxus Hackathon", date: "", name: "Certificate of Participation", note: "Hackathon participation", link: null }
    ],

    /* ---------------- Section banner images ----------------
       Files live in src/ and are numbered by the order the sections appear
       on the page. Each slot tries .jpg, then .png, then .webp; if none of
       them exist the banner hides itself and the section is unaffected.

       To move an image to a different section, change the "section" value.  */
    sectionImages: [
        { n: 2, section: "projects",       alt: "Projects" },
        { n: 3, section: "skills",         alt: "Technical Skills" },
        { n: 4, section: "experience",     alt: "Experience" },
        { n: 5, section: "awards",         alt: "Awards and Honours" }
    ],

    navItems: [
        { id: "home", label: "Home", icon: "home" },
        { id: "projects", label: "Projects", icon: "folder" },
        { id: "skills", label: "Skills", icon: "cpu" },
        { id: "experience", label: "Experience", icon: "briefcase" },
        { id: "awards", label: "Awards", icon: "award" },
        { id: "education", label: "Education", icon: "school" },
        { id: "certifications", label: "Certifications", icon: "badge" },
        { id: "contact", label: "Connect", icon: "mail" }
    ]
};
