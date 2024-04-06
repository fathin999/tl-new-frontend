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
import {
    createURL,
    getBadgeUrl,
    getBannerUrl,
    getLogoUrl,
} from "@/composable/courses/coursePages";
import IconLevel from "../icons/courses/IconLevel.vue";
import IconOnline from "../icons/courses/IconOnline.vue";
import IconCertificate from "../icons/courses/IconCertificate.vue";
import IconInstructor from "../icons/courses/IconInstructor.vue";

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

// static images
const badgeUrl = new URL(
    `/src/assets/courses/course-badge-${course.badge}.png`,
    import.meta.url
);

const bannerUrl = new URL(
    `/src/assets/courses/course-banner-${course.banner}.png`,
    import.meta.url
);

const logoUrl = new URL(
    `/src/assets/courses/course-provider-${course.providerLogo}.png`,
    import.meta.url
);

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
            <div class="container">
                <div id="course-item-header-breadcrumbs">
                    <a>Home </a>
                    <b> > </b>
                    <a>Courses</a>
                    <b> > </b>
                    <a>{{ course.topic }}</a>
                </div>

                <div id="course-item-header-texts">
                    <h1>{{ course.title }}</h1>

                    <p>{{ course.description }}</p>

                    <div id="course-item-header-texts-provider">
                        <img :src="logoUrl" :alt="course.provider" />
                        <span>
                            <b> {{ course.provider }} </b>
                            <br />
                            {{ course.type }}
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
                        <img :src="bannerUrl" :alt="course.title" />
                    </div>

                    <img
                        :src="badgeUrl"
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
                        <IconOnline />
                        <span>{{ course.timeline }}</span>
                    </div>

                    <div class="course-item-summary">
                        <IconLevel />
                        <span>{{ course.level }} level</span>
                    </div>

                    <div class="course-item-summary">
                        <IconCertificate />
                        <span>Certification</span>
                    </div>
                </div>
            </div>
        </div>

        <div id="course-item-content" class="container">
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
    padding-bottom: 90px;

    &-header {
        width: 100%;
        margin-bottom: 50px;
        background-color: var(--bgLight);
        padding: 50px 0 80px;

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &-breadcrumbs {
            font-size: 0.8rem;
            margin-bottom: 40px;
            width: 100%;
            display: flex;
            align-items: center;

            a {
                font-weight: 500;
                color: var(--textLight);
            }

            b {
                font-weight: 600;
                display: inline-block;
                padding: 0 14px;
                color: var(--purple);
            }

            a:hover {
                color: var(--purple);
            }
        }

        &-texts {
            flex: 1;
            padding-right: 100px;

            h1 {
                margin-bottom: 20px;
                font-size: 2.9rem;
                line-height: 3.6rem;
            }

            p {
                width: 70%;
                font-size: 0.95rem;
                line-height: 1.4rem;
            }

            &-provider {
                display: flex;
                align-items: center;
                user-select: none;
                margin: 25px 0 55px;
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
            gap: 15px;

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
                    $size: 17px;
                    height: $size;
                    width: $size;
                    margin-right: 20px;
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
