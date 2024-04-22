<script setup>
import Slider from "../../slider/Slider.vue";
</script>

<template>
    <div id="trusted" class="blue section">
        <div class="container">
            <div class="section-title">
                <h3>Trusted by leading organizations</h3>
            </div>

            <div id="trusted-slider">
                <Slider duration="50" :blue="true">
                    <img
                        alt="logo"
                        src="/src/assets/landing-page/trusted/logo-set-all.png"
                    />
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
        margin: 40px auto 0;
        width: 900px;

        img {
            height: 70px;
        }
    }
}
</style>
