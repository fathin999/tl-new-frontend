<script setup>
const props = defineProps({
    icon: String,
    title: String,
});

const getIcon = () => {
    return new URL(
        `/src/assets/database/courses/why/course-why-${props.icon}.svg`,
        import.meta.url
    );
};
</script>

<template>
    <div class="course-section-approach">
        <div class="course-section-approach-img">
            <img :src="getIcon()" :alt="icon" />
        </div>

        <p>
            {{ title }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.course-section-approach-img {
    $size: 50px;
    height: $size;
    width: $size;
    margin-bottom: 15px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}
</style>
