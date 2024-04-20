<script setup>
import ArrowLink from "@/components/button/ArrowLink.vue";
import CoursesList from "@/components/courses/CoursesList.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import {filterCoursesUsingRole} from "@/composable/courses/course-roles";
import {ref, reactive} from "vue";

const props = defineProps({
    roles: Array,
    courses: Array,
    showLinks: {type: Boolean, default: true},
});

const active = ref(0);

const filterCourses = () => {
    const role = props.roles[active.value].title;

    return filterCoursesUsingRole(props.courses, role);
};

let renderedCourses = reactive(filterCourses());

const getBtnClass = (index) => {
    return index === active.value
        ? "courses-btn clickable btn-active"
        : "courses-btn clickable";
};

const changeRole = (index) => {
    active.value = index;
    renderedCourses = filterCourses();
};
</script>

<template>
    <div id="courses-roles-list">
        <div id="courses-btns">
            <div
                v-for="(role, index) in roles"
                :class="getBtnClass(index)"
                :key="role.title"
                @click="changeRole(index)"
            >
                <component :is="role.icon" />
                {{ role.title }}
            </div>

            <div id="courses-btns-link" v-if="showLinks">
                <a href="/career-roles" class="clickable">
                    Explore more roles
                    <IconChevron />
                </a>
            </div>
        </div>

        <div id="courses-list">
            <CoursesList :courses="renderedCourses" />

            <div id="courses-list-more" v-if="showLinks">
                <ArrowLink title="More courses" href="/courses" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#courses {
    &-roles-list {
        display: grid;
        grid-template-columns: 310px 1fr;
    }

    &-btns {
        padding-right: 80px;
        $paddingLeft: 27px;

        .courses-btn {
            padding: 18px $paddingLeft;
            font-size: 0.87rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            background-color: white;
            border-radius: 30px;
            margin-bottom: 10px;
            transition: background 0.3s ease-out;

            svg {
                $size: 17px;
                height: $size;
                width: $size;
                margin-top: auto;
                margin-bottom: auto;
                margin-right: 15px;
                fill: var(--black);
            }
        }

        .courses-btn:hover {
            background-color: var(--bgMedium);
        }

        .btn-active {
            background-color: var(--black);
            color: white;

            svg {
                fill: var(--purple);
            }
        }

        .btn-active:hover {
            background-color: var(--black);
        }

        &-link {
            margin-top: 30px;
            /* text-align: center; */
            padding-left: $paddingLeft;

            a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 0.92rem;
                font-weight: 500;
                color: var(--purple);
                transition: color 0.3s ease-out;

                svg {
                    $size: 15px;
                    height: $size;
                    width: $size;
                    transform: rotate(90deg);
                    margin-top: 2px;
                    fill: var(--purple);
                    margin-left: 7px;
                    transition: fill 0.3s ease-out;
                }
            }

            a:hover {
                color: var(--black);

                svg {
                    fill: var(--black);
                }
            }
        }
    }

    &-list {
        &-more {
            text-align: right;
            margin-top: 30px;
        }
    }
}
</style>
