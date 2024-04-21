<script setup>
import CourseCheckpoint from "../courses/CourseCheckpoint.vue";

defineProps({
    requirements: Array,
    processes: Array,
});
</script>

<template>
    <div class="section blue" id="programme-requirements">
        <div class="container">
            <div class="section-title">
                <h3><u>Who</u> we are looking for?</h3>
            </div>

            <div id="programme-requirements-list">
                <CourseCheckpoint
                    v-for="req in requirements"
                    :key="req"
                    :title="req"
                />
            </div>

            <div class="section-title">
                <h3>Our assessment process</h3>
            </div>

            <div id="programme-requirements-process">
                <CourseCheckpoint
                    v-for="pro in processes"
                    :key="pro"
                    :title="pro"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#programme-requirements {
    .container {
        width: 900px;
    }

    &-list {
        margin: 30px 0 70px;
    }

    &-process {
        margin-top: 30px;
    }
}
</style>
