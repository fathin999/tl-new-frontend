<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import CourseCheckpoint from "../courses/CourseCheckpoint.vue";
import FaqList from "../faq/FaqList.vue";
import {getInstructorFAQs} from "../../composable/faq/faq-instructor";
import {
    getBeInsDuties,
    getBeInsSupports,
    getBeInsWhyUs,
} from "../../composable/view-models/be-instructor-page";
import IconMail from "../icons/IconMail.vue";

const whyUs = getBeInsWhyUs();
const duties = getBeInsDuties();
const supports = getBeInsSupports();
const faqs = getInstructorFAQs();
const email = "teach@talentlabs.org";

const getDutyImg = (i) => {
    return new URL(
        `/src/assets/be-instructor/duties-${i}.png`,
        import.meta.url
    );
};
</script>

<template>
    <Navbar />

    <main id="instructor">
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
                        focusing on technology careers. We are committed to help
                        people across all backgrounds to develop the skills
                        required to thrive in today's digital economy and meet
                        the demands of the future workforce.
                        <br />
                        <br />
                        We work with leading corporations & universities, our
                        platform offers a wide range of tech courses, access to
                        the global tech community, networking events and tech
                        job opportunities.
                    </p>
                </div>

                <div id="instructor-header-img">
                    <img
                        src="/src/assets/be-instructor/beinst-header-s.png"
                        alt=""
                        id="instructor-header-img-s"
                    />

                    <img
                        src="/src/assets/be-instructor/beinst-header-m.png"
                        alt=""
                        id="instructor-header-img-m"
                    />

                    <img
                        src="/src/assets/be-instructor/beinst-header-tall.png"
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
                        <div>
                            <h3>{{ duty.title }}</h3>
                            <p>{{ duty.description }}</p>
                        </div>

                        <img :src="getDutyImg(index)" :alt="duty.title" />
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
                        TalentLabs' team of educators, instructional designers
                        and editors would help you throughout the journey. We
                        are here to provide support in curriculum design,
                        hardware equipment, assignments design, and student
                        assessments.
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

                <FaqList :faqs="faqs" />
            </div>
        </div>

        <div class="section blue" id="instructor-contact">
            <div class="container">
                <h1>Let's create a better future, together</h1>

                <a class="btn-l btn-primary" :href="`mailto:${email}`">
                    <IconMail />
                    {{ email }}
                </a>
            </div>
        </div>
    </main>

    <Footer />
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
        }

        &-list {
            margin-top: 50px;

            .instructor-duties-item {
                background-color: var(--bgLight);
                border-radius: 25px;
                padding: 60px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 100px;

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
    }

    &-contact {
        padding: 90px 0;

        .container {
            text-align: center;
        }

        h1 {
            margin-bottom: 30px;
        }

        a {
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
            }
        }
    }
}
</style>
