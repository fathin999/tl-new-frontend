<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useRoute} from "vue-router";
import LandingLayout from "@/components/landing/layout/LandingLayout.vue";
import Button from "@/components/landing/button/Button.vue";
import CourseModules from "./CourseModules.vue";
import CourseTool from "./CourseTool.vue";
import CourseCheckpoint from "./CourseCheckpoint.vue";
import CourseInstructor from "./CourseInstructor.vue";
import CourseFinancing from "./CourseFinancing.vue";
import CourseHeader from "./CourseHeader.vue";
import CourseBar from "./CourseBar.vue";
import TestimonialCard from "../testimonials/TestimonialCard.vue";
import {getTestimonialsFromSlugs} from "@/composable/backend/testimonials";
import {scrollToSection} from "@/composable/utilities/tabs";
import {getCourseItemPageSections} from "@/composable/view-models/course";
import {
    applyForCourse,
    getCourseBrochure,
    getCourseFromId,
} from "@/composable/backend/courses";
import {getCourseFAQUrl} from "@/composable/utilities/faqs";

// get params
const params = useRoute().params;

// ------------------------------
// BACKEND
// ------------------------------

// BACKEND - COURSE
const course = getCourseFromId(params.id);

// BACKEND - TESTIMONIES
const testimonials = getTestimonialsFromSlugs(course.graduates);

// BACKEND - BROCHURE
const clickBrochure = () => getCourseBrochure(course.id);

// BACKEND - APPLY
const clickApply = () => applyForCourse(course.id);

// REFS
let active = ref(0);
const overview = ref();
const modules = ref();
const financing = ref();
const careers = ref();

// VIEW METHODS

// sections
const sections = getCourseItemPageSections([
    overview,
    modules,
    financing,
    careers,
]);

// Get course faq url from type
const getHref = (type) => {
    return getCourseFAQUrl(type);
};

// methods - scroll
const scrollTo = (i) => {
    scrollToSection(sections[i].ref.value);
};

// methods - scroll
const getOffset = (el) => {
    return el.offsetTop - 150;
};

// methods - scroll
const handleScroll = () => {
    const y = window.scrollY;

    if (y > getOffset(careers.value)) active.value = 3;
    else if (y > getOffset(financing.value)) active.value = 2;
    else if (y > getOffset(modules.value)) active.value = 1;
    else active.value = 0;
};

