<script setup>
import {getEmployerName} from "@/composable/employers/employers";
import IconStar from "../icons/IconStar.vue";
import IconBookmark from "../icons/jobs/IconBookmark.vue";
import IconLocationOutline from "@/components/icons/jobs/IconLocationOutline.vue";
import IconPeople from "@/components/icons/jobs/IconPeople.vue";
import IconBriefcase from "@/components/icons/jobs/IconBriefcase.vue";
import IconBuilding from "@/components/icons/jobs/IconBuilding.vue";
import IconSpanner from "@/components/icons/jobs/IconSpanner.vue";
import IconTime from "@/components/icons/jobs/IconTime.vue";
import {getTime} from "../../composable/jobs/jobs";

const props = defineProps({
    title: String,
    employer: String,
    location: String,
    type: String,
    remote: String,
    featured: Boolean,
    card: Boolean,
    role: String,
    createdAt: String,
});

// static images
const getLogo = () => {
    return new URL(
        `/src/assets/employers/employer-square-${props.employer}.png`,
        import.meta.url
    );
};

// methods

const getClass = () => {
    const cls = "job-item ";
    return props.card ? cls + "job-card" : cls;
};

const getRemoteClass = () => {
    const cls = "job-item-details-style style-";

    return props.remote === "Remote"
        ? cls + "red"
        : props.remote === "Onsite"
        ? cls + "blue"
        : cls + "orange";
};
</script>

<template>
    <div :class="getClass()">
        <img :src="getLogo()" :alt="employer" class="job-item-logo" />

        <div class="job-item-title">
            <a href="/jobs/1">
                <h4>{{ title }}</h4>
            </a>
        </div>

        <a href="/employers" class="job-item-employer">
            <p>{{ getEmployerName(employer) }}</p>
        </a>

        <div class="job-item-details">
            <IconLocationOutline />
            <span> {{ location }}</span>
        </div>

        <div class="job-item-details-two">
            <div class="job-item-details">
                <IconBriefcase />
                <span> {{ type }}</span>
            </div>

            <div class="job-item-details">
                <IconBuilding />
                <span> {{ remote }} </span>
            </div>

            <div class="job-item-details">
                <IconTime />
                <span>{{ getTime(createdAt) }}</span>
            </div>
        </div>

        <div class="job-item-details">
            <IconSpanner />
            <span>{{ role }}</span>
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
$padding: 27px;
$btnsWidth: 160px;

.job-item {
    $imgSize: 55px;
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
        font-size: 1rem;
        margin: 0 0 7px;
        color: var(--textLight);
    }

    &-employer:hover {
        p {
            color: var(--purple);
            text-decoration: underline;
        }
    }

    &-details {
        position: static;
        margin: 5px 0 0;
        display: flex;
        align-items: center;

        svg {
            $size: 14px;
            fill: var(--textMedium);
            height: $size;
            width: $size;
            margin-right: 15px;
        }

        span {
            font-size: 0.93rem;
            color: var(--black);

            b {
                padding: 0 7px;
            }
        }

        &-style {
            display: inline-block;
        }

        &-two {
            display: flex;
            gap: 50px;
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

.job-card {
    padding-left: 110px;
    padding-right: calc($btnsWidth + $padding);
    border-radius: 20px;
    margin-bottom: 15px;
    border: 1px solid var(--borderMedium);

    img {
        left: $padding;
    }

    .job-item-btns {
        right: $padding;
    }
}
</style>
