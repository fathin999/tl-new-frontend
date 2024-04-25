<script setup>
const props = defineProps({
    badge: String,
    banner: String,
    title: String,
    type: String,
    level: String,
    provider: String,
    providerLogo: String,
    href: {type: String, default: "/courses/1"},
});

// static images
const getLogo = () => {
    return new URL(
        `/src/assets/courses/course-provider-${props.providerLogo}.png`,
        import.meta.url
    );
};

const getBadge = () => {
    return new URL(
        `/src/assets/courses/course-badge-${props.badge}.png`,
        import.meta.url
    );
};

const getBanner = () => {
    return new URL(
        `/src/assets/courses/course-banner-${props.banner}.png`,
        import.meta.url
    );
};
</script>

<template>
    <a class="courses-item" :href="href">
        <div class="courses-item-img">
            <div class="courses-item-banner-container">
                <img
                    :src="getBanner()"
                    :alt="title"
                    class="courses-item-banner"
                />
            </div>

            <div class="courses-item-badge">
                <img :src="getBadge()" :alt="title" />
            </div>
        </div>

        <div class="courses-item-title">
            <h4>{{ title }}</h4>
        </div>

        <!-- <span>{{ level }} <b>·</b> {{ type }}</span> -->
        <span>{{ level }}</span>

        <div class="courses-item-provider">
            <img :src="getLogo()" :alt="provider" />

            <span>{{ provider }}</span>
        </div>
    </a>
</template>

<style scoped lang="scss">
.courses-item {
    $padding: 22px;
    $imgMargin: calc(-1 * $padding);
    padding: $padding;
    padding-bottom: 110px;
    transition: boxShadow 0.3s ease-out;
    border-radius: 17px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border: 1px solid var(--borderMedium);
    user-select: none;
    cursor: pointer;

    h4 {
        font-size: 1.1rem;
        line-height: 1.6rem;
        min-height: 1.2rem;
        max-height: 3.3rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    span {
        font-size: 0.9rem;
        line-height: 1.4rem;
        color: var(--textMedium);

        b {
            display: inline-block;
            padding: 0 7px;
        }
    }

    &-img {
        margin: $imgMargin $imgMargin 0;
        position: relative;
        isolation: isolate;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: transform 0.7s ease-out;
        }
    }

    &-banner-container {
        height: 80px;
        overflow: hidden;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        isolation: isolate;
    }

    &-badge {
        $size: 80px;

        position: absolute;
        height: $size;
        width: $size;
        left: $padding;
        bottom: -30px;
        border: 1px solid rgb(229, 229, 229);
        border-radius: 10px;
        z-index: 5;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }

    &-title {
        margin: 45px 0 20px;
    }

    &-provider {
        $size: 30px;
        height: $size;
        left: $padding;
        bottom: $padding;
        right: $padding;
        font-size: 0.9rem;
        position: absolute;
        display: flex;
        align-items: center;

        img {
            height: $size;
            width: $size;
            border-radius: 7px;
            margin-right: 12px;
            border: 1px solid var(--borderMedium);
        }
    }
}

@media (max-width: 700px) {
    .courses-item {
        $size: 65px;
        $padding: 20px;
        padding: $padding;
        padding-bottom: 55px;
        background: white;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
        border-radius: 15px;

        &-banner-container {
            height: 55px;
        }

        &-badge {
            height: $size;
            width: $size;
            bottom: -35px;
            /* left: auto; */
            left: $padding;
        }

        &-title {
            margin: 45px 0 13px;
        }

        h4 {
            font-size: 1.05rem;
            line-height: 1.55rem;
            min-height: 0;
            max-height: none;
            margin-right: calc($padding + $size);
            -webkit-line-clamp: 4;
            margin: 0;
        }

        span {
            font-size: 0.9rem;
            color: var(--textLight);
        }

        &-provider {
            $size: 25px;
            height: $size;
            color: var(--textMedium);

            img {
                margin-right: 10px;
                height: $size;
                width: $size;
                border-radius: 50%;
            }
        }
    }
}

@media (hover: hover) {
    .courses-item:hover {
        border-color: var(--purple);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }
}
</style>
