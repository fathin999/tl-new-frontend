const teams = [
    {
        name: "Terrance Lok",
        position: "Co-founder & Director",
        img: "terrance",
        description:
            "Terrance is the Co-founder and CEO of TalentLabs and Managing Partner of Bridgespace Capital, a cross-border platform focusing on educational and healthcare endeavours. Previously, he was a venture capitalist at Horizons Ventures investing into innovative companies such as Impossible Foods, Slack, and Zoom. His previous work experience includes working at ZWC Partners as Partner and Head of Southeast Asia, Barclays Capital as Derivatives Analyst, Citi as Institutional Sales, and Siemens as an engineer. Terrance was the recipient of the AmCham Charitable Foundation Scholar Award and is a member of Beta Gamma Sigma. Terrance was educated at Kellogg School of Management, HKUST and Queen's University.",
    },
    {
        name: "Razin Ryan Rozman",
        position: "Co-founder & Director",
        img: "razin",
    },
    {
        name: "Darren Chiu",
        position: "Co-founder & Director",
        img: "darren",
    },
    {
        name: "Anthony Chiu",
        position: "Instructor",
        img: "anthony",
    },
    {
        name: "Prof. Betty Lin",
        position: "Advisor",
        img: "betty",
    },
    {
        name: "Kevin Lee",
        position: "Advisor",
        img: "kevin",
    },
    {
        name: "Chris Lee",
        position: "Advisor",
        img: "chris",
    },
    {
        name: "Jeffrey Tse",
        position: "Advisor",
        img: "jeffrey",
    },
    {
        name: "Max Lai",
        position: "Advisor",
        img: "max",
    },
    {
        name: "Peter Chow",
        position: "Instructor",
        img: "peter",
    },
    {
        name: "Alvin Wong",
        position: "Teaching Assistant",
        img: "alvin",
    },
    {
        name: "Karl Wong",
        position: "Instructor",
        img: "karl",
    },
    {
        name: "Charlotte Kwan",
        position: "Instructor",
        img: "charlotte",
    },
    {
        name: "Shawn Yip",
        position: "Business Development Manager",
        img: "shawn",
    },
    {
        name: "Alifah Arina",
        position: "Creative lead",
        img: "alifah",
    },
    {
        name: "Brienne Lee",
        position: "Business Development Manager",
        img: "brienne",
    },
    {
        name: "Kevin Loo",
        position: "Instructor",
        img: "kevinloo",
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
