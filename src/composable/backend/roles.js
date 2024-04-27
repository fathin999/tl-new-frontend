import {db_roles} from "../database/roles";

// -----------------------
// FILTER ROLES
// -----------------------
// used in: CareerRolesPage.vue

export const filterRoles = (key, value, max = 0) => {
    let roles = db_roles.filter((role) => role[key] === value);

    if (max > 0) return roles.slice(0, max);
    else return roles;
};

// -----------------------
// GET ALL ROLES
// -----------------------
// used in: view-models/roles.js

export const getAllRoles = () => {
    return db_roles;
};

// -----------------------
// GET ALL ROLES
// -----------------------
// used in: RoleItemPage.vue

export const getOneRole = (slug) => {
    return db_roles.find((role) => role.slug === slug);
};

// -----------------------
// GET ROLE SUGGESTIONS
// -----------------------
// used in: SearchBar.vue

export const getRoleSuggestions = (keyword) => {
    let roles = db_roles.filter((role) =>
        role.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return roles.slice(0, 3);
};
