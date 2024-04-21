<script setup>
import IconArrow from "../icons/IconArrow.vue";

const props = defineProps({
    slug: String,
    paragraph: String,
});

defineEmits(["scrollToPathways"]);

const getPartners = () => {
    return new URL(
        `/src/assets/programmes/programme-partner-logos-${props.slug}.png`,
        import.meta.url
    );
};

const getImg = () => {
    return new URL(
        `/src/assets/programmes/programme-overview-${props.slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="section blue" id="programme-overview">
        <div class="container">
            <div class="section-title">
                <img :src="getPartners()" alt="" />

                <h2>
                    Embark upon your
                    <br />
                    <u>tech journey</u>
                </h2>

                <p>
                    {{ paragraph }}
                </p>

                <a
                    class="btn-arrow btn-primary"
                    @click="$emit('scrollToPathways')"
                >
                    Explore career pathways
                    <IconArrow />
                </a>
            </div>

            <div id="programme-overview-img">
                <img :src="getImg()" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#programme-overview {
    .container {
        display: grid;
        grid-template-columns: 1fr 400px;
        justify-content: space-between;
        gap: 200px;
    }

    .section-title {
        img {
            width: 100%;
            height: 35px;
            object-fit: contain;
            object-position: center left;
            margin-bottom: 40px;
        }

        p {
            width: 100%;
            margin: 40px 0 60px;
            color: var(--black);
            font-size: 1.1rem;
            line-height: 1.7rem;
        }

        a {
            position: relative;
        }
    }

    &-img {
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>
