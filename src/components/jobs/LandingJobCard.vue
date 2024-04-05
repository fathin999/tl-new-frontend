<script setup>
import IconLocation from "@/components/icons/jobs/IconLocation.vue";
import IconWork from "@/components/icons/jobs/IconWork.vue";
import IconStar from "@/components/icons/IconStar.vue";

const props = defineProps({
    logo: String,
    title: String,
    employer: String,
    location: String,
    type: String,
    remote: String,
});

const getImageUrl = () => {
    return new URL(
        `/src/assets/jobs/employer-logo-${props.logo}.png`,
        import.meta.url
    );
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
            <div class="job-item-details-item">
                <IconLocation />
                <span> {{ location }} </span>
            </div>

            <div class="job-item-details-item">
                <IconWork />
                <span> {{ type }} </span>
                <div class="job-item-details-style style-blue">
                    {{ remote }}
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
