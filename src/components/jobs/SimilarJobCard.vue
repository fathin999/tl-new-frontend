<script setup>
import IconLocation from "../icons/jobs/IconLocation.vue";
import IconLocationOutline from "../icons/jobs/IconLocationOutline.vue";
import {getEmployerName} from "@/composable/employers/employers";
import {getJobLink} from "@/composable/jobs/jobs";

const props = defineProps({
    title: String,
    logo: String,
    employer: String,
    location: String,
});

// static images

const getLogo = () => {
    return new URL(
        `/src/assets/employers/employer-square-${props.employer}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="job-item">
        <img :src="getLogo()" :alt="employer" class="job-item-logo" />

        <div class="job-item-title">
            <a :href="getJobLink(title)">
                <h4>{{ title }}</h4>
            </a>
        </div>

        <a :href="`/employers/${employer}`">
            <p>{{ getEmployerName(employer) }}</p>
        </a>

        <div class="job-item-details">
            <IconLocationOutline />
            <span> {{ location }} </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-item {
    $padding: 20px;
    $logoSize: 50px;

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
            $size: 15px;
            height: $size;
            width: $size;
            fill: var(--textMedium);
            margin-right: 10px;
            margin-top: 4px;
        }

        span {
            font-size: 0.9rem;
            line-height: 1.4rem;
        }
    }
}
</style>
