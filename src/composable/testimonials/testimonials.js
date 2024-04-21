const testimonials = [
    {
        name: "Evans Lam",
        logo: "tvb",
        comment:
            "The upskilling and job placement experience at TalentLabs were some of the happiest moments in my life.",
        slug: "el",
        programme: "",
        course: "",
    },
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
        name: "Hussain Nisaar",
        logo: "l2",
        comment:
            "Opting for TalentLabs Data Analytics Certificate was one of the best decisions I have made, I was impressed with the curriculum design.",
        slug: "hn",
        programme: "",
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
    {
        name: "Azam Khalid",
        logo: "harigaji",
        comment:
            "With the help of my mentors at TalentLabs, classmates, and instructors, I was able to gain a globally recognised certificate!",
        slug: "ak",
        programme: "",
        course: "",
    },
    {
        name: "Firdaus Jamaludin",
        logo: "recruitopia",
        comment:
            "The guidance from the experienced team of instructors boosted my confidence and skills as a developer.",
        slug: "fj",
        programme: "",
        course: "",
    },
    {
        name: "Noor Aisyah",
        logo: "telus",
        comment:
            "Coming from a biochemistry background, I had limited knowledge in tech. This programme is invaluable in helping me venture into a new field.",
        slug: "na",
        programme: "",
        course: "",
    },
    {
        name: "Eiman Salleh",
        logo: "proximax",
        comment:
            "The TalentLabs' career support and CV workshop are truly incredible for my overall career journey.",
        slug: "es",
        programme: "",
        course: "",
    },
];

export const getTestimonialsFromProgramme = (pgm) => {
    return testimonials.filter((test) => test.programme === pgm);
};

export const getLandingTestimonials = () => {
    let first = [];
    let second = [];

    testimonials.forEach((test) => {
        if (
            test.slug == "gje" ||
            test.slug == "lwh" ||
            test.slug == "keak" ||
            test.slug == "el" ||
            test.slug == "es" ||
            test.slug == "na"
        ) {
            first.push(test);
        } else second.push(test);
    });

    return {
        first: first,
        second: second,
    };
};

export const getTestimonialsFromSlugs = (slugs) => {
    let newTestimonials = [];

    slugs.forEach((slug) => {
        let test = testimonials.find((test) => test.slug === slug);
        if (test) newTestimonials.push(test);
    });

    return newTestimonials;
};
