<script setup>
import Slider from "../../slider/Slider.vue";

const logos = [
    "gitlab",
    "tencent",
    "google",
    "aws",
    "cyberbay",
    "khazanah",
    "accenture",
    "pwc",
];

const getImage = (slug) => {
    return new URL(
        `/src/assets/employers/employer-${slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div id="trusted" class="blue section">
        <div class="container">
            <div class="section-title">
                <h3>Trusted by leading organizations</h3>
            </div>

            <div id="trusted-slider">
                <Slider duration="35" :blue="true">
                    <div class="trusted-slider-inner">
                        <img
                            v-for="logo in logos"
                            :alt="logo"
                            :key="logo"
                            :src="getImage(logo)"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#trusted {
    padding: 90px 0 80px;

    h3 {
        font-size: 1.7rem;
        text-align-last: center;
    }

    &-slider {
        margin: 50px auto 0;
        width: 900px;
    }
}

.trusted-slider-inner {
    $gap: 100px;
    display: flex;
    align-items: center;
    column-gap: $gap;
    padding-left: $gap;

    img {
        max-height: 40px;
        max-width: 120px;
        object-fit: contain;
    }
}

@media (max-width: 1300px) {
    #trusted {
        &-slider {
            width: 100%;
        }
    }

    .trusted-slider-inner {
        $gap: 120px;
        column-gap: $gap;
        padding-left: $gap;
    }
}

@media (max-width: 600px) {
    #trusted {
        padding: 60px 0 70px;

        h3 {
            font-size: 5.5vw;
            line-height: 7.5vw;
            text-align: center;
            width: 80%;
            margin: 0 auto;
        }

        &-slider {
            margin-top: 40px;
            width: 100%;
        }
    }

    .trusted-slider-inner {
        $gap: 50px;
        column-gap: $gap;
        padding-left: $gap;

        img {
            max-height: 30px;
            max-width: 90px;
        }
    }
}
</style>
