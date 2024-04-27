<script setup>
import IconArrow from "../icons/IconArrow.vue";

defineProps({
    href: String,
    title: String,
});

defineEmits(["handleClick"]);
</script>

<template>
    <a id="arrow-link" :href="href" @click="$emit('handleClick')">
        <span>
            {{ title }}
        </span>

        <IconArrow />
    </a>
</template>

<style scoped lang="scss">
#arrow-link {
    display: inline-flex;
    align-items: center;

    span {
        color: var(--purple);
        font-weight: 500;
        font-size: 0.95rem;
        line-height: 1.4rem;
        transition: color 0.3s ease-out;
    }

    svg {
        $size: 13px;
        height: $size;
        width: $size;
        fill: var(--purple);
        margin-left: 10px;
        transition: fill 0.3s ease-out, transform 0.3s ease-out;
    }
}

#arrow-link:hover {
    span {
        color: var(--black);
    }

    svg {
        fill: var(--black);
        transform: translateX(5px);
    }
}
</style>
