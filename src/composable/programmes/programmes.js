const programmes = [
    {
        title: "K-Youth Development Programme 2023",
        logo: "khazanah",
        slug: "kyouth",
        partner: "Khazanah",
        description:
            "K-Youth is a youth employability initiative by Khazanah Nasional Berhad (Khazanah) which aims to develop Malaysia's future talents.",
        active: false,
    },
    {
        title: "Career Accelerator Programme 2023",
        logo: "mohe",
        slug: "cap",
        partner: "Ministry of Higher Education (Malaysia)",
        description:
            "GCAP is a collaborative initiative between the Ministry of Higher Education, TalentCorp and My Partners together with leading employers to enhance the employability of graduates.",
        active: false,
    },
    {
        title: "Google Career Certificates",
        logo: "google",
        slug: "google",
        partner: "Google",
        description:
            "The Google Career Certificate program is an online training program that offers professional certificates in fast-growing, high-demand technology fields.",
        active: true,
    },
    {
        title: "IVE x TalentLabs Train-To-Hire Programme",
        logo: "ive",
        slug: "ive",
        partner: "IVE",
        description:
            "This programme provides exclusive accessive to hundreds of new tech job opportunities across the region. ",
        active: false,
    },
    {
        title: "Deep Tech & Future Skills Programme",
        logo: "mosti",
        slug: "dtfs",
        partner: "Ministry of Science, Technology and Innovation (Malaysia)",
        description:
            "Deeptech and Futureskills Upskilling and Reskilling is a strategic initiative by MOSTI under the National Employment Council (NEC). The main goals are job creation and placement programme that targets 5,000 Malaysians especially those affected by Covid-19 pandemic.",
        active: false,
    },
    {
        title: "MySTEP 2022",
        logo: "mof",
        slug: "mystep",
        partner: "Ministry of Finance (Malaysia)",
        description:
            "MySTEP, or Malaysia Short-term Employment Programme, is a Government initiative that provides short-term employment (contracts) opportunities in various fields such as technology and finance.",
        active: false,
    },
];

