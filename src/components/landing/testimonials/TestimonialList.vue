<script setup>
import TestimonialCard from "./TestimonialCard.vue";
import Slider from "../slider/Slider.vue";

defineProps({
    testimonials: Array,
    blue: {type: Boolean, default: false},
    delay: {type: String, default: "0"},
});
</script>

<template>
    <Slider duration="45" gap="15" :blue="blue" :delay="delay">
        <div
            class="card-container"
            v-for="test in testimonials"
            :key="test.name"
        >
            <TestimonialCard
                :name="test.name"
                :slug="test.slug"
                :comment="test.comment"
                :logo="test.logo"
            />
        </div>
    </Slider>
</template>

<style scoped lang="scss">
.card-container {
    width: 310px;
}

@media (max-width: 700px) {
    .card-container {
        width: 270px;
    }
}

@media (max-width: 600px) {
    .card-container {
        width: 250px;
    }
}
</style>
