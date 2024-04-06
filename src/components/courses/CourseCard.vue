<script setup>
const props = defineProps({
    badge: String,
    banner: String,
    title: String,
    type: String,
    level: String,
    provider: String,
    providerLogo: String,
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
    <a class="courses-item" href="/courses/1">
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

        <span>{{ level }} <b>·</b> {{ type }}</span>

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

    h4 {
        font-size: 1.1rem;
        line-height: 1.6rem;
        min-height: 1.2rem;
        max-height: 3.3rem;
    }

    span {
        font-size: 0.9rem;

        b {
            padding: 0 7px;
        }
    }

    &-img {
        margin: $imgMargin $imgMargin 0;
    }

    &-banner-container {
        height: 80px;
    }

    &-badge {
        left: $padding;
        bottom: -30px;
    }

    &-title {
        margin: 45px 0 10px;
    }

    &-provider {
        $size: 30px;
        height: $size;
        left: $padding;
        bottom: $padding;
        right: $padding;
        font-size: 0.9rem;

        img {
            height: $size;
            width: $size;
            border-radius: 7px;
        }
    }
}

.courses-item:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}
</style>
