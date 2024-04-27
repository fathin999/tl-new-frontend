import IconRoleCybersecurity from "@/components/landing/icons/landingPage/roles/IconRoleCybersecurity.vue";
import IconRoleDeveloper from "@/components/landing/icons/landingPage/roles/IconRoleDeveloper.vue";
import IconRoleMarketing from "@/components/landing/icons/landingPage/roles/IconRoleMarketing.vue";
import IconRoleData from "@/components/landing/icons/landingPage/roles/IconRoleData.vue";
import {getAllRoles} from "../backend/roles";

const tabs = ["Overview", "Course pathway", "Jobs"];

const landingRoles = [
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
];

export const getLandingRoles = () => {
    return landingRoles;
};

export const getRoleTabs = () => {
    return tabs;
};

export const getRoleFilters = () => {
    return getAllRoles().map((role) => {
        return role.title;
    });
};
