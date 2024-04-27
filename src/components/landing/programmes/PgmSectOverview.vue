<script setup>
import Button from "@/components/landing/button/Button.vue";

const props = defineProps({
    slug: String,
    paragraph: String,
});

const emit = defineEmits(["scrollToPathways"]);

const handleClick = () => {
    emit("scrollToPathways");
};

const getPartners = (slug) => {
    return new URL(
        `/src/assets/database/programmes/programme-partner-logos-${slug}.png`,
        import.meta.url
    );
};

const getImg = (slug) => {
    return new URL(
        `/src/assets/database/programmes/programme-overview-${slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="section blue" id="programme-overview">
        <div class="container">
            <div class="section-title">
                <img :src="getPartners(slug)" alt="" />

                <h2>
                    Embark upon your
                    <br />
                    <u>tech journey</u>
                </h2>

                <p v-html="paragraph"></p>

                <Button :arrow="true" @click="handleClick">
                    Explore career pathways
                </Button>
            </div>

            <div id="programme-overview-img">
                <img :src="getImg(slug)" alt="" />
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

@media (max-width: 1100px) {
    #programme-overview {
        .container {
            gap: 110px;
            grid-template-columns: 1fr 350px;
        }
    }
}

@media (max-width: 1100px) {
    #programme-overview {
        .container {
            display: block;
            width: 650px;
            margin: auto;
        }

        &-img {
            display: none;
        }
    }
}

@media (max-width: 700px) {
    #programme-overview {
        .container {
            display: block;
            width: auto;
            margin: 0 20px;
        }

        .section-title {
            img {
                height: auto;
                width: 90%;
                margin-bottom: 35px;
            }

            h2 {
                font-size: 1.7rem;
                line-height: 2.2rem;
            }

            p {
                margin: 20px 0 40px;
            }
        }
    }
}
</style>
