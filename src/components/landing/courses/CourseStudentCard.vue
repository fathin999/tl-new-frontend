<script setup>
const props = defineProps({
    img: String,
    name: String,
    position: String,
    logo: String,
    quote: String,
});

const getImg = () => {
    return new URL(
        `/src/assets/database/courses/students/student-${props.img}.png`,
        import.meta.url
    );
};

const getLogo = () => {
    return new URL(
        `/src/assets/database/teams/team-logo-${props.logo}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="course-student-card">
        <img :src="getImg()" :alt="name" class="course-student-card-img" />

        <h4>{{ name }}</h4>

        <p>{{ `"${quote}"` }}</p>

        <span class="course-student-card-position">{{ position }}</span>

        <img :src="getLogo()" :alt="logo" class="course-student-card-logo" />
    </div>
</template>

<style scoped lang="scss">
.course-student-card {
    flex: 1;
    border: 1px solid gainsboro;
    padding: 30px;
    border-radius: 20px;

    &-img {
        $size: 70px;
        height: $size;
        width: $size;
        border-radius: 50%;
        background-color: var(--black);
    }

    h4 {
        margin: 10px 0;
        font-size: 1.2rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    &-position {
        margin: 35px 0 15px;
        display: block;
        font-size: 1rem;
        font-weight: 500;
        color: var(--textMedium);
    }

    &-logo {
        width: 50%;
        height: 30px;
        object-fit: contain;
        object-position: center left;
    }
}
</style>
