// ---------------------------
// GET IMAGES
// ---------------------------

import {createURL} from "../courses/coursePages";

export const getJobLogoUrl = (logo) => {
    return createURL(`/src/assets/jobs/employer-logo-${logo}.png`);
};
