<script setup>
import Slider from "../slider/Slider.vue";
</script>

<template>
    <div id="programme-partners" class="container">
        <Slider duration="40">
            <img
                class="programme-partners-logos"
                id="programme-partners-logos-1"
                alt="logo"
                src="/src/assets/programmes/programme-logo-set.jpg"
            />
        </Slider>
    </div>
</template>

<style scoped lang="scss">
#programme-partners {
    img {
        height: 120px;
    }
}
</style>
