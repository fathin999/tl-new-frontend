<script setup>
import CourseRolesList from "@/components/courses/CourseRolesList.vue";
import {
    getLandingCourses,
    getLandingRoles,
} from "@/composable/courses/course-roles";

const roles = getLandingRoles();
const courses = getLandingCourses();
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
        margin-top: 50px;
    }
}
</style>
