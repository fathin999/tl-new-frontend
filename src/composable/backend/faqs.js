import {faqs} from "../database/faqs";

// -----------------------
// GET FAQS - according to type
// -----------------------
// used in: BeAnInstructorPage.vue, CourseFAQPage.vue

export const getFaqs = (type) => {
    return faqs.filter((faq) => {
        const faqType = faq.type.toLowerCase();

        return faqType.includes(type.toLowerCase());
    });
};

// -----------------------
// GET FAQ CA Categories
// -----------------------
// used in: CourseFAQPage.vue

export const getCAFaqTypes = () => {
    return ["Admissions", "Programme", "Financing", "Careers", "Others"];
};
