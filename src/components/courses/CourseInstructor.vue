<script setup>
import {getInstructor} from "@/composable/courses/courses";

const props = defineProps({
    id: String,
});

const instructor = getInstructor(props.id);
</script>

<template>
    <div class="course-instructor clickable">
        <div class="course-instructor-title">
            <h4>{{ instructor.name }}</h4>
            <span>{{ instructor.position }}</span>
        </div>

        <div class="course-instructor-img"></div>

        <p>{{ instructor.description }}</p>
    </div>
</template>

<style scoped lang="scss">
.course-instructor {
    border: 1px solid var(--borderMedium);
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;

    &-title {
        flex: 1;

        span {
            font-size: 1rem;
        }
    }

    &-img {
        $size: 70px;
        height: $size;
        width: $size;
        background-color: var(--lightPurple);
        border-radius: 50%;
    }

    p {
        width: 100%;
        font-size: 0.95rem;
        margin-top: 20px;
        line-height: 1.4rem;
        padding-right: 10%;
    }
}

.course-instructor:hover {
    border-color: var(--purple);
}
</style>
