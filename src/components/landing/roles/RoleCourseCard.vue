<script setup>
const props = defineProps({
    course: Object,
});

// static images
const getLogo = () => {
    return new URL(
        `/src/assets/database/courses/course-provider-${props.course.providerLogo}.png`,
        import.meta.url
    );
};

const getBadge = () => {
    return new URL(
        `/src/assets/database/courses/course-badge-${props.course.badge}.png`,
        import.meta.url
    );
};
</script>

<template>
    <a class="course-card" :href="`/courses/${course.id}`">
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

@media (max-width: 600px) {
    .course-card {
        padding: 17px;
        border-radius: 15px;

        &-badge {
            height: 50px;
        }

        h4 {
            font-size: 1rem;
            line-height: 1.4rem;
            margin: 10px 0 20px;
        }

        &-provider {
            img {
                height: 27px;
                margin-right: 10px;
            }

            span {
                color: var(--textLight);
            }
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
