<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import IconArrow from "../icons/IconArrow.vue";
import IconOverview from "../icons/courses/IconOverview.vue";
import IconModules from "../icons/courses/IconModules.vue";
import IconFees from "../icons/courses/IconFees.vue";
import IconOutcomes from "../icons/courses/IconOutcomes.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {getCourseWithId} from "@/composable/courses/courses";

// refs
let active = ref(0);
const zero = ref();
const one = ref();
const two = ref();
const three = ref();

// static sections
const sections = [
    {
        title: "Overview",
        ref: zero,
        icon: IconOverview,
    },
    {
        title: "Modules",
        ref: one,
        icon: IconModules,
    },
    {
        title: "Fees",
        ref: two,
        icon: IconFees,
    },
    {
        title: "Outcomes",
        ref: three,
        icon: IconOutcomes,
    },
];

// fetch course through Id
const course = getCourseWithId(1);

// methods

const scrollTo = (el) => {
    window.scrollTo({
        top: el.offsetTop - 110,
        behavior: "smooth",
    });
};

const getBtnClass = (index) => {
    const btnClass = "course-btn clickable ";

    return active.value === index ? btnClass + "active" : btnClass;
};

const getOffset = (el) => {
    return el.offsetTop - el.getBoundingClientRect().height / 2;
};

const handleScroll = () => {
    const y = window.scrollY;

    if (y > getOffset(three.value)) active.value = 3;
    else if (y > getOffset(two.value)) active.value = 2;
    else if (y > getOffset(one.value)) active.value = 1;
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

    <main class="container" id="course-item">
        <div id="course-item-header">
            <div id="course-item-header-texts">
                <h1>{{ course.title }}</h1>
                <p>{{ course.description }}</p>
            </div>
        </div>

        <div id="course-item-content">
            <aside>
                <div id="course-item-btns">
                    <div
                        v-for="(section, index) in sections"
                        :class="getBtnClass(index)"
                        @click="scrollTo(section.ref.value)"
                        :key="section.title"
                    >
                        <component :is="section.icon" />
                        {{ section.title }}
                    </div>
                </div>

                <div id="course-item-apply">
                    <a class="btn-arrow btn-primary-outline">
                        Apply Now
                        <IconArrow />
                    </a>

                    <a class="btn-arrow btn-primary-outline">
                        Get brochure
                        <IconArrow />
                    </a>
                </div>
            </aside>

            <div id="course-item-sections">
                <div class="course-section" ref="zero">section 0</div>
                <div class="course-section" ref="one">section 1</div>
                <div class="course-section" ref="two">section 2</div>
                <div class="course-section" ref="three">section 3</div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#course-item {
    margin-top: 20px;
    padding-bottom: 90px;

    &-header {
        width: 100%;
        height: 550px;
        margin-bottom: 40px;
        background-color: var(--bgMedium);
        border-radius: 20px;
        padding: 30px;
    }

    &-content {
        display: flex;
        align-items: flex-start;
        column-gap: 110px;
    }

    aside {
        position: sticky;
        top: calc(var(--navbarHeight) + 20px);
        left: 0;
        background-color: white;
    }

    &-btns {
        padding-top: 20px;
        border-top: 1px solid var(--borderLight);
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 250px;

        .course-btn {
            padding: 15px 25px;
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 500;
            display: flex;
            align-items: center;

            svg {
                $size: 17px;
                height: $size;
                width: $size;
                margin-right: 20px;
                fill: var(--black);
            }
        }

        $purple: #f6ebff;

        .active {
            background-color: $purple;
            color: var(--darkPurple);

            svg {
                fill: var(--darkPurple);
            }
        }

        .course-btn:hover {
            background-color: #fbf6ff;
        }

        .active:hover {
            background-color: $purple;
        }
    }

    &-apply {
        margin-top: 35px;
        font-size: 0.95rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    &-sections {
        flex: 1;
    }
}

.course-section {
    height: 800px;
    border: 1px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
}

.course-section:last-of-type {
    margin-bottom: 0;
}
</style>
