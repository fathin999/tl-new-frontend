<script setup>
import LandingLayout from "../layout/LandingLayout.vue";
import Button from "../button/Button.vue";
import CourseCheckpoint from "../courses/CourseCheckpoint.vue";
import CoursesList from "../courses/CoursesList.vue";
import RoleCourseCard from "./RoleCourseCard.vue";
import LandingJobCard from "../jobs/LandingJobCard.vue";
import JobsList from "../jobs/JobsList.vue";
import ArrowLink from "../button/ArrowLink.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import {getRoleTabs} from "@/composable/view-models/roles";
import {filterJobs} from "@/composable/backend/jobs";
import {filterCourses, filterM1Courses} from "@/composable/backend/courses";
import {getOneRole} from "@/composable/backend/roles";

// params
const params = useRoute().params;

// -------------------
// BACKEND
// -------------------
// BACKEND - get role from id
const role = getOneRole(params.slug);

// BACKEND - get courses associated with role
const courses = filterCourses("role", role.title, 3);

// BACKEND - get m1 courses associated with role
const m1courses = filterM1Courses(role.slug, 3);

// BACKEND - get jobs associated with role
const jobs = filterJobs("role", role.title, 3);

// REF
const content = ref();
const active = ref(0);

// VIEW methods
const tabs = getRoleTabs();

// -------------------
// TO CHANGE - static image to change to img URL
// -------------------
// static images
const getImg = (slug) => {
    return new URL(
        `/src/assets/database/roles/role-${slug}.svg`,
        import.meta.url
    );
};

// static images
const getSkillsIcon = (slug) => {
    return new URL(
        `/src/assets/database/roles/role-skills-${slug}.svg`,
        import.meta.url
    );
};

// static images
const getHowIcon = (icon) => {
    return new URL(
        `/src/assets/database/icons/icon-${icon}.svg`,
        import.meta.url
    );
};

// View method - tab
const changeTab = (i) => {
    active.value = i;
    const top = content.value.offsetTop - 120;

    window.scrollTo({
        top: top,
        behavior: "smooth",
    });
};
</script>

