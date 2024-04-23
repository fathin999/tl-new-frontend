<script setup>
import CourseCard from "./CourseCard.vue";

defineProps({
    courses: Array,
});

defineOptions({
    inheritAttrs: false,
});
</script>

<template>
    <div id="courses-list" v-bind="$attrs">
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    row-gap: 40px;
}

/* @media (max-width: 900px) {
    #courses-list {
        grid-template-columns: 1fr 1fr;
        max-width: 700px;
    }
} */

@media (max-width: 700px) {
    #courses-list {
        gap: 20px;
        grid-template-columns: 1fr;
    }
}
</style>
