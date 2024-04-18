const teams = [
    {
        name: "Terrance Lok",
        position: "Co-founder & Director",
        job: "Technical Engineer",
        img: "terrance",
        description:
            "Terrance is the Co-founder and CEO of TalentLabs and Managing Partner of Bridgespace Capital, a cross-border platform focusing on educational and healthcare endeavours. Previously, he was a venture capitalist at Horizons Ventures investing into innovative companies such as Impossible Foods, Slack, and Zoom. His previous work experience includes working at ZWC Partners as Partner and Head of Southeast Asia, Barclays Capital as Derivatives Analyst, Citi as Institutional Sales, and Siemens as an engineer. Terrance was the recipient of the AmCham Charitable Foundation Scholar Award and is a member of Beta Gamma Sigma. Terrance was educated at Kellogg School of Management, HKUST and Queen's University.",
    },
    {
        name: "Razin Ryan Rozman",
        position: "Co-founder & Director",
        job: "Finance & Strategy",
        img: "razin",
        logo: "maxis",
    },
    {
        name: "Darren Chiu",
        position: "Co-founder & Director",
        job: "Technical Consultant",
        img: "darren",
        logo: "google",
    },
    {
        name: "Anthony Chiu",
        position: "Instructor",
        job: "Software Engineer",
        img: "anthony",
        logo: "clover",
    },
    {
        name: "Prof. Betty Lin",
        position: "Advisor",
        job: "Professor",
        img: "betty",
        logo: "hkust",
    },
    {
        name: "Kevin Lee",
        position: "Advisor",
        job: "Investment Partner",
        img: "kevin",
        logo: "l2",
    },
    {
        name: "Chris Lee",
        position: "Advisor",
        job: "Managing Director",
        img: "chris",
        logo: "clee",
    },
    {
        name: "Jeffrey Tse",
        position: "Advisor",
        job: "Portfolio Manager",
        img: "jeffrey",
        logo: "barings",
    },
    {
        name: "Max Lai",
        position: "Advisor",
        job: "Cyptocurrency Trader",
        img: "max",
        logo: "hashkey",
    },
    {
        name: "Peter Chow",
        position: "Instructor",
        job: "Technical Engineer",
        img: "peter",
        logo: "google",
    },
    {
        name: "Alvin Wong",
        position: "Teaching Assistant",
        job: "BSc. Computer Science",
        img: "alvin",
        logo: "hku",
    },
    {
        name: "Karl Wong",
        position: "Instructor",
        job: "Data analytics specialist",
        img: "karl",
        logo: "crypto",
    },
    {
        name: "Charlotte Kwan",
        position: "Instructor",
        job: "Full stack developer",
        img: "charlotte",
        logo: "prudential",
    },
    {
        name: "Shawn Yip",
        position: "Business Development Manager",
        job: "Product manager",
        img: "shawn",
        logo: "maxis",
    },
    {
        name: "Alifah Arina",
        position: "Creative lead",
        job: "Architect",
        img: "alifah",
        logo: "riba",
    },
    {
        name: "Brienne Lee",
        position: "Business Development Manager",
        job: "Consultant",
        img: "brienne",
        logo: "alchemist",
    },
    {
        name: "Kevin Loo",
        position: "Instructor",
        job: "Director",
        img: "kevinloo",
        logo: "ideg",
    },
];

export const getAllTeams = () => {
    return teams;
};

export const getTeam = () => {
    return teams[0];
};

export const getTeamFromSlug = (slug) => {
    return teams.find((team) => team.img === slug);
};

const checkFounder = (img) => {
    return img === "razin" || img === "terrance" || img === "darren";
};

export const getFounders = () => {
    return teams.filter((team) => checkFounder(team.img));
};
