const employers = [
    {
        title: "The Hong Kong University of Science and Technology",
        shortTitle: "HKUST",
        location: "Sai Kung, Hong Kong",
        industry: "Education",
        size: "1,000 - 5,000",
        profile:
            "The Hong Kong University of Science and Technology (HKUST) is a world-class international research university excelling in science, technology and business as well as humanities and social science. Internationally renowned for its academic rigor and accomplishments, the University promotes interdisciplinary studies and provides holistic education, nurturing well-rounded graduates with a strong entrepreneurial spirit, innovative thinking and relevant skills to thrive in a knowledge economy. As an international university with strong ties to global thought leaders, HKUST has wide-ranging connections with Mainland China while aspiring to be a global premier knowledge hub and a center of research breakthroughs.",
        website: "https://www.hkust.edu.hk/",
        slug: "hkust",
    },
    {
        title: "Accenture Company Limited",
        shortTitle: "Accenture",
        location: "Central and Western, Hong Kong",
        industry: "Information Technology and Services",
        size: "10,000 +",
        profile:
            "Accenture is a global professional services company with leading capabilities in digital, cloud and security. Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Technology and Operations services and Accenture Song — all powered by the world's largest network of Advanced Technology and Intelligent Operations centers. Our 721,000 people deliver on the promise of technology and human ingenuity every day, serving clients in more than 120 countries. We embrace the power of change to create value and shared success for our clients, people, shareholders, partners and communities.",
        website: "https://www.accenture.com",
        slug: "accenture",
    },
    {
        title: "Dolphin Pharmaceuticals",
        shortTitle: "Dolphin Pharmaceuticals",
        location: "Central and Western, Hong Kong",
        industry: "Facilities Services",
        size: "11 - 50",
        profile:
            "專為醫藥, 營養補充劑及日用品而設的智慧物流公司. 為您打造全面的一站式產品及網店營運方案. 物流與倉存、產品採購、包裝、產品營銷、產品上架、建立網上平台、出貨包裝、本地和跨境交付 ",
        website: "https://www.dolphin-pharm-wsa.com/ecomm-solution",
        slug: "dolphin",
    },
    {
        title: "Fave Asia Technologies Sdn Bhd",
        shortTitle: "Fave",
        location: "Mont Kiara, Kuala Lumpur, Malaysia",
        industry: "Consumer Services",
        size: "201 - 500",
        profile:
            "Fave is one of Southeast Asia's leading fintech platform; providing a smart payment app for the smart generation of consumers to pay & save. Fave also empowers offline businesses to grow and digitally connect with their customers in a whole new way. Fave is on a mission to maximise joy & value in every shopping experience and accelerate the offline world's transition to the digital economy. Fave currently operates in 35 cities across Malaysia, Singapore, and Indonesia. Fave will be launching in India in 2021.",
        website: "https://myfave.com/",
        slug: "fave",
    },
];

export const getEmployer = () => {
    return employers[1];
};

export const getEmployerName = (slug) => {
    let employer = employers.find((employer) => employer.slug == slug);

    if (employer) return employer.shortTitle;
    else return slug.charAt(0).toUpperCase() + slug.slice(1);
};

export const getEmployerFromSlug = (slug) => {
    return employers.find((employer) => employer.slug == slug);
};
