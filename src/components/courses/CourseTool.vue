<script setup>
import {getCourseTool} from "@/composable/courses/courses";

const props = defineProps({
    logo: String,
});

const tool = getCourseTool(props.logo);

const getImg = () => {
    return new URL(
        `/src/assets/courses/tools/course-tool-${props.logo}.png`,
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
