import {getRoles} from "../roles/roles";

const getRoleFilters = () => {
    return getRoles().map((role) => {
        return {
            title: role.title,
            selected: false,
        };
    });
};

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
