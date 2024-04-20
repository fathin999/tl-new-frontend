<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import ProgrammeHeader from "./ProgrammeHeader.vue";
import PgmSectOverview from "./PgmSectOverview.vue";
import PgmSectTimeline from "./PgmSectTimeline.vue";
import PgmSectPathways from "./PgmSectPathways.vue";
import PgmSectCourses from "./PgmSectCourses.vue";
import CourseCheckpoint from "../courses/CourseCheckpoint.vue";
import {getProgramme} from "@/composable/programmes/programmes";
import IconArrow from "../icons/IconArrow.vue";
import {onMounted, onUnmounted, ref} from "vue";

const programme = getProgramme();

// REFS LIST

let active = ref("overview");
const overview = ref();
const timeline = ref();
const pathways = ref();
const coursesRef = ref();
const requirements = ref();
const outcomes = ref();

const sections = [
    {
        title: "Overview",
        key: "overview",
        ref: overview,
    },
    {
        title: "Timeline",
        key: "timeline",
        ref: timeline,
    },
    {
        title: "Career pathways",
        key: "pathways",
        ref: pathways,
    },
    {
        title: "Courses",
        key: "courses",
        ref: coursesRef,
    },
    {
        title: "Requirements",
        key: "requirements",
        ref: requirements,
    },
    {
        title: "Outcomes",
        key: "outcomes",
        ref: outcomes,
    },
];

const checkEmpty = (key) => {
    if (programme.details.hasOwnProperty(key)) {
        const section = programme.details[key];
        const length =
            section instanceof Array
                ? section.length
                : Object.keys(section).length;
        return length !== 0;
        å;
    }

    return false;
};

// SCROLLING METHODS

const scrollTo = (el) => {
    window.scrollTo({
        top: el.offsetTop - 150,
        behavior: "smooth",
    });
};

const scrollToPathways = () => {
    if (checkEmpty("pathways")) scrollTo(pathways.value);
    else scrollTo(coursesRef.value);
};

const checkOffset = (y, el) => {
    if (!el) return false;
    else {
        const offset = el.offsetTop - 250;
        return y > offset;
    }
};

const handleScroll = () => {
    const y = window.scrollY;

    if (checkOffset(y, outcomes.value)) active.value = "outcomes";
    else if (checkOffset(y, requirements.value)) active.value = "requirements";
    else if (checkOffset(y, coursesRef.value)) active.value = "courses";
    else if (checkOffset(y, pathways.value)) active.value = "pathways";
    else if (checkOffset(y, timeline.value)) active.value = "timeline";
    else active.value = "overview";
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <Navbar />

    <main id="programme">
        <ProgrammeHeader
            :logo="programme.logo"
            :title="programme.title"
            :img="programme.img"
            :tagline="programme.details.tagline"
            :subtext="programme.details.subtext"
            @scrollToRef="scrollToPathways"
        />

        <div id="programme-bar">
            <div class="container">
                <div
                    v-for="section in sections"
                    class="bar-item"
                    :key="section"
                >
                    <div
                        :class="`bar-item-inner clickable ${
                            section.key === active ? 'active' : ''
                        }`"
                        v-if="checkEmpty(section.key)"
                        @click="scrollTo(section.ref.value)"
                    >
                        {{ section.title }}
                    </div>
                </div>
            </div>
        </div>

        <div id="programme-content">
            <div ref="overview">
                <PgmSectOverview
                    :img="programme.img"
                    :paragraph="programme.details.overview.paragraph"
                    @scrollToPathways="scrollToPathways"
                />
            </div>

            <div ref="timeline" v-if="checkEmpty('timeline')">
                <PgmSectTimeline :timeline="programme.details.timeline" />
            </div>

            <div ref="pathways" v-if="checkEmpty('pathways')">
                <PgmSectPathways :pathways="programme.details.pathways" />
            </div>

            <div ref="coursesRef" v-if="checkEmpty('courses')">
                <PgmSectCourses
                    :courseTitles="programme.details.courses.courses"
                    :roles="programme.details.courses.roles"
                />
            </div>

            <div ref="requirements" v-if="checkEmpty('requirements')">
                <div class="section blue" id="programme-requirements">
                    <div class="container">
                        <div class="section-title">
                            <h3><u>Who</u> we are looking for?</h3>
                        </div>

                        <div id="programme-requirements-list">
                            <CourseCheckpoint
                                v-for="req in programme.details.requirements
                                    .requirements"
                                :key="req"
                                :title="req"
                            />
                        </div>

                        <div class="section-title">
                            <h3>Our assessment process</h3>
                        </div>

                        <div id="programme-requirements-process">
                            <CourseCheckpoint
                                v-for="pro in programme.details.requirements
                                    .processes"
                                :key="pro"
                                :title="pro"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" ref="outcomes" id="programme-outcomes">
                <div class="container">
                    <h1>Outcomes</h1>
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#programme {
    position: relative;

    &-bar {
        $border: 1px solid var(--borderLight);
        background-color: white;
        border-top: $border;
        border-bottom: $border;
        padding: 5px 0;
        position: sticky;
        top: var(--navbarHeight);
        left: 0;
        z-index: 10;

        .container {
            display: flex;
        }

        .bar-item-inner {
            padding: 20px 20px;
            border-radius: 10px;
            /* background-color: var(--bgLight); */
            margin-right: 10px;
            font-size: 0.95rem;
            color: var(--darkBlue);
            position: relative;
        }

        .bar-item-inner::before {
            $height: 3px;
            position: absolute;
            content: "";
            bottom: -5px;
            right: 0;
            left: 0;
            margin: auto;
            width: 0;
            height: $height;
            border-radius: calc($height / 2);
            background-color: var(--purple);
            transition: width 0.4s ease-out;
        }

        .active {
            color: var(--purple);
            font-weight: 500;
            position: relative;
        }

        .active::before {
            width: 40%;
        }

        .bar-item-inner:hover {
            background-color: var(--lightPurple);
        }
    }

    &-content {
        .section {
            min-height: 500px;

            span,
            p {
                font-size: 1.1rem;
                line-height: 1.7rem;
            }
        }
    }

    &-requirements {
        .container {
            width: 900px;
        }

        &-list {
            margin: 30px 0 70px;
        }

        &-process {
            margin-top: 30px;
        }
    }
}
</style>
