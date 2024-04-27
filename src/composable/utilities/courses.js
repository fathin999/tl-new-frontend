export const sortCourses = (a, b) => {
    if (b.type === "M1") return 1;
    else if (b.type === "Foundation Certificate") {
        if (a.type === "M1") return -1;
        else return 1;
    } else return -1;
};

export const filterFromASetOfCourses = (courses, key, value) => {
    let newCourses = courses.filter((course) => {
        return course[key].toLowerCase() === value.toLowerCase();
    });

    return newCourses.sort((a, b) => sortCourses(a, b));
};
