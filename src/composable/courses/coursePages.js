// ---------------------------
// GET IMAGES
// ---------------------------

export const createURL = (url) => {
    return new URL(url, import.meta.url);
};

export const getBadgeUrl = (badge) => {
    return createURL(`/src/assets/courses/course-badge-${badge}.png`);
};

export const getBannerUrl = (banner) => {
    return createURL(`/src/assets/courses/course-banner-${banner}.png`);
};

export const getLogoUrl = (logo) => {
    return createURL(`/src/assets/courses/course-provider-${logo}.png`);
};
