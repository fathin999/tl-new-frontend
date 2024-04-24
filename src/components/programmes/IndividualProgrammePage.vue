<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import ProgrammeHeader from "./ProgrammeHeader.vue";
import PgmSectOverview from "./PgmSectOverview.vue";
import PgmSectTimeline from "./PgmSectTimeline.vue";
import PgmSectPathways from "./PgmSectPathways.vue";
import PgmSectCourses from "./PgmSectCourses.vue";
import PgmSectRequirements from "./PgmSectRequirements.vue";
import PgmSectOutcomes from "./PgmSectOutcomes.vue";
import {getProgramme} from "@/composable/programmes/programmes";
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
            :slug="programme.slug"
            :tagline="programme.details.tagline"
            :subtext="programme.details.subtext"
            @scrollToRef="scrollToPathways"
        />

        <div class="secondary-bar hide-scrollbar">
            <div class="container">
                <div v-for="section in sections" :key="section">
                    <div
                        :class="`bar-item clickable ${
                            section.key === active ? 'bar-item-active' : ''
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
                    :slug="programme.slug"
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
                <PgmSectRequirements
                    :requirements="programme.details.requirements.requirements"
                    :processes="programme.details.requirements.processes"
                />
            </div>

            <div ref="outcomes" v-if="checkEmpty('outcomes')">
                <PgmSectOutcomes
                    :offers="programme.details.outcomes.offers"
                    :slug="programme.slug"
                />
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#programme {
    overflow-x: hidden;
    position: relative;

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
}
</style>
