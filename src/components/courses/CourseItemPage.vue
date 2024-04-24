<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import IconArrow from "../icons/IconArrow.vue";
import IconOverview from "../icons/courses/IconOverview.vue";
import IconModules from "../icons/courses/IconModules.vue";
import IconFees from "../icons/courses/IconFees.vue";
import IconOutcomes from "../icons/courses/IconOutcomes.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {getCourseWithId, getTestimonials} from "@/composable/courses/courses";
import {getTestimonialsFromSlugs} from "@/composable/testimonials/testimonials";
import IconLevel from "../icons/courses/IconLevel.vue";
import IconOnline from "../icons/courses/IconOnline.vue";
import IconCertificate from "../icons/courses/IconCertificate.vue";
import IconInstructor from "../icons/courses/IconInstructor.vue";
import IconCalendar from "../icons/courses/IconCalendar.vue";
import CourseModules from "./CourseModules.vue";
import CourseTool from "./CourseTool.vue";
import CourseCheckpoint from "./CourseCheckpoint.vue";
import CourseInstructor from "./CourseInstructor.vue";
import CourseIconDescription from "./CourseIconDescription.vue";
import CourseFinancing from "./CourseFinancing.vue";
import TestimonialCard from "../testimonials/TestimonialCard.vue";
import {useRoute} from "vue-router";
import {getOneCourseUsingSlug} from "@/composable/courses/course-roles";

// get params
const params = useRoute().params;

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
        title: "Financing",
        ref: two,
        icon: IconFees,
    },
    {
        title: "Careers",
        ref: three,
        icon: IconOutcomes,
    },
];

// fetch course through Id
const course = getCourseWithId(1);
const courseParams = getOneCourseUsingSlug(params.slug);
const testimonials = getTestimonialsFromSlugs(course.details.graduates);

// static images
const getLogo = () => {
    return new URL(
        `/src/assets/courses/course-provider-${courseParams.providerLogo}.png`,
        import.meta.url
    );
};

const getBadge = () => {
    return new URL(
        `/src/assets/courses/course-badge-${courseParams.badge}.png`,
        import.meta.url
    );
};

