<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import Banner from "../layout/Banner.vue";
import IconArrow from "../icons/IconArrow.vue";
import {getFounders} from "@/composable/teams/teams";
import TeamCard from "./teams/TeamCard.vue";
import IconAboutOutcome from "../icons/about/IconAboutOutcome.vue";
import IconAboutCollab from "../icons/about/IconAboutCollab.vue";
import IconAboutContinuous from "../icons/about/IconAboutContinuous.vue";
import IconAboutPractical from "../icons/about/IconAboutPractical.vue";
import IconQuote from "../icons/IconQuote.vue";

const founders = getFounders();

const values = [
    {
        icon: IconAboutContinuous,
        title: "Continous Innovation Mindest",
        description:
            "Through continuous improvement of our platform, we aim to set new standards in education and professional growth.",
    },
    {
        icon: IconAboutPractical,
        title: "Practical Learning Experience",
        description:
            "We bridge the gap between theory and practice, equipping students with actionable knowledge for their careers.",
    },
    {
        icon: IconAboutOutcome,
        title: "Outcome Focused Approach",
        description:
            "Every lesson, assignment, and module is crafted to maximize your employment prospects and career advancement.",
    },
    {
        icon: IconAboutCollab,
        title: "Collaborative Learning Community",
        description:
            "Our community-centric approach ensures that everyone can contribute to and benefit from the collective knowledge.",
    },
];
</script>

