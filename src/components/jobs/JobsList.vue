<script setup>
import VerticalJobCard from "./VerticalJobCard.vue";

const props = defineProps({
    card: Boolean,
});

const getId = () => {
    return props.card ? "" : "jobs-list";
};
</script>

<template>
    <div :id="getId()">
        <VerticalJobCard
            logo="/src/assets/jobs/employer-logo-wristcheck.png"
            title="Junior Software Engineer (Frontend)"
            employer="WRISTCHECK"
            location="Hong Kong"
            type="Full-time"
            remote="In office"
            :featured="true"
            :card="card"
        />

        <VerticalJobCard
            logo="/src/assets/jobs/employer-logo-dolphin.png"
            title="eCommerce Data Operations Specialist"
            employer="Dolphin Pharmaceuticals"
            location="Central, Hong Kong"
            type="Full-time"
            remote="In office"
            :featured="true"
            :card="card"
        />

        <VerticalJobCard
            logo="/src/assets/jobs/employer-logo-fave.png"
            title="Software Engineer (Backend)"
            employer="Fave"
            location="Kuala Lumpur, Malaysia"
            type="Contract"
            remote="Remote"
            :featured="false"
            :card="card"
        />

        <VerticalJobCard
            logo="/src/assets/jobs/employer-logo-wristcheck.png"
            title="Junior Software Engineer (Frontend)"
            employer="WRISTCHECK"
            location="Hong Kong"
            type="Full-time"
            remote="In office"
            :featured="false"
            :card="card"
        />

        <VerticalJobCard
            logo="/src/assets/jobs/employer-logo-dolphin.png"
            title="eCommerce Data Operations Specialist"
            employer="Dolphin Pharmaceuticals"
            location="Central, Hong Kong"
            type="Full-time"
            remote="In office"
            :featured="false"
            :card="card"
        />

        <VerticalJobCard
            logo="/src/assets/jobs/employer-logo-fave.png"
            title="Software Engineer (Backend)"
            employer="Fave"
            location="Kuala Lumpur, Malaysia"
            type="Contract"
            remote="Remote"
            :featured="false"
            :card="card"
        />
    </div>
</template>

<style scoped lang="scss">
#jobs-list {
    border-top: 1px solid var(--borderMedium);
}
</style>
