// ---------------------------
// GET COURSE
// ---------------------------

export const getCourseWithId = (id) => {
    return {
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Data Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        description:
            "Learn the fundamentals of Data Analytics and gain an understanding of the data ecosystem, the process and lifecycle of data analytics, career opportunities, and the different learning paths you can take to be a Data Analyst.",
        topic: "Data analysis",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        details: {
            outcomes: [
                "Learn essential data analysis methods and tools",
                "Master Machine Learning and Deep Learning",
                "Create AI solutions and advanced predictive models",
                "Build a solid portfolio and learn to work in a data team",
            ],
            tools: [
                "sql",
                "python",
                "matplotlib",
                "seaborn",
                "pytorch",
                "pandas",
                "numpy",
                "scipy",
                "tensorflow",
                "scikitlearn",
                "tableau",
                "powerbi",
                "jupyter",
                "googleanalytics",
                "googlecloud",
            ],
            modules: [
                {
                    title: "Fundamentals of Python",
                    outcomes: [
                        "Basic programming concepts",
                        "Introduction to Python data processing libraries",
                        "Foundations of Pandas",
                        "Foundations of Numpy",
                    ],
                },
                {
                    title: "Fundamentals of SQL",
                    outcomes: [
                        "Introduction to SQL",
                        "Data queries and analysis",
                        "Statements, operations, and aggregation",
                    ],
                },
                {
                    title: "Data Analysis Processes",
                    outcomes: [
                        "Explain how the problem-solving road map applies to typical analysis scenarios",
                        "Discuss the use of data in the decision-making process",
                    ],
                },
                {
                    title: "Data Collection",
                    outcomes: [
                        "Web and app data collection",
                        "Business data collection",
                        "Introduction to Google Analytics",
                        "Introduction to Firebase",
                    ],
                },
                {
                    title: "Data Cleaning",
                    outcomes: [
                        "Data management",
                        "Define different types of data integrity and identify risks to data integrity",
                        "Describe the process of verifying data cleaning results",
                    ],
                },
                {
                    title: "Data Visualisation and Presentation",
                    outcomes: [
                        "Introduction to visualisation toolkits",
                        "Fundamentals of Tableau",
                        "Fundamentals of Google Data Studio",
                        "Insights generation",
                        "Data presentation and storytelling",
                    ],
                },
                {
                    title: "Capstone Project",
                    outcomes: [
                        "Apply the practices and procedures associated with the data analysis process to a given set of data",
                        "Discuss the use of case studies/portfolios when communicating with recruiters and potential employers.",
                    ],
                },
            ],
            approaches: [
                {
                    icon: "tool",
                    title: "Become experts on using industry tools and frameworks",
                },
                {
                    icon: "dataset",
                    title: "Practice on real-life projects using real world datasets",
                },
                {
                    icon: "resume",
                    title: "Get resume advice and interview coaching to land your dream job",
                },
            ],
            instructors: ["darren", "anthony", "peter", "alvin"],
            graduates: ["gje", "lwh"],
        },
    };
};

// ---------------------------
// GET COURSE TOOL
// ---------------------------

const courseTools = [
    {
        title: "SQL",
        logo: "sql",
    },
    {
        title: "Python",
        logo: "python",
    },
    {
        title: "Matplotlib",
        logo: "matplotlib",
    },
    {
        title: "Seaborn",
        logo: "seaborn",
    },
    {
        title: "Pytorch",
        logo: "pytorch",
    },
    {
        title: "Pandas",
        logo: "pandas",
    },
    {
        title: "Numpy",
        logo: "numpy",
    },
    {
        title: "SciPy",
        logo: "scipy",
    },
    {
        title: "TensorFlow",
        logo: "tensorflow",
    },
    {
        title: "Scikit-learn",
        logo: "scikitlearn",
    },
    {
        title: "Tableau",
        logo: "tableau",
    },
    {
        title: "Power BI",
        logo: "powerbi",
    },
    {
        title: "Jupyter Notebook",
        logo: "jupyter",
    },
    {
        title: "Google Analytics",
        logo: "googleanalytics",
    },
    {
        title: "Google Cloud",
        logo: "googlecloud",
    },
];

export const getCourseTool = (id) => {
    return courseTools.find((tool) => tool.logo === id);
};

// ---------------------------
// GET MODULES
// ---------------------------

export const getModuleView = (length) => {
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(false);
    }

    return arr;
};

// ---------------------------
// GET COURSE INSTRUCTORS
// ---------------------------

