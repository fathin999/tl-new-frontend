<script setup>
import IconLocation from "@/components/icons/jobs/IconLocation.vue";
import IconLocationOutline from "@/components/icons/jobs/IconLocationOutline.vue";
import IconBriefcase from "@/components/icons/jobs/IconBriefcase.vue";
import IconBuilding from "@/components/icons/jobs/IconBuilding.vue";
import IconStar from "@/components/icons/IconStar.vue";
import {getEmployerName} from "@/composable/employers/employers";

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
            <a href="/jobs/1">
                <h4>{{ title }}</h4>
            </a>
        </div>

        <a href="/employers">
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
</style>
