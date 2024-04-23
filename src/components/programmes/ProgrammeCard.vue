<script setup>
import IconArrow from "../icons/IconArrow.vue";

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
        `/src/assets/programmes/programme-logo-${logo}.png`,
        import.meta.url
    );
};

const getImg = (slug) => {
    return new URL(
        `/src/assets/programmes/programme-img-${slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <a class="pgm-item clickable" href="/special-programmes/1">
        <div class="pgm-item-img">
            <img :src="getImg(slug)" :alt="title" />
        </div>

        <div class="pgm-item-title">
            <h2>{{ title }}</h2>
            <img :src="getLogo(logo)" :alt="title" />
        </div>

        <div class="pgm-item-description">
            <p>
                {{ description }}
            </p>
        </div>

        <a class="btn-primary-outline btn-arrow">
            Apply now
            <IconArrow />
        </a>

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

    &-title {
        $size: 85px;
        $margin: 7px;
        $total: calc($size + $margin);

        display: grid;
        grid-template-columns: 1fr $total;

        img {
            border: 8px solid white;
            height: $size;
            width: $size;
            border-radius: 50%;
            margin-top: -60px;
            z-index: 2;
            background-color: white;
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

    &-arrow {
        font-weight: 500;
        font-size: 0.95rem;
        color: var(--purple);
        display: flex;
        align-items: center;
        transition: color 0.3s ease-out;
        margin-bottom: 10px;

        svg {
            $size: 12px;
            height: $size;
            width: $size;
            margin-left: 10px;
            fill: var(--purple);
            transition: transform 0.3s ease-out, fill 0.3s ease-out;
        }
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

@media (hover: hover) {
    .pgm-item:hover {
        border-color: var(--purple);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);

        .pgm-item-arrow {
            color: var(--black);

            svg {
                fill: var(--black);
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

@media (max-width: 700px) {
    .pgm-item {
        padding: 25px;

        &-img {
            height: 150px;
        }
    }
}
</style>
