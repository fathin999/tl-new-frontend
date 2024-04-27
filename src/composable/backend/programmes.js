import {db_programmes} from "../database/programmes";

// -----------------------
// GET ONE PROGRAMME
// -----------------------
// used in: IndividualProgrammePage.vue

export const getOneProgramme = (slug) => {
    return db_programmes.find((pgm) => pgm.slug === slug);
};

// -----------------------
// GET ALL PROGRAMMES, SORT OPEN FIRST
// -----------------------
// used in: SpecialPrgorammesPage.vue

export const getAllProgrammes = () => {
    return db_programmes.sort((a, b) => {
        return b.active ? 1 : -1;
    });
};

// -----------------------
// APPLY TO PROGRAMME
// -----------------------
// used in: SpecialPrgorammesPage.vue

export const applyToProgramme = (slug, courseSlug) => {
    console.log(slug, courseSlug);
};
