<script setup>
import Button from "../button/Button.vue";
import {ref} from "vue";
import {scrollToTab} from "@/composable/utilities/tabs";

const btns = ref();
const props = defineProps({
    sections: Array,
    active: Number,
});

const emit = defineEmits(["scrollTo"]);

const scrollTo = (index) => {
    // bar scrolling to bar button
    const container = btns.value.children[0];
    scrollToTab(btns.value, container, index);

    // scroll to section
    emit("scrollTo", index);
};

const getBtnClass = (index) => {
    const btnClass = "course-btn clickable ";

    return props.active == index ? btnClass + "active" : btnClass;
};
</script>

<template>
    <aside class="hide-scrollbar" ref="btns">
        <div id="course-item-btns">
            <div
                v-for="(section, index) in sections"
                :class="getBtnClass(index)"
                @click="scrollTo(index)"
                :key="section.title"
            >
                <component :is="section.icon" />
                {{ section.title }}
            </div>
        </div>

        <div id="course-item-apply">
            <Button :arrow="true" :outline="true"> Apply Now </Button>

            <Button :arrow="true" :outline="true"> Get brochure </Button>
        </div>
    </aside>
</template>

<style scoped lang="scss">
$purple: #f6ebff;

#course-item {
    aside {
        position: sticky;
        top: calc(var(--navbarHeight) + 20px);
        left: 0;
        background-color: white;
    }

    &-btns {
        padding-top: 20px;
        border-top: 1px solid var(--borderLight);
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 220px;

        .course-btn {
            padding: 15px 25px;
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 500;
            display: flex;
            align-items: center;

            svg {
                $size: 17px;
                height: $size;
                width: $size;
                margin-right: 20px;
                fill: var(--black);
            }
        }

        .active {
            background-color: $purple;
            color: var(--darkPurple);

            svg {
                fill: var(--darkPurple);
            }
        }
    }

    &-apply {
        margin-top: 35px;
        font-size: 0.95rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
}

@media (max-width: 900px) {
    #course-item {
        aside {
            display: flex;
            top: var(--navbarHeight);
            width: 100vw;
            margin-left: -20px;
            background-color: white;
            z-index: 10;
            border-bottom: 1px solid var(--borderLight);
            padding: 0 20px;
            overflow-x: scroll;
            align-items: flex-end;
        }

        &-btns {
            padding: 0;
            flex: 1;
            border-top: 0;
            flex-direction: row;
            width: auto;
            align-items: center;
            gap: 7px;
            position: relative;

            .course-btn {
                background-color: white;
                padding: 22px 17px 15px;
                height: auto;
                border-radius: 0;
                border-bottom: 3px solid transparent;
                position: relative;
                font-size: 0.9rem;
                color: var(--textLight);

                svg {
                    $size: 14px;
                    height: $size;
                    width: $size;
                    margin-right: 12px;
                    fill: var(--textLight);
                }
            }

            .active {
                border-color: var(--purple);
                color: var(--purple);

                svg {
                    fill: var(--purple);
                }
            }
        }

        &-apply {
            margin: 0;
            margin-left: 25px;
            height: auto;
            display: block;
            position: relative;
            padding-bottom: 10px;

            a {
                padding: 7px 17px 7px 22px;
                margin: 0;
                white-space: nowrap;
                position: relative;
                display: flex;
                align-items: center;
            }

            a:last-of-type {
                display: none;
            }
        }
    }
}

@media (hover: hover) {
    #course-item {
        &-btns {
            .course-btn:hover {
                background-color: #fbf6ff;
            }

            .active:hover {
                background-color: $purple;
            }
        }
    }
}
</style>
