import {db_employers} from "../database/employers";

// -----------------------
// GET ONE EMPLOYER
// -----------------------
// used in: EmployersPage.vue

export const getOneEmployer = (slug) => {
    return db_employers.find((emp) => emp.slug === slug);
};
