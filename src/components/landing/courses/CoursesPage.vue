<script setup>
import CoursesList from "./CoursesList.vue";
import SearchLayout from "../layout/SearchLayout.vue";
import {getCourseFilters} from "@/composable/view-models/course";
import {searchCourses} from "@/composable/backend/courses";
import {useRoute} from "vue-router";

// route
const route = useRoute();

// -------------------
// BACKEND
// -------------------
// BACKEND - search Courses
const {courses, pages} = searchCourses(route.query);

// View method
const filters = getCourseFilters();
</script>

<template>
    <SearchLayout
        :filters="filters"
        title="All courses"
        placeholder="Search courses"
        :pages="pages || 0"
        :currentPage="route.query.page || 1"
        path="/courses"
    >
        <CoursesList :courses="courses" class="courses-page-list" />
    </SearchLayout>
</template>

<style scoped lang="scss">
@media (max-width: 1000px) {
    .courses-page-list {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 600px) {
    .courses-page-list {
        grid-template-columns: 1fr;
        gap: 25px;
    }
}
</style>
