export const getCourseFAQUrl = (type) => {
    let href = "/courses-faq?type=";

    if (type === "M1") href += "m1";
    else if (type === "Certified Associate") href += "ca";
    else href += "fc";

    return href;
};
