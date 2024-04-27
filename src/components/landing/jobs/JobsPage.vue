<script setup>
import FiltersList from "../browse/FiltersList.vue";
import SearchLayout from "../layout/SearchLayout.vue";
import JobsList from "../jobs/JobsList.vue";
import {searchJobs} from "@/composable/backend/jobs";
import {getJobFilters} from "@/composable/view-models/jobs";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

// route
const route = useRoute();

// -------------------
// BACKEND - searchJobs
// -------------------
// BACKEND - search Job
const {jobs, pages} = searchJobs(route.query);

// View method
const filters = getJobFilters();
</script>

<template>
    <SearchLayout
        :filters="filters"
        title="All jobs"
        placeholder="Search jobs or companies"
        :pages="pages || 0"
        :currentPage="route.query.page || 1"
        path="/jobs"
    >
        <JobsList :card="false" :jobs="jobs" />
    </SearchLayout>
</template>