const instructors = [
    {
        name: "Darren Chiu",
        img: "darren",
        position: "Academic Director",
        description: "Technical consultant",
        logo: "google",
    },
    {
        name: "Anthony Chiu",
        img: "anthony",
        position: "Instructor",
        description: "Software engineer",
        logo: "clover",
    },
    {
        name: "Peter Chow",
        img: "peter",
        position: "Instructor",
        description: "Technical engineer",
        logo: "google",
    },
    {
        name: "Alvin Chong",
        img: "alvin",
        position: "Instructor",
        description: "BSc. Computer Science",
        logo: "hkust",
    },
];

export const getInstructor = (id) => {
    return instructors.find((instructor) => instructor.img === id);
};

// ---------------------------
// GET COURSE FLAGS
// ---------------------------

const countries = [
    {
        name: "Malaysia",
        img: "malaysia",
    },
    {
        name: "Singapore",
        img: "singapore",
    },
    {
        name: "Hong Kong",
        img: "hongkong",
    },
    {
        name: "Taiwan",
        img: "taiwan",
    },
    {
        name: "Thailand",
        img: "thailand",
    },
    {
        name: "Indonesia",
        img: "indonesia",
    },
    {
        name: "Philippines",
        img: "philippines",
    },
];

export const getCountries = () => {
    return countries;
};

// ---------------------------
// GET COURSE FEES
// ---------------------------

const fees = [
    {
        title: "One-Time Upfront Payment",
        description: "Pay the whole tuition fee upfront.",
        price: {
            old: "15K",
            new: "12K",
            currency: "MYR",
            frequency: "",
        },
        points: [
            "Enjoy a 25% discount by paying the tuition fee upfront.",
            "If you don't secure a job within a year, you will get a 100% tuition refund.",
        ],
        mostPicked: false,
    },
    {
        title: "Monthly Installment",
        description: "Pay a small monthly instalment for 12 months.",
        price: {
            old: "1.3K",
            new: "1K",
            currency: "MYR",
            frequency: "per month",
        },
        points: [
            "Enjoy 25% discount by paying the tuition fee upfront in a 12 months instalment.",
            "If you don't secure a job within a year, you will get a 100% tuition refund.",
        ],
        mostPicked: true,
    },
    // {
    //     title: "Income Sharing Agreement (ISA)",
    //     description:
    //         "Learn without any upfront cost, and start paying only when you get a job.",
    //     price: {
    //         old: "",
    //         new: "0",
    //         currency: "MYR",
    //         frequency: "upfront cost",
    //     },
    //     points: [
    //         "Pay 15% of your monthly salary until you reach a cap of MYR15,000.",
    //         "If you don't secure a job within a year, your ISA will be waived.",
    //     ],
    //     mostPicked: true,
    // },
];

export const getCourseFees = () => {
    return fees;
};

// ---------------------------
// GET STUDENT TESTIMONIALS
// ---------------------------

const testimonials = [
    {
        name: "Cha Eun Woo",
        img: "cha",
        quote: "This was a really good course. I learnt a lot from TalentLabs.",
        position: "Data analyst",
        logo: "google",
    },
    {
        name: "Kim Ji Soo",
        img: "kim",
        quote: "Overall experience is very good, cleared all fundamentals in data science!",
        position: "Business associate",
        logo: "google",
    },
];

export const getTestimonials = () => {
    return testimonials;
};

// ---------------------------
// GET FAQS
// ---------------------------

const faqs = [
    {
        question: "What are the requirements to join TalentLabs?",
        answer: `To join our full-time program, you will need to complete our entire application process. Through your application, we will make sure that you meet all of the following requirements needed to join our full-time program:

        Proficiency: You need to be proficient in spoken and written English (B1 level - Intermediate, at a minimum).
        Financial Support: You need to be able to support yourself financially throughout the Programme (6 months) and throughout your job search (time varies by student).
        Internet & Equipment: You need to have access to a high-speed and stable Internet connection. In addition, you also need to own a computer with the right specs with a microphone and webcam.
        Strong Work Ethic: You must have a strong work ethic and behave respectfully and responsibly. This is one of the most important characteristics we look for in new students. You need to enjoy spending time building, learning, and working with other people. We are looking for exceptional collaborators and communicators.`,
    },
    {
        question: "What is the application process?",
        answer: `We will select the best candidates based on their performance in online assessment tests and interview process. For the detailed steps of the application process, please refer to our online application form.`,
    },
    {
        question: "What is the medium of instruction and communications?",
        answer: `Like many global schools and companies, we use English as the default language for all communications. A lot of great jobs out there require a good English level so it is critical that you perfect this language if you want to be a successful global developer.

        You need to be at a B1 English level (Intermediate), at the very least, in order to join us.`,
    },
    {
        question: "What is the attendance policy of the programme?",
        answer: `Students must attend 90% of course hours. Live instruction and real time interaction with classmates is an integral part of learning at TalentLabs. Hence, missing classes is not an option.`,
    },
];

export const getCourseFaq = () => {
    return faqs;
};
