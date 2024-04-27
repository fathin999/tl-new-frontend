<script setup>
import CourseCard from "../courses/CourseCard.vue";
import Button from "@/components/landing/button/Button.vue";
import {ref, reactive} from "vue";
import {scrollToTab} from "@/composable/utilities/tabs";
import {filterFromASetOfCourses} from "@/composable/utilities/courses";
import {getManyCourses} from "@/composable/backend/courses";
import {useRoute} from "vue-router";
import {applyToProgramme} from "@/composable/backend/programmes";

// PARAMS
const params = useRoute().params;

// PROPS
const props = defineProps({
    courseSlugs: Array,
    roles: Array,
});

// REF
let active = ref(0);
const btns = ref();

// -------------------
// BACKEND
// -------------------
const filterCoursesFromBtn = () => {
    // BACKEND - get courses associated with programme
    const courses = getManyCourses("slug", props.courseSlugs);

    // view method - filter the course based on role
    return filterFromASetOfCourses(courses, "role", props.roles[active.value]);
};

// BACKEND - apply to course
const clickApply = (id) => applyToProgramme(params.slug, id);

// Reactive
let filteredCourses = reactive(filterCoursesFromBtn());

// View method
const updateRole = (index) => {
    active.value = index;
    filteredCourses = filterCoursesFromBtn();
    scrollToTab(btns.value, btns.value, index);
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
                <div
                    id="programme-courses-roles"
                    class="hide-scrollbar"
                    ref="btns"
                >
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
                            :id="course.id"
                        />

                        <Button :arrow="true" @click="clickApply(course.id)">
                            Apply now
                        </Button>
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
        column-gap: 30px;
        row-gap: 50px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .course-card-apply {
        flex-shrink: 0;
        flex-grow: 0;
        position: relative;
        width: 300px;
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

@media (max-width: 600px) {
    #programme-courses {
        &-roles {
            border: none;
            margin: 40px -20px 0;
            padding: 0 20px;
            gap: 10px;
            overflow-x: scroll;
            border-radius: 0;

            .programme-role {
                white-space: nowrap;
                border: 1px solid darkgray;
            }
        }

        &-list {
            margin: 20px -20px 0;
            border-top: 1px solid gainsboro;
            border-bottom: 1px solid gainsboro;
            padding: 35px 20px 60px;
            background-color: var(--bgMedium);
            display: block;
        }

        .course-card-apply {
            margin: 0 auto 35px;
            width: auto;
            border-bottom: 1px solid gainsboro;
            padding-bottom: 30px;
            max-width: 320px;

            .btn-arrow {
                width: 90%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 10px 10px 10px 15px;
                margin-top: 17px;
                font-size: 0.95rem;
                width: 170px;
            }
        }

        .course-card-apply:last-of-type {
            padding-bottom: 0;
            margin-bottom: 0;
            border: none;
        }
    }
}
</style>
