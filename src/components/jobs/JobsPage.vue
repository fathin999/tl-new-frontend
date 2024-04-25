<script setup>
import FiltersList from "../browse/FiltersList.vue";
import SearchLayout from "../layout/SearchLayout.vue";
import JobsList from "../jobs/JobsList.vue";
import {getAllJobs} from "../../composable/jobs/jobs";

const jobs = getAllJobs();

const filters = [
    {
        title: "Role",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Software engineer",
                selected: true,
            },
            {
                title: "UI / UX designer",
                selected: false,
            },
            {
                title: "Product manager",
                selected: false,
            },
            {
                title: "Data science",
                selected: false,
            },
            {
                title: "Cybersecurity",
                selected: false,
            },
            {
                title: "Consulting & systems integration",
                selected: false,
            },
            {
                title: "IT Support",
                selected: false,
            },
            {
                title: "Network & systems administrator",
                selected: false,
            },
            {
                title: "Digital marketing",
                selected: false,
            },
            {
                title: "Graphics design",
                selected: false,
            },
            {
                title: "Multimedia",
                selected: false,
            },
            {
                title: "Technical writing",
                selected: false,
            },
            {
                title: "Business & management",
                selected: false,
            },
            {
                title: "Sales & accounts",
                selected: false,
            },
            {
                title: "Other",
                selected: false,
            },
        ],
    },
    {
        title: "Location",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Hong Kong",
                selected: true,
            },
            {
                title: "Malaysia",
                selected: false,
            },
            {
                title: "Central, Hong Kong",
                selected: false,
            },
            {
                title: "Eastern, Hong Kong",
                selected: false,
            },
            {
                title: "Western, Hong Kong",
                selected: false,
            },
            {
                title: "Northern, Hong Kong",
                selected: false,
            },
            {
                title: "Southern, Hong Kong",
                selected: false,
            },
            {
                title: "Kuala Lumpur, Malaysia",
                selected: false,
            },
            {
                title: "Selangor, Malaysia",
                selected: false,
            },
            {
                title: "Putrajaya, Malaysia",
                selected: false,
            },
        ],
    },
    {
        title: "Type",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Full-time",
                selected: true,
            },
            {
                title: "Part-time",
                selected: false,
            },
            {
                title: "Contract",
                selected: false,
            },
            {
                title: "Internship",
                selected: false,
            },
        ],
    },
    {
        title: "Remote",
        open: false,
        type: "radio",
        options: [
            {
                title: "Remote",
                selected: true,
            },
            {
                title: "Onsite",
                selected: false,
            },
            {
                title: "Hybrid",
                selected: false,
            },
        ],
    },
];
</script>

<template>
    <SearchLayout
        :filters="filters"
        title="All jobs"
        placeholder="Search jobs or companies"
    >
        <JobsList :card="false" :jobs="jobs" />
    </SearchLayout>
</template>
