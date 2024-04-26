<script setup>
import FiltersList from "../browse/FiltersList.vue";
import SearchLayout from "../layout/SearchLayout.vue";
import JobsList from "../jobs/JobsList.vue";
import {getAllJobs} from "@/composable/jobs/jobs";
import {getJobFilters} from "@/composable/view-models/jobs";

const jobs = getAllJobs();
const filters = getJobFilters();
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