<template>
    <Navbar />

    <main id="about">
        <Banner
            title="About us"
            subtext="TalentLabs is a full-stack career & professional development platform that helps you build a fulfilling career in technology."
        />

        <div class="section blue" id="about-story">
            <div class="container">
                <div id="about-story-header">
                    <div class="section-title">
                        <h2>
                            We want to create
                            <br />
                            a <u> better future </u>
                        </h2>
                        <p>
                            TalentLabs is a full-stack career platform focusing
                            on technology careers. We are committed to help
                            people across all backgrounds to develop the skills
                            required to thrive in today's digital economy and
                            meet the demands of the future workforce.
                            <br />
                            <br />
                            Working with leading corporations & universities,
                            our platform offers a wide range of tech courses,
                            access to global tech community, networking events
                            and tech job opportunities across the region.
                            <br />
                            <br />
                            Whether you're looking to make a career change,
                            level up at work, or learn a new skill, our learning
                            pathways will help you achieve your goals. We aim to
                            help our users discover the true career paths and
                            match them with the right job opportunities.
                        </p>
                    </div>

                    <div id="about-story-images">
                        <img
                            src="/src/assets/about/about-story-long.png"
                            alt=""
                            id="about-story-images-long"
                        />

                        <img
                            src="/src/assets/about/about-story-tall.png"
                            alt=""
                            id="about-story-images-tall"
                        />

                        <img
                            src="/src/assets/about/about-story-square-1.png"
                            alt=""
                            id="about-story-images-square-1"
                        />

                        <img
                            src="/src/assets/about/about-story-square-2.png"
                            alt=""
                            id="about-story-images-square-2"
                        />
                    </div>
                </div>

                <div id="about-story-list">
                    <div class="about-story-mission">
                        <h2>Our mission</h2>

                        <p>
                            To empower individuals with the skills required to
                            transform their lives through our real-world
                            learning experience, best-in-class programmes,
                            affordable education financing, high-value job
                            opportunities and collaborative community network in
                            the technology sector.
                        </p>
                    </div>

                    <div class="about-story-mission">
                        <h2>Our vision</h2>

                        <p>
                            Providing high-quality, accessible and
                            outcome-driven technology workforce solutions to
                            create economic opportunities for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section" id="about-teams">
            <div class="container">
                <div class="section-title">
                    <h2>Meet our <u>founders</u></h2>

                    <p>
                        Our team consists of highly-accomplished individuals,
                        bringing together our individual expertise and knowledge
                        based on our real-world experience to help accelerate
                        your career.
                    </p>

                    <a href="/teams" class="btn-arrow btn-black">
                        View all team
                        <IconArrow />
                    </a>
                </div>

                <div id="about-teams-list">
                    <TeamCard
                        v-for="founder in founders"
                        :key="founder.name"
                        :name="founder.name"
                        :job="founder.job"
                        :position="founder.position"
                        :img="founder.img"
                        :logo="founder.logo"
                    />
                </div>
            </div>
        </div>

        <div class="section blue" id="about-values">
            <div class="container">
                <div class="section-title">
                    <h2>Our <u>core values</u></h2>
                    <p>
                        We are committed to building a legacy of quality,
                        innovation and inclusivity in everything we do.
                    </p>
                </div>

                <div id="about-values-list">
                    <div
                        class="about-values-item"
                        v-for="value in values"
                        :key="value.title"
                    >
                        <component :is="value.icon" />

                        <h3>{{ value.title }}</h3>

                        <p>{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section" id="about-join">
            <div class="container">
                <div class="section-title">
                    <h2>Ready to <u> change your life?</u></h2>

                    <div class="quote">
                        <p>
                            Even the greatest was once a beginner.
                            <br />
                            Don't be afraid to take that first step.
                            <br />
                            <br />
                            - Muhammad Ali
                        </p>

                        <IconQuote />
                    </div>
                </div>

                <a class="btn-m btn-primary" href="/signup/choose-role">
                    Join us now
                </a>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#about {
    &-story {
        &-header {
            display: grid;
            grid-template-columns: 1fr 47%;
            gap: 120px;
        }

        .section-title {
            p {
                width: 100%;
                margin-top: 30px;
            }
        }

        &-images {
            position: relative;

            img {
                position: absolute;
                object-fit: cover;
                border-radius: 20px;
            }

            $gap: 20px;
            $height: calc((100% - $gap) / 2);
            $width: calc((100% - $gap * 2) / 3);

            &-tall {
                top: 0;
                left: 0;
                height: calc(100% - $gap);
                width: $width;
            }

            &-long {
                top: $gap;
                right: 0;
                height: calc($height - $gap);
                width: calc($width * 2 + $gap);
            }

            &-square {
                @mixin squareImg($right) {
                    width: $width;
                    right: $right;
                }

                &-2 {
                    @include squareImg(0);
                    height: calc($height - $gap * 2);
                    bottom: $gap * 2;
                }

                &-1 {
                    @include squareImg(calc($width + $gap));
                    bottom: 0;
                    height: $height;
                }
            }
        }

        &-list {
            $border: 1px solid var(--borderMedium);
            margin-top: 120px;
            border-top: $border;

            .about-story-mission {
                display: grid;
                grid-template-columns: 1fr 45%;
                border-bottom: $border;
                padding: 50px 0;

                h2 {
                    font-size: 1.9rem;
                }
            }
        }
    }

    &-teams {
        &-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            margin-top: 50px;
        }
    }

    &-values {
        .container {
            width: 900px;
        }

        &-list {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;

            .about-values-item {
                padding: 45px;
                border-radius: 20px;
                background-color: white;

                svg {
                    $size: 50px;
                    height: $size;
                    width: $size;
                    margin-right: 30px;
                }

                h3 {
                    margin: 30px 0 15px;
                    font-size: 1.3rem;
                }

                p {
                    color: var(--textMedium);
                }
            }
        }
    }

    &-join {
        text-align: center;

        .quote {
            display: inline-block;
            border: 1px solid var(--borderMedium);
            /* background-color: var(--bgLight); */
            margin: 40px 0 30px;
            padding: 50px 70px;
            border-radius: 20px;
            position: relative;

            p {
                display: inline-block;
                width: 100%;
                margin-top: 0;
            }

            svg {
                $size: 80px;
                $margin: -25px;
                height: $size;
                width: $size;
                position: absolute;
                top: $margin;
                left: $margin;
                z-index: -1;
                opacity: 0.1;
            }
        }
    }
}
</style>