const getBanner = () => {
    return new URL(
        `/src/assets/courses/course-banner-${courseParams.banner}.png`,
        import.meta.url
    );
};

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

    <main id="course-item">
        <div id="course-item-header">
            <img
                src="/src/assets/courses/course-bg.png"
                alt=""
                id="course-item-header-bg"
            />

            <div class="container">
                <div class="breadcrumbs">
                    <a href="/">Home </a>
                    <b> > </b>
                    <a href="/courses">Courses</a>
                    <b> > </b>
                    <a>{{ courseParams.topic }}</a>
                </div>

                <div id="course-item-header-texts">
                    <h1>{{ courseParams.title }}</h1>

                    <p>{{ course.description }}</p>

                    <div id="course-item-header-texts-provider">
                        <img :src="getLogo()" :alt="course.provider" />
                        <span>
                            <b> {{ courseParams.provider }} </b>
                            <br />
                            {{ courseParams.type }}
                        </span>
                    </div>

                    <div id="course-item-header-btns">
                        <a class="btn-primary btn-l">Get brochure</a>
                        <a class="btn-black btn-arrow">
                            Apply now
                            <IconArrow />
                        </a>
                    </div>
                </div>

                <div id="course-item-header-card">
                    <div id="course-item-header-card-banner">
                        <img :src="getBanner()" :alt="course.title" />
                    </div>

                    <img
                        :src="getBadge()"
                        :alt="course.title"
                        id="course-item-header-card-badge"
                    />

                    <div class="course-item-summary">
                        <IconOnline />
                        <span>{{ course.medium }}</span>
                    </div>

                    <div class="course-item-summary">
                        <IconInstructor />
                        <span>{{ course.delivery }}</span>
                    </div>

                    <div class="course-item-summary">
                        <IconCalendar />
                        <span>{{ course.timeline }}</span>
                    </div>

                    <div class="course-item-summary">
                        <IconLevel />
                        <span>{{ courseParams.level }} level</span>
                    </div>

                    <div class="course-item-summary">
                        <IconCertificate />
                        <span>Certification</span>
                    </div>
                </div>
            </div>
        </div>

        <div id="course-item-content" class="container">
            <aside class="hide-scrollbar">
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
                <div class="course-section" ref="zero">
                    <h6>Overview</h6>

                    <h1>Become a Data Scientist in weeks</h1>

                    <p>
                        Acquire advanced data skills, master Machine Learning &
                        AI, and launch your career as a Data Scientist, Analyst,
                        AI Engineer, Data Manager, and more.
                    </p>

                    <h2>What you will learn</h2>
                    <CourseCheckpoint
                        v-for="outcome in course.details.outcomes"
                        :key="outcome"
                        :title="outcome"
                    />

                    <h2>Languages and tools covered</h2>
                    <div id="course-section-tools">
                        <CourseTool
                            v-for="logo in course.details.tools"
                            :key="logo"
                            :logo="logo"
                        />
                    </div>
                </div>

                <div
                    class="course-section"
                    ref="one"
                    id="course-section-modules"
                >
                    <h6>Modules</h6>
                    <h3>Explore our world-class curriculum</h3>

                    <CourseModules :modules="course.details.modules" />

                    <h2>Our approach</h2>
                    <div id="course-section-approach">
                        <CourseIconDescription
                            v-for="approach in course.details.approaches"
                            :key="approach.title"
                            :title="approach.title"
                            :icon="approach.icon"
                        />
                    </div>

                    <h2>Meet our course creators</h2>

                    <div id="course-section-instructors">
                        <CourseInstructor
                            v-for="instructor in course.details.instructors"
                            :key="instructor"
                            :id="instructor"
                        />
                    </div>
                </div>

                <div
                    class="course-section"
                    ref="two"
                    id="course-section-financing"
                >
                    <h6>Financing</h6>
                    <h3>Study first, pay later</h3>
                    <p>
                        pay nothing to join your immersive learning experience
                        and pursue your career goals. Only after you have
                        completed our program and are employed as a software
                        engineer, you will pay 15% of your monthly salary to us
                        until you reach the minimum payment cap (depending on
                        country). Learn more about fees and financing from our
                        FAQ page.
                    </p>

                    <h2>Our fee structure</h2>
                    <CourseFinancing />
                </div>

                <div
                    class="course-section"
                    ref="three"
                    id="course-section-careers"
                >
                    <h6>Careers</h6>

                    <h3>We will help you boost your career</h3>

                    <p>
                        Navigate tech career opportunities with the help of our
                        Career Services team. After many years working with
                        passionate students and helping them land fulfilling
                        careers in tech, we have got a keen understanding of
                        what goes into getting that first tech job.
                        <br />
                        <br />
                        Get valuable insights on interview skills, CV
                        preparation, and building a professional portfolio - we
                        will be the bridge between you and your future
                        employers. We have built relationships with hiring
                        managers at top companies across the region, creating a
                        robust employer pipeline for TalentLabs grads. Our team
                        is constantly advocating for our graduates and helping
                        you to secure your dream job.
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

                    <a href="/courses-faq" class="btn-primary btn-m">
                        Go to FAQ
                    </a>
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
$purple: #f6ebff;

