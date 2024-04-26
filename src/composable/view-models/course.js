import {getRoleFilters} from "./roles";
import IconOverview from "@/components/icons/courses/IconOverview.vue";
import IconModules from "@/components/icons/courses/IconModules.vue";
import IconFees from "@/components/icons/courses/IconFees.vue";
import IconOutcomes from "@/components/icons/courses/IconOutcomes.vue";

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
        options: [
            {
                title: "Beginner",
                selected: false,
            },
            {
                title: "Intermediate",
                selected: false,
            },
            {
                title: "Advanced",
                selected: false,
            },
        ],
    },
    {
        title: "Provider",
        open: false,
        type: "radio",
        options: [
            {
                title: "TalentLabs",
                selected: false,
            },
            {
                title: "AWS",
                selected: false,
            },
            {
                title: "Google Certificates",
                selected: false,
            },
        ],
    },
    {
        title: "Programme",
        open: false,
        type: "radio",
        options: [
            {
                title: "K-Youth",
                selected: false,
            },
            {
                title: "MySTEP",
                selected: false,
            },
        ],
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
