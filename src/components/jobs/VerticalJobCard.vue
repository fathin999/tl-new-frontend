<script setup>
import IconStar from "../icons/IconStar.vue";
import IconBookmark from "../icons/jobs/IconBookmark.vue";

defineProps({
    logo: String,
    title: String,
    employer: String,
    location: String,
    type: String,
    remote: String,
    featured: Boolean,
});
</script>

<template>
    <div class="job-item">
        <img :src="logo" :alt="employer" class="job-item-logo" />

        <div class="job-item-title">
            <a href="/jobs/1">
                <h4>{{ title }}</h4>
            </a>
        </div>

        <a href="/employers">
            <p>{{ employer }}</p>
        </a>

        <div class="job-item-details">
            <span> {{ location }} <b>·</b> {{ type }} </span>

            <div class="job-item-details-style style-blue">{{ remote }}</div>

            <br />
        </div>

        <div v-if="featured" class="job-item-featured">
            <IconStar />
            <span> Featured </span>
        </div>

        <div class="job-item-btns">
            <a class="btn-primary-outline btn-s">
                <IconBookmark />
            </a>

            <a class="btn-primary-outline btn-s"> Apply </a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-item {
    $padding: 25px;
    $imgSize: 60px;
    $leftPadding: calc($imgSize + 30px);
    $btnsWidth: 160px;

    width: 100%;
    padding: $padding $btnsWidth $padding $leftPadding;
    border-radius: 0;
    border-right: none;
    border-left: none;
    border-top: none;

    img {
        height: $imgSize;
        width: $imgSize;
        position: absolute;
        top: $padding;
        left: 0;
    }

    &-title {
        margin: 3px 0 0;

        h4 {
            font-size: 1.1rem;
            line-height: 1.6rem;
            min-height: 1.7rem;
        }
    }

    p {
        font-size: 0.9rem;
    }

    &-details {
        position: static;
        margin: 5px 0 0;

        span {
            font-size: 0.9rem;
        }

        &-style {
            display: inline-block;
        }
    }

    &-featured {
        display: flex;
        margin-top: 4px;
        align-items: center;

        span {
            font-size: 0.85rem;
            margin-top: 2px;
        }

        svg {
            $size: 13px;
            height: $size;
            width: $size;
            fill: rgb(189, 189, 189);
            margin-right: 10px;
        }
    }

    &-btns {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: $btnsWidth;
        display: flex;
        justify-content: flex-end;
        /* align-items: center; */
        padding-top: 30px;
        gap: 10px;
    }

    .btn-s {
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            $size: 16px;
            height: $size;
            width: $size;
            margin: auto;
        }
    }
}
</style>
