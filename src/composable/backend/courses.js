import {
    db_courseFCFee,
    db_courseFees,
    db_courseTools,
    db_courses,
} from "../database/courses";
import {sortCourses} from "../utilities/courses";

// -----------------------
// SEARCH COURSES - return courses
// -----------------------
// used in: CoursesPage.vue

const itemsPerPage = 6; // can change

export const searchCourses = (queries) => {
    // ..... filter backend codes, update jobs using queries
    console.log(queries);

    // set pages - temporary code
    const page = queries.page || 1;
    const start = itemsPerPage * (page - 1);
    const end = start + itemsPerPage;
    const pages = Math.ceil(db_courses.length / itemsPerPage);

    return {
        courses: db_courses.sort((a, b) => sortCourses(a, b)).slice(start, end),
        pages: pages,
    };
};

// -----------------------
// FILTER COURSE
// -----------------------
// used in: LandingCourseRoles.vue, RoleItemPage.vue, PgmSectCourses.vue

export const filterCourses = (key, value, max = 0) => {
    let courses = db_courses
        .filter((course) => course[key] === value)
        .sort((a, b) => sortCourses(a, b));

    if (max > 0) return courses.slice(0, max);
    else return courses;
};

// -----------------------
// GET ONE COURSES - return one course
// -----------------------
// used in: CourseItemPage.vue

export const getCourseFromId = (id) => {
    return db_courses.find((course) => course.id === id);
};

// -----------------------
// GET COURSE BROCHURE
// -----------------------
// used in: CourseItemPage.vue

export const getCourseBrochure = (id) => {
    console.log("brochure");
};

// -----------------------
// APPLY FOR COURSE
// -----------------------
// used in: CourseItemPage.vue, PgmSectCourses.vue

export const applyForCourse = (id) => {
    console.log("apply");
};

// -----------------------
// GET COURSE TOOLS
// -----------------------
// used in: CourseTool.vue

export const getCourseTool = (id) => {
    return db_courseTools.find((tool) => tool.id === id);
};

// -----------------------
// GET COURSE FEES
// -----------------------
// used in: CourseFinancing.vue

export const getCourseFees = (type) => {
    if (type === "Foundation Certificate") return db_courseFCFee;
    if (type !== "M1" || type !== "Certified Associate")
        return db_courseFees.filter((fee) => fee.type === type);
};

// -----------------------
// GET COURSES FROM A SET OF IDs
// -----------------------
// used in: PgmSectCourses.vue, RoleItemPage.vue

export const getManyCourses = (key, values, max = 0) => {
    let courses = db_courses.filter((course) => {
        let exist = false;

        values.forEach((value) => {
            if (course[key] === value) {
                exist = true;
                return;
            }
        });

        return exist;
    });

    if (max > 0) return courses.slice(0, max);
    else return courses;
};

// -----------------------
// FILTER M1 COURSES
// -----------------------
// used in: RoleItemPage.vue

export const filterM1Courses = (role, max = 0) => {
    let newCourses = [];
    const m1Courses = db_courses.filter((course) => course.type === "M1");

    m1Courses.forEach((course) => {
        const foundations = course.foundation;

        foundations.forEach((foundation) => {
            if (foundation === role) newCourses.push(course);
        });
    });

    if (max > 0) return newCourses.slice(0, max);
    else return newCourses;
};
