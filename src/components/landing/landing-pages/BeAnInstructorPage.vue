<script setup>
import LandingLayout from "../layout/LandingLayout.vue";
import Button from "../button/Button.vue";
import CourseCheckpoint from "../courses/CourseCheckpoint.vue";
import FaqList from "../faq/FaqList.vue";
import {getFaqs} from "@/composable/backend/faqs";
import {
    getBeInsDuties,
    getBeInsSupports,
    getBeInsWhyUs,
} from "@/composable/view-models/be-instructor-page";
import IconMail from "../icons/IconMail.vue";

// -------------------
// BACKEND - get FAQS, instructor type
// -------------------
const faqs = getFaqs("instructor");

// STATIC PAGE DATA
const whyUs = getBeInsWhyUs();
const duties = getBeInsDuties();
const supports = getBeInsSupports();

// email
const email = "teach@talentlabs.org";

// STATIC IMAGE
const getDutyImg = (i) => {
    return new URL(
        `/src/assets/landing/be-instructor/duties-${i}.png`,
        import.meta.url
    );
};
</script>

<template>
    <LandingLayout>
        <div id="instructor">
            <div class="section blue" id="instructor-header">
                <div class="container">
                    <div class="section-title">
                        <h2>
                            Share your knowledge and
                            <br />
                            <u>make a difference</u>
                        </h2>

                        <p>
                            TalentLabs is Asia's leading tech learning platform
                            focusing on technology careers. We are committed to
                            help people across all backgrounds to develop the
                            skills required to thrive in today's digital economy
                            and meet the demands of the future workforce.
                            <br />
                            <br />
                            We work with leading corporations & universities,
                            our platform offers a wide range of tech courses,
                            access to the global tech community, networking
                            events and tech job opportunities.
                        </p>
                    </div>

                    <div id="instructor-header-img">
                        <img
                            src="/src/assets/landing/be-instructor/beinst-header-s.png"
                            alt=""
                            id="instructor-header-img-s"
                        />

                        <img
                            src="/src/assets/landing/be-instructor/beinst-header-m.png"
                            alt=""
                            id="instructor-header-img-m"
                        />

                        <img
                            src="/src/assets/landing/be-instructor/beinst-header-tall.png"
                            alt=""
                            id="instructor-header-img-tall"
                        />
                    </div>
                </div>
            </div>

            <div class="section" id="instructor-duties">
                <div class="container">
                    <div class="section-title-center">
                        <h2>Your teaching duties <u>explained</u></h2>
                    </div>

                    <div id="instructor-duties-list">
                        <div
                            v-for="(duty, index) in duties"
                            :key="duty.title"
                            class="instructor-duties-item"
                        >
                            <img :src="getDutyImg(index)" :alt="duty.title" />

                            <div>
                                <h3>{{ duty.title }}</h3>
                                <p>{{ duty.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section blue" id="instructor-why">
                <div class="container">
                    <div class="section-title-center">
                        <h2>Why TalentLabs?</h2>
                    </div>

                    <div id="instructor-why-list">
                        <div
                            class="instructor-why-item"
                            v-for="why in whyUs"
                            :key="why.title"
                        >
                            <component :is="why.icon" />

                            <div class="instructor-why-item-text">
                                <h3>{{ why.title }}</h3>
                                <p>
                                    {{ why.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="instructor-support">
                <div class="container">
                    <div class="section-title-center">
                        <h2>We are in this <u>together</u></h2>
                        <p>
                            TalentLabs' team of educators, instructional
                            designers and editors would help you throughout the
                            journey. We are here to provide support in
                            curriculum design, hardware equipment, assignments
                            design, and student assessments.
                        </p>
                    </div>

                    <div id="instructor-support-list">
                        <div
                            class="instructor-support-item"
                            v-for="support in supports"
                            :key="support.title"
                        >
                            <component :is="support.icon" />

                            <h2>{{ support.title }}</h2>

                            <p>
                                {{ support.description }}
                            </p>

                            <CourseCheckpoint
                                v-for="point in support.points"
                                :key="support.title + point"
                                :title="point"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="section" id="instructor-faq">
                <div class="container">
                    <div class="section-title-center">
                        <h2>Frequently asked questions</h2>
                    </div>

                    <div id="instructor-faq-list">
                        <FaqList :faqs="faqs" />
                    </div>
                </div>
            </div>

            <div class="section blue" id="instructor-contact">
                <div class="container">
                    <h1>Let's create a better future, together</h1>

                    <Button :large="true" :href="`mailto:${email}`">
                        <IconMail />
                        {{ email }}
                    </Button>
                </div>
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#instructor {
    &-header {
        p {
            margin-top: 30px;
            width: 100%;
        }

        .container {
            display: grid;
            grid-template-columns: 45% 40%;
            justify-content: space-between;
        }

        &-img {
            $gap: 20px;
            $width: calc((100% - $gap) * 0.37);
            $right: calc($gap + $width);
            $height: calc((100% - $gap) * 0.4);
            position: relative;

            img {
                position: absolute;
                border-radius: 20px;
                object-fit: cover;
            }

            &-s {
                width: $width;
                right: $right;
                top: 0;
                height: $height;
            }

            &-m {
                width: calc(100% - $gap - $width);
                right: $right;
                top: calc($height + $gap);
                height: calc(100% - $height - $gap);
            }

            &-tall {
                width: $width;
                height: 85%;
                top: 7%;
                right: 0;
            }
        }
    }

    &-why {
        &-list {
            margin-top: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 20px;

            .instructor-why-item {
                background: white;
                border-radius: 20px;
                padding: 35px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                svg {
                    $size: 50px;
                    height: $size;
                    width: $size;
                }

                h3 {
                    font-size: 1.3rem;
                    margin: 50px 0 20px;
                }

                p {
                    color: var(--textMedium);
                }
            }
        }
    }

    &-duties {
        .container {
            width: 1000px;
            margin: auto;
        }

        &-list {
            margin-top: 60px;

            .instructor-duties-item {
                background-color: var(--bgLight);
                border-radius: 25px;
                padding: 35px 90px 35px 30px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 50px;

                img {
                    flex-shrink: 0;
                    width: 350px;
                    height: 250px;
                    object-fit: contain;
                    object-position: center;
                }

                h3 {
                    font-size: 1.6rem;
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 1.1rem;
                    line-height: 1.6rem;
                    color: var(--textMedium);
                }
            }
        }
    }

    &-support {
        &-list {
            margin-top: 50px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;

            .instructor-support-item {
                border: 1px solid gainsboro;
                padding: 45px;
                border-radius: 20px;

                svg {
                    $size: 80px;
                    height: $size;
                    width: $size;
                }

                h2 {
                    margin-top: 15px;
                }

                p {
                    margin: 10px 0 40px;
                }
            }
        }
    }

    &-faq {
        padding-top: 50px;

        &-list {
            margin-top: 50px;
        }
    }

    &-contact {
        padding: 90px 0;

        .container {
            text-align: center;
        }

        h1 {
            margin-bottom: 30px;
        }

        .btn-primary {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 330px;
            min-width: none;

            svg {
                $size: 22px;
                height: $size;
                width: $size;
                margin-right: 15px;
                fill: white;
            }
        }
    }
}

@media (max-width: 1100px) {
    #instructor {
        &-header {
            .container {
                grid-template-columns: 45% 45%;
            }
        }

        &-duties {
            .container {
                width: auto;
                margin: 0 50px;
            }
        }

        &-why {
            &-list {
                grid-template-columns: 1fr 1fr;
                gap: 15px;

                .instructor-why-item {
                    border-radius: 15px;

                    h3 {
                        margin: 30px 0 10px;
                    }

                    svg {
                        $size: 45px;
                        height: $size;
                        width: $size;
                    }
                }
            }
        }
    }
}

@media (max-width: 900px) {
    #instructor {
        &-header {
            .container {
                display: block;
            }

            &-img {
                width: 50vw;
                margin: 60px auto 0;
                height: 40vw;
            }
        }

        &-duties {
            .container {
                margin: 0 20px;
            }

            &-list {
                .instructor-duties-item {
                    padding: 25px 50px 40px 50px;
                    display: block;
                    text-align: center;

                    img {
                        height: 200px;
                        width: 100%;
                        margin-bottom: 15px;
                    }
                }
            }
        }

        &-support {
            &-list {
                gap: 15px;

                .instructor-support-item {
                    padding: 30px;
                }
            }
        }
    }
}

@media (max-width: 700px) {
    #instructor {
        &-support {
            &-list {
                grid-template-columns: 1fr;
                gap: 20px;

                .instructor-support-item {
                    padding: 22px 22px 25px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);

                    svg {
                        $size: 60px;
                        height: $size;
                        width: $size;
                    }

                    h2 {
                        font-size: 1.2rem;
                        line-height: 1.7rem;
                        margin-top: 12px;
                    }

                    p {
                        margin: 7px 0 20px;
                    }
                }
            }
        }
    }
}

