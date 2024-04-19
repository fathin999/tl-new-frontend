const programmes = [
    {
        title: "K-Youth Development Programme 2023",
        logo: "khazanah",
        img: "kyouth",
        partner: "Khazanah",
        description:
            "K-Youth is a youth employability initiative by Khazanah Nasional Berhad (Khazanah) which aims to develop Malaysia's future talents.",
        active: false,
        details: {
            tagline: "Earn while you learn",
            subtext:
                "Fuel your career growth with a monthly RM 2,000 salary! Embark on a 4-month tech journey with our immersive K-Youth Development Programme.",
            overview: {
                paragraph:
                    "With a shared dedication to tackling unemployment, enhancing career prospects, and driving domestic economic recovery, Khazanah Nasional, in collaboration with TalentLabs and GKK Consultants, wholeheartedly commits to training and placing participants as part of the K-Youth Development Programme 2023, an initiative by the Ministry of Finance (MoF). Leveraging our vertical career platform, we are resolute in advancing your career aspirations and offering a robust trajectory towards a thriving technology career.",
                timeline: [
                    {
                        title: "Onboarding",
                        time: "July 5",
                        description: "Screening and interview",
                        icon: "resume",
                    },
                    {
                        title: "Online training",
                        time: "Month 1",
                        description:
                            "Online practical training on Web Development or Data Analytics",
                        icon: "learn",
                    },
                    {
                        title: "Part-time apprenticeship",
                        time: "Month 2-3",
                        description:
                            "Guaranteed part-time apprenticeship to build actual working experiences",
                        icon: "part-time",
                    },
                    {
                        title: "Placement",
                        time: "Month 4",
                        description:
                            "Full-time position offer for students before graduation",
                        icon: "career",
                    },
                ],
            },
            pathways: [
                {
                    title: "Foundation certificate",
                    img: "comp",
                    level: 1,
                    for: "Beginners",
                    description:
                        "Tailored for IT beginners, this pathway equips candidates with fundamental skills and technical knowledge to thrive in the dynamic tech field. Whether your goal is to become a developer, data analyst, or digital marketing expert, this foundation sets you up for success in the ever-evolving IT industry.",
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
                            title: "Data analytics",
                            link: "/courses/1",
                        },
                        {
                            title: "Digital marketing",
                            link: "/courses/1",
                        },
                        {
                            title: "Software engineering",
                            link: "/courses/1",
                        },
                    ],
                },
                {
                    title: "Certified associate",
                    img: "prof",
                    level: 3,
                    for: "Professionals",
                    description:
                        "Open to IT or STEM degree holders, this pathway provides advanced skills and expertise. Explore your chosen field, gain practical knowledge, and tackle real-world challenges. With experienced instructors, hands-on projects, and a supportive community, you'll excel in the competitive tech industry.",
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
                            title: "Data analytics",
                            link: "/courses/1",
                        },
                        {
                            title: "Business analytics",
                            link: "/courses/1",
                        },
                        {
                            title: "Front-end development",
                            link: "/courses/1",
                        },
                        {
                            title: "Back-end development",
                            link: "/courses/1",
                        },
                    ],
                },
            ],
            steps: [""],
            requirements: [""],
            outcomes: {
                title: "",
            },
        },
    },
    {
        title: "Career Accelerator Programme 2023",
        logo: "mohe",
        img: "cap",
        partner: "Ministry of Higher Education (Malaysia)",
        description:
            "GCAP is a collaborative initiative between the Ministry of Higher Education, TalentCorp and My Partners together with leading employers to enhance the employability of graduates.",
        active: false,
    },
    {
        title: "Google Career Certificates",
        logo: "google",
        img: "google",
        partner: "Google",
        description:
            "The Google Career Certificate program is an online training program that offers professional certificates in fast-growing, high-demand technology fields.",
        active: true,
    },
    {
        title: "IVE x TalentLabs Train-To-Hire Programme",
        logo: "ive",
        img: "ive",
        partner: "IVE",
        description:
            "This programme provides exclusive accessive to hundreds of new tech job opportunities across the region. ",
        active: false,
    },
    {
        title: "Deep Tech & Future Skills Programme",
        logo: "mosti",
        img: "dtfs",
        partner: "Ministry of Science, Technology and Innovation (Malaysia)",
        description:
            "Deeptech and Futureskills Upskilling and Reskilling is a strategic initiative by MOSTI under the National Employment Council (NEC). The main goals are job creation and placement programme that targets 5,000 Malaysians especially those affected by Covid-19 pandemic.",
        active: false,
    },
    {
        title: "MySTEP 2022",
        logo: "mof",
        img: "mystep",
        partner: "Ministry of Finance (Malaysia)",
        description:
            "MySTEP, or Malaysia Short-term Employment Programme, is a Government initiative that provides short-term employment (contracts) opportunities in various fields such as technology and finance.",
        active: false,
    },
];

export const getProgrammes = () => {
    return programmes.sort((a, b) => {
        return b.active ? 1 : -1;
    });
};

export const getProgramme = () => {
    return programmes[0];
};
