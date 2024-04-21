<script setup>
import TestimonialCard from "./TestimonialCard.vue";
import Slider from "../slider/Slider.vue";

defineProps({
    testimonials: Array,
    blue: {type: Boolean, default: false},
});
</script>

<template>
    <Slider duration="35" gap="15" :blue="blue">
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
</style>
