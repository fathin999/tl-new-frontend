<script setup>
import CourseRolesList from "@/components/landing/courses/CourseRolesList.vue";
import {filterCourses} from "@/composable/backend/courses";
import {getLandingRoles} from "@/composable/view-models/roles";

// -------------------
// BACKEND
// -------------------
// BACKEND - get featured Courses - to put in landing page
const courses = filterCourses("featured", true);

// View method
const roles = getLandingRoles();
</script>

<template>
    <div class="section" id="courses">
        <div class="container">
            <div class="section-title-center">
                <h2>
                    Chart your career path
                    <br />
                    with our <u>courses</u>
                </h2>

                <p>
                    Explore the frontier of tech with our courses, tailored for
                    beginners and seasoned professionals alike.
                </p>
            </div>

            <div id="courses-content">
                <CourseRolesList :roles="roles" :courses="courses" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#courses-content {
    margin-top: 70px;
}

@media (max-width: 1200px) {
    #courses-content {
        margin-top: 40px;
    }
}

@media (max-width: 700px) {
    #courses {
        padding-bottom: 60px;
    }
}
</style>
