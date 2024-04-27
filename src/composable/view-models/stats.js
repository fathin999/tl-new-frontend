import IconHeroJob from "@/components/landing/icons/landingPage/hero/IconHeroJob.vue";
import IconHeroMatch from "@/components/landing/icons/landingPage/hero/IconHeroMatch.vue";
import IconHeroSeeker from "@/components/landing/icons/landingPage/hero/IconHeroSeeker.vue";
import IconHeroPlacement from "@/components/landing/icons/landingPage/hero/IconHeroPlacement.vue";

const stats = [
    {
        title: "10k +",
        subtext: "total students",
        slug: "students",
    },
    {
        title: "92%",
        subtext: "placement rate",
        slug: "placement",
        icon: IconHeroPlacement,
    },
    {
        title: "60+",
        subtext: "hiring partners",
        slug: "partners",
    },
    {
        title: "5k +",
        subtext: "matches made",
        slug: "matches",
        icon: IconHeroMatch,
    },
    {
        title: "10k +",
        subtext: "tech jobs available",
        slug: "jobs",
        icon: IconHeroJob,
    },
    {
        title: "8k +",
        subtext: "job seekers",
        slug: "seekers",
        icon: IconHeroSeeker,
    },
];

export const getProgrammeStats = () => {
    return stats.filter(
        (stat) =>
            stat.slug == "students" ||
            stat.slug == "partners" ||
            stat.slug == "placement"
    );
};

export const getLandingHeroStats = () => {
    return stats.filter(
        (stat) =>
            stat.slug == "placement" ||
            stat.slug == "matches" ||
            stat.slug == "jobs" ||
            stat.slug == "seekers"
    );
};
