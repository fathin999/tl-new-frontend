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
        flex-shrink: 0;
    }
}

.check-point:first-of-type {
    margin-top: 0;
}

@media (max-width: 600px) {
    .check-point {
        span {
            font-size: 1.1rem;
            line-height: 1.6rem;
        }

        svg {
            margin-top: 4px;
        }
    }
}
</style>
