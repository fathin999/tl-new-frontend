<script setup>
import Slider from "../slider/Slider.vue";

const logos = [
    "mbsb",
    "google",
    "gitlab",
    "samsung",
    "maybank",
    "khazanah",
    "aws",
    "fuji",
    "unilever",
    "proximax",
    "pwc",
    "deloitte",
    "accenture",
    "tencent",
    "aia",
    "cyberbay",
    "fave",
    "tvb",
    "lifung",
    "hl",
    "123rf",
];

const getImage = (slug) => {
    return new URL(
        `/src/assets/database/employers/employer-${slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="container">
        <Slider duration="35">
            <div class="programme-slider">
                <img
                    v-for="logo in logos"
                    :alt="logo"
                    :key="logo"
                    :src="getImage(logo)"
                />
            </div>
        </Slider>
    </div>
</template>

<style scoped lang="scss">
.programme-slider {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 2000px;
    column-gap: 80px;
    padding-left: 80px;
    row-gap: 40px;

    img {
        max-height: 30px;
        max-width: 120px;
        object-fit: contain;
    }
}

@media (max-width: 900px) {
    .programme-slider {
        width: 1200px;
        row-gap: 45px;
        column-gap: 70px;
        padding-left: 70px;

        img {
            max-height: 27px;
            max-width: 110px;
        }
    }
}

@media (max-width: 700px) {
    .programme-slider {
        $gap: 39px;
        width: 850px;
        row-gap: 40px;
        column-gap: $gap;
        padding-left: $gap;

        img {
            max-height: 25px;
            max-width: 90px;
        }
    }
}
</style>
