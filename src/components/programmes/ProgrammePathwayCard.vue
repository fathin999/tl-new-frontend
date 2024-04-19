<script setup>
defineProps({
    img: String,
    title: String,
    description: String,
});

const getPathwayImg = (img) => {
    return new URL(
        `/src/assets/programmes/programme-pathway-${img}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="programme-pathway-item">
        <div class="programme-pathway-item-img">
            <img :src="getPathwayImg(img)" alt="" />
        </div>

        <div class="programme-pathway-item-text">
            <h3>{{ title }}</h3>

            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.programme-pathway-item {
    $imgWidth: 90px;

    border: 1px solid gainsboro;
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: $imgWidth 1fr;
    gap: 35px;

    &-img {
        width: $imgWidth;

        img {
            width: 100%;
        }
    }

    &-text {
        h3 {
            font-size: 1.7rem;
        }

        p {
            margin: 10px 0 20px;
        }
    }
}
</style>
