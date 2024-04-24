const roles = [
    {
        title: "Software Engineer",
        slug: "se",
        paraTitle: "software engineer",
    },
    {
        title: "Frontend Development",
        slug: "frontend",
        paraTitle: "frontend developer",
    },
    {
        title: "Backend Development",
        slug: "backend",
        paraTitle: "backend developer",
    },
    {
        title: "Data Science",
        slug: "data",
        paraTitle: "data scientist",
    },
    {
        title: "Digital Marketer",
        slug: "dm",
        paraTitle: "digital marketer",
    },
    {
        title: "Cybersecurity",
        slug: "cs",
        paraTitle: "cybersecurity engineer",
    },
    {
        title: "Product/Project Manager",
        slug: "pm",
        paraTitle: "product manager",
    },
    {
        title: "UI/UX Designer",
        slug: "uiux",
        paraTitle: "UI/UX designer",
    },
    {
        title: "Business & Management",
        slug: "business",
        paraTitle: "business manager",
    },
    {
        title: "Financial Technology",
        slug: "fintech",
        paraTitle: "fintech engineer",
    },
];

const genericData = {
    do: [
        "Designing and maintaining software systems",
        "Evaluating and testing new software programs",
        "Optimizing software for speed and scalability",
        "Writing and testing code",
        "Consulting with clients, engineers, security specialists, and other stakeholders",
        "Presenting new features to stakeholders and internal customers",
    ],
    skills: [
        "Problem-solving skills",
        "Attention to detail",
        "Teamwork",
        "Independent learner",
        "Work well under pressure",
    ],
    how: [
        {
            title: "Gain academic qualification or certificates",
            text: "Acquire formal education or industry-recognized certifications to enhance your technical skills.",
            icon: "certificate",
            showCourse: "cafed",
            showM1Course: "",
            showJob: false,
        },
        {
            title: "Learn a language, framework or tech stack",
            text: "Build a strong foundation in your chosen programming languages or technology stacks. ",
            icon: "skills",
            showCourse: "",
            showM1Course: "m1j",
            showJob: false,
        },
        {
            title: "Grasp data structures and algorithms",
            text: "Strengthen your problem-solving skills by mastering essential data structures and algorithms.",
            icon: "database",
            showCourse: "",
            showM1Course: "",
            showJob: false,
        },
        {
            title: "Create projects and grow your portfolio",
            text: "Build real-world projects to showcase your skills and expand your professional portfolio.",
            icon: "file",
            showCourse: "",
            showM1Course: "",
            showJob: false,
        },
        {
            title: "Explore internship opportunities",
            text: "Gain hands-on experience and valuable insights through targeted internship programmes.",
            icon: "building",
            showCourse: "",
            showM1Course: "",
            showJob: false,
        },
        {
            title: "Start applying for work!",
            text: "Begin your professional journey by applying for roles that align with your skills and aspirations.",
            icon: "briefcase",
            showCourse: "",
            showM1Course: "",
            showJob: true,
        },
    ],
};

const mainRoles = [
    "se",
    "data",
    "dm",
    "cs",
    "pm",
    "uiux",
    "business",
    "fintech",
];

export const getGenericRoleItemData = () => {
    return genericData;
};

export const getMainRoles = () => {
    let newRoles = [];

    mainRoles.forEach((main) => {
        let r = roles.find((role) => role.slug == main);

        if (r) newRoles.push(r);
    });

    return newRoles;
};

export const getRole = (slug) => {
    return roles.find((role) => role.slug === slug);
};

export const getFirstRole = () => {
    return roles[0];
};
