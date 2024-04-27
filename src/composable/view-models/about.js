import IconAboutOutcome from "@/components/landing/icons/about/IconAboutOutcome.vue";
import IconAboutCollab from "@/components/landing/icons/about/IconAboutCollab.vue";
import IconAboutContinuous from "@/components/landing/icons/about/IconAboutContinuous.vue";
import IconAboutPractical from "@/components/landing/icons/about/IconAboutPractical.vue";

const values = [
    {
        icon: IconAboutContinuous,
        title: "Continous Innovation Mindest",
        description:
            "Through continuous improvement of our platform, we aim to set new standards in education and professional growth.",
    },
    {
        icon: IconAboutPractical,
        title: "Practical Learning Experience",
        description:
            "We bridge the gap between theory and practice, equipping students with actionable knowledge for their careers.",
    },
    {
        icon: IconAboutOutcome,
        title: "Outcome Focused Approach",
        description:
            "Every lesson, assignment, and module is crafted to maximize your employment prospects and career advancement.",
    },
    {
        icon: IconAboutCollab,
        title: "Collaborative Learning Community",
        description:
            "Our community-centric approach ensures that everyone can contribute to and benefit from the collective knowledge.",
    },
];

export const getAboutValues = () => {
    return values;
};
