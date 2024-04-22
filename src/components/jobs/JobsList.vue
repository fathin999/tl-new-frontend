<script setup>
import VerticalJobCard from "./VerticalJobCard.vue";

const props = defineProps({
    card: Boolean,
    jobs: Array,
});

const getId = () => {
    return props.card ? "" : "jobs-list";
};
</script>

<template>
    <div :id="getId()">
        <VerticalJobCard
            v-for="job in jobs"
            :key="job.id"
            :title="job.title"
            :employer="job.employer"
            :location="job.location"
            :type="job.type"
            :remote="job.remote"
            :role="job.role"
            :featured="false"
            :card="card"
            :createdAt="job.createdAt"
        />
    </div>
</template>

<style scoped lang="scss">
#jobs-list {
    border-top: 1px solid var(--borderMedium);
}
</style>
