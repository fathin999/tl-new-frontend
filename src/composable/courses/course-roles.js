import IconRoleCybersecurity from "@/components/icons/landingPage/roles/IconRoleCybersecurity.vue";
import IconRoleDeveloper from "@/components/icons/landingPage/roles/IconRoleDeveloper.vue";
import IconRoleMarketing from "@/components/icons/landingPage/roles/IconRoleMarketing.vue";
import IconRoleData from "@/components/icons/landingPage/roles/IconRoleData.vue";

const courses = [
    {
        id: 1,
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Data Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Data science",
        slug: "cada",
        featured: true,
        foundation: [],
    },
    {
        id: 4,
        badge: "fc",
        banner: "cada",
        title: "Foundation Certificate in Data Analytics",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Data science",
        slug: "fcda",
        featured: true,
        foundation: [],
    },
    {
        id: 5,
        badge: "fc",
        banner: "cada",
        title: "Foundation Certificate in Digital Marketing",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Digital marketer",
        slug: "fcdm",
        featured: true,
        foundation: [],
    },
    {
        id: 6,
        badge: "fc",
        banner: "cada",
        title: "Foundation Certificate in Software Engineering",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Software engineer",
        slug: "fcse",
        featured: true,
        foundation: [],
    },
    {
        id: 7,
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Business Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Data science",
        slug: "caba",
        featured: true,
        foundation: [],
    },
    {
        id: 2,
        badge: "cada",
        banner: "cabed",
        title: "Certified Associate in Backend Development",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Software engineer",
        slug: "cabed",
        featured: true,
        foundation: [],
    },
    {
        id: 8,
        badge: "cada",
        banner: "cabed",
        title: "Certified Associate in Frontend Development",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Software engineer",
        slug: "cafed",
        featured: true,
        foundation: [],
    },
    {
        id: 9,
        badge: "fc",
        banner: "cabed",
        title: "Fundamentals in Fintech",
        type: "Foundation Certificate",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "Fintech",
        slug: "fif",
        featured: true,
        foundation: [],
    },
    {
        id: 10,
        badge: "cada",
        banner: "cabed",
        title: "PwC Certified Associate in Penetration Testing",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "PwC",
        providerLogo: "pwc",
        role: "Cybersecurity",
        slug: "capt",
        featured: true,
        foundation: [],
    },
    {
        id: 11,
        badge: "fc",
        banner: "cabed",
        title: "M1 in Javascript",
        type: "M1",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "",
        foundation: ["se"],
        slug: "m1j",
        featured: false,
    },
    {
        id: 12,
        badge: "fc",
        banner: "cabed",
        title: "M1 in Python",
        type: "M1",
        level: "Beginner",
        provider: "TalentLabs",
        providerLogo: "tl",
        role: "",
        foundation: ["se", "data"],
        slug: "m1p",
        featured: false,
    },
];

const roles = [
    {
        title: "Software Engineer",
        icon: IconRoleDeveloper,
    },
    {
        title: "Data Science",
        icon: IconRoleData,
    },
    {
        title: "Digital Marketer",
        icon: IconRoleMarketing,
    },
    {
        title: "Cybersecurity",
        icon: IconRoleCybersecurity,
    },
    {
        title: "Fintech",
        icon: IconRoleCybersecurity,
    },
];

export const getCoursesWithRoles = (role) => {
    let newCourses = courses.filter(
        (course) => course.role.toLowerCase() === role.toLowerCase()
    );

    return newCourses.sort((a, b) => (b.level === "Beginner" ? 1 : -1));
};

export const getLandingCourses = () => {
    return courses.filter((course) => course.featured);
};

export const getLandingRoles = () => {
    return roles.slice(0, 4);
};

export const filterCoursesUsingTitle = (setCourses, title) => {
    let newCourses = setCourses.filter(
        (course) => course.title.toLowerCase() === title.toLowerCase()
    );

    return newCourses.sort((a, b) => (b.level === "Beginner" ? 1 : -1));
};

export const filterCoursesUsingRole = (setCourses, role) => {
    let newCourses = setCourses.filter(
        (course) => course.role.toLowerCase() === role.toLowerCase()
    );

    return newCourses.sort((a, b) => (b.level === "Beginner" ? 1 : -1));
};

export const getCoursesUsingTitles = (titles) => {
    return courses.filter((course) => {
        let titleExist = false;

        titles.forEach((title) => {
            if (course.title === title) {
                titleExist = true;
                return;
            }
        });

        return titleExist;
    });
};

export const getRolesUsingTitles = (titles) => {
    let newRoles = roles.filter((role) => {
        let titleExist = false;

        titles.forEach((title) => {
            if (role.title === title) {
                titleExist = true;
                return;
            }
        });

        return titleExist;
    });

    return newRoles;
};

export const getMaxThreeCoursesWithRoles = (role) => {
    let newCourses = courses
        .filter((course) => course.role.toLowerCase() === role.toLowerCase())
        .sort((a, b) => (b.level === "Beginner" ? 1 : -1));

    if (newCourses.length > 3) return newCourses.slice(0, 3);
    else return newCourses;
};

export const getMaxThreeM1CoursesWithRoles = (role) => {
    let newCourses = [];
    const m1Courses = courses.filter((course) => course.type === "M1");

    m1Courses.forEach((course) => {
        const foundations = course.foundation;

        foundations.forEach((foundation) => {
            if (foundation === role) newCourses.push(course);
        });
    });

    if (newCourses.length > 3) return newCourses.slice(0, 3);
    else return newCourses;
};

export const getOneCourseUsingSlug = (slug) => {
    return courses.find((course) => course.slug === slug);
};

export const getOneM1CourseUsingSlug = (slug) => {
    return courses.find((course) => course.slug === slug);
};

// export const get
