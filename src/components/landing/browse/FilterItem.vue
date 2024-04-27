<script setup>
import IconChevron from "../icons/IconChevron.vue";
import FilterOption from "./FilterOption.vue";
import {useRoute} from "vue-router";

const route = useRoute();

const props = defineProps({
    open: Boolean,
    title: String,
    type: String,
    options: Array,
    index: Number,
});
const emit = defineEmits(["toggleFilter", "selectOption"]);

const getClass = () => {
    return props.open ? "filter-item open" : "filter-item";
};

const handleSelect = (option) => {
    emit("selectOption", props.index, option, props.type);
};

const checkActive = (option) => {
    if (!route.query[props.title]) return false;
    else return route.query[props.title].includes(option);
};
</script>

<template>
    <div :class="getClass()">
        <div class="filter-item-btn" @click="$emit('toggleFilter', index)">
            <h2>{{ title }}</h2>
            <IconChevron />
        </div>

        <div class="filter-item-list">
            <FilterOption
                v-for="(option, i) in options"
                :key="`${option}-${i}`"
                :type="type"
                :title="option"
                :selected="checkActive(option)"
                @selectOption="handleSelect"
                :index="i"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.filter-item {
    border-bottom: 1px solid var(--borderLight);
    user-select: none;

    &-btn {
        cursor: pointer;
        padding: 20px 0;
        padding-right: 5px;
        display: flex;
        align-items: center;

        h2 {
            font-size: 0.95rem;
            transition: color 0.3s ease-out;
            flex: 1;
        }

        svg {
            $size: 11px;
            transform: rotate(90deg);
            height: $size;
            width: $size;
            transition: fill 0.3s ease-out, rotate 0.3s ease-out;
            fill: var(--black);
            margin-left: 8px;
            margin-top: 2px;
        }
    }

    &-btn:hover {
        h2 {
            color: var(--purple);
        }

        svg {
            fill: var(--purple);
        }
    }

    &-list {
        overflow: hidden;
        opacity: 0;
        height: 0;
        padding: 0;
        transition: opacity 0.3s ease-out, height 0.3s ease-out,
            padding 0.3s ease-out;
    }
}

.open {
    .filter-item {
        &-btn {
            svg {
                transform: rotate(270deg);
            }
        }

        &-list {
            opacity: 1;
            height: auto;
            padding: 10px 0 20px;
        }
    }
}
</style>
