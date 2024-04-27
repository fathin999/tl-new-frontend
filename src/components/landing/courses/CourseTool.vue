<script setup>
import {getCourseTool} from "@/composable/backend/courses";

// PROPS
const props = defineProps({
    id: String,
});

// ------------------------------
// BACKEND
// ------------------------------
// Get course tool from id
const tool = getCourseTool(props.id);

// -------------------
// TO CHANGE - static image to change to img URL
// -------------------
// static images
const getImg = () => {
    return new URL(
        `/src/assets/database/courses/tools/course-tool-${props.id}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="course-tool">
        <img :src="getImg()" :alt="tool.title" />
        {{ tool.title }}
    </div>
</template>

<style scoped lang="scss">
.course-tool {
    font-size: 0.9rem;
    padding: 5px 15px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    background-color: var(--bgMedium);

    img {
        $size: 20px;
        height: $size;
        width: $size;
        margin-right: 10px;
    }
}
</style>
