const jobs = [
    {
        title: "Junior Software Engineer (Frontend)",
        location: "Central and Western, Hong Kong",
        type: "Full-time",
        remote: "Onsite",
        featured: true,
        employer: "accenture",
        role: "Software Engineer",
        createdAt: "Mon Apr 8 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "Data Engineer",
        location: "Central and Western, Hong Kong",
        type: "Full-time",
        remote: "Onsite",
        featured: false,
        employer: "accenture",
        role: "Data Science",
        createdAt: "Mon Apr 8 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "Business Analyst",
        location: "Central and Western, Hong Kong",
        type: "Full-time",
        remote: "Onsite",
        featured: false,
        employer: "accenture",
        role: "Data Science",
        createdAt: "Mon Apr 8 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "Network Infrastructure Engineer",
        location: "Central and Western, Hong Kong",
        type: "Full-time",
        remote: "Onsite",
        featured: false,
        employer: "accenture",
        role: "Network & Systems Administration",
        createdAt: "Fri Apr 12 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "eCommerce Data Operations Specialist",
        location: "Central, Hong Kong",
        type: "Part-time",
        remote: "Hybrid",
        featured: false,
        employer: "dolphin",
        role: "Data Science",
        createdAt: "Wed Mar 27 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "Software Engineer (Backend)",
        location: "Kuala Lumpur, Malaysia",
        type: "Contract",
        remote: "Remote",
        featured: true,
        employer: "fave",
        role: "Software Engineer",
        createdAt: "Wed Mar 27 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "Drupal (PHP) Developer",
        location: "Sai Kung, Hong Kong",
        type: "Full-time",
        remote: "Onsite",
        featured: true,
        employer: "hkust",
        role: "Software Engineer",
        createdAt: "Tue Apr 2 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "Mobile / Java Developer",
        location: "Sai kung, Hong Kong",
        type: "Full-time",
        remote: "Onsite",
        featured: false,
        employer: "hkust",
        role: "Software Engineer",
        createdAt: "Tue Apr 2 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
    {
        title: "Database Operator",
        location: "Kuala Lumpur, Malaysia",
        type: "Contract",
        remote: "Remote",
        featured: false,
        employer: "fave",
        role: "Data Science",
        createdAt: "Sun Apr 7 2024 01:06:25 GMT+0800 (Malaysia Time)",
    },
];

export const getJob = () => {
    return jobs[0];
};

export const getAllJobs = () => {
    return jobs;
};

export const getFeaturedJobs = () => {
    return jobs.filter((job) => job.featured);
};

export const getTime = (time) => {
    const today = new Date();
    const created = new Date(time);
    const ms = Math.abs(today - created); // difference in milliseconds
    const days = Math.floor(ms / (3600000 * 24)); // milliseconds to days
    return `${days} days ago`;
};

export const compareDates = (a_str, b_str) => {
    const a = new Date(a_str);
    const b = new Date(b_str);
    return b - a;
};

export const getAllJobsFromEmployer = (employer) => {
    return jobs
        .filter((job) => job.employer == employer)
        .sort((a, b) => compareDates(a.createdAt, b.createdAt));
};

export const getOtherJobsFromEmployer = (employer, title) => {
    let otherJobs = jobs
        .filter((job) => job.employer == employer && job.title !== title)
        .sort((a, b) => compareDates(a.createdAt, b.createdAt));

    // return jobs - sorted earliest first, max 3 jobs
    if (otherJobs.length > 3) return otherJobs.slice(0, 3);
    else return otherJobs;
};

export const getOtherSimilarJobs = (role, title) => {
    let similarJobs = jobs
        .filter((job) => job.role == role && job.title !== title)
        .sort((a, b) => compareDates(a.createdAt, b.createdAt));

    // return jobs - sorted earliest first, max 3 jobs
    if (similarJobs.length > 3) return similarJobs.slice(0, 3);
    else return similarJobs;
};
