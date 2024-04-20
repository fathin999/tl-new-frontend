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
        role: "Data analyst",
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
        role: "Data analyst",
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
        role: "Data analyst",
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
    },
];

const roles = [
    {
        title: "Software Engineer",
        icon: IconRoleDeveloper,
    },
    {
        title: "Data Analyst",
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
    return courses;
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

    console.log(newRoles);

    return newRoles;
};
