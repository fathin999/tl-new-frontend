<script setup>
import {getModuleView} from "@/composable/courses/courses";
import CourseCheckpoint from "./CourseCheckpoint.vue";
import {reactive} from "vue";
import IconChevron from "../icons/IconChevron.vue";

const props = defineProps({
    modules: Array,
});

let opened = reactive(getModuleView(props.modules.length));

const getClass = (index) => {
    let cls = "module-item ";
    return opened[index] ? cls + "module-open" : cls;
};
</script>

<template>
    <div id="modules">
        <div
            v-for="(mod, index) in modules"
            :key="mod.title"
            :class="getClass(index)"
        >
            <div
                class="module-item-header clickable"
                @click="opened[index] = !opened[index]"
            >
                <span>
                    {{ mod.title }}
                </span>

                <IconChevron />
            </div>
            <div class="module-item-outcomes">
                <CourseCheckpoint
                    v-for="outcome in mod.outcomes"
                    :key="outcome"
                    :title="outcome"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$padding: 40px;
$border: 1px solid var(--borderMedium);

#modules {
    margin-top: 30px;
}

.module-item {
    border: $border;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 10px;

    &-header {
        padding: 22px $padding;
        font-weight: 500;
        font-size: 1.15rem;
        display: flex;
        align-items: center;

        span {
            flex: 1;
        }

        svg {
            $size: 17px;
            height: $size;
            width: $size;
            transform: rotate(90deg);
            transition: transform 0.3s ease-out;
        }
    }

    &-header:hover {
        background-color: var(--lightPurple);
    }

    &-outcomes {
        overflow: hidden;
        padding: 0 $padding;
        height: 0;
        transition: height 0.3s ease-out, padding 0.3s ease-out;
    }
}

.module-open {
    .module-item {
        &-header {
            background-color: var(--lightPurple);

            svg {
                transform: rotate(90deg) scaleX(-1);
            }
        }

        &-outcomes {
            height: auto;
            padding: $padding;
            padding-top: 25px;
            border-top: $border;
        }
    }
}
</style>
