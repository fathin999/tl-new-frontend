<script setup>
import IconCheck from "../icons/IconCheck.vue";

defineProps({
    title: String,
});
</script>

<template>
    <div class="check-point">
        <IconCheck />

        <span>
            {{ title }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
.check-point {
    margin-top: 15px;
    display: flex;

    svg {
        $size: 15px;
        height: $size;
        width: $size;
        fill: var(--green);
        margin-right: 20px;
        margin-top: 5px;
    }
}

.check-point:first-of-type {
    margin-top: 0;
}
</style>
