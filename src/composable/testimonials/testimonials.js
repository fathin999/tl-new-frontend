const testimonials = [
    {
        name: "Goh Jia Ean",
        logo: "nielsen",
        comment:
            "The course materials were comprehensive, yet easy to follow. And with the help of TalentLabs, I managed to secure a placement in Nielsen!",
        slug: "gje",
        programme: "kyouth",
        course: "",
    },
    {
        name: "Lee Wynn Hann",
        logo: "cimb",
        comment:
            "TalentLabs's programme provided me with all the fundamental knowledge and skills that I needed to kick-start my career in tech.",
        slug: "lwh",
        programme: "kyouth",
        course: "",
    },
    {
        name: "Khairul Ezaidi Abu Khalib",
        logo: "lenovo",
        comment:
            "This programme met all of my expectations I'm grateful to the TalentLabs' team for helping me land a job in a reputable MNC, Lenovo.",
        slug: "keak",
        programme: "kyouth",
        course: "",
    },
    {
        name: "Khairunnisa Abu Khair",
        logo: "2x",
        comment:
            "For anyone new in tech, I recommend joining TalentLabs. They offer all the right coaching, modules and support you need to succeed!",
        slug: "kak",
        programme: "kyouth",
        course: "",
    },
    {
        name: "Afeeq Danial",
        logo: "keysight",
        comment:
            "Even coming from a STEM background, I had limited experience in coding. TalentLabs helped fill that gap I needed to stand out.",
        slug: "ad",
        programme: "kyouth",
        course: "",
    },
    {
        name: "Fuzeymi Sobri",
        logo: "pos",
        comment:
            "This course is great for beginners like me. I would like to thank the Talentlabs team for providing excellent guidance throughout.",
        slug: "fs",
        programme: "kyouth",
        course: "",
    },
];

export const getTestimonialsFromProgramme = (pgm) => {
    return testimonials.filter((test) => test.programme === pgm);
};

export const getLandingTestimonials = () => {
    return testimonials;
};
