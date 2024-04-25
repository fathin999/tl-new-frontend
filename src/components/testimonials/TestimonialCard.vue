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

@media (max-width: 1300px) {
    $padding: 30px;

    .testimonial-card {
        padding: $padding;
        padding-bottom: 45px;

        &-photo {
            $size: 35px;
            height: $size;
            width: $size;
        }

        h3 {
            font-size: 0.95rem;
            margin-top: 7px;
            margin-left: 15px;
            line-height: 1.3rem;
        }

        p {
            font-size: 0.95rem;
            line-height: 1.35rem;
        }

        &-title {
            display: flex;
            margin-bottom: 17px;
        }

        &-logo {
            height: 25px;
            width: 90px;
            bottom: $padding;
            left: $padding;
        }
    }
}

@media (max-width: 700px) {
    $padding: 27px;

    .testimonial-card {
        padding: $padding;
        padding-bottom: 35px;

        h3 {
            max-height: 1.3rem;
            overflow: hidden;
            margin-right: 15px;
            width: 100%;
        }

        &-logo {
            bottom: 30px;
            left: $padding;
        }
    }
}

@media (max-width: 600px) {
    $padding: 20px;

    .testimonial-card {
        padding: $padding;
        padding-bottom: 25px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);
        border-radius: 15px;

        &-photo {
            $size: 32px;
            height: $size;
            width: $size;
        }

        &-logo {
            height: 22px;
            width: 85px;
            bottom: 25px;
            left: $padding;
        }
    }
}
</style>
