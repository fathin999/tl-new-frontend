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

const getBannerUrl = () => {
    return new URL(
        `/src/assets/courses/course-banner-${props.banner}.png`,
        import.meta.url
    );
};

const getBadgeUrl = () => {
    return new URL(
        `/src/assets/courses/course-badge-${props.badge}.png`,
        import.meta.url
    );
};

const getLogoUrl = () => {
    return new URL(
        `/src/assets/courses/course-provider-${props.providerLogo}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="courses-item">
        <div class="courses-item-img">
            <div class="courses-item-banner-container">
                <img
                    :src="getBannerUrl()"
                    :alt="title"
                    class="courses-item-banner"
                />
            </div>

            <div class="courses-item-badge">
                <img :src="getBadgeUrl()" :alt="title" />
            </div>
        </div>

        <div class="courses-item-title">
            <h4>{{ title }}</h4>
        </div>

        <span>{{ level }} <b>·</b> {{ type }}</span>

        <div class="courses-item-provider">
            <img :src="getLogoUrl()" :alt="provider" />

            <span>{{ provider }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.courses-item {
    $padding: 22px;
    $imgMargin: calc(-1 * $padding);
    padding: $padding;
    padding-bottom: 110px;

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
</style>
