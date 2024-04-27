import {db_testimonials} from "../database/testimonials";

// -----------------------
// FILTER TESTIMONIALS
// -----------------------
// used in: LandingTestimonies.vue, PgmSectOutcomes.vue

export const filterTestimonials = (key, value, max = 0) => {
    let testimonials = db_testimonials.filter((test) => test[key] === value);

    if (max > 0) return testimonials.slice(0, max);
    else return testimonials;
};

// -----------------------
// GET TESTIMONIALS FROM SLUGS
// -----------------------
// used in: CourseItemPage.vue

export const getTestimonialsFromSlugs = (slugs) => {
    let newTestimonials = [];

    slugs.forEach((slug) => {
        let test = db_testimonials.find((test) => test.slug === slug);
        if (test) newTestimonials.push(test);
    });

    return newTestimonials;
};