<template>
    <LandingLayout>
        <div id="role">
            <div class="container" id="role-header">
                <div class="breadcrumbs">
                    <a href="/">Home </a>
                    <b> > </b>
                    <a href="/career-roles">Career roles</a>
                    <b> > </b>
                    <a>{{ role.title }}</a>
                </div>

                <img :src="getImg(role.slug)" alt="" />

                <h1>{{ role.title }}</h1>
            </div>

            <div class="secondary-bar">
                <div class="container">
                    <div
                        v-for="(tab, i) in tabs"
                        :key="`role-tab-${i}`"
                        :class="`bar-item clickable ${
                            active === i ? 'bar-item-active' : ''
                        }`"
                        @click="changeTab(i)"
                    >
                        {{ tab }}
                    </div>
                </div>
            </div>

            <div id="role-content" ref="content">
                <div class="container section-small" v-if="active === 0">
                    <h1 class="first">Who are {{ role.paraTitle }}s?</h1>

                    <p>
                        {{ role.description }}
                    </p>

                    <h1>What do they do?</h1>

                    <CourseCheckpoint
                        v-for="point in role.do"
                        :key="point"
                        :title="point"
                    />

                    <h1>Good skills to have</h1>

                    <div id="role-content-skills">
                        <div
                            class="skills-item"
                            v-for="(skill, i) in role.skills"
                            :key="`role-content-do-skill-item-${i}`"
                        >
                            <img :src="getSkillsIcon(skill.slug)" alt="" />
                            <span> {{ skill.title }} </span>
                        </div>
                    </div>

                    <h1>How to be a {{ role.paraTitle }}</h1>

                    <div id="role-content-how">
                        <div
                            class="step-item"
                            v-for="(step, i) in role.how"
                            :key="step"
                        >
                            <div class="step-item-icon">
                                <img :src="getHowIcon(step.icon)" alt="" />
                            </div>

                            <div>
                                <span>Step {{ `${i + 1}` }}</span>
                                <h3>{{ step.title }}</h3>
                                <p>{{ step.text }}</p>

                                <div
                                    class="step-item-link"
                                    v-if="step.showCourse && courses.length > 0"
                                >
                                    <p>
                                        You can learn all the skills you need to
                                        be a
                                        {{ role.paraTitle }} by enrolling in:
                                    </p>

                                    <RoleCourseCard :course="courses[0]" />

                                    <div class="step-item-link-arrow">
                                        <ArrowLink
                                            :title="`More ${role.title} courses`"
                                            @handleClick="changeTab(1)"
                                        />
                                    </div>
                                </div>

                                <div
                                    class="step-item-link"
                                    v-if="
                                        step.showM1Course &&
                                        m1courses.length > 0
                                    "
                                >
                                    <p>
                                        You can learn all the skills you need to
                                        be a
                                        {{ role.paraTitle }} by enrolling in:
                                    </p>

                                    <RoleCourseCard :course="m1courses[0]" />

                                    <div class="step-item-link-arrow">
                                        <ArrowLink
                                            title="More foundation courses"
                                            @handleClick="changeTab(1)"
                                        />
                                    </div>
                                </div>

                                <div
                                    class="step-item-link"
                                    v-if="step.showJob && jobs.length > 0"
                                >
                                    <p>
                                        Explore our {{ role.paraTitle }} jobs:
                                    </p>

                                    <LandingJobCard
                                        :title="jobs[0].title"
                                        :employer="jobs[0].employer"
                                        :location="jobs[0].location"
                                        :type="jobs[0].type"
                                        :remote="jobs[0].remote"
                                        :id="jobs[0].id"
                                    />

                                    <div class="step-item-link-arrow">
                                        <ArrowLink
                                            title="More jobs"
                                            @handleClick="changeTab(2)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="container section-small"
                    v-if="active === 1"
                    id="role-content-pathway"
                >
                    <h2 v-if="m1courses.length > 0">
                        Beginner {{ role.paraTitle }} courses
                    </h2>

                    <div v-if="m1courses.length > 0">
                        <CoursesList
                            :courses="m1courses"
                            class="pathway-list-container"
                        />
                    </div>

                    <h2 v-if="courses.length > 0">
                        Intermediate to advanced courses
                    </h2>

                    <div v-if="courses.length > 0">
                        <CoursesList
                            :courses="courses"
                            class="pathway-list-container"
                        />
                    </div>

                    <div class="section-small-link">
                        <Button :arrow="true" href="/courses">
                            More courses
                        </Button>
                    </div>
                </div>

                <div class="container section-small" v-if="active === 2">
                    <div class="step-item-jobs" v-if="jobs.length > 0">
                        <JobsList :jobs="jobs" />

                        <div class="section-small-link">
                            <Button :arrow="true" href="/jobs?page=1">
                                More jobs
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#role {
    position: relative;

    .container {
        width: 800px;
        margin: auto;
    }

    &-header {
        padding: 20px 0 50px;
        text-align: center;

        img {
            $size: 70px;
            height: $size;
            width: $size;
            margin: 50px 0 10px;
        }
    }

    .section-small {
        padding: 80px 0;
    }

    &-content {
        h1 {
            font-size: 1.7rem;
            margin: 60px 0 25px;
        }

        .first {
            margin-top: 0;
        }

        &-who {
            /* display: grid; */
            align-items: center;
            grid-template-columns: 1fr 350px;
            gap: 120px;
            position: relative;

            p {
                border: 1px solid red;
            }

            &-img {
                position: relative;
                border: 1px solid red;

                img {
                    width: 100%;
                    /* max-height: 420px; */
                    background: gainsboro;
                    border-radius: 50px;
                    border-top-right-radius: 0;
                    object-fit: cover;
                }
            }

            &-img::before,
            &-img::after {
                $size: 100px;
                content: "";
                height: $size;
                width: $size;
                border: 5px solid white;
                bottom: -6px;
                right: -6px;
                position: absolute;
                border-top-left-radius: 100%;
            }

            &-img::before {
                $size: 180px;
                height: $size;
                width: $size;
                top: -6px;
                left: -6px;
                border-top-left-radius: 0;
                border-bottom-right-radius: 100%;
            }
        }

        &-skills {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 10px;

            .skills-item {
                border: 1px solid gainsboro;
                padding: 25px;
                border-radius: 20px;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                img {
                    $size: 50px;
                    height: $size;
                    width: $size;
                    margin-bottom: 20px;
                }

                span {
                    font-size: 0.95rem;
                }
            }
        }

        &-how {
            $margin: 70px;
            $iconSize: 60px;
            margin-top: 30px;

            .step-item {
                margin-bottom: $margin;
                display: grid;
                grid-template-columns: $iconSize 1fr;
                gap: 40px;
                position: relative;
                width: 70%;

                &-icon {
                    height: $iconSize;
                    width: $iconSize;
                    border-radius: 25%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--purple);
                    z-index: 5;
                    position: relative;
                    background-color: white;

                    img {
                        height: 50%;
                        width: 50%;
                    }
                }

                span {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--purple);
                    margin: 10px 0 10px;
                    display: block;
                }

                h3 {
                    margin-bottom: 15px;
                    font-size: 1.4rem;
                    line-height: 1.9rem;
                    color: var(--black);
                    width: 80%;
                }

                p {
                    color: var(--textMedium);
                }

                &-link {
                    p {
                        margin: 10px 0 20px;
                    }

                    &-arrow {
                        margin-top: 20px;
                        text-align: right;
                    }
                }
            }

            .step-item::before {
                content: "";
                position: absolute;
                width: 1px;
                top: $iconSize;
                left: calc($iconSize / 2);
                height: calc(100% + $margin);
                background-color: var(--purple);
            }

            .step-item:last-of-type::before {
                height: 0;
            }
        }
    }

    &-content-pathway {
        h2 {
            margin: 70px 0 30px;
            font-size: 1.2rem;
        }

        h2:first-of-type {
            margin-top: 0;
        }
    }

    .section-small-link {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 900px) {
    #role {
        .container {
            width: auto;
            margin: 0 20px;
        }

        &-content {
            &-how {
                $margin: 50px;
                $iconSize: 50px;

                .step-item {
                    width: 100%;
                    margin-bottom: $margin;
                    gap: 15px;

                    &-icon {
                        height: $iconSize;
                        width: $iconSize;
                    }

                    span {
                        margin: 3px 0 10px;
                        font-size: 0.95rem;
                    }

                    h3 {
                        width: 100%;
                        margin-bottom: 10px;
                    }

                    &-link {
                        width: 350px;
                        p {
                            margin-bottom: 25px;
                        }

                        &-arrow {
                            margin-top: 25px;
                        }
                    }
                }

                .step-item::before {
                    left: calc($iconSize / 2);
                    height: calc(100% + $margin);
                    top: 0;
                }
            }

            &-skills {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
}

@media (max-width: 600px) {
    #role {
        &-header {
            padding: 20px 0 30px;

            img {
                $size: 50px;
                height: $size;
                width: $size;
            }

            h1 {
                font-size: 1.5rem;
                line-height: 2rem;
            }
        }

        .section-small {
            padding: 45px 0 50px;
        }

        &-content {
            h1 {
                font-size: 1.4rem;
                line-height: 1.9rem;
                margin: 50px 0 20px;
            }

            &-how {
                $margin: 50px;
                $iconSize: 45px;

                .step-item {
                    gap: 17px;
                    margin-bottom: $margin;
                    grid-template-columns: $iconSize 1fr;

                    &-icon {
                        height: $iconSize;
                        width: $iconSize;
                    }

                    span {
                        font-size: 0.87rem;
                        margin: 5px 0 10px;
                    }

                    h3 {
                        font-size: 1.2rem;
                        line-height: 1.7rem;
                    }

                    &-link {
                        width: auto;
                    }
                }

                .step-item::before {
                    left: calc($iconSize / 2);
                }
            }

            &-skills {
                grid-template-columns: repeat(2, 1fr);
                gap: 7px;

                .skills-item {
                    border-radius: 15px;
                    padding: 25px 15px;

                    img {
                        $size: 37px;
                        height: $size;
                        width: $size;
                    }
                }
            }
        }
    }
}
</style>
