<script setup>
import IconCheck from "../icons/IconCheck.vue";

const props = defineProps({
    type: String,
    title: String,
    selected: Boolean,
    index: Number,
});
defineEmits(["selectOption"]);

const getMainClass = () => {
    return props.selected ? "filter-input selected" : "filter-input";
};

const getTypeClass = () => {
    return props.type === "checkbox"
        ? "filter-input-form checkbox"
        : "filter-input-form radio";
};
</script>

<template>
    <div :class="getMainClass()" @click="$emit('selectOption', index)">
        <div :class="getTypeClass()">
            <IconCheck />
        </div>

        <span>{{ title }}</span>
    </div>
</template>

<style scoped lang="scss">
.filter-input {
    display: flex;
    margin-bottom: 10px;
    line-height: 1.4rem;
    user-select: none;
    cursor: pointer;
    transition: color 0.2s ease-out;

    $size: 16px;

    &-form {
        height: $size;
        width: $size;
        border: 1px solid rgb(190, 190, 190);
        background-color: white;
        margin-right: 18px;
        margin-top: 2px;
        transition: border 0.3s ease-out, background 0.3s ease-out;
    }

    .radio {
        border-radius: 50%;
        position: relative;

        svg {
            display: none;
        }
    }

    .radio::before {
        $radioSize: 60%;
        position: absolute;
        content: "";
        height: $radioSize;
        width: $radioSize;
        border-radius: 50%;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        transition: background 0.3s ease-out;
    }

    .checkbox {
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            $checkSize: 12px;
            margin: auto;
            height: $checkSize;
            width: $checkSize;
            fill: white;
        }
    }
}

.selected {
    .checkbox {
        background-color: var(--green);
        border-color: var(--green);
    }

    .radio::before {
        background-color: var(--green);
    }
}

.filter-input:hover {
    color: var(--purple);
}
</style>