const genericData = {
    tagline: "Earn while you learn",
    subtext:
        "Fuel your career growth with a monthly RM 2,000 salary! Embark on a 4-month tech journey with our immersive K-Youth Development Programme.",
    overview: {
        paragraph:
            "With a shared dedication to tackling unemployment, enhancing career prospects, and driving domestic economic recovery, Khazanah Nasional, in collaboration with TalentLabs and GKK Consultants, wholeheartedly commits to training and placing participants as part of the K-Youth Development Programme 2023, an initiative by the Ministry of Finance (MoF). Leveraging our vertical career platform, we are resolute in advancing your career aspirations and offering a robust trajectory towards a thriving technology career.",
    },
    timeline: [
        {
            title: "Applications",
            time: "July",
            description:
                "Fill in the application form and choose your career path. Make sure that you upload all the relevant documents such as your resume and academic transcript.",
            icon: "resume",
        },
        {
            title: "Tests & interview",
            time: "August Week 1-2",
            description:
                "It's time to complete our online technical and aptitude tests. Then, you will be called to join our virtual interview.",
            icon: "chat",
        },
        {
            title: "Offers",
            time: "August Week 3",
            description:
                "Congratulations! Now all's that left is your employment paperwork, which sets our agreement details and important policies regarding your programme and employment.",
            icon: "trophy",
        },
        {
            title: "Online learning",
            time: "August - September",
            description:
                "Kick-start your skills-based training by learning with our industry-leading instructors and mentors. Complete practical work assignments and projects to enhance your skills.",
            icon: "learn",
        },
        {
            title: "Employability workshop",
            time: "September",
            description:
                "Get an exclusive and detailed career management and employability support to help you hone your interview skills, improve your resume and portfolio, as well as help you transition into your apprenticeship.",
            icon: "skill",
        },
        {
            title: "Work placement",
            time: "October-December",
            description:
                "Start your 3-months apprenticeship with our top hiring partners. Get valuable, first-hand work experience at your designated company!",
            icon: "career",
        },
    ],
    pathways: [
        {
            title: "Foundation certificate",
            img: "comp",
            level: 1,
            for: "Beginners in tech",
            accreditation: "TalentLabs, Google Cloud",
            requirements: [
                "Degree or higher",
                "CGPA 3.0 or higher",
                "English proficiency equivalent to IELTS 7 or MUET 5",
            ],
            careers: [
                "Data analyst",
                "Data scientist",
                "E-commerce manager",
                "SEO specialist",
                "Software engineer",
                "Machine learning engineer",
            ],
            courses: [
                {
                    level: "Foundation certificate in",
                    title: "Data analytics",
                    link: "/courses/1",
                    logo: "course-badge-fc.png",
                },
                {
                    level: "Foundation certificate in",
                    title: "Digital marketing",
                    link: "/courses/1",
                    logo: "course-badge-fc.png",
                },
                {
                    level: "Foundation certificate in",
                    title: "Software engineering",
                    link: "/courses/1",
                    logo: "course-badge-fc.png",
                },
            ],
        },
        {
            title: "Certified associate",
            img: "prof",
            level: 3,
            for: "STEM graduates, tech professionals",
            accreditation: "TalentLabs, Google Cloud",
            requirements: [
                "Degree or higher",
                "CGPA 3.5 or higher",
                "English proficiency equivalent to IELTS 8 or MUET 5",
            ],
            careers: [
                "Data engineer",
                "Business intelligence analyst",
                "UI / UX developer",
                "Full-stack developer",
            ],
            courses: [
                {
                    level: "Certified associate in",
                    title: "Data analytics",
                    link: "/courses/1",
                    logo: "course-badge-cada.png",
                },
                {
                    level: "Certified associate in",
                    title: "Business analytics",
                    link: "/courses/1",
                    logo: "course-badge-cada.png",
                },
                {
                    level: "Certified associate in",
                    title: "Front-end development",
                    link: "/courses/1",
                    logo: "course-badge-cada.png",
                },
                {
                    level: "Certified associate in",
                    title: "Back-end development",
                    link: "/courses/1",
                    logo: "course-badge-cada.png",
                },
            ],
        },
        {
            title: "Fintech & digital banking",
            img: "file",
            level: 1,
            for: "Open to all backgrounds",
            accreditation: "TalentLabs, ACCA",
            requirements: [
                "Degree or higher",
                "CGPA 2.8 or higher",
                "English proficiency equivalent to IELTS 6 or MUET 4",
            ],
            careers: [
                "Investment analyst",
                "AI and Machine Learning specialist",
                "Financial analyst",
                "Blockchain developer",
                "Digital wealth management advisor",
            ],
            courses: [
                {
                    level: "Fundamentals of",
                    title: "Fintech",
                    link: "/courses/1",
                    logo: "course-badge-fc.png",
                },
            ],
        },
    ],
    // courses: {
    //     courses: [
    //         "Certified Associate in Data Analytics",
    //         "Certified Associate in Frontend Development",
    //         "Certified Associate in Backend Development",
    //         "PwC Certified Associate in Penetration Testing",
    //     ],
    //     roles: ["Software Engineer", "Data Analyst", "Cybersecurity"],
    // },
    requirements: {
        requirements: [
            "Recently unemployed or fresh graduates that are 30-year-old and below.",
            "Good academic performance, from IPTA, IPTS and foreign universities.",
            "STEM background is preferred but not required.",
            "Outstanding interpersonal skills, results-driven, agile, positive attitude towards learning and 'can-do attitude'.",
            "Solid computational thinking, problem-solving and analytical skills.",
            "A strong passion for technology roles and industry.",
        ],
        processes: [
            "You are required to complete an online application, detailing your course choice, academic and work exeprience.",
            "Please include any relevant documents, such as your resume, identification and academic transcript.",
            "Then, you will complete online tests, which consist of an aptitude test and a numerical reasoning test.",
            "You will then be called to an online interview, where you will be assessed on criteria such as your communication and soft skills.",
            "Then, it's offer time! Check your email for our programme offer.",
        ],
    },
    outcomes: {
        offers: [
            {
                title: "Learn on-demand",
                description:
                    "Equip yourself with the essential digital skills and knowledge needed to excel in today's workplace, all at your own pace.",
                img: "learn",
            },
            {
                title: "Employability support",
                description:
                    "Provide personalized support and guidance to help you navigate the job market and match you with your dream career.",
                img: "support",
            },
            {
                title: "Industry-standard skills",
                description:
                    "Stay relevant and competitive in the workforce by upskilling and staying current with all the in-demand digital technology skills and trends.",
                img: "skills",
            },
            {
                title: "Network opportunities",
                description:
                    "Grow your career and seize global opportunities within TalentLabs' vast network of students, mentors, and hiring partners from all around the world.",
                img: "network",
            },
        ],
    },
};

export const getProgrammes = () => {
    return programmes.sort((a, b) => {
        return b.active ? 1 : -1;
    });
};

export const getProgramme = (slug) => {
    return programmes.find((pgm) => pgm.slug === slug);
};

export const getProgrammeGenericData = () => {
    return genericData;
};
