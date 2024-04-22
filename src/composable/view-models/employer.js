import IconEmpOverview from "@/components/icons/employers/IconEmpOverview.vue";
import IconEmpJobs from "@/components/icons/employers/IconEmpJobs.vue";

const tabs = [
    {
        title: "Overview",
        icon: IconEmpOverview,
    },
    {
        title: "Jobs",
        icon: IconEmpJobs,
    },
];

export const getEmployerTabs = () => {
    return tabs;
};
