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
            instructors: ["darren", "anthony", "peter", "alvin"],
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
        description: "Programme Lead and technical consultant at Google",
    },
    {
        name: "Anthony Chiu",
        img: "anthony",
        position: "Instructor",
        description: "Software engineer at Clover",
    },
    {
        name: "Peter Chow",
        img: "peter",
        position: "Instructor",
        description: "Technical engineer at Google",
    },
    {
        name: "Alvin Chong",
        img: "alvin",
        position: "Instructor",
        description: "Computer Science graduate from HKUST",
    },
];

export const getInstructor = (id) => {
    return instructors.find((instructor) => instructor.img === id);
};
