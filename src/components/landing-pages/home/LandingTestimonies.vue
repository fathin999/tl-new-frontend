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

            <div class="section-title-center" id="testimonies-list">
                <h2>
                    Listen to our many <br />
                    <u>success</u> stories
                </h2>
            </div>

            <TestimonialList :testimonials="testimonials" :blue="true" />
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

    &-list {
        margin: 120px 0 60px;
    }
}
</style>
