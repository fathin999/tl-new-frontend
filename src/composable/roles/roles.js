const roles = [
    {
        title: "Software Engineer",
        slug: "se",
    },
    {
        title: "Frontend Development",
        slug: "frontend",
    },
    {
        title: "Backend Development",
        slug: "backend",
    },
    {
        title: "Data Science",
        slug: "data",
    },
    {
        title: "Digital Marketer",
        slug: "dm",
    },
    {
        title: "Cybersecurity",
        slug: "cs",
    },
    {
        title: "Product/Project Manager",
        slug: "pm",
    },
    {
        title: "UI/UX Designer",
        slug: "uiux",
    },
    {
        title: "Business & Management",
        slug: "business",
    },
    {
        title: "Financial Technology",
        slug: "fintech",
    },
];

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

export const getMainRoles = () => {
    let newRoles = [];

    mainRoles.forEach((main) => {
        let r = roles.find((role) => role.slug == main);

        if (r) newRoles.push(r);
    });

    return newRoles;
};

export const getRole = () => {
    return roles[0];
};
