<script setup>
const props = defineProps({
    course: Object,
    href: {type: String, default: "/courses/1"},
});

// static images
const getLogo = () => {
    return new URL(
        `/src/assets/courses/course-provider-${props.course.providerLogo}.png`,
        import.meta.url
    );
};

const getBadge = () => {
    return new URL(
        `/src/assets/courses/course-badge-${props.course.badge}.png`,
        import.meta.url
    );
};
</script>

<template>
    <a class="course-card" :href="`/courses/${course.slug}`">
        <div class="course-card-badge">
            <img :src="getBadge()" :alt="course.title" />
        </div>

        <h4>{{ course.title }}</h4>

        <div class="course-card-provider">
            <img :src="getLogo()" :alt="course.provider" />

            <span>{{ course.provider }}</span>
        </div>
    </a>
</template>

<style scoped lang="scss">
.course-card {
    border: 1px solid gainsboro;
    border-radius: 20px;
    padding: 25px;
    background-color: white;
    display: block;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.07);

    &-badge {
        height: 60px;

        img {
            height: 100%;
            border: 1px solid gainsboro;
            border-radius: 10px;
            background-color: white;
        }
    }

    h4 {
        margin: 20px 0 30px;
        font-size: 1.1rem;
    }

    &-provider {
        display: flex;
        align-items: center;

        img {
            height: 30px;
            border-radius: 50%;
            border: 1px solid gainsboro;
            margin-right: 15px;
        }

        span {
            font-size: 0.9rem;
            color: var(--textMedium);
        }
    }
}

@media (hover: hover) {
    .course-card:hover {
        border: 1px solid var(--purple);
        box-shadow: 0 7px 15px rgba(0, 0, 0, 0.07);
    }
}
</style>
