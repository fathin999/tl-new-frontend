import {getRoleFilters} from "./roles";

const filters = [
    {
        title: "Role",
        open: false,
        type: "checkbox",
        options: getRoleFilters(),
    },
    {
        title: "Location",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Hong Kong",
                selected: true,
            },
            {
                title: "Malaysia",
                selected: false,
            },
            {
                title: "Central, Hong Kong",
                selected: false,
            },
            {
                title: "Eastern, Hong Kong",
                selected: false,
            },
            {
                title: "Western, Hong Kong",
                selected: false,
            },
            {
                title: "Northern, Hong Kong",
                selected: false,
            },
            {
                title: "Southern, Hong Kong",
                selected: false,
            },
            {
                title: "Kuala Lumpur, Malaysia",
                selected: false,
            },
            {
                title: "Selangor, Malaysia",
                selected: false,
            },
            {
                title: "Putrajaya, Malaysia",
                selected: false,
            },
        ],
    },
    {
        title: "Type",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Full-time",
                selected: true,
            },
            {
                title: "Part-time",
                selected: false,
            },
            {
                title: "Contract",
                selected: false,
            },
            {
                title: "Internship",
                selected: false,
            },
        ],
    },
    {
        title: "Remote",
        open: false,
        type: "radio",
        options: [
            {
                title: "Remote",
                selected: true,
            },
            {
                title: "Onsite",
                selected: false,
            },
            {
                title: "Hybrid",
                selected: false,
            },
        ],
    },
];

export const getJobFilters = () => {
    return filters;
};
