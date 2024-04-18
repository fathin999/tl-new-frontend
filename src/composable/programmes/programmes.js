const programmes = [
    {
        title: "K-Youth Development Programme",
        logo: "khazanah",
        img: "kyouth",
        partner: "Khazanah",
        description:
            "K-Youth is a youth employability initiative by Khazanah Nasional Berhad (Khazanah) which aims to develop Malaysia's future talents.",
        active: false,
    },
    {
        title: "Career Accelerator Programme",
        logo: "mohe",
        img: "cap",
        partner: "Ministry of Higher Education (Malaysia)",
        description:
            "GCAP is a collaborative initiative between the Ministry of Higher Education, TalentCorp and My Partners together with leading employers to enhance the employability of graduates.",
        active: false,
    },
    {
        title: "Google Career Certificates",
        logo: "google",
        img: "google",
        partner: "Google",
        description:
            "The Google Career Certificate program is an online training program that offers professional certificates in fast-growing, high-demand technology fields.",
        active: true,
    },
    {
        title: "IVE x TalentLabs Train-To-Hire Programme",
        logo: "ive",
        img: "ive",
        partner: "IVE",
        description:
            "This programme provides exclusive accessive to hundreds of new tech job opportunities across the region. ",
        active: false,
    },
    {
        title: "Deep Tech & Future Skills Programme",
        logo: "mosti",
        img: "dtfs",
        partner: "Ministry of Science, Technology and Innovation (Malaysia)",
        description:
            "Deeptech and Futureskills Upskilling and Reskilling is a strategic initiative by MOSTI under the National Employment Council (NEC). The main goals are job creation and placement programme that targets 5,000 Malaysians especially those affected by Covid-19 pandemic.",
        active: true,
    },
    {
        title: "MySTEP Initiative",
        logo: "mof",
        img: "mystep",
        partner: "Ministry of Finance (Malaysia)",
        description:
            "MySTEP, or Malaysia Short-term Employment Programme, is a Government initiative that provides short-term employment (contracts) opportunities in various fields such as technology and finance.",
        active: false,
    },
];

export const getProgrammes = () => {
    return programmes.sort((a, b) => {
        return b.active ? 1 : -1;
    });
};
