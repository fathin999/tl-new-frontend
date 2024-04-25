<script setup>
import IconLocation from "@/components/icons/jobs/IconLocation.vue";
import IconLocationOutline from "@/components/icons/jobs/IconLocationOutline.vue";
import IconBriefcase from "@/components/icons/jobs/IconBriefcase.vue";
import IconBuilding from "@/components/icons/jobs/IconBuilding.vue";
import IconStar from "@/components/icons/IconStar.vue";
import {getEmployerName} from "@/composable/employers/employers";
import {getJobLink} from "@/composable/jobs/jobs";

const props = defineProps({
    title: String,
    employer: String,
    location: String,
    type: String,
    remote: String,
});

// static images

const getLogo = () => {
    return new URL(
        `/src/assets/employers/employer-square-${props.employer}.png`,
        import.meta.url
    );
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
            <div class="job-item-details-item">
                <IconLocationOutline />
                <span> {{ location }} </span>
            </div>

            <div class="pair">
                <div class="job-item-details-item">
                    <IconBriefcase />
                    <span> {{ type }} </span>
                </div>

                <div class="job-item-details-item">
                    <IconBuilding />
                    <span> {{ remote }} </span>
                </div>
            </div>
        </div>

        <div class="job-item-featured">
            <IconStar />
            <span> Featured </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-item {
    width: auto;

    .pair {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    &-details-item {
        svg {
            margin-right: 15px;
        }
    }
}

.job-item-featured {
    $padding: 30px;
    position: absolute;
    top: $padding;
    right: $padding;
    display: flex;
    align-items: center;
    font-size: 0.85rem;

    svg {
        $size: 15px;
        height: $size;
        width: $size;
        fill: rgb(196, 196, 196);
        margin-right: 10px;
    }
}

@media (max-width: 900px) {
    .job-item {
        $padding: 22px;
        padding: $padding;
        padding-bottom: 160px;

        &-details {
            bottom: $padding;
            left: $padding;
        }
    }
}

@media (max-width: 600px) {
    $padding: 20px;

    .job-item {
        padding: $padding;
        padding-bottom: 100px;
        border-radius: 15px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

        &-logo {
            $size: 60px;
            height: $size;
            width: $size;
            border-radius: 10px;
        }

        &-title {
            margin: 13px 0 5px;

            h4 {
                font-size: 1.1rem;
                line-height: 1.6rem;
                min-height: 0;
                max-height: none;
                height: auto;
            }
        }

        p {
            font-size: 1rem;
        }

        &-details-item {
            margin-top: 10px;

            span {
                color: var(--textLight);
            }
        }
    }

    .job-item-featured {
        top: $padding;
        right: $padding;
    }
}
</style>
