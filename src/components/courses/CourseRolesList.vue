<script setup>
import ArrowLink from "@/components/button/ArrowLink.vue";
import CoursesListSlider from "@/components/courses/CoursesListSlider.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import {filterCoursesUsingRole} from "@/composable/courses/course-roles";
import {ref, reactive} from "vue";
import {scrollToTab} from "@/composable/utilities/tabs";

const props = defineProps({
    roles: Array,
    courses: Array,
    showLinks: {type: Boolean, default: true},
});

let active = ref(0);
const btns = ref();

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

    scrollToTab(btns.value, index);

    renderedCourses = filterCourses();
};
</script>

<template>
    <div id="courses-roles-list">
        <div id="courses-btns" class="hide-scrollbar" ref="btns">
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
                    <IconChevron id="course-icon-chevron" />
                    <IconArrow id="course-icon-arrow" />
                </a>
            </div>
        </div>

        <div id="courses-list">
            <CoursesListSlider :courses="renderedCourses" />

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
        grid-template-columns: 220px 1fr;
        gap: 80px;
    }

    &-btns {
        $paddingLeft: 25px;

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

        .btn-active {
            background-color: var(--black);
            color: white;

            svg {
                fill: var(--purple);
            }
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

            #course-icon-arrow {
                display: none;
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

@media (max-width: 1200px) {
    #courses {
        &-roles-list {
            display: block;
        }

        &-btns {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 45px;

            .courses-btn {
                padding: 14px 24px;
                padding-right: 27px;
                background-color: var(--bgMedium);
                margin: 0;
            }

            .btn-active {
                background-color: var(--black);
            }

            &-link {
                margin: 0;
                padding-left: 15px;

                a {
                    font-size: 0.85rem;
                    line-height: 1.1rem;

                    svg {
                        $size: 13px;
                        height: $size;
                        width: $size;
                        transform: rotate(0deg);
                        flex-shrink: 0;
                        margin-top: 0;
                        margin-left: 10px;
                    }
                }

                #course-icon-chevron {
                    display: none;
                }

                #course-icon-arrow {
                    display: block;
                }
            }
        }

        &-list {
            margin: 0 auto;
            width: 900px;

            &-more {
                display: block;
                margin: 50px auto 0;
                text-align: center;
                border: 1px solid var(--purple);
                width: 180px;
                padding: 10px;
                padding-left: 14px;
                border-radius: 30px;
            }
        }
    }
}

@media (max-width: 1000px) {
    #courses {
        &-btns {
            overflow-x: scroll;
            justify-content: flex-start;
            width: 100vw;
            margin: 0 -20px 40px;
            padding: 0 20px;
            gap: 15px;

            .courses-btn {
                flex-shrink: 0;
            }

            &-link {
                padding: 0 20px;
                a {
                    white-space: nowrap;
                }
            }
        }

        &-list {
            width: 100%;

            &-more {
                margin-top: 35px;
                padding: 15px 15px 15px 20px;
            }
        }
    }
}

@media (max-width: 700px) {
    #courses {
        &-btns {
            gap: 7px;
            margin-bottom: 15px;

            .courses-btn {
                border: 1px solid darkgrey;
                background-color: white;
                font-size: 0.85rem;
                padding: 13px 23px 13px 20px;
            }

            .btn-active {
                background-color: var(--black);
            }
        }

        &-list {
            border: 1px solid gainsboro;
            background-color: var(--bgLight);
            margin: 0 -20px;
            padding: 45px 20px 60px;
            width: 100vw;

            &-more {
                margin-top: 35px;
                margin-left: 0;
            }
        }
    }
}

@media (hover: hover) {
    #courses-btns {
        .courses-btn:hover {
            background-color: var(--bgMedium);
        }

        .btn-active:hover {
            background-color: var(--black);
        }

        &-link a:hover {
            color: var(--black);

            svg {
                fill: var(--black);
            }
        }
    }

    @media (max-width: 1200px) {
        #courses-btns {
            .courses-btn:hover {
                background-color: var(--lightBlue);
            }

            .btn-active:hover {
                background-color: var(--black);
            }
        }
    }
}
</style>