#course-item {
    padding-bottom: 90px;

    &-header {
        position: relative;
        width: 100%;
        margin-bottom: 50px;
        background-color: var(--bgLight);
        padding: 50px 0 80px;

        &-bg {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }

        .container {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        .breadcrumbs {
            margin-bottom: 45px;
        }

        &-texts {
            flex: 1;
            padding-right: 100px;

            h1 {
                margin-bottom: 15px;
                font-size: 2.7rem;
                line-height: 3.6rem;
            }

            p {
                width: 70%;
            }

            &-provider {
                display: flex;
                align-items: center;
                user-select: none;
                margin: 25px 0 40px;
                font-size: 0.9rem;

                img {
                    $size: 60px;
                    height: $size;
                    width: $size;
                    border-radius: 25%;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    margin-right: 20px;
                }

                b {
                    display: inline-block;
                    font-size: 1rem;
                    padding-bottom: 5px;
                }
            }
        }

        &-btns {
            display: flex;
            gap: 10px;

            a {
                border-radius: 50px;
                min-width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
        }

        &-card {
            $padding: 35px;
            $margin: calc(-1 * $padding);

            width: 290px;
            position: relative;
            background-color: white;
            border-radius: 20px;
            padding: $padding;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

            $height: 90px;
            $size: 90px;
            $top: calc($height - $size * 0.7);

            &-banner {
                height: $height;
                overflow: hidden;
                margin-top: $margin;
                margin-left: $margin;
                margin-right: $margin;
                margin-bottom: calc($height - $size + $top + 25px);

                img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }

            &-badge {
                border: 1px solid rgb(220, 220, 220);
                height: $size;
                width: $size;
                position: absolute;
                top: $top;
                left: 0;
                right: 0;
                margin: auto;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 20%;
                backdrop-filter: blur(7px);
                -webkit-backdrop-filter: blur(7px);
            }

            .course-item-summary {
                margin-bottom: 25px;
                display: flex;
                font-size: 0.95rem;

                svg {
                    $size: 15px;
                    height: $size;
                    width: $size;
                    margin-right: 25px;
                    fill: var(--textMedium);
                }
            }

            .course-item-summary:last-of-type {
                margin-bottom: 0px;
            }
        }
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
        width: 220px;

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

        .active {
            background-color: $purple;
            color: var(--darkPurple);

            svg {
                fill: var(--darkPurple);
            }
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

@media (max-width: 1000px) {
    #course-item {
        &-header {
            padding: 30px 0 60px;

            .breadcrumbs {
                margin-bottom: 40px;
            }

            &-texts {
                padding-right: 50px;
            }

            &-card {
                width: 100%;
                margin-top: 50px;

                .course-item-summary {
                    width: 33%;
                    display: inline-flex;
                }
            }
        }
    }

    #course-section {
        &-instructors {
            grid-template-columns: 1fr 1fr;
        }
    }
}

@media (max-width: 900px) {
    #course-item {
        &-header {
            padding-bottom: 10px;

            .container {
                display: block;
            }

            &-card {
                margin-top: 60px;

                .course-item-summary {
                    width: 50%;
                }
            }
        }

        &-content {
            display: block;
        }

        aside {
            display: flex;
            top: var(--navbarHeight);
            width: 100vw;
            margin-left: -20px;
            background-color: white;
            z-index: 10;
            border-top: 1px solid var(--borderLight);
            border-bottom: 1px solid var(--borderLight);
            padding: 10px 20px;
            overflow-x: scroll;
        }

        &-btns {
            padding: 0;
            flex: 1;
            border-top: 0;
            flex-direction: row;
            width: auto;
            align-items: center;

            .course-btn {
                background-color: var(--bgMedium);
                padding: 15px 22px;
                height: auto;

                svg {
                    margin-right: 15px;
                }
            }

            .active {
                background-color: $purple;
            }
        }

        &-apply {
            margin: 0;
            margin-left: 30px;
            height: auto;
            display: flex;
            position: relative;

            a {
                padding: 12px 22px 12px 25px;
                margin: 0;
                white-space: nowrap;
                position: relative;
            }

            a:last-of-type {
                display: none;
            }
        }
    }
}

@media (max-width: 700px) {
    #course-item {
        &-header {
            &-texts {
                padding-right: 20px;

                h1 {
                    font-size: 9vw;
                    line-height: 11vw;
                    margin-bottom: 25px;
                }

                p {
                    width: 90%;
                }

                &-provider {
                    margin: 30px 0 50px;

                    img {
                        $size: 55px;
                        height: $size;
                        width: $size;
                        border-radius: 50%;
                        margin-right: 17px;
                    }
                }
            }

            &-btns {
                flex-direction: column;
                align-items: flex-start;
            }

            &-card {
                .course-item-summary {
                    width: 100%;
                }
            }
        }
    }

    #course-section {
        &-approach {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        &-instructors {
            gap: 10px;
        }

        &-testimonials {
            grid-template-columns: 1fr;
            gap: 15px;
        }
    }
}

@media (hover: hover) {
    #course-item {
        &-btns {
            .course-btn:hover {
                background-color: #fbf6ff;
            }

            .active:hover {
                background-color: $purple;
            }
        }
    }
}
</style>
