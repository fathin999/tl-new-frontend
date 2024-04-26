import {getRoles} from "../roles/roles";

const tabs = ["Overview", "Course pathway", "Jobs"];

export const getRoleTabs = () => {
    return tabs;
};

export const getRoleFilters = () => {
    return getRoles().map((role) => {
        return {
            title: role.title,
            selected: false,
        };
    });
};
