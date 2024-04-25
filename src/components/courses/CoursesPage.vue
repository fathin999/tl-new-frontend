<script setup>
import CoursesList from "./CoursesList.vue";
import SearchLayout from "../layout/SearchLayout.vue";
import {getAllCourses} from "@/composable/courses/course-roles";
import {getCourseFilters} from "@/composable/view-models/course";

const courses = getAllCourses();
const filters = getCourseFilters();
</script>

<template>
    <SearchLayout
        :filters="filters"
        title="All courses"
        placeholder="Search courses"
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
