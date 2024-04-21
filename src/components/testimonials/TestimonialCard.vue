<script setup>
defineProps({
    name: String,
    slug: String,
    comment: String,
    logo: String,
});

const getStudentPhoto = (slug) => {
    return new URL(`/src/assets/students/student-${slug}.png`, import.meta.url);
};

const getStudentCompany = (logo) => {
    return new URL(
        `/src/assets/employers/employer-${logo}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="testimonial-card">
        <div class="testimonial-card-title">
            <img
                :src="getStudentPhoto(slug)"
                alt=""
                class="testimonial-card-photo"
            />

            <h3>
                {{ name }}
            </h3>
        </div>

        <p>{{ comment }}</p>

        <img
            :src="getStudentCompany(logo)"
            alt=""
            class="testimonial-card-logo"
        />
    </div>
</template>

<style scoped lang="scss">
$padding: 35px;

.testimonial-card {
    border-radius: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    padding: $padding;
    padding-bottom: 50px;
    border: 1px solid gainsboro;
    background-color: white;
    position: relative;
    width: 100%;
    height: 100%;

    &-photo {
        $size: 45px;
        height: $size;
        width: $size;
    }

    h3 {
        font-size: 1.05rem;
        line-height: 1.4rem;
        margin-top: 15px;
    }

    p {
        font-size: 0.92rem;
        line-height: 1.3rem;
        display: block;
        margin: 7px 0 50px;
        color: var(--textMedium);
    }

    &-logo {
        width: 100px;
        height: 30px;
        object-fit: contain;
        object-position: bottom left;
        position: absolute;
        bottom: $padding;
        left: $padding;
    }
}
</style>
