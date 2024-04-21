const stats = [
    {
        title: "10k +",
        subtext: "total students",
        slug: "students",
    },
    {
        title: "92%",
        subtext: "placement rate",
        slug: "placement",
    },
    {
        title: "60+",
        subtext: "hiring partners",
        slug: "partners",
    },
    {
        title: "5k +",
        subtext: "matches made",
        slug: "matches",
    },
    {
        title: "10k +",
        subtext: "tech jobs available",
        slug: "jobs",
    },
    {
        title: "8k +",
        subtext: "job seekers",
        slug: "seekers",
    },
];

export const getProgrammeStats = () => {
    return stats.filter(
        (stat) =>
            stat.slug == "students" ||
            stat.slug == "partners" ||
            stat.slug == "placement"
    );
};

export const getLandingHeroStats = () => {
    return stats.filter(
        (stat) =>
            stat.slug == "placement" ||
            stat.slug == "matches" ||
            stat.slug == "jobs" ||
            stat.slug == "seekers"
    );
};
