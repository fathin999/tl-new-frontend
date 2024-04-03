<script setup>
import IconLocation from "../icons/jobs/IconLocation.vue";

const props = defineProps({
    title: String,
    logo: String,
    employer: String,
    location: String,
});

const getImageUrl = () => {
    return require(`/src/assets/jobs/employer-logo-${props.logo}.png`);
};
</script>

<template>
    <div class="job-item">
        <img :src="getImageUrl()" :alt="employer" class="job-item-logo" />

        <div class="job-item-title">
            <a href="/jobs/1">
                <h4>{{ title }}</h4>
            </a>
        </div>

        <a href="/employers">
            <p>{{ employer }}</p>
        </a>

        <div class="job-item-details">
            <IconLocation />
            <span> {{ location }} </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-item {
    $padding: 18px;
    $logoSize: 60px;

    width: 100%;
    margin-bottom: 15px;
    padding: $padding;
    padding-left: calc($padding * 2 + $logoSize);

    img {
        height: $logoSize;
        width: $logoSize;
        position: absolute;
        top: $padding;
        left: $padding;
    }

    &-title {
        margin: 3px 0 4px;

        h4 {
            font-size: 1.05rem;
            line-height: 1.5rem;
            min-height: 1.5rem;
            max-height: 3rem;
        }
    }

    p {
        font-size: 0.9rem;
        line-height: 1.4rem;
    }

    &-details {
        position: relative;
        margin: 0;
        margin-top: 15px;
        bottom: 0;
        left: 0;
        display: flex;

        svg {
            $size: 13px;
            height: $size;
            width: $size;
            fill: var(--textMedium);
            margin-right: 12px;
            margin-top: 4px;
        }

        span {
            font-size: 0.9rem;
            line-height: 1.4rem;
        }
    }
}
</style>
