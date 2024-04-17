<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import IconInsImpact from "../icons/be-instructor/IconInsImpact.vue";
import IconInsGrow from "../icons/be-instructor/IconInsGrow.vue";
import IconInsIncome from "../icons/be-instructor/IconInsIncome.vue";
import IconInsFuture from "../icons/be-instructor/IconInsFuture.vue";

const whyUs = [
    {
        icon: IconInsImpact,
        title: "Make an impact",
        description:
            "Share your expertises and help learners gain new skills for a better career.",
    },
    {
        icon: IconInsGrow,
        title: "Grow your career",
        description:
            "Build your brand and grow your career by creating courses and sharing your expertise.",
    },
    {
        icon: IconInsFuture,
        title: "Shape the future",
        description:
            "Being an educator is one of the best ways to create a better future for the world.",
    },
    {
        icon: IconInsIncome,
        title: "Earn an income",
        description:
            "With our revenue-sharing model, you will make continuous income after creating a course.",
    },
];

const duties = [
    {
        img: "",
        title: "Design a curriculum",
        description:
            "Start organising your knowledge and put it together as an educational framework. Our instructional design team will work with you and provide you necessary guidance.",
        card: "s",
    },
    {
        img: "",
        title: "Record your teaching videos",
        description:
            "Use a good microphone and a camera with clear resolution, then you're ready to start. Our instructional design team will review your first video and give you feedback.",
        card: "m",
    },
    {
        img: "",
        title: "Create tests & exercises",
        description:
            "Hands-on practices and assessments are important for learners. Our experienced team would work with you on designing hands-on assessments for students, ensuring successful outcomes.",
        card: "m",
    },
    {
        img: "",
        title: "Launch your course",
        description:
            "We will launch your course on TalentLabs Platform. We will sell your course through our B2C and B2B network, saving you the efforts of promoting your course.",
        card: "s",
    },
    {
        img: "",
        title: "Students support",
        description:
            "TalentLabs is different from other online training platforms where we are not only selling courses, but also providing comprehensive student services. These included mentoring, assignment reviews and career coaching. These are all on us.",
        card: "l",
    },
];

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
            </div>
        </div>

        <div class="section" id="instructor-duties">
            <div class="container">
                <div class="section-title">
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
                <div class="section-title">
                    <h2>
                        Why you should be
                        <br />
                        teaching with us
                    </h2>
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
    }

    &-why {
        &-list {
            margin-top: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 20px;

            .instructor-why-item {
                /* border: 1px solid gainsboro; */
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

            .section-title {
                text-align: center;
            }
        }

        &-list {
            margin-top: 50px;

            .instructor-duties-item {
                background-color: var(--bgLight);
                border-radius: 25px;
                padding: 70px 60px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 140px;

                img {
                    flex-shrink: 0;
                    width: 300px;
                    height: 190px;
                    object-fit: cover;
                    border-radius: 17px;
                    box-shadow: 0 5px 20px rgba(152, 167, 179, 0.1);
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
}
</style>
