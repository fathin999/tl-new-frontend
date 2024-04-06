// ---------------------------
// GET IMAGES
// ---------------------------

export const createURL = (url) => {
    return new URL(url, import.meta.url);
};

export const getBadgeUrl = (badge) => {
    const url = createURL(`/src/assets/courses/course-badge-${badge}.png`);

    console.log(url);
    return url;
};

export const getBannerUrl = (banner) => {
    return createURL(`/src/assets/courses/course-banner-${banner}.png`);
};

export const getLogoUrl = (logo) => {
    return createURL(`/src/assets/courses/course-provider-${logo}.png`);
};
