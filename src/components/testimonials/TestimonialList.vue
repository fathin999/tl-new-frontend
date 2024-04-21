<script setup>
import TestimonialCard from "./TestimonialCard.vue";
import Slider from "../slider/Slider.vue";

defineProps({
    testimonials: Array,
    blue: {type: Boolean, default: false},
});
</script>

<template>
    <Slider
        duration="35"
        gap="20"
        :style="{
            alignItems: 'flex-start',
        }"
        :blue="blue"
    >
        <TestimonialCard
            v-for="test in testimonials"
            :key="test.name"
            :name="test.name"
            :slug="test.slug"
            :comment="test.comment"
            :logo="test.logo"
        />
    </Slider>
</template>
