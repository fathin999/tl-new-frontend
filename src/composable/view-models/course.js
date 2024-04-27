import {getRoleFilters} from "./roles";
import IconOverview from "@/components/landing/icons/courses/IconOverview.vue";
import IconModules from "@/components/landing/icons/courses/IconModules.vue";
import IconFees from "@/components/landing/icons/courses/IconFees.vue";
import IconOutcomes from "@/components/landing/icons/courses/IconOutcomes.vue";

// FILTER

const filters = [
    {
        title: "Topic",
        open: false,
        type: "checkbox",
        options: getRoleFilters(),
    },
    {
        title: "Level",
        open: false,
        type: "checkbox",
        options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
        title: "Programme",
        open: false,
        type: "checkbox",
        options: ["K-Youth"],
    },
];

export const getCourseFilters = () => {
    return filters;
};

// SECTIONS

const sections = [
    {
        title: "Overview",
        icon: IconOverview,
    },
    {
        title: "Modules",
        icon: IconModules,
    },
    {
        title: "Financing",
        icon: IconFees,
    },
    {
        title: "Careers",
        icon: IconOutcomes,
    },
];

export const getCourseItemPageSections = (elements) => {
    return sections.map((sect, i) => {
        return {
            ref: elements[i],
            ...sect,
        };
    });
};

// COUNTRIES

const countries = [
    {
        name: "Malaysia",
        img: "malaysia",
    },
    {
        name: "Singapore",
        img: "singapore",
    },
    {
        name: "Hong Kong",
        img: "hongkong",
    },
    {
        name: "Taiwan",
        img: "taiwan",
    },
    {
        name: "Thailand",
        img: "thailand",
    },
    {
        name: "Indonesia",
        img: "indonesia",
    },
    {
        name: "Philippines",
        img: "philippines",
    },
];

export const getCountries = () => {
    return countries;
};
