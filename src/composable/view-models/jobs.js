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
            "Hong Kong",
            "Malaysia",
            "Central, Hong Kong",
            "Eastern, Hong Kong",
            "Western, Hong Kong",
            "Northern, Hong Kong",
            "Southern, Hong Kong",
            "Kuala Lumpur, Malaysia",
            "Selangor, Malaysia",
            "Putrajaya, Malaysia",
        ],
    },
    {
        title: "Type",
        open: false,
        type: "checkbox",
        options: ["Full-time", "Part-time", "Contract", "Internship"],
    },
    {
        title: "Remote",
        open: false,
        type: "checkbox",
        options: ["Remote", "Onsite", "Hybrid"],
    },
];

export const getJobFilters = () => {
    return filters;
};
