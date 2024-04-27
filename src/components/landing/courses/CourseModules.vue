<script setup>
import CourseCheckpoint from "./CourseCheckpoint.vue";
import {ref} from "vue";
import IconChevron from "../icons/IconChevron.vue";

const props = defineProps({
    modules: Array,
});

let opened = ref(0);

const getClass = (index) => {
    let cls = "module-item ";
    return opened.value === index ? cls + "module-open" : cls;
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
                @click="opened == index ? (opened = -1) : (opened = index)"
            >
                <h6>Module {{ index + 1 }}:</h6>

                <span>
                    {{ mod.title }}
                </span>

                <div class="module-item-icon">
                    <IconChevron />
                </div>
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
#modules {
    margin-top: 40px;
    position: relative;
    border-bottom: 1px solid gainsboro;
}

.module-item {
    overflow: hidden;
    padding: 7px 0;
    border-top: 1px solid gainsboro;
    position: relative;

    &-header {
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 20px 10px;

        h6 {
            color: var(--purple);
            font-size: 0.95rem;
            margin-right: 10px;
            width: 90px;
        }

        span {
            margin-right: 20px;
            font-size: 1.1rem;
            font-weight: 500;
            flex: 1;
        }
    }

    &-icon {
        $size: 22px;
        height: $size;
        width: $size;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--purple);
        background-color: var(--purple);

        svg {
            $iconSize: 12px;
            height: $iconSize;
            width: $iconSize;
            transform: rotate(90deg);
            transition: transform 0.3s ease-out;
            margin-top: 2px;
            fill: var(--purple);
            fill: white;
        }
    }

    &-outcomes {
        overflow: hidden;
        padding-left: 110px;
        padding-right: 30px;
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
                margin-top: 0;
            }
        }

        &-outcomes {
            height: auto;
            padding-top: 20px;
            padding-bottom: 40px;
            position: relative;
        }
    }
}

@media (max-width: 900px) {
    .module-item {
        &-header {
            align-items: flex-start;
            position: relative;

            h6 {
                width: 80px;
            }

            span {
                margin-right: 40px;
            }
        }

        &-icon {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            right: 7px;
        }
    }
}

@media (max-width: 700px) {
    .module-item {
        border: 1px solid gainsboro;
        border-bottom: none;
        border-radius: 7px;
        padding: 0;

        &-header {
            padding: 22px 70px 20px 20px;
            display: block;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

            h6 {
                width: auto;
                font-size: 0.9rem;
                line-height: 0.9rem;
                margin-bottom: 5px;
            }
        }

        &-icon {
            right: 15px;
        }

        &-outcomes {
            padding-left: 20px;
        }
    }

    .module-open {
        .module-item {
            &-header {
                border-bottom: 1px solid gainsboro;
            }

            &-outcomes {
                padding-top: 30px;
            }
        }
    }
}

@media (hover: hover) {
    .module-item {
        &-header:hover {
            background-color: var(--lightPurple);
        }
    }
}
</style>
