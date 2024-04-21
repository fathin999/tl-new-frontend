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
.testimonial-card {
    border-radius: 20px;
    width: 350px;
    flex-shrink: 0;
    flex-grow: 0;
    padding: 35px;
    border: 1px solid gainsboro;
    background-color: white;

    &-photo {
        $size: 70px;
        height: $size;
        width: $size;
    }

    h3 {
        font-size: 1.1rem;
        line-height: 1.4rem;
        margin-top: 15px;
    }

    p {
        display: block;
        margin: 20px 0 50px;
    }

    &-logo {
        width: 120px;
        margin-top: 10px;
        height: 30px;
        object-fit: contain;
        object-position: bottom left;
    }
}
</style>
