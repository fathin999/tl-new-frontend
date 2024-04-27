<script setup>
import CourseCard from "./CourseCard.vue";
import IconArrow from "../icons/IconArrow.vue";
import {ref} from "vue";

const slider = ref();

defineProps({
    courses: Array,
});

const btnClick = () => {
    const width = slider.value.children[0].getBoundingClientRect().width;
    const sliderWidth = slider.value.getBoundingClientRect().width;
    const total = slider.value.children.length;
    const allWidth = width * total;
    const maxScroll = allWidth - sliderWidth;

    if (slider.value.scrollLeft > maxScroll) {
        slider.value.scrollLeft = 0;
    } else {
        slider.value.scrollLeft += width;
    }
};
</script>

<template>
    <div id="courses-list-container">
        <div
            id="courses-list"
            class="courses-slider hide-scrollbar"
            ref="slider"
        >
            <CourseCard
                v-for="course in courses"
                :key="course.id"
                :badge="course.badge"
                :banner="course.banner"
                :title="course.title"
                :type="course.type"
                :level="course.level"
                :provider="course.provider"
                :providerLogo="course.providerLogo"
                :id="course.id"
            />
        </div>

        <div v-if="courses.length > 1">
            <div class="small-screen-slider-btn clickable" @click="btnClick()">
                <IconArrow />
            </div>

            <!-- <div
                class="small-screen-slider-btn clickable"
                @click="btnClick()"
                id="prev"
            >
                <IconArrow />
            </div> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
#courses-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    row-gap: 40px;

    .small-screen-slider-btn {
        display: none;
    }
}

@media (max-width: 900px) {
    #courses-list {
        grid-template-columns: 1fr 1fr;
        max-width: 700px;
    }
}

@media (max-width: 600px) {
    #courses-list-container {
        position: relative;
    }

    #courses-list {
        gap: 20px;
        grid-template-columns: 1fr;

        .small-screen-slider-btn {
            display: flex;
        }
    }

    .courses-slider {
        grid-template-columns: none;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory !important;
        grid-auto-flow: column;
        overflow-x: auto;
        width: 100vw !important;
        margin-left: -20px !important;
        padding: 0 20px;
    }

    .small-screen-slider-btn {
        right: -10px;
    }

    #prev {
        right: auto;
        left: -10px;
        transform: scaleX(-1);
    }

    .courses-slider > * {
        width: 80vw;
        max-width: 320px;
        scroll-snap-align: center;
    }
}
</style>
