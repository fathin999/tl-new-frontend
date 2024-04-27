<script setup>
import IconStar from "../icons/IconStar.vue";
import IconBookmark from "../icons/jobs/IconBookmark.vue";
import IconLocationOutline from "@/components/landing/icons/jobs/IconLocationOutline.vue";
import IconBriefcase from "@/components/landing/icons/jobs/IconBriefcase.vue";
import IconBuilding from "@/components/landing/icons/jobs/IconBuilding.vue";
import IconSpanner from "@/components/landing/icons/jobs/IconSpanner.vue";
import IconTime from "@/components/landing/icons/jobs/IconTime.vue";
import {getTime} from "@/composable/utilities/jobs";
import {applyForJob, bookmarkJob} from "@/composable/backend/jobs";
import {getEmployerName} from "@/composable/employers/employers";
import Button from "../button/Button.vue";

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
    id: String,
});

// -------------------
// BACKEND
// -------------------

// BACKEND - applyJob
const clickApply = () => applyForJob(props.id);

// BACKEND - applyJob
const clickBookmark = () => bookmarkJob(props.id);

// -------------------
// TO CHANGE - static image to change to img URL
// -------------------
// static images
const getLogo = () => {
    return new URL(
        `/src/assets/database/employers/employer-square-${props.employer}.png`,
        import.meta.url
    );
};

// View methods

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
            <a :href="`/jobs/${id}`">
                <h4>{{ title }}</h4>
            </a>
        </div>

        <a :href="`/employers/${employer}`" class="job-item-employer">
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

        <div class="job-item-details" id="job-item-role">
            <IconSpanner />
            <span>{{ role }}</span>
        </div>

        <div v-if="featured" class="job-item-featured">
            <IconStar />
            <span> Featured </span>
        </div>

        <div class="job-item-btns">
            <Button :outline="true" :small="true" @click="clickBookmark">
                <IconBookmark />
            </Button>

            <Button :small="true" :outline="true" @click="clickApply">
                Apply
            </Button>
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

        a {
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                $size: 16px;
                height: $size;
                width: $size;
                margin: auto;
                fill: var(--purple);
            }
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

@media (max-width: 700px) {
    .job-card,
    .job-item {
        border: 1px solid gainsboro;
        border-radius: 15px;
        padding: 20px;
        display: block;
        margin-bottom: 22px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);

        img {
            $size: 50px;
            height: $size;
            width: $size;
            position: relative;
            top: 0;
            border-radius: 12px;
        }

        &-title {
            margin: 13px 0 5px;

            h4 {
                height: auto;
                min-height: 0;
                max-height: none;
                font-size: 1.05rem;
                line-height: 1.55rem;
                overflow: visible;
            }
        }

        p {
            margin-bottom: 15px;
        }

        &-details {
            span {
                font-size: 0.9rem;
            }

            svg {
                flex-shrink: 0;
            }

            &-two {
                display: flex;
                flex-wrap: wrap;
                gap: 0;
                column-gap: 50px;
            }
        }

        #job-item-role {
            display: none;
        }

        $iconSize: 40px;
        $svgSize: 20px;
        &-btns {
            padding: 0;
            position: relative;
            height: $iconSize;
            width: $iconSize;
            position: absolute;
            top: 18px;
            right: 18px;
        }

        .btn-s:first-of-type {
            $green: rgb(116, 189, 189);
            $lightGreen: rgb(225, 250, 250);
            flex: none;
            width: calc($iconSize * 1.2);
            height: $iconSize;
            border: 1px solid transparent;
            border-radius: 10px;
            padding: 0;

            svg {
                fill: $green;
                fill: var(--purple);
                height: $svgSize;
                width: $svgSize;
            }
        }

        .btn-s:last-of-type {
            display: none;
        }
    }

    .job-card {
        img {
            left: 0;
        }

        .job-item-btns {
            right: 0;
        }
    }
}

@media (hover: hover) {
    .job-item {
        &-employer:hover {
            p {
                color: var(--purple);
                text-decoration: underline;
            }
        }

        &-btns {
            a:hover {
                svg {
                    fill: white;
                }
            }
        }
    }
}
</style>
