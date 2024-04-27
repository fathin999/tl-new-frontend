<script setup>
import Button from "@/components/landing/button/Button.vue";

defineProps({
    title: String,
    logo: String,
    slug: String,
    partner: String,
    description: String,
    active: Boolean,
});

const getLogo = (logo) => {
    return new URL(
        `/src/assets/database/programmes/programme-logo-${logo}.png`,
        import.meta.url
    );
};

const getImg = (slug) => {
    return new URL(
        `/src/assets/database/programmes/programme-img-${slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <a class="pgm-item clickable" :href="`/special-programmes/${slug}`">
        <div class="pgm-item-img">
            <img :src="getImg(slug)" :alt="title" />
        </div>

        <div class="pgm-item-title">
            <h2>{{ title }}</h2>

            <div class="pgm-item-partner">
                <img :src="getLogo(logo)" :alt="title" />

                <span>{{ partner }}</span>
            </div>
        </div>

        <div class="pgm-item-description">
            <p>
                {{ description }}
            </p>
        </div>

        <Button :arrow="true" :outline="true" class="pgm-item-arrow">
            Apply now
        </Button>

        <div class="pgm-item-open" v-if="active">Application open</div>
    </a>
</template>

<style scoped lang="scss">
.pgm-item {
    border: 1px solid gainsboro;
    padding: 35px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;

    $size: 85px;

    &-title {
        $margin: 7px;
        $total: calc($size + $margin);

        display: grid;
        grid-template-columns: 1fr $total;
    }

    &-partner {
        z-index: 2;

        img {
            border: 8px solid white;
            height: $size;
            width: $size;
            border-radius: 50%;
            margin-top: -40px;
            background-color: white;
        }

        span {
            display: none;
        }
    }

    &-img {
        background-color: whitesmoke;
        height: 180px;
        border-radius: 10px;
        overflow: hidden;
        isolation: isolate;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: transform 1s ease-out;
        }
    }

    h2 {
        font-size: 1.3rem;
        line-height: 1.9rem;
        margin: 25px 0 15px;
    }

    &-description {
        flex: 1;
        margin-bottom: 40px;

        p {
            color: var(--textLight);
            font-size: 0.95rem;
            line-height: 1.4rem;
            width: 95%;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 0;
        padding-left: 0;
    }

    &-open {
        $margin: 20px;
        position: absolute;
        top: $margin;
        left: $margin;
        padding: 12px 20px;
        border-radius: 7px;
        font-size: 0.93rem;
        font-weight: 500;
        background-color: var(--yellow);
    }
}

@media (max-width: 1200px) {
    .pgm-item {
        padding: 30px;

        $size: 70px;

        &-title {
            $margin: 7px;
            $total: calc($size + $margin);
            grid-template-columns: 1fr $total;
        }

        &-img {
            height: 150px;
        }
    }
}

@media (max-width: 700px) {
    .pgm-item {
        border-radius: 15px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);
        padding: 18px;

        &-img {
            height: 100px;
        }

        &-title {
            display: block;
            margin: 20px 0 15px;

            img {
                $size: 30px;
                height: $size;
                width: $size;
                margin: 0;
                border: 1px solid gainsboro;
            }

            h2 {
                flex: 1;
                margin: 0;
                font-size: 1.2rem;
                line-height: 1.7rem;
            }
        }

        &-partner {
            display: flex;
            align-items: center;
            margin-top: 7px;

            img {
                $size: 27px;
                height: $size;
                width: $size;
            }

            span {
                display: block;
                font-size: 0.9rem;
                margin-left: 10px;
                line-height: 1.3rem;
                white-space: nowrap;
                overflow: hidden;
                width: calc(100vw - 150px);
                text-overflow: ellipsis;
            }
        }

        &-description {
            margin-bottom: 20px;
        }

        a {
            font-size: 0.95rem;
            padding: 12px;
        }
    }
}

@media (hover: hover) {
    .pgm-item:hover {
        border-color: var(--purple);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);

        .pgm-item-arrow {
            text-align: center;

            svg {
                transform: translateX(5px);
            }
        }

        .pgm-item-img {
            img {
                transform: scale(1.1);
            }
        }
    }
}
</style>
