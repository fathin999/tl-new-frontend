<script setup>
import CourseCard from "./CourseCard.vue";

defineProps({
    courses: Array,
});
</script>

<template>
    <div id="courses-list">
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
        />
    </div>
</template>

<style scoped lang="scss">
#courses-list {
    $gap: 20px;

    display: flex;
    flex-wrap: wrap;
    gap: $gap;
    row-gap: 40px;

    /* .courses-item {
        width: calc((100% - $gap * 2) / 3);
    } */
}
</style>
