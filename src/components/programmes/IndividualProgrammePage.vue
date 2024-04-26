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
import {
    getProgramme,
    getProgrammeGenericData,
} from "@/composable/programmes/programmes";
import {onMounted, onUnmounted, ref} from "vue";
import {useRoute} from "vue-router";
import {scrollToSection, scrollToTab} from "@/composable/utilities/tabs";

// params
const params = useRoute().params;
const programme = getProgramme(params.slug);
const data = getProgrammeGenericData();

// GENERIC DATA

// REFS LIST
let active = ref(0);
const btns = ref();
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
    if (data.hasOwnProperty(key)) {
        const section = data[key];
        const length =
            section instanceof Array
                ? section.length
                : Object.keys(section).length;
        return length !== 0;
    }

    return false;
};

// SCROLLING METHODS

const scrollTo = (i) => {
    scrollToTab(btns.value, btns.value.children[0], i);
    scrollToSection(sections[i].ref.value);
};

const scrollToPathways = () => {
    if (checkEmpty("pathways")) scrollTo(2);
    else scrollTo(3);
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

    if (checkOffset(y, outcomes.value)) active.value = 5;
    else if (checkOffset(y, requirements.value)) active.value = 4;
    else if (checkOffset(y, coursesRef.value)) active.value = 3;
    else if (checkOffset(y, pathways.value)) active.value = 2;
    else if (checkOffset(y, timeline.value)) active.value = 1;
    else active.value = 0;
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
            :tagline="data.tagline"
            :subtext="data.subtext"
            @scrollToRef="scrollToPathways"
        />

        <div class="secondary-bar hide-scrollbar" ref="btns">
            <div class="container">
                <div v-for="(section, i) in sections" :key="section">
                    <div
                        :class="`bar-item clickable ${
                            i === active ? 'bar-item-active' : ''
                        }`"
                        v-if="checkEmpty(section.key)"
                        @click="scrollTo(i)"
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
                    :paragraph="data.overview.paragraph"
                    @scrollToPathways="scrollToPathways"
                />
            </div>

            <div ref="timeline" v-if="checkEmpty('timeline')">
                <PgmSectTimeline :timeline="data.timeline" />
            </div>

            <div ref="pathways" v-if="checkEmpty('pathways')">
                <PgmSectPathways :pathways="data.pathways" />
            </div>

            <div ref="coursesRef" v-if="checkEmpty('courses')">
                <PgmSectCourses
                    :courseSlugs="data.courses.courses"
                    :roles="data.courses.roles"
                />
            </div>

            <div ref="requirements" v-if="checkEmpty('requirements')">
                <PgmSectRequirements
                    :requirements="data.requirements.requirements"
                    :processes="data.requirements.processes"
                />
            </div>

            <div ref="outcomes" v-if="checkEmpty('outcomes')">
                <PgmSectOutcomes
                    :offers="data.outcomes.offers"
                    :slug="programme.slug"
                />
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#programme {
    position: relative;

    &-content {
        .section {
            span,
            p {
                font-size: 1.1rem;
                line-height: 1.7rem;
            }
        }
    }
}
</style>
