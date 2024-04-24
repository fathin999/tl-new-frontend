<script setup>
import {getTestimonialsFromProgramme} from "@/composable/testimonials/testimonials";
import TestimonialList from "../testimonials/TestimonialList.vue";

const props = defineProps({
    offers: Array,
    slug: String,
});

const testimonials = getTestimonialsFromProgramme("kyouth");

const getImg = (img) => {
    return new URL(
        `/src/assets/programmes/programme-offer-${img}.svg`,
        import.meta.url
    );
};
</script>

<template>
    <div class="section" id="programme-outcomes">
        <div class="container">
            <div class="section-title-center">
                <h2>What we offer</h2>
            </div>

            <div id="programme-outcomes-offer">
                <div
                    class="offer-card"
                    v-for="offer in offers"
                    :key="offer.title"
                >
                    <img :src="getImg(offer.img)" alt="" />

                    <h3>{{ offer.title }}</h3>

                    <p>{{ offer.description }}</p>
                </div>
            </div>

            <div id="programme-outcomes-testimonials">
                <div class="section-title-center">
                    <h2>Hear from our <u>graduates</u></h2>
                </div>

                <TestimonialList :testimonials="testimonials" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#programme-outcomes {
    &-offer {
        margin: 40px 0 70px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 15px;

        .offer-card {
            border: 1px solid gainsboro;
            border-radius: 20px;
            padding: 25px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                height: 55px;
                object-fit: contain;
                width: 100%;
                margin-top: 10px;
            }

            h3 {
                font-size: 1.2rem;
                margin: 25px 0 15px;
            }

            p {
                color: var(--textMedium);
            }
        }
    }

    &-testimonials {
        margin-top: 140px;

        .section-title-center {
            margin-bottom: 60px;
        }
    }
}

@media (max-width: 1100px) {
    #programme-outcomes {
        &-offer {
            grid-template-columns: 1fr 1fr;
        }
    }
}

@media (max-width: 600px) {
    #programme-outcomes {
        &-offer {
            grid-template-columns: 1fr;

            .offer-card {
                padding: 22px 25px;

                img {
                    height: 45px;
                    margin-top: 5px;
                }

                h3 {
                    margin: 20px 0 10px;
                }
            }
        }
    }
}
</style>
