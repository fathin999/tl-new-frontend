<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import ProgrammeHeader from "./ProgrammeHeader.vue";
import ProgrammePathwayCard from "./ProgrammePathwayCard.vue";
import {getProgramme} from "@/composable/programmes/programmes";
import IconArrow from "../icons/IconArrow.vue";
import {onMounted, onUnmounted, ref} from "vue";

const programme = getProgramme();

// REFS LIST

let active = ref(0);
const zero = ref();
const one = ref();
const two = ref();
const three = ref();
const four = ref();

const sections = [
    {
        title: "Overview",
        key: "overview",
        ref: zero,
    },
    {
        title: "Career pathways",
        key: "pathways",
        ref: one,
    },
    {
        title: "Requirements",
        key: "requirements",
        ref: two,
    },
    {
        title: "Steps",
        key: "steps",
        ref: three,
    },
    {
        title: "Outcomes",
        key: "outcomes",
        ref: four,
    },
];

const getPartners = () => {
    return new URL(
        `/src/assets/programmes/programme-partner-logos-${programme.img}.png`,
        import.meta.url
    );
};

const getTimelineIcon = (icon) => {
    return new URL(
        `/src/assets/programmes/programme-icon-${icon}.svg`,
        import.meta.url
    );
};

const checkEmpty = (section) => {
    const length =
        section instanceof Array ? section.length : Object.keys(section).length;
    return length !== 0;
};

// SCROLLING METHODS

const scrollTo = (el) => {
    window.scrollTo({
        top: el.offsetTop - 150,
        behavior: "smooth",
    });
};

const scrollToPathways = () => scrollTo(one.value);

const getOffset = (el) => {
    return el.offsetTop - el.getBoundingClientRect().height / 2;
};

