import IconSolHired from "@/components/icons/landingPage/solutions/IconSolHired.vue";
import IconSolCareers from "@/components/icons/landingPage/solutions/IconSolCareers.vue";
import IconSolPortfolio from "@/components/icons/landingPage/solutions/IconSolPortfolio.vue";
import IconSolLearn from "@/components/icons/landingPage/solutions/IconSolLearn.vue";
import IconSolNetwork from "@/components/icons/landingPage/solutions/IconSolNetwork.vue";

const solutions = [
    {
        title: "Learn skills",
        screen: 0,
        description:
            "Enhance your professional toolkit with our expertly designed courses that cater to both beginners and seasoned professionals.",
        link: "View courses",
        href: "/courses",
        icon: IconSolLearn,
        slug: "learn",
    },
    {
        title: "Grow portfolio",
        screen: 0,
        description:
            "Our guided projects help you build a compelling portfolio that demonstrates your expertise, problem-solving ability, and creativity.",
        link: "Start now",
        href: "/signup/select-role",
        icon: IconSolPortfolio,
        slug: "projects",
    },
    {
        title: "Explore careers",
        screen: 0,
        description:
            "Dive into a wide array of career paths available in industries ranging from technology to finance, and discover the one that best fits your passions and skills.",
        link: "Explore career paths",
        href: "/career-roles",
        icon: IconSolCareers,
        slug: "careers",
    },
    {
        title: "Get hired",
        screen: 0,
        description:
            "Access our exclusive job portal featuring opportunities from our top hiring partners, all eager to hire our trained graduates.",
        link: "View jobs",
        href: "/jobs",
        icon: IconSolHired,
        slug: "jobs",
    },
    {
        title: "Build network",
        screen: 0,
        description:
            "Connect with our global alumni network that spans across continents and industries, providing you with invaluable insights and opportunities.",
        link: "Join us now",
        href: "/signup/select-role",
        icon: IconSolNetwork,
        slug: "community",
    },
];

export const getSolutions = () => {
    return solutions;
};
