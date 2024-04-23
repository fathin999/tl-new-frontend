<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import {getLandingTestimonials} from "@/composable/testimonials/testimonials";
import TestimonialList from "@/components/testimonials/TestimonialList.vue";

const testimonials = getLandingTestimonials();
</script>

<template>
    <div class="section blue" id="testimonies">
        <div class="container">
            <div id="testimonies-top">
                <div class="section-title">
                    <h2>
                        Our students <u>love</u> <br />
                        what we do
                    </h2>

                    <p>
                        Build digital skills with our online courses and
                        certificates. Developed with the guidance of our leading
                        practitioners from world-class universities and
                        companies, our curriculum is primed for industry
                        relevance.

                        <br />
                        <br />

                        At our core, we are driven by the success and
                        satisfaction of our students, who frequently express
                        their appreciation for our comprehensive educational
                        approach. Our tailored courses and dedicated instructors
                        not only meet the diverse needs of our students but also
                        exceed their expectations.
                    </p>
                </div>

                <div id="testimonies-images">
                    <img
                        src="/src/assets/landing-page/testimonies/landing-testimony.png"
                        alt=""
                    />
                </div>
            </div>

            <div class="section-title-center" id="testimonies-title">
                <h2>
                    Listen to our many <br />
                    <u>success stories</u>
                </h2>
            </div>

            <TestimonialList
                :testimonials="testimonials.first"
                :blue="true"
                :outerStyle="{marginBottom: '20px'}"
            />
            <TestimonialList
                :testimonials="testimonials.second"
                :blue="true"
                :style="{animationDelay: '2s'}"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
#testimonies {
    &-top {
        display: grid;
        grid-template-columns: 1fr 570px;
        align-items: center;
        gap: 120px;
    }

    .section-title {
        p {
            width: 100%;
        }
    }

    &-images {
        height: 400px;
        position: relative;

        img {
            object-fit: contain;
            height: 100%;
            width: 100%;
            object-position: center right;
        }
    }

    &-title {
        margin: 120px 0 60px;
    }
}

@media (max-width: 1300px) {
    #testimonies {
        &-top {
            grid-template-columns: 1fr 50%;
            gap: 80px;
        }

        &-images {
            width: 100%;
        }
    }
}

@media (max-width: 1100px) {
    #testimonies {
        $width: 450px;

        &-top {
            grid-template-columns: 1fr $width;
            gap: 50px;
        }

        &-images {
            width: $width;
        }
    }
}

@media (max-width: 950px) {
    #testimonies {
        &-top {
            display: flex;
            flex-direction: column-reverse;
        }

        &-images {
            width: 70%;
            height: auto;
            margin-bottom: 20px;

            img {
                object-position: center;
            }
        }

        .section-title {
            text-align: center;

            p {
                width: 90%;
                margin-right: auto;
                margin-left: auto;
            }
        }
    }
}

@media (max-width: 700px) {
    #testimonies {
        &-images {
            width: 100%;
        }

        .section-title {
            p {
                margin-top: 30px;
            }
        }
    }
}

@media (hover: hover) {
}
</style>