const handleScroll = () => {
    const y = window.scrollY;

    if (y > getOffset(four.value)) active.value = 4;
    else if (y > getOffset(three.value)) active.value = 3;
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
                    v-for="(section, i) in sections"
                    class="bar-item"
                    :key="section"
                >
                    <div
                        :class="`bar-item-inner clickable ${
                            i === active ? 'active' : ''
                        }`"
                        v-if="checkEmpty(programme.details[section.key])"
                        @click="scrollTo(section.ref.value)"
                    >
                        {{ section.title }}
                    </div>
                </div>
            </div>
        </div>

        <div id="programme-content">
            <div class="section blue" ref="zero" id="programme-overview">
                <div class="container">
                    <div class="section-title">
                        <img :src="getPartners()" alt="" />

                        <h2>
                            Embark upon your
                            <br />
                            <u>tech journey</u>
                        </h2>

                        <p>
                            {{ programme.details.overview.paragraph }}
                        </p>

                        <a
                            class="btn-arrow btn-primary"
                            @click="scrollToPathways"
                        >
                            Explore career pathways
                            <IconArrow />
                        </a>
                    </div>

                    <div id="programme-overview-img">
                        <img
                            src="/src/assets/programmes/programme-overview.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div
                class="section"
                id="programme-timeline"
                v-if="checkEmpty(programme.details.overview.timeline)"
            >
                <div class="container">
                    <div class="section-title-center">
                        <h2>Programme <u>timeline</u></h2>
                    </div>

                    <div id="programme-timeline-list">
                        <div
                            v-for="(item, i) in programme.details.overview
                                .timeline"
                            :class="`programme-timeline-item ${
                                i % 2 === 0 ? 'reverse' : ''
                            }`"
                            :key="item.title"
                        >
                            <div class="programme-timeline-item-text">
                                <h4>{{ item.time }}</h4>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.description }}</p>
                            </div>

                            <div class="programme-timeline-item-dot"></div>

                            <div class="programme-timeline-item-img">
                                <div
                                    class="programme-timeline-item-img-outline"
                                >
                                    <img
                                        :src="getTimelineIcon(item.icon)"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" ref="one" id="programme-pathways">
                <div class="container">
                    <div class="section-title-center">
                        <h2>Choose your <u>career pathways</u></h2>
                    </div>
                </div>

                <div id="programme-pathways-list">
                    <div class="container">
                        <ProgrammePathwayCard
                            v-for="pathway in programme.details.pathways"
                            :key="pathway.title"
                            :title="pathway.title"
                            :description="pathway.description"
                            :img="pathway.img"
                            :level="pathway.level"
                            :whoFor="pathway.for"
                            :cred="pathway.accreditation"
                            :careers="pathway.careers"
                            :requirements="pathway.requirements"
                            :courses="pathway.courses"
                        />
                    </div>
                </div>
            </div>

            <div class="section" ref="two" id="programme-requirements">
                <div class="container">
                    <h1>Requirements</h1>
                </div>
            </div>

            <div class="section" ref="three" id="programme-steps">
                <div class="container">
                    <h1>Steps</h1>
                </div>
            </div>

            <div class="section" ref="four" id="programme-outcomes">
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

    @mixin font() {
        font-size: 1.1rem;
        line-height: 1.7rem;
    }

    &-content {
        .section {
            min-height: 500px;

            span,
            p {
                @include font();
            }
        }
    }

    &-overview {
        .container {
            display: grid;
            grid-template-columns: 1fr 400px;
            justify-content: space-between;
            gap: 200px;
        }

        .section-title {
            img {
                width: 100%;
                height: 35px;
                object-fit: contain;
                object-position: center left;
                margin-bottom: 40px;
            }

            p {
                width: 100%;
                margin: 40px 0 65px;
                color: var(--black);
                @include font();
            }

            a {
                position: relative;
            }
        }

        &-img {
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    &-timeline {
        padding-bottom: 30px;

        &-list {
            margin-top: 60px;
            position: relative;

            $margin: 100px;

            .programme-timeline-item {
                display: flex;
                gap: 30px;
                margin-bottom: $margin;
                position: relative;

                &-text {
                    border: 1px solid white;
                    flex: 1;
                    text-align: right;
                    flex-shrink: 0;

                    h4 {
                        font-size: 1rem;
                        color: var(--purple);
                    }

                    h3 {
                        font-size: 1.7rem;
                        margin: 10px 0 15px;
                    }

                    p {
                        padding-left: 50%;
                        color: var(--textMedium);
                    }
                }

                &-dot {
                    $size: 17px;
                    width: $size;
                    height: $size;
                    background-color: var(--purple);
                    border-radius: 50%;
                }

                &-img {
                    flex: 1;
                    border: 1px solid whitesmoke;
                    flex-shrink: 0;
                    border: 1px solid white;

                    &-outline {
                        $size: 70px;
                        height: $size;
                        width: $size;
                        border-radius: 30%;
                        border: 1px solid var(--darkBlue);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        /* box-shadow: 0 10px 20px rgba(184, 192, 204, 0.5); */
                    }

                    img {
                        $size: 50%;
                        object-fit: contain;
                        height: $size;
                        width: $size;
                    }
                }
            }

            .reverse {
                flex-direction: row-reverse;

                .programme-timeline-item {
                    &-text {
                        text-align: left;

                        p {
                            padding: 0;
                            padding-right: 50%;
                        }
                    }

                    &-img {
                        text-align: right;

                        img {
                            display: inline-block;
                        }
                    }
                }
            }

            .programme-timeline-item::before {
                position: absolute;
                content: "";
                top: 0;
                bottom: calc($margin * -1);
                right: 0;
                left: 0;
                margin: auto;
                width: 1px;
                background-color: var(--purple);
                z-index: -1;
                opacity: 0.5;
            }

            .programme-timeline-item::last-of-type {
                margin-bottom: 0;
            }

            .programme-timeline-item:last-of-type::before {
                height: 0;
            }
        }
    }

    &-pathways {
        &-list {
            margin-top: 50px;

            .container {
                /* display: grid; */
                /* grid-template-columns: 1fr 1fr; */
                /* gap: 20px; */
                width: 900px;
            }
        }
    }
}
</style>
