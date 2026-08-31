/* ==========================================================================
   Eavan Tan portfolio content.
   Everything readable on the site lives in this file.
   ========================================================================== */

const portfolioData = {

    /* ---------------- Personal ---------------- */
    name: "EAVAN TAN",
    role: "AI / ML Engineer",
    microline: "RAG & LLM Pipelines | Computer Vision | Deep Learning | VR | Full-Stack",
    heroImage: "resources/assets/hero/profile.jpg",
    resumeLink: "resources/assets/docs/Eavan_Tan_Resume.pdf",
    email: "evan17tan@gmail.com",

    bio: [
        "Turn slow manual workflows into AI pipelines, taking <strong>12.5 hours down to 15 minutes</strong>.",
        "Train and fine-tune vision models on real, messy, self-labelled data.",
        "Design retrieval systems that know when <strong>not</strong> to answer.",
        "Lead cross-disciplinary teams of up to six to competition finals."
    ],

    heroBadges: [
        { value: "3.93", label: "CGPA" },
        { value: "3", label: "Competition podiums" },
        { value: "98%", label: "Runtime cut, NEXA" }
    ],

    socialLinks: {
        linkedin: "https://www.linkedin.com/in/eavan-tan-a13785324",
        github: "https://github.com/eavan127",
        email: "mailto:evan17tan@gmail.com"
    },

    contactIntro:
        "Open to AI/ML internship placements from May to December 2027, and to interesting problems any time. " +
        "Based in Perak, Malaysia.",

    contactLinks: [
        { icon: "mail", label: "Personal email", value: "evan17tan@gmail.com", href: "mailto:evan17tan@gmail.com" },
        { icon: "school", label: "University email", value: "eavan_24006152@utp.edu.my", href: "mailto:eavan_24006152@utp.edu.my" },
        { icon: "phone", label: "Phone", value: "+60 10-505-1219", href: "tel:+60105051219" },
        { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/in/eavan-tan-a13785324", href: "https://www.linkedin.com/in/eavan-tan-a13785324" },
        { icon: "github", label: "GitHub", value: "github.com/eavan127", href: "https://github.com/eavan127" }
    ],

    /* ---------------- My Expertise ---------------- */
    about: {
        domains: [
            {
                title: "AI / ML Engineering",
                glyph: "neural",
                icons: ["cpu", "database", "search", "shield", "code"],
                bullets: [
                    "Built retrieval-augmented pipelines with embedding search, confidence gating and role-based agents.",
                    "Cut a customs-classification workflow from <strong>12.5 hours to about 15 minutes</strong> while raising accuracy.",
                    "Hardened LLM services with circuit breakers against model outages and prompt-injection attempts.",
                    "Designed <strong>confidence-governed rejection</strong> so systems decline rather than hallucinate."
                ]
            },
            {
                title: "Computer Vision & Deep Learning",
                glyph: "vision",
                icons: ["camera", "layers", "activity", "grid", "check-circle"],
                bullets: [
                    "Fine-tuned a <strong>YOLO11 detector on 4,168 self-labelled images</strong> for real-time CCTV detection.",
                    "Built ResNet18 512-dimension embeddings with pgvector similarity search for animal re-identification.",
                    "Designed a dual-branch CNN from scratch over raw RF signals, because <strong>no pretrained backbone exists</strong>.",
                    "Trained multi-label classifiers where several classes can be true in the same window at once.",
                    "Locked model behaviour behind <strong>104 passing tests</strong> before touching real data."
                ]
            },
            {
                title: "Product & Team Delivery",
                glyph: "team",
                icons: ["users", "server", "layout", "git-branch", "award"],
                bullets: [
                    "Led a <strong>six-member team</strong> to the Middle East Regional Final of an international competition.",
                    "Shipped end-to-end products: FastAPI backends, Supabase/Postgres schemas, React and Unity front ends.",
                    "Delivered under hackathon deadlines: <strong>three podium finishes in a single year</strong>.",
                    "Hold logistics, secretarial and speaking roles across university and ASEAN-level organisations."
                ]
            }
        ]
    },

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
            repo: "https://github.com/eavan127/NEXA-AI-Powered-Tariff", live: null
        },
        {
            cats: ["vr", "ai"], glyph: "box",
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
            live: "https://lumenix.itch.io/cultura-verse-vr", liveLabel: "Play on itch.io"
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
            repo: "https://github.com/eavan127/sedicAI_NEXA", live: null
        },
        {
            cats: ["ai"], glyph: "search",
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
            repo: "https://github.com/eavan127/rag_dialect", live: null
        },
        {
            cats: ["ai"], glyph: "users",
            title: "AWS-IQ: Multi-Agent Onboarding System",
            sub: "AWS × UTP GenAI Hackathon",
            date: "Jun 2026", award: "Silver",
            desc: "A multi-agent AI onboarding assistant on Amazon Bedrock that ingests a new hire's document inbox and turns unstructured files into structured, queryable onboarding knowledge.",
            impact: [
                "Placed <strong>1st Runner-Up</strong> against university-wide competition, built inside a hackathon window.",
                "Orchestrated <strong>multiple cooperating Bedrock agents</strong> through a skill-driven ETL pipeline rather than one monolithic prompt.",
                "Wired a custom <strong>folder-watcher MCP server</strong> so dropping a file into an inbox directory triggers the whole pipeline."
            ],
            tags: ["Amazon Bedrock", "AWS", "Python", "MCP", "Kiro", "ETL"],
            repo: null, live: null
        },
        {
            cats: ["cv", "ai"], glyph: "smartphone",
            title: "PawGuard AI: Disaster-Ready Animal Rescue",
            sub: "KitaHack 2026 · Google Developer Groups",
            date: "Jan to May 2026", award: null,
            desc: "The mobile origin of PawSecure. An on-device AI app helping the public and NGOs identify, report and adopt stray animals, with disaster scenarios as the driving use case.",
            impact: [
                "Real-time on-device detection at <strong>15 to 30 FPS</strong> with TensorFlow Lite, so identification works with no network in a disaster zone.",
                "Breed classification across <strong>70+ dog and cat breeds</strong> with confidence-based verification before a report is accepted.",
                "Dual-audience product design, with one app serving public reporters and NGO rescuers through genuinely different workflows."
            ],
            tags: ["Flutter", "Dart", "Firebase", "TensorFlow Lite", "Gemini AI", "Google Maps"],
            repo: "https://github.com/Jessy123123/PawGuard_AI", live: null
        },
        {
            cats: ["data"], glyph: "database",
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
            repo: null, live: null
        },
        {
            cats: ["web", "ai"], glyph: "box",
            title: "MyRumah: AI Interior Design Marketplace",
            sub: "B2C / B2B2C furniture commerce app",
            date: "Jan 2026", award: null,
            desc: "A furniture marketplace where you photograph your room, let Gemini redesign it, and drop real 3D furniture models into the space before you spend anything.",
            impact: [
                "<strong>AI Architect</strong> turns a room photo into professional redesign concepts via Gemini 2.5 Flash, the step that usually costs a designer's fee.",
                "<strong>Virtual Place</strong> renders drag-and-drop 3D furniture with Three.js, targeting the size-and-fit returns that hurt furniture retailers most.",
                "Built a complete multi-merchant commerce flow covering grouped carts, vouchers, cards, e-wallets and FPX, plus a merchant role with its own storefront."
            ],
            tags: ["React Native", "Expo", "TypeScript", "Three.js", "Google Gemini"],
            repo: "https://github.com/eavan127/myrumah", live: null
        },
        {
            cats: ["web"], glyph: "shield",
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
            cats: ["sys", "data"], glyph: "layers",
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
            repo: "https://github.com/Jessy123123/ADS_TEB1113_SwiftQueue", live: null
        },
        {
            cats: ["sys", "web"], glyph: "check-circle",
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
            repo: "https://github.com/eavan127/OMC_Sortify", live: null
        },
        {
            cats: ["sys"], glyph: "code",
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
            repo: "https://github.com/eavan127/OOP_seashark", live: null
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
            cats: ["web"], glyph: "layout",
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
            cats: ["web"], glyph: "layout",
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
            role: "Speaker, AI Ready ASEAN Master Training",
            org: "UTP-ASEAN Student Association",
            when: "Nov 2025 to Present", type: "Speaker",
            metrics: ["3 training modules"],
            desc: "Deliver structured training across three modules on AI fundamentals, practical applications and responsible adoption, facilitating discussion on ethical AI and regional innovation readiness with ASEAN master trainers.",
            soft: ["Public Speaking", "Teaching", "Facilitation", "Technical Communication"]
        },
        {
            role: "Secretary and Logistics Supervisor, ASEAN Student Forum 2026",
            org: "UTP-ASEAN Student Association",
            when: "Aug 2025 to Present", type: "Dual role",
            metrics: ["2 concurrent roles"],
            desc: "Hold dual roles: managing meeting documentation, minutes and internal coordination as Secretary, while supervising logistics planning, venue preparation and resourcing for forum activities.",
            soft: ["Organisation", "Documentation", "Supervision", "Multi-role Time Management"]
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
            role: "Team Leader, OH MY CODE 16.0 Group 13",
            org: "Universiti Teknologi PETRONAS",
            when: "Jul 2025", type: "Team Lead",
            metrics: ["14.63 / 15 score"],
            desc: "Directed planning, task delegation and technical execution for a VB.NET and Microsoft Access system solution under competition time constraints, achieving a project score of 14.63 out of 15.",
            soft: ["Leadership", "Delegation", "Technical Execution", "Deadline Management"]
        },
        {
            role: "Emcee, PETRONAS SECURE NEX Hackathon 2025",
            org: "UTP SYNTECH",
            when: "Aug 2025", type: "Emcee",
            metrics: ["3 live sessions hosted"],
            desc: "Hosted the Opening Ceremony, Closing Ceremony and Pitching Sessions, holding clear communication and smooth transitions between teams, judges and organisers in a live, fast-moving environment.",
            soft: ["Public Speaking", "Composure", "Live Coordination", "Stakeholder Communication"]
        },
        {
            role: "Head of Facilitators Department, Down To Earth 2024",
            org: "Universiti Teknologi PETRONAS · SJK(C) Chung Sun",
            when: "Sep to Nov 2024", type: "Leadership",
            metrics: ["UN SDG outreach"],
            desc: "Directed a facilitator team delivering a community outreach programme at a primary school, designing interactive activities that introduced the UN Sustainable Development Goals to young students.",
            soft: ["Team Management", "Programme Design", "Community Engagement", "Adaptability"]
        },
        {
            role: "Member & Industrial Visit Participant",
            org: "CYBERHAX UTP",
            when: "Sep 2024 to Present", type: "Member",
            metrics: ["BlackBerry industrial visit"],
            desc: "Active member engaging in cybersecurity workshops, Hack The Box meetups and peer learning; joined the BlackBerry industrial visit covering security operations, offensive security, governance, application and cloud security.",
            soft: ["Continuous Learning", "Security Awareness", "Peer Collaboration", "Industry Exposure"]
        },
        {
            role: "Engagement Committee, RISE Social Practice Programme 2025",
            org: "with Tsinghua University, China",
            when: "Jan 2025", type: "Committee",
            metrics: [],
            desc: "Coordinated community-focused social initiatives with Tsinghua University delegates, contributing to CSR activity planning and facilitating engagement sessions between student groups.",
            soft: ["Cross-cultural Communication", "CSR Planning", "Diplomacy"]
        },
        {
            role: "Volunteer Committee, CSR Orphanage Programme",
            org: "The Salvation Army, Ipoh",
            when: "Feb 2025", type: "Volunteer",
            metrics: ["5 ASEAN delegations"],
            desc: "Led interactive activities and games for children, collaborating with ASEAN student delegates from Vietnam, the Philippines, Indonesia, Myanmar and Cambodia to deliver the programme.",
            soft: ["Empathy", "Cross-cultural Teamwork", "Social Responsibility", "Initiative"]
        },
        {
            role: "Adjudication Committee",
            org: "10th Northern Malaysia Mandarin Debate Tournament",
            when: "Dec 2024 to May 2025", type: "Committee",
            metrics: [],
            desc: "Supported the adjudication process, coordinating judging workflows and evaluation materials to hold fairness and consistent scoring across every session.",
            soft: ["Impartiality", "Process Coordination", "Attention to Detail", "Conflict Handling"]
        },
        {
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
            title: "AI & Data Innovation Track",
            org: "Jabil IT ECP Bootcamp 3.0, Jabil Circuit", when: "June 2026",
            desc: "First place for NEXA, an AI-assisted tariff classification pipeline built for Jabil's Global Trade Compliance department, judged on real operational impact against an existing manual workflow."
        },
        {
            medal: "🥈", place: "1st Runner-Up",
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
            title: "PETRONAS Education Sponsorship Programme",
            org: "PETRONAS · PESP Scholar", when: "2024 to Present",
            desc: "Full sponsorship awarded through PETRONAS' national scholarship programme, covering the Foundation year and the Bachelor of Computer Science degree."
        },
        {
            medal: "🏅", place: "Excellence",
            title: "Foundation 4.0 Excellence Award",
            org: "Universiti Teknologi PETRONAS", when: "2025",
            desc: "Awarded for achieving a perfect 4.00 grade point average across the Foundation in Computer Science programme."
        },
        {
            medal: "🎖️", place: "Distinction",
            title: "Foundation First Class Award",
            org: "Universiti Teknologi PETRONAS", when: "2025",
            desc: "First Class distinction on completion of the Foundation programme, recognising sustained academic performance across the full year."
        }
    ],

    /* ---------------- Education ---------------- */
    education: [
        {
            badge: "UTP",
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
        { emoji: "☁️", issuer: "Microsoft", date: "", name: "Azure AI Fundamentals (AI-900)", note: "Core AI, ML and cognitive services on Azure", link: null },
        { emoji: "🧠", issuer: "Stanford University / Coursera", date: "", name: "Supervised Machine Learning: Regression and Classification", note: "Gradient descent, regularisation, model evaluation", link: null },
        { emoji: "✨", issuer: "Google Cloud", date: "", name: "Introduction to Generative AI", note: "Foundation models, prompt design and responsible use", link: null },
        { emoji: "🖼️", issuer: "Google Cloud", date: "", name: "Creating Image Captioning Models", note: "Encoder and decoder architectures with attention", link: null },
        { emoji: "🤖", issuer: "Amazon Web Services", date: "", name: "Introduction to Robotics", note: "Robotics fundamentals and simulation workflows", link: null },
        { emoji: "🗣️", issuer: "Oxford University Press", date: "", name: "Oxford Online Placement Test, Grade C1", note: "Advanced English proficiency", link: null },
        { emoji: "🏆", issuer: "Jabil ECP Bootcamp", date: "2026", name: "1st Place Certificate of Achievement", note: "Champion, AI & Data Innovation track", link: null },
        { emoji: "🥈", issuer: "AWS × UTP GenAI Hackathon", date: "2026", name: "1st Runner-Up Certificate of Achievement", note: "Silver, multi-agent AI on Amazon Bedrock", link: null },
        { emoji: "⚖️", issuer: "Northern Malaysia Mandarin Debate", date: "2025", name: "Adjudication Committee Certificate", note: "Judging workflow and evaluation coordination", link: null },
        { emoji: "💰", issuer: "Financial Education for Youth", date: "", name: "Certificate of Participation", note: "Personal finance and financial literacy foundations", link: null }
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
