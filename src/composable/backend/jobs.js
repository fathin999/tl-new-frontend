import {db_jobs} from "../database/jobs";
import {compareDates} from "../utilities/jobs";

// -----------------------
// SEARCH JOBS - return jobs array and number of pages
// -----------------------
// used in: JobsPage.vue

const itemsPerPage = 4; // can change

export const searchJobs = (queries) => {
    // ..... filter backend codes, update jobs using queries
    console.log(queries);

    // set pages - temporary code
    const page = queries.page || 1;
    const start = itemsPerPage * (page - 1);
    const end = start + itemsPerPage;
    const pages = Math.ceil(db_jobs.length / itemsPerPage);

    return {
        jobs: db_jobs.slice(start, end),
        pages: pages,
    };
};

// -----------------------
// BOOKMARK JOB
// -----------------------
// used in: VerticalJobCard.vue

export const bookmarkJob = (id) => {
    console.log("bookmark");
};

// -----------------------
// APPLY FOR JOB
// -----------------------
// used in: VerticalJobCard.vue

export const applyForJob = (id) => {
    console.log("apply");
};

// -----------------------
// FILTER JOB
// -----------------------
// used in: EmployersPage.vue, JobsItemPage.vue

export const filterJobs = (key, value, max = 0) => {
    let jobs = db_jobs
        .filter((job) => job[key] === value)
        .sort((a, b) => compareDates(a.createdAt, b.createdAt));

    if (max > 0) return jobs.slice(0, max);
    else return jobs;
};

// -----------------------
// GET ONE JOB
// -----------------------
// used in: EmployersPage.vue, JobsItemPage.vue

export const getJobFromId = (id) => {
    return db_jobs.find((job) => job.id === id);
};