// MOUNT

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <LandingLayout>
        <div id="course-item">
            <CourseHeader
                :role="course.role"
                :title="course.title"
                :description="course.description"
                :provider="course.provider"
                :providerLogo="course.providerLogo"
                :type="course.type"
                :medium="course.medium"
                :delivery="course.delivery"
                :timeline="course.timeline"
                :level="course.level"
                :banner="course.banner"
                :badge="course.badge"
                @clickBrochure="clickBrochure"
                @clickApply="clickApply"
            />

            <div id="course-item-content" class="container">
                <CourseBar
                    :sections="sections"
                    :active="active"
                    @scrollTo="scrollTo"
                    @clickBrochure="clickBrochure"
                    @clickApply="clickApply"
                />

                <div id="course-item-sections">
                    <div class="course-section" ref="overview">
                        <h6>Overview</h6>

                        <h1>{{ course.overview.title }}</h1>

                        <p v-html="course.overview.paragraph"></p>

                        <h2>What you will learn</h2>
                        <CourseCheckpoint
                            v-for="outcome in course.outcomes"
                            :key="outcome"
                            :title="outcome"
                        />

                        <h2>Languages and tools covered</h2>
                        <div id="course-section-tools">
                            <CourseTool
                                v-for="id in course.tools"
                                :key="id"
                                :id="id"
                            />
                        </div>
                    </div>

                    <div
                        class="course-section"
                        ref="modules"
                        id="course-section-modules"
                    >
                        <h6>Modules</h6>
                        <h3>Explore our world-class curriculum</h3>

                        <CourseModules :modules="course.modules" />

                        <h2>Meet our course creators</h2>

                        <div id="course-section-instructors">
                            <CourseInstructor
                                v-for="instructor in course.instructors"
                                :key="instructor"
                                :id="instructor"
                            />
                        </div>
                    </div>

                    <div
                        class="course-section"
                        ref="financing"
                        id="course-section-financing"
                    >
                        <h6>Financing</h6>
                        <h3>Our fee structure</h3>

                        <CourseFinancing :type="course.type" />
                    </div>

                    <div
                        class="course-section"
                        ref="careers"
                        id="course-section-careers"
                    >
                        <h6>Careers</h6>

                        <h3>We will help you boost your career</h3>

                        <p>
                            Navigate tech career opportunities with the help of
                            our Career Services team. After many years working
                            with passionate students and helping them land
                            fulfilling careers in tech, we have got a keen
                            understanding of what goes into getting that first
                            tech job.
                            <br />
                            <br />
                            Get valuable insights on interview skills, CV
                            preparation, and building a professional portfolio -
                            we will be the bridge between you and your future
                            employers. We have built relationships with hiring
                            managers at top companies across the region,
                            creating a robust employer pipeline for TalentLabs
                            grads. Our team is constantly advocating for our
                            graduates and helping you to secure your dream job.
                        </p>

                        <h2>Hear from our graduates</h2>

                        <div id="course-section-testimonials">
                            <TestimonialCard
                                v-for="testimony in testimonials"
                                :key="testimony.name"
                                :name="testimony.name"
                                :slug="testimony.slug"
                                :comment="testimony.comment"
                                :logo="testimony.logo"
                            />
                        </div>

                        <h2>Still have questions?</h2>

                        <Button :href="getHref(course.type)">Go to FAQ</Button>
                    </div>
                </div>
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#course-item {
    padding-bottom: 90px;

    &-content {
        display: flex;
        align-items: flex-start;
        column-gap: 110px;
    }

    &-sections {
        flex: 1;
    }
}

#course-section {
    &-modules {
        h2 {
            margin-top: 80px;
        }
    }

    &-tools {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    &-instructors {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 15px;
        padding-top: 5px;
    }

    &-approach {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 60px;
        padding-top: 5px;
    }

    &-financing {
        h3 {
            margin-bottom: 25px;
        }

        p {
            margin-top: 15px;
        }
    }

    &-careers {
        p {
            margin-top: 15px;
        }
    }

    &-testimonials {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}

.course-section {
    border-top: 1px solid var(--borderLight);
    padding-top: 20px;
    min-height: 300px;
    margin-bottom: 100px;
    font-size: 1.1rem;
    line-height: 1.7rem;

    h6 {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--purple);
        margin-bottom: 20px;
    }

    h1 {
        font-size: 2.4rem;
        line-height: 2.9rem;
        margin-bottom: 15px;
    }

    h2 {
        margin: 75px 0 25px;
    }

    h2,
    h3 {
        font-size: 1.7rem;
        line-height: 2.1rem;
    }
}

.course-section:last-of-type {
    margin-bottom: 0;
}

@media (max-width: 1200px) {
    #course-item {
        &-content {
            gap: 90px;
        }
    }

    #course-section-instructors {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 900px) {
    #course-item-content {
        display: block;
    }
}

@media (max-width: 700px) {
    #course-section {
        &-tools {
            column-gap: 7px;
            row-gap: 10px;
        }

        &-approach {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        &-instructors {
            gap: 10px;
            grid-template-columns: 1fr;
        }

        &-testimonials {
            grid-template-columns: 1fr;
            gap: 15px;
        }
    }

    .course-section {
        padding-top: 30px;
        margin-bottom: 70px;

        h6 {
            margin-bottom: 10px;
        }

        h1 {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        h2 {
            margin: 50px 0 25px;
        }

        h2,
        h3 {
            font-size: 1.3rem;
            line-height: 1.8rem;
        }
    }
}
</style>
