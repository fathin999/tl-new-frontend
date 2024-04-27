// -----------------
// COURSES
// -----------------

export const db_courses = [
    {
        id: "course-0",
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Data Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Data Science",
        slug: "cada",
        featured: true,
        foundation: [],
        description:
            "Learn the fundamentals of Data Analytics and gain an understanding of the data ecosystem, the process and lifecycle of data analytics, career opportunities, and the different learning paths you can take to be a Data Analyst.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Step into the World of Data",
            paragraph:
                "Acquire advanced data skills, master Machine Learning & AI, and launch your career as a Data Scientist, Analyst, AI Engineer, Data Manager, and more.",
        },
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
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-1",
        badge: "fc",
        banner: "cada",
        title: "Foundation Certificate in Data Analytics",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Data Science",
        slug: "fcda",
        featured: true,
        foundation: [],
        description:
            "This programme combines practice theory with application and flexibility with rigour to give students the tools and techniques needed to succeed as a data analyst.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Master the Art of Data Storytelling",
            paragraph:
                "Develop the ability to present data through compelling stories that resonate with stakeholders and influence business strategies. In this Foundation Certificate in Data Analytics course, you will learn to harness the power of data. We cover various analytical tools that you can use for data analysis across different real-world scenarios.",
        },
        outcomes: [
            "Grasp the basics of data analytics and its significance in decision-making.",
            "Learn to use statistical tools to analyze and interpret data effectively.",
            "Master data visualization techniques for clear communication of insights.",
            "Understand how to clean and prepare data for analysis.",
            "Explore real-world applications of data analytics across various industries.",
        ],
        tools: [
            "sql",
            "python",
            "matplotlib",
            "seaborn",
            "pandas",
            "numpy",
            "tableau",
            "powerbi",
            "jupyter",
            "googleanalytics",
            "googlecloud",
        ],
        modules: [
            {
                title: "Understanding the Role of Data Analyst",
                outcomes: [
                    "Identify the key responsibilities and impact of a data analyst within an organization.",
                    "Understand the tools and skills necessary to succeed in data analytics.",
                ],
            },
            {
                title: "Fundamentals of Python: Basic Programming Concepts",
                outcomes: [
                    "Learn Python syntax and basic programming techniques.",
                    "Write simple Python scripts to automate tasks.",
                ],
            },
            {
                title: "Fundamentals of Python: Data Structures",
                outcomes: [
                    "Understand and use Python's built-in data structures like lists, dictionaries, and tuples.",
                    "Apply these structures to store, access, and manage data.",
                ],
            },
            {
                title: "Fundamentals of Python: Control Flow and Functions",
                outcomes: [
                    "Master Python control flow constructs including if-else statements, loops, and exception handling.",
                    "Create and use functions in Python for modular and reusable code.",
                ],
            },
            {
                title: "Fundamentals of SQL: Database 101",
                outcomes: [
                    "Learn the basics of database theory, including the concepts of relational databases.",
                    "Set up a SQL database and understand its architecture.",
                ],
            },
            {
                title: "Fundamentals of SQL: CRUD and Data Types",
                outcomes: [
                    "Perform Create, Read, Update, and Delete (CRUD) operations in SQL.",
                    "Understand and use different data types in SQL to ensure data integrity.",
                ],
            },
            {
                title: "Fundamentals of SQL: SQL Statements and Operations",
                outcomes: [
                    "Write advanced SQL queries to manipulate and query data efficiently.",
                    "Use joins, subqueries, and other SQL operations to work with multiple datasets.",
                ],
            },
            {
                title: "Applied Data Analytics: Data Analysis Processes",
                outcomes: [
                    "Learn the steps involved in the data analysis process from data preparation to data cleaning.",
                    "Apply statistical methods to analyze and interpret data.",
                ],
            },
            {
                title: "Applied Data Analytics: Social Platforms and Listening Tools",
                outcomes: [
                    "Understand how to use social media platforms and listening tools for data collection and analysis.",
                    "Analyze trends and sentiments from social media data to inform business strategies.",
                ],
            },
            {
                title: "Applied Data Analytics: Visualizations and Insights",
                outcomes: [
                    "Create impactful data visualizations with tools like Tableau or PowerBI.",
                    "Translate data findings into actionable business insights.",
                ],
            },
            {
                title: "Capstone Project",
                outcomes: [
                    "Integrate skills and knowledge from previous chapters to complete a comprehensive data analytics project.",
                    "Demonstrate the ability to extract, process, and present data in a professional context.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-2",
        badge: "fc",
        banner: "cada",
        title: "Foundation Certificate in Digital Marketing",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Digital Marketer",
        slug: "fcdm",
        featured: true,
        foundation: [],
        description:
            "This course is a launchpad that will advance your career in digital marketing, helping you obtain hands-on experience of essential digital marketing skills.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Digital Marketing Demystified",
            paragraph:
                "Understand the basics of digital marketing, including strategies for social media, SEO, and email marketing to enhance online visibility and engagement.",
        },
        outcomes: [
            "Understand the key components of digital marketing, including SEO, PPC, and social media strategies.",
            "Learn how to develop and execute effective content marketing strategies that engage and convert.",
            "Master the use of digital marketing tools and analytics to measure and optimize campaign performance.",
            "Explore the principles of email marketing and how to create successful campaigns.",
            "Gain insights into building a strong digital brand and maintaining online presence.",
        ],
        tools: ["googleanalytics", "hubspot", "semrush"],
        modules: [
            {
                title: "Objective-First Marketing & Customer Insights",
                outcomes: [
                    "Learn to define clear marketing objectives based on customer insights and business goals.",
                    "Understand how to gather and analyze customer data to drive strategy.",
                ],
            },
            {
                title: "Market Research & Social Trends Analytics",
                outcomes: [
                    "Master the techniques of market research to identify and analyze current trends.",
                    "Apply social media analytics to gauge consumer sentiment and behavior.",
                ],
            },
            {
                title: "Marketing Planning & Strategy",
                outcomes: [
                    "Develop comprehensive marketing plans that align with company objectives.",
                    "Learn to strategize across various channels for optimal impact.",
                ],
            },
            {
                title: "Ads Design & Placement",
                outcomes: [
                    "Create visually appealing advertisements tailored to target audiences.",
                    "Understand ad placement strategies to maximize reach and effectiveness.",
                ],
            },
            {
                title: "Social Media and Media Planning",
                outcomes: [
                    "Strategize and execute effective social media campaigns.",
                    "Plan and manage media buying across multiple platforms.",
                ],
            },
            {
                title: "Understanding Marketing ROI",
                outcomes: [
                    "Learn how to calculate and analyze the return on investment (ROI) for various marketing campaigns.",
                    "Identify key performance indicators (KPIs) to evaluate campaign success.",
                ],
            },
            {
                title: "Measurement, Testing & Visualisation",
                outcomes: [
                    "Implement measurement and testing methodologies to optimize campaigns.",
                    "Utilize visualization tools to present data and insights clearly and compellingly.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-3",
        badge: "fc",
        banner: "cada",
        title: "Foundation Certificate in Software Engineering",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Software Engineer",
        slug: "fcse",
        featured: true,
        foundation: [],
        description:
            "This course is designed to help you take the first steps toward a career in software engineering.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Code Your Way to Innovation",
            paragraph:
                "Learn the basics of coding and software development; an ever-evolving field that continually shapes our digital world and offers endless innovation opportunities.",
        },
        outcomes: [
            "Understand the software development lifecycle and its stages from conception to deployment.",
            "Learn multiple programming languages and their applications in various types of software development.",
            "Master the principles of software design and architecture for building scalable and maintainable systems.",
            "Develop proficiency in debugging, testing, and optimizing code for improved software performance.",
            "Explore team collaboration tools and methodologies used in modern software development environments.",
        ],
        tools: [
            "html",
            "css",
            "javascript",
            "sql",
            "sqlite",
            "python",
            "react",
            "node",
            "express",
            "django",
        ],
        modules: [
            {
                title: "Understanding the Role of Software Engineers",
                outcomes: [
                    "Identify the key responsibilities and diverse roles of software engineers in the tech industry.",
                    "Understand the ethical and professional standards expected in software development.",
                ],
            },
            {
                title: "Fundamental of HTML/CSS: Common HTML Tags and Elements",
                outcomes: [
                    "Learn to use common HTML tags and elements to structure web pages effectively.",
                    "Understand the semantic meaning of HTML tags and their importance for accessibility.",
                ],
            },
            {
                title: "Fundamental of HTML/CSS: Basic CSS Attributes and Frameworks",
                outcomes: [
                    "Master the use of CSS to style web pages, including color, layout, and fonts.",
                    "Explore various CSS frameworks to accelerate responsive design development.",
                ],
            },
            {
                title: "Fundamental of HTML/CSS: Responsive Design",
                outcomes: [
                    "Learn to create responsive web designs that work on various devices using media queries.",
                    "Understand the principles of mobile-first design and its impact on user experience.",
                ],
            },
            {
                title: "Fundamentals of SQL: Database 101",
                outcomes: [
                    "Gain a solid understanding of relational databases and their role in managing data.",
                    "Learn basic SQL syntax and the structure of relational databases.",
                ],
            },
            {
                title: "Fundamentals of SQL: CRUD and Data Types",
                outcomes: [
                    "Perform Create, Read, Update, and Delete (CRUD) operations effectively in SQL.",
                    "Understand and implement different SQL data types in database design.",
                ],
            },
            {
                title: "Fundamentals of SQL: SQL Statements and Operations",
                outcomes: [
                    "Write complex SQL queries involving multiple tables and conditions.",
                    "Optimize SQL statements for performance and efficiency.",
                ],
            },
            {
                title: "Fundamentals of JavaScript or Fundamental of Python: Basic Programming Concepts",
                outcomes: [
                    "Learn basic programming concepts such as variables, loops, and functions in JavaScript or Python.",
                    "Understand how to apply these concepts to solve real-world problems through coding.",
                ],
            },
            {
                title: "Fundamentals of JavaScript or Fundamental of Python: DOM Manipulation",
                outcomes: [
                    "Master DOM manipulation to dynamically change content on web pages using JavaScript.",
                    "Learn event handling and script loading to enhance interactivity in web applications.",
                ],
            },
            {
                title: "Applied Software Engineering: Agile Development and Workflow",
                outcomes: [
                    "Understand Agile development methodologies and their application in tech projects.",
                    "Learn to implement effective workflows using tools like Scrum and Kanban.",
                ],
            },
            {
                title: "Applied Software Engineering: Software Engineering Essentials and Best Practices",
                outcomes: [
                    "Adopt best practices in code writing, testing, and maintenance.",
                    "Explore software documentation and version control systems to ensure project success.",
                ],
            },
            {
                title: "Capstone Project",
                outcomes: [
                    "Apply learned skills in a real-world project to design, develop, and deploy a software application.",
                    "Demonstrate the ability to work collaboratively, manage project timelines, and deliver presentations on project outcomes.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-4",
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Business Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Data Science",
        slug: "caba",
        featured: true,
        foundation: [],
        description:
            "This course provides you with hands-on experience on leveraging analytics tools and methods to prepare you for a future of data-driven and evidence-based business decision making.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Uncover Insights, Drive Business Growth",
            paragraph:
                "Master the art of extracting meaningful information from complex data sets using advanced analytics tools like Python and R. The exciting part of business analytics lies in its power to influence business strategies, optimize performance, and enhance competitiveness.",
        },
        outcomes: [
            "Enhance your skills in using advanced statistical techniques for data analysis.",
            "Apply predictive analytics to forecast trends and business outcomes.",
            "Master the use of analytics software tools like Python and R for data manipulation and visualization.",
            "Learn to interpret and communicate data insights effectively to stakeholders.",
            "Explore the application of machine learning models to real-world business problems.",
        ],
        tools: [
            "sql",
            "python",
            "matplotlib",
            "seaborn",
            "pandas",
            "numpy",
            "tableau",
            "powerbi",
            "jupyter",
            "googleanalytics",
            "googlecloud",
        ],
        modules: [
            {
                title: "Fundamentals of Python: Basic Programming Concepts",
                outcomes: [
                    "Master basic Python syntax and control structures to build foundational programming skills.",
                    "Learn to write Python scripts for simple automation and data analysis tasks.",
                ],
            },
            {
                title: "Fundamentals of Python: Data Processing Libraries (Pandas and Numpy)",
                outcomes: [
                    "Utilize Pandas for data manipulation and analysis in Python.",
                    "Learn to perform numerical computations with Numpy.",
                ],
            },
            {
                title: "Fundamentals of SQL: Data Queries and Analysis",
                outcomes: [
                    "Develop skills in writing SQL queries to extract and analyze data from databases.",
                    "Understand how to use SQL for complex data retrieval operations.",
                ],
            },
            {
                title: "Fundamentals of SQL: Statements, Operations and Aggregation",
                outcomes: [
                    "Learn to use advanced SQL statements and functions for data manipulation and aggregation.",
                    "Master techniques for optimizing SQL queries to improve performance.",
                ],
            },
            {
                title: "Web and App Data Collection",
                outcomes: [
                    "Understand the fundamentals of collecting data from web and mobile applications.",
                    "Learn about different methodologies for tracking user interactions.",
                ],
            },
            {
                title: "Data Collection Tools: Google Analytics, Firebase and more",
                outcomes: [
                    "Gain proficiency in using tools like Google Analytics and Firebase for real-time data tracking and analysis.",
                    "Explore other popular data collection tools and their specific applications.",
                ],
            },
            {
                title: "Data Wrangling and Cleaning",
                outcomes: [
                    "Learn techniques for cleaning and preparing raw data for analysis.",
                    "Develop skills in data transformation and normalization to ensure data quality and consistency.",
                ],
            },
            {
                title: "Data Visualisation and Insights Generation",
                outcomes: [
                    "Master the creation of visual data representations to uncover hidden patterns and insights.",
                    "Learn how to generate actionable insights from complex datasets.",
                ],
            },
            {
                title: "Visualisation Toolkit: Tableau and Google Data Studio",
                outcomes: [
                    "Become proficient in using Tableau and Google Data Studio for advanced data visualization and dashboard creation.",
                    "Learn to customize visualizations to effectively communicate data stories.",
                ],
            },
            {
                title: "Data Presentation and Storytelling",
                outcomes: [
                    "Acquire skills in presenting data visually and verbally to influence decision-making.",
                    "Learn storytelling techniques to make data presentations engaging and persuasive.",
                ],
            },
            {
                title: "Capstone Project",
                outcomes: [
                    "Apply all learned skills in a comprehensive capstone project that addresses a real-world business problem using data analytics.",
                    "Demonstrate the ability to gather, analyze, visualize, and present data cohesively.",
                ],
            },
            {
                title: "Career Development & Placement Services",
                outcomes: [
                    "Prepare for the analytics job market with resume building, interview preparation, and networking strategies.",
                    "Learn how to effectively showcase your analytics projects and skills to potential employers.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-5",
        badge: "cada",
        banner: "cabed",
        title: "Certified Associate in Backend Development",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Software Engineer",
        slug: "cabed",
        featured: true,
        foundation: [],
        description:
            "This course is a rigorous learning programme that aims to prepare students for entry-level back-end software development roles at companies of all sizes.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Engineer the Backbone of the Web",
            paragraph:
                "This course will enhance your skills in building robust server-side applications using modern frameworks and connecting with external services. Backend development allows you to contribute significantly to tech innovations, solving complex problems with efficient, scalable code.",
        },
        outcomes: [
            "Deepen your understanding of SQL and database management for complex systems.",
            "Learn to create dynamic web applications using JavaScript frameworks like Express.js.",
            "Master Python for backend development, including using Django to build robust applications.",
            "Integrate external APIs and services with backend applications to enhance functionality.",
            "Explore advanced backend technologies and their real-world applications in creating scalable software solutions.",
        ],
        tools: [
            "html",
            "css",
            "javascript",
            "react",
            "node",
            "express",
            "sql",
            "sqlite",
            "python",
            "django",
            "googlecloud",
            "cloud",
            "git",
            "docker",
        ],
        modules: [
            {
                title: "Fundamentals of SQL",
                outcomes: [
                    "Understand SQL syntax and master creating, querying, and managing databases.",
                    "Learn to optimize SQL queries for performance and data integrity.",
                ],
            },
            {
                title: "Fundamentals of HTML/CSS",
                outcomes: [
                    "Gain a solid understanding of HTML5 and CSS3 for structuring and designing web pages.",
                    "Develop responsive web designs that adapt to different devices and screen sizes.",
                ],
            },
            {
                title: "JavaScript Track: Fundamentals of JavaScript",
                outcomes: [
                    "Learn core JavaScript concepts including variables, functions, and control structures.",
                    "Explore asynchronous programming with callbacks, promises, and async/await.",
                ],
            },
            {
                title: "JavaScript Track: Web Backend Development with Express JS",
                outcomes: [
                    "Build and configure servers using Express.js.",
                    "Implement RESTful services and middleware for routing and user authentication.",
                ],
            },
            {
                title: "JavaScript Track: Connecting External Services with Express JS",
                outcomes: [
                    "Learn to integrate third-party APIs and handle external data smoothly with Express.js.",
                    "Explore error handling and security best practices when connecting to external services.",
                ],
            },
            {
                title: "Python Track: Fundamentals of Python",
                outcomes: [
                    "Master Python syntax and scripting skills.",
                    "Apply Python to solve real-world data manipulation and processing tasks.",
                ],
            },
            {
                title: "Python Track: Web Backend Development with Django",
                outcomes: [
                    "Create robust web applications using the Django framework.",
                    "Learn Django's architecture including models, views, and templates for full-stack development.",
                ],
            },
            {
                title: "Software Engineering Essentials",
                outcomes: [
                    "Understand the principles of software design, including algorithm complexity and design patterns.",
                    "Develop skills in software testing and version control systems.",
                ],
            },
            {
                title: "Career Development & Placement Services",
                outcomes: [
                    "Prepare effective tech resumes and portfolios showcasing backend projects.",
                    "Gain insights into the tech industry hiring process and improve interview skills.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-6",
        badge: "cada",
        banner: "cabed",
        title: "Certified Associate in Frontend Development",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Software Engineer",
        slug: "cafed",
        featured: true,
        foundation: [],
        description:
            "This course is a rigorous learning programme that aims to prepare students for entry-level front-end software development roles at companies of all sizes.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Craft Cutting-Edge Web Experiences",
            paragraph:
                "Our Certified Associate in Front-end Development course prepares you with the knowledge to start building responsive websites with HTML, CSS, JavaScript and React - a versatile skill set with powerful applications in a variety of design, marketing, and other tech-adjacent roles. In addition, you will learn how to leverage open-sourced libraries like Bootstrap UI Library and the React web application framework to build an interactive website with dynamic and complex features.",
        },
        outcomes: [
            "Master complex CSS techniques for responsive and adaptive design.",
            "Deepen your understanding of JavaScript for advanced interactivity and data handling.",
            "Explore modern JavaScript frameworks like React or Vue for efficient UI development.",
            "Implement state management solutions to manage app complexity and user experiences.",
            "Learn to integrate APIs for dynamic web content and extend functionality.",
        ],
        tools: [
            "figma",
            "html",
            "css",
            "bootstrap",
            "tailwind",
            "javascript",
            "react",
            "node",
            "express",
            "python",
            "django",
        ],
        modules: [
            {
                title: "Fundamentals of HTML/CSS",
                outcomes: [
                    "Develop a strong understanding of HTML5 and CSS3 to create structured and styled web pages.",
                    "Learn responsive web design techniques to ensure web pages look good on all devices.",
                ],
            },
            {
                title: "Fundamentals of JavaScript",
                outcomes: [
                    "Master JavaScript basics including variables, functions, and event handling for interactive web experiences.",
                    "Explore advanced JavaScript concepts such as closures, asynchronous programming, and ES6+ features.",
                ],
            },
            {
                title: "Fundamentals of User Interface",
                outcomes: [
                    "Understand the principles of effective UI design, focusing on usability and user-centric approaches.",
                    "Learn to apply design theories to create intuitive and attractive user interfaces.",
                ],
            },
            {
                title: "Web UI Development with React",
                outcomes: [
                    "Gain proficiency in using React for building efficient and scalable web interfaces.",
                    "Understand React's component-based architecture and lifecycle methods.",
                ],
            },
            {
                title: "Building Interactive Websites with React",
                outcomes: [
                    "Learn to integrate state management solutions like Redux or Context API with React for managing application state.",
                    "Develop skills in creating complex, dynamic web applications that interact with backend services.",
                ],
            },
            {
                title: "Software Engineering Essentials",
                outcomes: [
                    "Acquire knowledge of software development methodologies such as Agile and DevOps.",
                    "Enhance skills in version control, code documentation, and collaborative development using tools like Git.",
                ],
            },
            {
                title: "Career Development & Placement Services",
                outcomes: [
                    "Prepare for the job market with effective resume building, interviewing skills, and personal branding strategies.",
                    "Learn networking techniques and access resources to connect with potential employers in the tech industry.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-7",
        badge: "fc",
        banner: "cabed",
        title: "Fundamentals in Fintech",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Fintech",
        slug: "fif",
        featured: true,
        foundation: [],
        description:
            "With our Fundamentals of Fintech program, you would be able to get insights from the latest innovations from the financial world and understand how these technologies are going to make financial services more effective, efficient, and reliable.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Unlock the Future of Finance",
            paragraph:
                "Our Fundamentals of Fintech program would cover basics of SQL and data visualization, enabling you to analyze and communicate with data. Both are the essential and day-to-day skills for a fintech specialist in a financial institution. Blockchain and Web3 technologies and its latest development would serve as a finale and perfect illustration of how technologies can reshape financial services beyond the status quo.",
        },
        outcomes: [
            "Explore the basics of fintech and its impact on traditional banking and finance.",
            "Understand blockchain technology and its applications in digital transactions.",
            "Learn about the latest trends in digital payments, cryptocurrencies, and mobile banking.",
            "Analyze the regulatory environment for fintech and how it shapes innovation.",
            "Discover how to use big data and AI to enhance financial services.",
        ],
        tools: [
            "sql",
            "sqlite",
            "python",
            "tableau",
            "web3",
            "blockchain",
            "bitcoin",
            "ethereum",
        ],
        modules: [
            {
                title: "SQL: Introduction of SQL",
                outcomes: [
                    "Learn the history and importance of SQL in database management.",
                    "Understand basic SQL syntax and commands.",
                ],
            },
            {
                title: "SQL: Basic SQL operations",
                outcomes: [
                    "Master CRUD (Create, Read, Update, Delete) operations in SQL.",
                    "Practice simple queries to interact with databases.",
                ],
            },
            {
                title: "SQL: Extracting data from SQL databases",
                outcomes: [
                    "Develop skills in writing SELECT queries to retrieve specific data.",
                    "Use WHERE, ORDER BY, and GROUP BY clauses to refine data extraction.",
                ],
            },
            {
                title: "SQL: Advanced SQL operations with table relationships and table joining",
                outcomes: [
                    "Understand the use of JOINs to combine data from multiple tables.",
                    "Apply advanced SQL techniques such as subqueries and complex joins.",
                ],
            },
            {
                title: "SQL: Database architecture design",
                outcomes: [
                    "Learn principles of database design including normalization.",
                    "Create and manage efficient and scalable database architectures.",
                ],
            },
            {
                title: "Data Visualization: Introduction and concepts",
                outcomes: [
                    "Grasp fundamental concepts and importance of data visualization.",
                    "Understand how to interpret and present data visually.",
                ],
            },
            {
                title: "Data Visualization: Chart types",
                outcomes: [
                    "Learn about different types of charts and when to use them.",
                    "Explore histograms, scatter plots, and more for data representation.",
                ],
            },
            {
                title: "Data Visualization: Introduction to Tableau",
                outcomes: [
                    "Get started with Tableau and its interface.",
                    "Understand the capabilities and features of Tableau for data visualization.",
                ],
            },
            {
                title: "Data Visualization: Connecting data sources to Tableau",
                outcomes: [
                    "Learn to connect various data sources to Tableau.",
                    "Explore data importing and integration techniques.",
                ],
            },
            {
                title: "Data Visualization: Creating different charts in Tableau",
                outcomes: [
                    "Master creating and customizing charts and graphs in Tableau.",
                    "Develop interactive dashboards to enhance data insights.",
                ],
            },
            {
                title: "Data Visualization: Publishing data visualization",
                outcomes: [
                    "Learn the steps to publish and share Tableau visualizations.",
                    "Understand best practices in securing and managing access to published data.",
                ],
            },
            {
                title: "Blockchain & Web3: Introduction",
                outcomes: [
                    "Introduce fundamental concepts of blockchain and Web3 technologies.",
                    "Discuss the impact of these technologies on digital finance and beyond.",
                ],
            },
            {
                title: "Blockchain & Web3: Working principles",
                outcomes: [
                    "Examine the underlying mechanics of blockchain operation.",
                    "Explore consensus mechanisms and their role in network security.",
                ],
            },
            {
                title: "Blockchain & Web3: Hands-on exercises in understanding blockchain transactions",
                outcomes: [
                    "Engage in practical exercises to understand how blockchain transactions are performed and recorded.",
                    "Analyze transaction blocks and understand their verification process.",
                ],
            },
            {
                title: "Blockchain & Web3: Bitcoin vs Ethereum",
                outcomes: [
                    "Compare the different architectures and capabilities of Bitcoin and Ethereum.",
                    "Discuss the various use cases and innovations enabled by each platform.",
                ],
            },
            {
                title: "Blockchain & Web3: Real world applications",
                outcomes: [
                    "Identify real-world applications of blockchain and Web3 in various sectors.",
                    "Evaluate case studies to understand the practical impact and potential of these technologies.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-8",
        badge: "cada",
        banner: "cabed",
        title: "PwC Certified Associate in Penetration Testing",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "PwC",
        providerLogo: "pwc",
        role: "Cybersecurity",
        slug: "capt",
        featured: true,
        foundation: [],
        description:
            "PwC x TalentLabs Certified Associate in Penetration Testing Programme is a fully online learning programme that aims to convert students from non-IT backgrounds to job-ready web and mobile penetration tester.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Unlocking Cybersecurity's Front Door",
            paragraph:
                "Dive into advanced penetration testing techniques to identify and exploit vulnerabilities in systems and networks. This course prepares you to think like a hacker, providing you with the skills to protect organizations against cyber threats. The dynamic nature of cybersecurity makes every day an exciting challenge, ensuring you're always learning and adapting.",
        },
        outcomes: [
            "Enhance your skills in identifying and exploiting network vulnerabilities.",
            "Learn advanced techniques for bypassing security measures and securing systems from hackers.",
            "Master the use of modern penetration testing tools and software.",
            "Develop strategies for ethical hacking and conducting responsible security assessments.",
            "Gain experience with real-world scenarios through hands-on labs and simulations.",
        ],
        tools: ["python", "git", "docker"],
        modules: [
            {
                title: "Latest Technology Trends",
                outcomes: [
                    "Stay updated with the latest trends and technologies in the cybersecurity landscape.",
                    "Learn how emerging technologies are shaping cybersecurity strategies.",
                ],
            },
            {
                title: "Internet Protocol Basics",
                outcomes: [
                    "Understand the fundamentals of Internet Protocols and their role in network communications.",
                    "Learn to analyze and troubleshoot basic IP network traffic for security purposes.",
                ],
            },
            {
                title: "Introduction & Fundamentals of Cybersecurity",
                outcomes: [
                    "Grasp key cybersecurity concepts and the importance of securing information systems.",
                    "Explore the ethical considerations and legal aspects of cybersecurity.",
                ],
            },
            {
                title: "Theoretical Concepts and Techniques",
                outcomes: [
                    "Dive deep into the theoretical underpinnings of cybersecurity defenses and attack methodologies.",
                    "Study various cryptographic techniques and their applications in securing communications.",
                ],
            },
            {
                title: "Hands-On Cyber Range And Advanced Concepts",
                outcomes: [
                    "Engage in realistic cybersecurity scenarios within a cyber range to apply advanced concepts.",
                    "Practice identifying, mitigating, and responding to sophisticated cyber threats.",
                ],
            },
            {
                title: "Intensive Practical Exercises Drilling",
                outcomes: [
                    "Develop hands-on expertise through intensive practical exercises in penetration testing and threat hunting.",
                    "Enhance skills in real-time problem solving and critical thinking in high-pressure environments.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-9",
        badge: "m1j",
        banner: "cabed",
        title: "M1 in Javascript",
        type: "M1",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "",
        foundation: ["se"],
        slug: "m1j",
        featured: false,
        description:
            "Learn the basics of the most powerful and flexible programming language, paving the way for you to be a web developer who creates dynamic and complex web applications.",
        timeline: "2 months, self-paced",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Transform Your Ideas into Reality",
            paragraph: `In this course, you will learn to create interactive and dynamic web applications from the ground up, mastering everything from basic syntax to advanced functionalities like asynchronous programming and API integration. Gain practical skills through hands-on projects that prepare you for real-world web development challenges.
            <br/><br/>
            Get credit for prior learning for our other courses, such as <b>Certified Associate in Software Engineering</b>, and <b>Certified Associate in Data Analytics.</b>
            `,
        },
        outcomes: [
            "Understand the core concepts including variables, data types, functions, and control structures to lay a strong foundation.",
            "Learn how to interact with the Document Object Model (DOM) to dynamically change content, style, and respond to user events.",
            "Explore AJAX, Promises, and Async/Await to handle operations like fetching data from servers without blocking the main thread.",
            "Develop skills in writing clean, efficient code and learn debugging techniques to quickly solve problems in your JavaScript applications.",
        ],
        tools: ["javascript"],
        modules: [
            {
                title: "Introduction to JavaScript",
                outcomes: [
                    "Understand the history and importance of JavaScript in web development.",
                    "Set up a development environment for JavaScript coding.",
                ],
            },
            {
                title: "Fundamentals of Programming",
                outcomes: [
                    "Learn the basic structure of a JavaScript program.",
                    "Understand and apply logical thinking to solve simple problems using pseudocode and flowcharts.",
                ],
            },
            {
                title: "Introduction to Command Line",
                outcomes: [
                    "Gain proficiency in navigating and managing files using the command line.",
                    "Execute JavaScript programs from the command line interface.",
                ],
            },
            {
                title: "Data Types",
                outcomes: [
                    "Identify and use different data types in JavaScript such as strings, numbers, and booleans.",
                    "Understand the implications of dynamic typing and type coercion in JavaScript.",
                ],
            },
            {
                title: "Operators & Conditional Statement",
                outcomes: [
                    "Master the use of arithmetic, logical, and comparison operators to manipulate data.",
                    "Write conditional statements like if, else, and switch to control the flow of programs.",
                ],
            },
            {
                title: "Functions",
                outcomes: [
                    "Learn to declare and call functions to organize code into reusable blocks.",
                    "Understand different types of functions in JavaScript, including anonymous and arrow functions.",
                ],
            },
            {
                title: "Arrays",
                outcomes: [
                    "Understand how to declare, initialize, and access array elements.",
                    "Apply methods to manipulate arrays, such as sorting, filtering, and reducing.",
                ],
            },
            {
                title: "Object Drills",
                outcomes: [
                    "Create, access, and modify objects to manage and utilize complex data structures.",
                    "Practice using objects with functions to simulate real-world scenarios.",
                ],
            },
            {
                title: "Loops",
                outcomes: [
                    "Utilize loops (for, while, and do-while) to perform repetitive tasks efficiently.",
                    "Learn to break out of loops and skip iterations using break and continue statements.",
                ],
            },
            {
                title: "Handling User Input",
                outcomes: [
                    "Capture and validate user input using prompts and forms.",
                    "Implement error handling strategies to enhance user experience.",
                ],
            },
            {
                title: "Final Project",
                outcomes: [
                    "Integrate knowledge from previous chapters to plan and develop a comprehensive JavaScript project.",
                    "Demonstrate debugging and testing skills to ensure the project is functional and user-friendly.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-10",
        badge: "m1j",
        banner: "cabed",
        title: "M1 in Python",
        type: "M1",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "",
        foundation: ["se", "data"],
        slug: "m1p",
        featured: false,
        description:
            "Learn the basics of the world's fastest growing and most popular programming language used by software engineers and data scientists.",
        timeline: "2 months, self-paced",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "From Novice to Pro in Python",
            paragraph: `Dive into the world of Python programming where you'll learn syntax basics, automation techniques, and data handling skills to streamline tasks and solve complex problems efficiently.
            <br/><br/>
            Get credit for prior learning for our other courses, such as <b>Certified Associate in Software Engineering</b>, and <b>Certified Associate in Data Analytics.</b>
            `,
        },
        outcomes: [
            "Understand how to set up your Python environment, and familiarize yourself with Python's syntax, keywords, and basic structures.",
            "Learn to control the flow of your programs using conditional statements, loops, and error handling to manage different scenarios and data inputs effectively.",
            "Modules: Master the creation and usage of functions to organize your code more efficiently, and explore Python's built-in modules to perform various tasks easily.",
            "Gain skills in handling various data types in Python, including lists, dictionaries, and tuples, and learn how to manipulate these data structures to perform complex data operations.",
        ],
        tools: ["python", "pandas", "numpy"],
        modules: [
            {
                title: "Introduction to Python",
                outcomes: [
                    "Understand Python's role in the modern software development landscape and its applications across various industries.",
                    "Set up a Python development environment and write your first Python script.",
                ],
            },
            {
                title: "String Manipulation",
                outcomes: [
                    "Learn to perform common string operations like slicing, concatenation, and transformation.",
                    "Apply regular expressions to search, match, and split strings based on patterns.",
                ],
            },
            {
                title: "Operators & Conditional Statements",
                outcomes: [
                    "Master the use of Python operators including arithmetic, logical, and comparison operators.",
                    "Write effective conditional statements to guide decision-making processes within your programs.",
                ],
            },
            {
                title: "Functions",
                outcomes: [
                    "Learn how to define and call functions to improve code reusability and organization.",
                    "Explore function parameters, return values, and the concept of scope and namespaces in Python.",
                ],
            },
            {
                title: "Lists & Loops",
                outcomes: [
                    "Manipulate lists including indexing, appending, and deleting elements.",
                    "Use loops (for and while) to iterate over data structures and automate repetitive tasks.",
                ],
            },
            {
                title: "Dictionary",
                outcomes: [
                    "Understand how to create, access, and manage dictionaries for efficient data lookup.",
                    "Implement dictionary comprehensions and learn to handle complex data structures.",
                ],
            },
            {
                title: "File System Automation",
                outcomes: [
                    "Automate file management tasks such as reading from and writing to files.",
                    "Organize file operations effectively using Python’s file handling capabilities.",
                ],
            },
            {
                title: "Excel Files Automation",
                outcomes: [
                    "Utilize Python libraries to read from and write to Excel files.",
                    "Automate common Excel tasks like modifying cells, rows, and columns, and applying formatting.",
                ],
            },
            {
                title: "Arrays and Dictionaries",
                outcomes: [
                    "Deepen your understanding of arrays and dictionaries for storing collections of data.",
                    "Apply advanced techniques for data manipulation and retrieval in complex applications.",
                ],
            },
            {
                title: "Email Sending Automation",
                outcomes: [
                    "Implement email sending functionalities using Python to automate notifications and communications.",
                    "Handle attachments and customize email content programmatically.",
                ],
            },
            {
                title: "PDF Generation Automation",
                outcomes: [
                    "Generate PDF documents from scratch and edit existing PDFs using Python.",
                    "Automate the incorporation of images, tables, and other content into PDF files.",
                ],
            },
            {
                title: "Fetching Data from Internet via API",
                outcomes: [
                    "Retrieve data from various web services using APIs.",
                    "Parse and process JSON data received from APIs to use in Python applications.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-11",
        badge: "m1j",
        banner: "cabed",
        title: "M1 in SQL",
        type: "M1",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "",
        foundation: ["se", "data"],
        slug: "m1sql",
        featured: false,
        description:
            "Turn raw data into actionable insights. Learn how to communicate in a data-driven world with relational databases through SQL.",
        timeline: "2 months, self-paced",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Craft Powerful Data Solutions with SQL",
            paragraph: `Develop the ability to create intricate queries that solve real-world data management problems, increasing your value as a data-savvy professional.
            <br/><br/>
            Get credit for prior learning for our other courses, such as <b>Certified Associate in Software Engineering</b>, and <b>Certified Associate in Data Analytics.</b>
            `,
        },
        outcomes: [
            "Understand the foundational syntax of SQL, how to write basic queries, and the structure of relational databases.",
            "Learn how to create tables, define columns, and modify table structure to store data effectively.",
            "Master selecting data from a database, including filtering, sorting, and aggregating data to extract meaningful information.",
            "Discover how to use different types of joins to combine rows from two or more tables based on a related column.",
            "Explore the concepts of data integrity and learn how to use transactions to maintain accuracy and reliability in data operations.",
        ],
        tools: ["sql", "sqlite"],
        modules: [
            {
                title: "Introduction to SQL and Databases",
                outcomes: [
                    "Understand the role and importance of SQL within the database management landscape.",
                    "Identify different types of databases (relational vs. non-relational) and when to use SQL.",
                ],
            },
            {
                title: "SQL Syntax and Query Fundamentals",
                outcomes: [
                    "Learn the basic syntax for creating SQL queries.",
                    "Execute simple SELECT statements to retrieve information from a single table.",
                ],
            },
            {
                title: "Working with Tables",
                outcomes: [
                    "Master the creation of tables using the CREATE TABLE statement.",
                    "Learn to modify existing tables with ALTER TABLE commands to add, delete, or change columns.",
                ],
            },
            {
                title: "Data Manipulation",
                outcomes: [
                    "Practice inserting, updating, and deleting data in tables to maintain accurate and up-to-date information.",
                    "Understand the importance of data integrity and how to enforce it using constraints.",
                ],
            },
            {
                title: "Advanced Data Querying",
                outcomes: [
                    "Use WHERE, ORDER BY, and GROUP BY clauses to filter, sort, and summarize data effectively.",
                    "Implement subqueries and complex joins to handle data from multiple tables simultaneously.",
                ],
            },
            {
                title: "Database Administration Basics",
                outcomes: [
                    "Gain insights into the roles and responsibilities of a database administrator (DBA).",
                    "Learn basic database maintenance tasks such as indexing and backups to ensure performance and data safety.",
                ],
            },
            {
                title: "Using SQL Functions and Expressions",
                outcomes: [
                    "Explore the use of built-in SQL functions for calculations, data manipulation, and data formatting.",
                    "Apply conditional expressions and case statements to enhance query capabilities.",
                ],
            },
            {
                title: "Transaction Management",
                outcomes: [
                    "Understand the concept of transactions and their role in maintaining data accuracy and consistency.",
                    "Learn to use COMMIT and ROLLBACK to control transactional changes within the database.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-12",
        badge: "m1j",
        banner: "cabed",
        title: "M1 in Blockchain",
        type: "M1",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "",
        foundation: ["fintech", "cs"],
        slug: "m1sql",
        featured: false,
        description:
            "Innovate with the Next Frontier in Technology. Learn how the blockchain is leading to a paradigm shift in the way we live and work.",
        timeline: "1 month, self-paced",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Navigating the Blockchain Ecosystem",
            paragraph: `The M1 in Blockchain course will help you cut through the hype and objectively assess blockchain's potential in your lives. From topics such as Bitcoin, NFT's, Stablecoins, Decentralized Finance (DeFI), Play-To-Earn Gaming, and Decentralized Autonomous Organizations - this module is intended to walk you through how the industry has grown, and most importantly, how the global institutions are starting to operate and compete in the blockchain-driven industries.`,
        },
        outcomes: [
            "Understand how blockchain works, including its structure and decentralized nature.",
            "Learn what cryptocurrencies are and how they operate on blockchain platforms.",
            "Discover how to create and deploy smart contracts that automate transactions without intermediaries.",
            "Explore the security features of blockchain that prevent fraud and unauthorized activity.",
            "Identify practical applications of blockchain technology across various industries beyond just finance.",
        ],
        tools: ["blockchain", "bitcoin", "ethereum"],
        modules: [
            {
                title: "Course Introduction",
                outcomes: [
                    "Understand the course structure and what you will learn.",
                    "Get introduced to the tools and resources needed for the course.",
                ],
            },
            {
                title: "Growth Market: Rapidly Development of Blockchain / Crypto Industry",
                outcomes: [
                    "Learn about the growth trends in the blockchain and cryptocurrency industries.",
                    "Identify key factors driving the expansion and acceptance of blockchain technology.",
                ],
            },
            {
                title: "What is Blockchain Technology?",
                outcomes: [
                    "Define blockchain technology and its core components.",
                    "Explore how blocks are created, validated, and added to a blockchain.",
                ],
            },
            {
                title: "Bitcoin (BTC): Its History and Limitations",
                outcomes: [
                    "Understand the origins of Bitcoin and the problems it was created to solve.",
                    "Discuss the limitations and challenges faced by Bitcoin technology.",
                ],
            },
            {
                title: "The Rise of ETH (Ethereum) And Differences with BTC",
                outcomes: [
                    "Examine the development of Ethereum and how it differs from Bitcoin.",
                    "Learn about smart contracts and Ethereum's role in their implementation.",
                ],
            },
            {
                title: "Multiple Use Cases For Blockchain Technology",
                outcomes: [
                    "Discover various applications of blockchain technology across different sectors.",
                    "Analyze case studies demonstrating blockchain's impact on industries like finance, supply chain, and healthcare.",
                ],
            },
            {
                title: "Next Steps & Conclusions",
                outcomes: [
                    "Review key learnings from the course and discuss future trends in blockchain.",
                    "Outline steps for further learning and how to stay updated with blockchain developments.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-13",
        badge: "fc",
        banner: "cabed",
        title: "Foundation Certificate in User Experience (UX) Design",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "UI/UX Designer",
        foundation: [],
        slug: "fcuiux",
        featured: false,
        description:
            "Design an impactful user experience for today's modern, digital products. Build a design portfolio which will showcase your ability to build high-quality, user-centred applications.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Designing Digital Experiences",
            paragraph: `Dive into the fundamentals of UI (User Interface) and UX (User Experience) design to create intuitive and attractive digital products. This course will equip you with the skills to enhance user satisfaction and loyalty through thoughtful design. The UI/UX industry is thrilling because you directly influence how users interact with technology and digital platforms, making everyday interactions smoother and more enjoyable.`,
        },
        outcomes: [
            "Understand the fundamentals of user interface (UI) and user experience (UX) design principles.",
            "Learn to conduct user research and usability testing to gather actionable insights.",
            "Master the basics of wireframing, prototyping, and iterative design processes.",
            "Explore the use of design tools like Adobe XD, Sketch, and Figma for creating engaging interfaces.",
            "Develop skills in creating responsive designs that work across different devices and platforms.",
        ],
        tools: ["figma", "html", "css", "tailwind", "bootstrap"],
        modules: [
            {
                title: "What is UX?",
                outcomes: [
                    "Understand the definition and significance of user experience (UX) in the product development process.",
                    "Learn the difference between UX and UI and how they work together to create great products.",
                ],
            },
            {
                title: "Google Design Sprint Methodology",
                outcomes: [
                    "Learn the five phases of the Google Design Sprint to rapidly solve and prototype design problems.",
                    "Apply sprint methodology to simulate a real-world fast-paced design challenge.",
                ],
            },
            {
                title: "UX Research and Ideation Process: User Persona and Affinity Mapping",
                outcomes: [
                    "Master the creation of detailed user personas based on user research to guide design decisions.",
                    "Use affinity mapping techniques to organize and prioritize research findings and insights.",
                ],
            },
            {
                title: "UX Research and Ideation Process: Design Thinking Canvas",
                outcomes: [
                    "Learn to use the Design Thinking Canvas to visually map out solutions to user-centered problems.",
                    "Understand how each element of the canvas contributes to a comprehensive design strategy.",
                ],
            },
            {
                title: "Hands-on with UX Design Tools: Figma",
                outcomes: [
                    "Gain proficiency in using Figma for UI design, from basic operations to advanced features.",
                    "Create your first user interface design using Figma’s collaborative tools.",
                ],
            },
            {
                title: "Wireframing and Prototyping",
                outcomes: [
                    "Develop skills in wireframing as a blueprint for UI/UX designs.",
                    "Create interactive prototypes to test and refine design concepts.",
                ],
            },
            {
                title: "User Testing Techniques",
                outcomes: [
                    "Learn various user testing methods to gather feedback on design usability.",
                    "Analyze user testing data to make informed design improvements.",
                ],
            },
            {
                title: "Working in a Team",
                outcomes: [
                    "Understand the dynamics of working within a design team.",
                    "Learn effective communication and collaboration techniques to enhance team productivity and creativity.",
                ],
            },
            {
                title: "Capstone Project",
                outcomes: [
                    "Apply learned UX design skills to develop a complete project from concept to prototype.",
                    "Present your project, demonstrating your design process and final outcomes.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
    {
        id: "course-14",
        badge: "fc",
        banner: "cabed",
        title: "Foundation Certificate in Technology Management",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Business & Management",
        foundation: [],
        slug: "fcuiux",
        featured: false,
        description:
            "This programme provides you with the fundamental grasp of various technological concepts and enable you to skillfully lead your organization in the industry of tomorrow.",
        timeline: "2 - 4 months",
        delivery: "Instructor-led",
        medium: "Online",
        overview: {
            title: "Mastering the Art of Tech Leadership",
            paragraph: `Learn the skills needed to inspire and guide technology teams to success. The course covers strategic planning, effective communication, and project oversight in the tech industry. Leadership in technology is thrilling because you help shape the future, turning cutting-edge ideas into reality.`,
        },
        outcomes: [
            "Understand the fundamentals of managing technical projects and the software development lifecycle.",
            "Learn effective communication strategies to interact with both technical and non-technical stakeholders.",
            "Explore basic principles of leadership and team management in a tech environment.",
            "Discover techniques for conflict resolution and building team cohesion.",
            "Gain insights into agile and other project management methodologies commonly used in technology projects.",
        ],
        tools: ["ai", "cloud", "iot", "vr"],
        modules: [
            {
                title: "Digital and Computing",
                outcomes: [
                    "Explore the evolution and impact of digital technologies on businesses and society.",
                    "Understand the key concepts and terminology used in digital computing.",
                ],
            },
            {
                title: "Internet Computing",
                outcomes: [
                    "Learn the foundational elements of how the Internet works, including basic protocols and network configurations.",
                    "Discuss the implications of internet computing on data security and privacy.",
                ],
            },
            {
                title: "Mobile Computing",
                outcomes: [
                    "Examine the components and architecture of mobile computing systems.",
                    "Understand the challenges and strategies in designing applications for mobile devices.",
                ],
            },
            {
                title: "Cloud Computing",
                outcomes: [
                    "Define cloud computing and its service models (IaaS, PaaS, SaaS).",
                    "Learn about the benefits and risks associated with cloud computing.",
                ],
            },
            {
                title: "Big Data",
                outcomes: [
                    "Understand what constitutes big data and the technologies used to handle it.",
                    "Explore the role of big data analytics in decision-making processes.",
                ],
            },
            {
                title: "Internet of Things (IoT)",
                outcomes: [
                    "Discuss the concept of IoT and its components.",
                    "Learn about the applications and security concerns associated with IoT devices.",
                ],
            },
            {
                title: "Artificial Intelligence (AI)",
                outcomes: [
                    "Understand the basics of AI, including different types of AI systems.",
                    "Explore the applications and ethical considerations of AI in technology management.",
                ],
            },
            {
                title: "Computer-Constructed Reality",
                outcomes: [
                    "Define computer-constructed reality and its types, including virtual reality (VR) and augmented reality (AR).",
                    "Discuss the impact and potential uses of VR and AR in various industries.",
                ],
            },
            {
                title: "Root-Cause Analysis",
                outcomes: [
                    "Learn techniques for identifying the root causes of issues in technical projects.",
                    "Apply root-cause analysis to improve problem-solving effectiveness.",
                ],
            },
            {
                title: "Industry or Competitive Analysis",
                outcomes: [
                    "Develop skills in analyzing industry trends and competitive positioning.",
                    "Utilize analytical tools to gain strategic insights into market dynamics.",
                ],
            },
            {
                title: "Problem Scoping",
                outcomes: [
                    "Master the art of defining and scoping problems to ensure clear focus and direction in projects.",
                    "Learn to set achievable objectives and key results.",
                ],
            },
            {
                title: "Organization Analysis",
                outcomes: [
                    "Analyze organizational structures and culture to identify areas for technological enhancement.",
                    "Understand the role of technology in organizational efficiency.",
                ],
            },
            {
                title: "Change Impact Analysis",
                outcomes: [
                    "Learn to assess the potential impacts of changes within a project or organization.",
                    "Develop strategies to manage and mitigate risks associated with change.",
                ],
            },
            {
                title: "Capstone Project",
                outcomes: [
                    "Apply the concepts and skills learned throughout the course to a real-world project.",
                    "Demonstrate proficiency in technical management and problem-solving.",
                ],
            },
        ],
        instructors: ["darren", "anthony", "peter", "alvin"],
        graduates: ["gje", "lwh"],
    },
];

// ---------------------------
// COURSE TOOLS
// ---------------------------

export const db_courseTools = [
    {
        title: "Docker",
        id: "docker",
    },
    {
        title: "Git",
        id: "git",
    },
    {
        title: "NodeJS",
        id: "node",
    },
    {
        title: "ExpressJS",
        id: "express",
    },
    {
        title: "HTML",
        id: "html",
    },
    {
        title: "CSS",
        id: "css",
    },
    {
        title: "React",
        id: "react",
    },
    {
        title: "Django",
        id: "django",
    },
    {
        title: "SEMRush",
        id: "semrush",
    },
    {
        title: "Hubspot",
        id: "hubspot",
    },
    {
        title: "Web3",
        id: "web3",
    },
    {
        title: "Javascript",
        id: "javascript",
    },
    {
        title: "SQL",
        id: "sql",
    },
    {
        title: "Python",
        id: "python",
    },
    {
        title: "Matplotlib",
        id: "matplotlib",
    },
    {
        title: "Seaborn",
        id: "seaborn",
    },
    {
        title: "Pytorch",
        id: "pytorch",
    },
    {
        title: "Pandas",
        id: "pandas",
    },
    {
        title: "Numpy",
        id: "numpy",
    },
    {
        title: "SciPy",
        id: "scipy",
    },
    {
        title: "TensorFlow",
        id: "tensorflow",
    },
    {
        title: "Scikit-learn",
        id: "scikitlearn",
    },
    {
        title: "Tableau",
        id: "tableau",
    },
    {
        title: "Power BI",
        id: "powerbi",
    },
    {
        title: "Jupyter Notebook",
        id: "jupyter",
    },
    {
        title: "Google Analytics",
        id: "googleanalytics",
    },
    {
        title: "Google Cloud",
        id: "googlecloud",
    },
    {
        title: "SQLite",
        id: "sqlite",
    },
    {
        title: "Blockchain",
        id: "blockchain",
    },
    {
        title: "Bitcoin",
        id: "bitcoin",
    },
    {
        title: "Ethereum",
        id: "ethereum",
    },
    {
        title: "Figma",
        id: "figma",
    },
    {
        title: "Tailwind CSS",
        id: "tailwind",
    },
    {
        title: "Bootstrap",
        id: "bootstrap",
    },
    {
        title: "AI",
        id: "ai",
    },
    {
        title: "Cloud Computing",
        id: "cloud",
    },
    {
        title: "Internet of Things",
        id: "iot",
    },
    {
        title: "Constructed reality",
        id: "vr",
    },
];

// -----------------
// COURSE FEES
// -----------------

export const db_courseFees = [
    {
        title: "M1 Course Fee",
        description: "This purchase includes:",
        price: {
            old: "400",
            new: "180",
            currency: "MYR",
            frequency: "",
        },
        points: [
            "90-days access to all online learning materials",
            "Exclusive instructor-led live tutorial sessions",
            "Marked project assignments",
            "Received industry-recognized certification upon completion",
        ],
        type: "M1",
    },
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
        type: "Certified Associate",
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
        type: "Certified Associate",
    },
];

export const db_courseFCFee = `The TalentLabs Foundation Certificate courses are only made available to our esteemed Corporate & Government clients only. Please get in touch with us at <a href="mailto:learn@talentlabs.org">learn@talentlabs.org</a> to check your eligibility.
<br/>
<br/>
If you are looking to upskill your team with our Foundation Certificate courses and invest in your team of tomorrow with TalentLabs, our Partnerships & Business Development team <a href="mailto:bd@talentlabsmy.com">bd@talentlabsmy.com</a> is here to answer any questions you may have.
<br/>
<br/>
If you are an individual looking for skills development courses, we recommend you to explore our selection of M1 courses & Certified Associate courses which are designed for the general public.`;
