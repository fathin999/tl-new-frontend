<script setup>
import Banner from "../layout/Banner.vue";
import {getFounders} from "@/composable/backend/teams";
import {getAboutValues} from "@/composable/view-models/about";
import TeamCard from "./teams/TeamCard.vue";
import IconQuote from "../icons/IconQuote.vue";
import LandingLayout from "../layout/LandingLayout.vue";
import Button from "../button/Button.vue";

// ------------------------------
// BACKEND
// ------------------------------
const founders = getFounders();

// VIEW MODEL
const values = getAboutValues();
</script>

<template>
    <LandingLayout>
        <div id="about">
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
                                TalentLabs is a full-stack career platform
                                focusing on technology careers. We are committed
                                to help people across all backgrounds to develop
                                the skills required to thrive in today's digital
                                economy and meet the demands of the future
                                workforce.
                                <br />
                                <br />
                                Working with leading corporations &
                                universities, our platform offers a wide range
                                of tech courses, access to global tech
                                community, networking events and tech job
                                opportunities across the region.
                                <br />
                                <br />
                                Whether you're looking to make a career change,
                                level up at work, or learn a new skill, our
                                learning pathways will help you achieve your
                                goals. We aim to help our users discover the
                                true career paths and match them with the right
                                job opportunities.
                            </p>
                        </div>

                        <div id="about-story-images">
                            <img
                                src="/src/assets/landing/about/about-story-long.png"
                                alt=""
                                id="about-story-images-long"
                            />

                            <img
                                src="/src/assets/landing/about/about-story-tall.png"
                                alt=""
                                id="about-story-images-tall"
                            />

                            <img
                                src="/src/assets/landing/about/about-story-square-1.png"
                                alt=""
                                id="about-story-images-square-1"
                            />

                            <img
                                src="/src/assets/landing/about/about-story-square-2.png"
                                alt=""
                                id="about-story-images-square-2"
                            />
                        </div>
                    </div>

                    <div id="about-story-list">
                        <div class="about-story-mission">
                            <h2>Our mission</h2>

                            <p>
                                To empower individuals with the skills required
                                to transform their lives through our real-world
                                learning experience, best-in-class programmes,
                                affordable education financing, high-value job
                                opportunities and collaborative community
                                network in the technology sector.
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
                            Our team consists of highly-accomplished
                            individuals, bringing together our individual
                            expertise and knowledge based on our real-world
                            experience to help accelerate your career.
                        </p>

                        <Button href="/teams" :arrow="true" :black="true">
                            View all team
                        </Button>
                    </div>

                    <div id="about-teams-list">
                        <TeamCard
                            v-for="founder in founders"
                            :key="founder.name"
                            :name="founder.name"
                            :job="founder.job"
                            :position="founder.position"
                            :slug="founder.slug"
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

                    <Button href="/signup/select-role"> Join us now </Button>
                </div>
            </div>
        </div>
    </LandingLayout>
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

@media (max-width: 1300px) {
    #about {
        &-values {
            .container {
                margin: auto;
            }
        }
    }
}

@media (max-width: 1000px) {
    #about {
        &-story {
            &-header {
                display: block;
            }

            &-images {
                margin: 50px auto 60px;
                height: 35vw;
                width: 50vw;
            }

            &-list {
                margin-top: 0;
            }
        }
    }
}

@media (max-width: 900px) {
    #about {
        &-story {
            &-images {
                margin: 50px auto 60px;
                height: 35vw;
                width: 60vw;
            }
        }

        &-teams {
            .container {
                position: relative;
                padding-bottom: 90px;
            }

            .section-title {
                position: static;
            }

            .btn-arrow {
                right: 0;
                left: 0;
                margin: auto;
                bottom: 0;
                width: 190px;
            }

            &-list {
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }
        }

        &-values {
            .container {
                margin: 0 20px;
                width: auto;
            }

            &-list {
                grid-template-columns: 1fr;
            }
        }
    }
}

@media (max-width: 600px) {
    #about {
        &-story {
            &-images {
                margin: 50px auto 30px;
                height: 80vw;
                width: 90vw;

                img {
                    border-radius: 17px;
                }

                $gap: 10px;
                $height: calc((100% - $gap) / 2);
                $width: calc((100% - $gap * 2) / 3);

                &-tall {
                    top: 0;
                    left: 0;
                    height: calc(100% - $gap * 2);
                    width: $width;
                }

                &-long {
                    $offset: calc($gap * 2);
                    top: $offset;
                    height: calc($height - $offset);
                    width: calc($width * 2 + $gap);
                }

                &-square {
                    @mixin squareImg($right) {
                        width: $width;
                        right: $right;
                    }

                    &-2 {
                        $offset: calc($gap * 3);
                        @include squareImg(0);
                        height: calc($height - $offset);
                        bottom: $offset;
                    }

                    &-1 {
                        @include squareImg(calc($width + $gap));
                        height: $height;
                    }
                }
            }

            &-list {
                border-color: transparent;

                .about-story-mission {
                    display: block;
                    padding: 0;
                    margin-top: 40px;
                    border-bottom: none;

                    h2 {
                        font-size: 4.5vw;
                        line-height: 6.5vw;
                        margin-bottom: 8px;
                        color: var(--purple);
                    }
                }
            }
        }

        &-values {
            &-list {
                gap: 15px;

                .about-values-item {
                    padding: 27px;

                    svg {
                        $size: 40px;
                        height: $size;
                        width: $size;
                    }

                    h3 {
                        font-size: 4.7vw;
                        line-height: 6.7vw;
                        margin: 25px 0 15px;
                    }
                }
            }
        }

        &-teams {
            &-list {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>
