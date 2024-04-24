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
                <h3><u>Who</u> are we looking for?</h3>
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
        margin: auto;
    }

    &-list {
        margin: 30px 0 70px;
    }

    &-process {
        margin-top: 30px;
    }
}

@media (max-width: 1000px) {
    #programme-requirements {
        .container {
            width: auto;
            margin: 0 50px;
        }
    }
}

@media (max-width: 900px) {
    #programme-requirements {
        .container {
            margin: 0 20px;
        }
    }
}

@media (max-width: 900px) {
    #programme-requirements {
        .section-title {
            h3 {
                font-size: 6vw;
                line-height: 8vw;
            }
        }
    }
}
</style>