@media (max-width: 600px) {
    $shadow: 0 5px 15px rgba(160, 169, 174, 0.5);

    #instructor {
        overflow-x: hidden;

        &-header {
            padding-top: 60px;

            &-img {
                width: 90vw;
                margin: 40px auto 0;
                height: 70vw;

                $gap: 10px;
                $width: calc((100% - $gap) * 0.37);
                $right: calc($gap + $width);
                $height: calc((100% - $gap) * 0.4);

                img {
                    border-radius: 15px;
                }

                &-s {
                    width: $width;
                    right: $right;
                    height: $height;
                }

                &-m {
                    width: calc(100% - $gap - $width);
                    right: $right;
                    top: calc($height + $gap);
                    height: calc(100% - $height - $gap);
                }

                &-tall {
                    width: $width;
                }
            }
        }

        &-duties {
            &-list {
                margin-top: 50px;

                .instructor-duties-item {
                    padding: 10px 20px 30px 20px;
                    box-shadow: $shadow;
                    border-radius: 15px;

                    img {
                        height: 180px;
                        margin-bottom: 10px;
                    }

                    h3 {
                        font-size: 1.25rem;
                        line-height: 1.75rem;
                        margin-bottom: 10px;
                    }

                    p {
                        font-size: 0.95rem;
                        line-height: 1.4rem;
                    }
                }
            }
        }

        &-why {
            &-list {
                grid-template-columns: 1fr;

                .instructor-why-item {
                    box-shadow: $shadow;
                    padding: 25px;

                    svg {
                        $size: 40px;
                        height: $size;
                        width: $size;
                    }

                    h3 {
                        font-size: 1.2rem;
                        line-height: 1.7rem;
                        margin: 20px 0 5px;
                    }

                    p {
                        font-size: 0.95rem;
                        line-height: 1.4rem;
                    }
                }
            }
        }
    }
}

@media (hover: hover) {
    #instructor-contact {
        .btn-primary:hover {
            svg {
                fill: var(--purple);
                transition: fill 0.4s ease-out;
            }
        }
    }
}
</style>
