<script setup>
import FilterItem from "./FilterItem.vue";

defineProps({
    filters: Array,
});
const emit = defineEmits(["toggleFilter", "selectOption"]);

const handleSelect = (index, option, type) => {
    emit("selectOption", index, option, type);
};

const handleToggle = (index) => {
    emit("toggleFilter", index);
};
</script>

<template>
    <div id="filter">
        <FilterItem
            v-for="(filter, index) in filters"
            :key="`${filter.title}-${index}`"
            :options="filter.options"
            :title="filter.title"
            :open="filter.open"
            :type="filter.type"
            :index="index"
            @toggleFilter="handleToggle"
            @selectOption="handleSelect"
        />
    </div>
</template>

<style scoped lang="scss">
#filter {
    border-top: 1px solid var(--borderLight);
}
</style>
