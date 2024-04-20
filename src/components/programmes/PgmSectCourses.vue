<script setup>
import CourseCard from "../courses/CourseCard.vue";
import IconArrow from "../icons/IconArrow.vue";
import {
    filterCoursesUsingRole,
    getCoursesUsingTitles,
} from "@/composable/courses/course-roles";
import {ref, reactive} from "vue";

let active = ref(0);

const props = defineProps({
    courseTitles: Array,
    roles: Array,
});

const filterCourses = () => {
    const role = props.roles[active.value];
    const courses = getCoursesUsingTitles(props.courseTitles);

    return filterCoursesUsingRole(courses, role);
};

let filteredCourses = reactive(filterCourses());

const updateRole = (index) => {
    active.value = index;
    filteredCourses = filterCourses();
};
</script>

<template>
    <div class="section" id="programme-courses">
        <div class="container">
            <div class="section-title-center">
                <h2>Choose your <u>course</u></h2>

                <p>
                    Explore our industry-standard courses based on your dream
                    career pathway.
                </p>
            </div>

            <div id="programme-courses-content">
                <div id="programme-courses-roles">
                    <div
                        v-for="(role, i) in roles"
                        :class="`programme-role clickable ${
                            i === active ? 'active' : ''
                        }`"
                        :key="role"
                        @click="updateRole(i)"
                    >
                        {{ role }}
                    </div>
                </div>

                <div id="programme-courses-list">
                    <div
                        class="course-card-apply"
                        v-for="course in filteredCourses"
                        :key="course.title"
                    >
                        <CourseCard
                            :badge="course.badge"
                            :title="course.title"
                            :type="course.type"
                            :banner="course.banner"
                            :level="course.level"
                            :provider="course.provider"
                            :providerLogo="course.providerLogo"
                            :href="''"
                        />

                        <a class="btn-arrow btn-primary" href="">
                            Apply now
                            <IconArrow />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#programme-courses {
    &-list {
        margin-top: 60px;
    }

    &-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &-roles {
        margin: 40px auto 0;
        display: flex;
        border: 1px solid rgba(0, 0, 0, 0.4);
        padding: 7px;
        border-radius: 40px;
        gap: 5px;

        .programme-role {
            padding: 12px 20px;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--textMedium);
        }

        .programme-role:hover {
            background-color: var(--bgMedium);
        }

        .active {
            background-color: var(--black);
            color: white;
        }

        .active:hover {
            background-color: var(--black);
        }
    }

    &-list {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .course-card-apply {
        flex-shrink: 0;
        flex-grow: 0;
        position: relative;
        width: 25%;
        display: flex;
        flex-direction: column;

        a {
            width: 100%;
            position: relative;
            display: block;
        }

        .btn-arrow {
            display: inline-block;
            width: auto;
            margin: 20px auto 0;
        }
    }
}
</style>
