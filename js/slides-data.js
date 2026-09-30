// ========================================
// SLIDES DATA — Harsh Raj Portfolio
// Replace `media` paths with your actual dark abstract images
// Dimensions: recommended 1920x1080 or similar landscape ratio
// ========================================

export const slides = [
    {
        // ── SLIDE 01 ── HERO
        id: "hero",
        title: "Harsh Raj",
        media: "assets/images/slide-01-hero.jpg",
        overlay: {
            type: "hero",
            eyebrow: "B.Tech CSE · VIT-AP University · 2026",
            headline: "Harsh Raj",
            subheadline: "AI Engineer · Full-Stack Developer · Researcher",
            tagline: "Building and shipping AI-powered applications, developer tools, and full-stack platforms.",
            cta: {
                primary: { label: "View Projects", slideTarget: 2 },
                secondary: { label: "Contact Me", slideTarget: 5 }
            },
            resume: {
                label: "Download Resume",
                url: "assets/resume_final.pdf"
            },
            socials: [
                { label: "GitHub", url: "https://github.com/primetree2" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/harsh-raj-820117173/" },
                { label: "Email", url: "mailto:myselfharshr@gmail.com" }
            ]
        }
    },

    {
        // ── SLIDE 02 ── ABOUT
        id: "about",
        title: "About Me",
        media: "assets/images/slide-02-about.jpg",
        overlay: {
            type: "about",
            label: "About",
            headline: "Curious builder.\nAnalytical thinker.",
            bio: "Computer Science graduate (B.Tech, CSE · CGPA 8.56) from VIT-AP University who builds and ships full-stack, AI-powered web apps. Launched Arguen, a live AI-judged debate platform with hundreds of visitors and Razorpay billing, and MergeIQ, a GitHub App and Chrome extension that reviews pull requests with Gemini. Skilled in Python, TypeScript, React, Next.js, FastAPI, PostgreSQL/Supabase, and cloud deployment, with research experience in automated code refactoring and software-quality evaluation. Curious about new technologies and dedicated to building innovative solutions.",
            highlights: [
                { value: "8.56", label: "CGPA / 10" },
                { value: "4+", label: "Live Projects" },
                { value: "2nd", label: "Of 800 Teams · IIT-K Hackathon" },
                { value: "4", label: "Frontier LLMs Evaluated" },
                { value: "613", label: "Unique Visitors on Arguen" }
            ],
            education: [
                {
                    degree: "B.Tech — Computer Science & Engineering (SCOPE)",
                    institution: "VIT-AP University, Amaravati · CGPA 8.56 / 10",
                    period: "2022 – Sep 2026 (Graduated)"
                },
                {
                    degree: "Senior Secondary (CBSE) — Class 12: 83.2% · Class 10: 94.4%",
                    institution: "Vidya Bharati Chinmaya Vidyalaya, Jamshedpur",
                    period: "Class 10: 2020 · Class 12: 2022"
                }
            ]
        }
    },

    {
        // ── SLIDE 03 ── PROJECTS
        id: "projects",
        title: "Projects",
        media: "assets/images/slide-03-projects.jpg",
        overlay: {
            type: "projects",
            label: "Projects",
            headline: "Things I've Built",
            projects: [
                {
                    name: "Arguen",
                    tagline: "Competitive Live Debate Platform",
                    description: "Designed, built, and launched solo: a real-time debate platform (~36,600 lines of TypeScript) where two players argue timed 2–5 round debates under a Gemini-powered AI judge. The judge scores each argument on 4 dimensions (Clarity, Evidence, Logic, Rebuttal) and detects 16 named logical fallacies, returning the exact offending quote and an explanation. Backed by 48 API route handlers and 47 SQL migrations on Supabase Postgres with Row-Level Security, powering Elo-based ranked matchmaking, live spectating, audience voting, and Realtime score and turn sync. Includes Razorpay subscriptions and one-time purchases with signature-verified webhooks, passwordless sign-in (Google OAuth + email one-time code), and shareable Open Graph result cards. Covered by 116 Vitest tests across 15 files run via GitHub Actions, with Sentry monitoring, PostHog analytics, a daily maintenance cron, and automated database backups.",
                    results: [
                        "613 unique visitors · 2,500+ page views · 1,130+ sessions (PostHog)",
                        "Avg. session 6m 38s",
                        "99.99% crash-free sessions · 86 releases in 30 days (Sentry)"
                    ],
                    tech: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Drizzle ORM", "Gemini AI", "Tailwind CSS v4", "shadcn/ui", "Razorpay", "GitHub Actions", "Vercel"],
                    url: "https://arguen.com",
                    github: "https://github.com/primetree2/arguen",
                    highlight: true
                },
                {
                    name: "MergeIQ",
                    tagline: "AI-Powered Pull Request Analyzer",
                    description: "Chrome extension + GitHub App that analyzes pull requests with Gemini 2.5 Flash, returning structured JSON: a verdict (Safe / Review Needed / Risky) with confidence, a summary, severity-rated risk flags, and suggested review questions. Fetches live repository context (README, folder tree, dependency manifests, recent commits) via the GitHub REST API so each analysis is project-aware rather than diff-only. In GitHub App mode, a webhook endpoint verifies HMAC-SHA256 signatures, runs analysis as a background task, and posts the result as a PR comment using JWT app authentication — no action needed from contributors. FastAPI backend (/analyze and /webhook) deployed on Railway; ~900 lines of Python and JavaScript.",
                    tech: ["Python", "FastAPI", "Chrome MV3", "Gemini 2.5 Flash", "GitHub REST API", "GitHub Apps", "PyJWT", "Railway"],
                    url: "https://web-production-6f4dd.up.railway.app",
                    github: "https://github.com/primetree2/mergeiq",
                    highlight: true
                },
                {
                    name: "HealthAssist",
                    tagline: "AI Symptom Checker & Health Companion",
                    description: "Full-stack AI health companion that takes 4 inputs (age, sex, symptoms, and an optional blood-report PDF) and returns a structured analysis: possible conditions, what the symptoms may mean, questions to ask a doctor, when to seek care, precautions, and warnings. FastAPI backend extracts blood-report text with PyMuPDF and prompts Gemini for JSON-only output, with a prompt restricting conditions to the reported symptoms, a regex fallback for malformed JSON, and graceful error handling. Includes session-scoped history, CORS restricted to the deployed frontend, and a medical disclaimer on every response. Integrates 4 key data-points across 5 levels of analysis.",
                    tech: ["Python", "FastAPI", "React (Vite)", "Tailwind CSS", "Google API", "Generative AI", "Gemini 2.5 Flash-Lite", "PyMuPDF", "Axios", "PostgreSQL", "Vercel", "Render"],
                    url: "https://health-assist-rose.vercel.app/",
                    github: "https://github.com/primetree2/HealthAssist",
                    highlight: false
                },
                {
                    name: "CodeSage",
                    tagline: "AI Codebase Analysis & Refactoring System",
                    description: "Co-developed web app that analyzes a codebase, maps its file structure, suggests refactorings, and generates technical interview questions from the code. Supports 15+ programming languages and multiple LLM providers (Google Gemini, OpenAI GPT-4o, Anthropic Claude) with built-in rate-limit delays and retry logic. Containerized with Docker and deployed on Google Cloud Run. Includes a research report comparing 5 leading LLMs, and the system evolved into the cAST research pipeline.",
                    tech: ["Python", "Flask", "React", "Docker", "Google API", "Google Cloud", "Google Cloud Run", "Gemini API", "OpenAI API", "Anthropic API", "LLMs"],
                    url: "https://codesage-724681386895.us-central1.run.app/",
                    github: "https://github.com/Developer-Sahil/codesage",
                    highlight: false
                }
            ]
        }
    },

    {
        // ── SLIDE 04 ── SKILLS
        // Note: icons resolve via cdn.simpleicons.org; any 404 falls back
        // to assets/icons/fallback.svg (handled in navigation.js).
        // Skills with `icon: null` render as a clean text-only pill.
        id: "skills",
        title: "Skills",
        media: "",
        overlay: {
            type: "skills",
            label: "Skills",
            headline: "My Stack",

            categories: [
                {
                    name: "Languages",
                    skills: [
                        { name: "Python", icon: "python" },
                        { name: "TypeScript", icon: "typescript" },
                        { name: "JavaScript", icon: "javascript" },
                        { name: "Java", icon: "openjdk" },
                        { name: "SQL", icon: null },
                        { name: "HTML/CSS", icon: "html5" },
                    ]
                },
                {
                    name: "Frontend",
                    skills: [
                        { name: "React", icon: "react" },
                        { name: "Next.js (App Router)", icon: "nextdotjs" },
                        { name: "TailwindCSS", icon: "tailwindcss" },
                        { name: "shadcn/ui", icon: "shadcnui" },
                    ]
                },
                {
                    name: "Backend & APIs",
                    skills: [
                        { name: "FastAPI", icon: "fastapi" },
                        { name: "Flask", icon: "flask" },
                        { name: "Next.js Route Handlers", icon: "nextdotjs" },
                        { name: "REST API Design", icon: null },
                        { name: "WebSockets", icon: null },
                        { name: "Webhooks (HMAC-verified)", icon: null },
                        { name: "Chrome Extensions (MV3)", icon: "googlechrome" },
                    ]
                },
                {
                    name: "Databases",
                    skills: [
                        { name: "PostgreSQL", icon: "postgresql" },
                        { name: "Supabase (Auth, Realtime, RLS)", icon: "supabase" },
                        { name: "Drizzle ORM", icon: "drizzle" },
                    ]
                },
                {
                    name: "AI / LLM",
                    skills: [
                        { name: "Google Gemini API", icon: "googlegemini" },
                        { name: "OpenAI API", icon: "openai" },
                        { name: "Anthropic API", icon: "anthropic" },
                        { name: "Prompt Engineering", icon: null },
                        { name: "Structured (JSON) LLM Outputs", icon: null },
                        { name: "AST-based Code Analysis", icon: null },
                        { name: "Machine Learning", icon: null },
                        { name: "NLP", icon: null },
                    ]
                },
                {
                    name: "Testing & DevOps",
                    skills: [
                        { name: "Git", icon: "git" },
                        { name: "GitHub", icon: "github" },
                        { name: "GitHub Actions", icon: "githubactions" },
                        { name: "GitLab CI/CD", icon: "gitlab" },
                        { name: "Vitest", icon: "vitest" },
                        { name: "Docker", icon: "docker" },
                        { name: "Sentry", icon: "sentry" },
                        { name: "PostHog", icon: "posthog" },
                        { name: "N8N", icon: "n8n" },
                    ]
                },
                {
                    name: "Cloud & Hosting",
                    skills: [
                        { name: "AWS", icon: null },
                        { name: "Google Cloud Run", icon: "googlecloud" },
                        { name: "Vercel", icon: "vercel" },
                        { name: "Railway", icon: "railway" },
                        { name: "Render", icon: "render" },
                    ]
                },
                {
                    name: "Integrations",
                    skills: [
                        { name: "Razorpay", icon: "razorpay" },
                        { name: "Resend", icon: "resend" },
                        { name: "GitHub Apps & REST API", icon: "github" },
                        { name: "Web Push", icon: null },
                    ]
                }
            ],

            certifications: [
                { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", icon: null, url: "https://github.com/primetree2/cisco-certificate/blob/main/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf" },
                { name: "Oracle OCI Generative AI Professional", issuer: "Oracle", icon: null, url: "https://github.com/primetree2/cisco-certificate/blob/main/eCertificate.pdf" },
                { name: "SAP Generative AI Developer", issuer: "SAP", icon: "sap", url: "https://github.com/primetree2/cisco-certificate/blob/main/SAP_LA_AIG02_EN_11_EX.pdf" },
                { name: "MERN Full Stack", issuer: "Ethnus", icon: null, url: "https://github.com/primetree2/cisco-certificate/blob/main/3G3GLRGN.pdf" },
                { name: "Data Analysis in R", issuer: "DataCamp", icon: "datacamp", url: "https://github.com/primetree2/cisco-certificate/blob/main/certificate%20(1)_merged.pdf" },
                { name: "Oracle Certified Foundations Associate", issuer: "Oracle", icon: null, url: "https://github.com/primetree2/cisco-certificate/blob/main/oracle.pdf" },
                { name: "JavaScript Essentials", issuer: "Cisco Networking Academy", icon: "cisco", url: "https://github.com/primetree2/cisco-certificate/blob/main/22BCE7591_AP2023246000888_DA02.pdf" },
                { name: "Networking Essentials", issuer: "Cisco Networking Academy", icon: "cisco", url: "https://github.com/primetree2/cisco-certificate/blob/main/cisco%20networking%20essectials.pdf" },
                { name: "Claude 101", issuer: "Anthropic", icon: "anthropic", url: "https://verify.skilljar.com/c/ciebgmmxzm2d" },
                { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", icon: "anthropic", url: "https://verify.skilljar.com/c/8ezigsab3hki" },
            ],
        }
    },
    {
        // ── SLIDE 05 ── LEADERSHIP
        id: "leadership",
        title: "Leadership",
        media: "assets/images/slide-05-leadership.jpg",
        overlay: {
            type: "leadership",
            label: "Leadership, Research & Achievements",
            headline: "Beyond the Code",
            achievement: {
                badge: "🏆 2nd Place",
                event: "The Return Journey Hackathon 2024",
                organizer: "GDSC, IIT Kanpur · Among 800 teams · National level"
            },
            // Both papers. `research` is now an array — loop over it in the renderer.
            research: [
                {
                    title: "Performance Evaluation of LLMs & Prompt Strategies for Automated Python Code Refactoring",
                    description: "Evaluated 4 frontier LLMs and 2 prompt-engineering strategies for automated Python code refactoring across 5 benchmark programs. Measured code-quality and documentation improvements using BLEU, ROUGE-L and Pylint, achieving style-conformance scores of 9.2–9.7/10, and identified the most effective refactoring strategies."
                },
                {
                    title: "cAST: A Context-Aware, AST-Driven Pipeline for Automated LLM-Based Code Refactoring with Multi-Stage Validation",
                    authors: "Sahil Sharma, Harsh Raj, Hari Kishan Kondaveeti — School of Computer Science and Engineering, VIT-AP University (2026)",
                    description: "Co-authored a four-stage refactoring pipeline: AST-based semantic chunking, context-aware few-shot prompting, a scope-aware LLM agent (nested-chunk filtering, bottom-up reassembly, server-aware rate-limit handling), and a multi-layer validator (syntax, structural AST comparison, PEP 8 linting with automatic repair, functional-parity testing). Evaluated with gemini-2.5-flash on 5 Python modules (46 prompts): 100% syntax validation pass rate, function and class structure preserved in all files, all lint warnings resolved by the automatic repair pass, and functional parity confirmed on the 4 self-contained files. Also built a FastAPI backend with async job processing and WebSocket progress streaming, plus a React/Vite dashboard for the pipeline."
                }
            ],
            roles: [
                {
                    title: "Manager",
                    org: "TEAM NEXT NEXUS — Prompt Engineering Club",
                    period: "Jul – Dec 2024",
                    description: "Led prompt-engineering study groups and reviewed generative-AI mini-project submissions from club members, facilitating collaborative learning and technical discussions."
                },
                {
                    title: "Associate Manager",
                    org: "Madhya Bharat Association — Cultural Club",
                    period: "Jul – Dec 2024",
                    description: "Coordinated event logistics and teams for cultural events with 50+ participants."
                }
            ]
        }
    },

    {
        // ── SLIDE 06 ── CONTACT
        id: "contact",
        title: "Contact",
        media: "assets/images/slide-06-contact.png",
        overlay: {
            type: "contact",
            label: "Get In Touch",
            headline: "Let's Build\nSomething.",
            subtext: "Open to internships, collaborations, and interesting problems.",
            location: "Jamshedpur, Jharkhand, India",
            languages: "English (Proficient) · Hindi (Native)",
            interests: "AI Research · Number Theory · Art / Animation · Content Creation",
            links: [
                { label: "myselfharshr@gmail.com", url: "mailto:myselfharshr@gmail.com", type: "email" },
                { label: "github.com/primetree2", url: "https://github.com/primetree2", type: "github" },
                { label: "linkedin.com/in/harsh-raj-820117173", url: "https://www.linkedin.com/in/harsh-raj-820117173/", type: "linkedin" },
                { label: "+91-92634-01358", url: "tel:+919263401358", type: "phone" }
            ]
        }
    }
];

// ── Derived flat array for the WebGL slider (title + media only)
// This is what slider-core.js expects
export const slidesMeta = slides.map(({ title, media }) => ({ title, media }));