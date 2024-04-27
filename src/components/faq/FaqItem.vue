<script setup>
import IconPlus from "../icons/IconPlus.vue";
import IconMinus from "../icons/IconMinus.vue";

const props = defineProps({
    question: String,
    answer: String,
    index: Number,
    open: Boolean,
});

defineEmits(["toggleFaq"]);

const getClass = () => {
    return `faq-item clickable ${props.open ? "show" : "hide"}`;
};

const answerText = () => {
    return answer.value;
};
</script>

<template>
    <div :class="getClass()" @click="$emit('toggleFaq', index)">
        <div class="faq-item-q">
            <span>
                {{ question }}
            </span>

            <div class="faq-item-q-icon">
                <IconPlus class="faq-item-q-icon-plus" />
                <IconMinus class="faq-item-q-icon-minus" />
            </div>
        </div>

        <div class="faq-item-a" v-html="answer"></div>
    </div>
</template>

<style scoped lang="scss">
$time: 0.4s;
$padding: 40px;

.faq-item {
    border-width: 1px;
    border-style: solid;
    transition: margin $time ease-out, background $time ease-out,
        border $time ease-out, padding $time ease-out;
    border-radius: 15px;

    &-q {
        font-size: 1.1rem;
        font-weight: 500;
        display: flex;
        align-items: center;

        span {
            flex: 1;
        }

        &-icon {
            $size: 13px;
            position: relative;
            height: $size;
            width: $size;
            margin-left: 50px;

            svg {
                stroke: var(--black);
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                transition: transform $time ease-out;
            }
        }
    }

    &-a {
        overflow: hidden;
        transition: maxHeight $time ease-out, opacity $time ease-out,
            margin $time ease-out;
        font-size: 1.1rem;
        line-height: 1.7rem;
    }
}

.show {
    margin-bottom: 20px;
    background-color: #f8efff;
    border-color: white;
    padding: $padding;

    .faq-item {
        &-q {
            color: var(--purple);

            &-icon {
                svg {
                    stroke: var(--purple);
                }

                &-plus {
                    transform: scaleY(0);
                }

                &-minus {
                    transform: scaleY(1);
                }
            }
        }

        &-a {
            max-height: none;
            opacity: 1;
            margin-top: 40px;
        }

        &-a:deep(ol),
        &-a:deep(ul) {
            margin-left: 25px;
            margin-top: 5px;
        }

        &-a:deep(li) {
            padding-left: 10px;
        }
    }
}

.hide {
    padding: 30px $padding;
    margin-bottom: 10px;
    border-color: gainsboro;
    background-color: white;

    .faq-item {
        &-q-icon {
            &-plus {
                transform: scaleY(1);
            }

            &-minus {
                transform: scaleY(0);
            }
        }

        &-a {
            max-height: 0;
            opacity: 0;
        }
    }
}

@media (max-width: 600px) {
    $padding: 23px;

    .faq-item {
        border-radius: 5px;
        margin-bottom: 0;
        border: none;
        border-top: 1px solid gainsboro;

        &-q {
            font-size: 1.05rem;
            line-height: 1.5rem;
        }

        svg {
            $size: 11px;
            height: $size;
            width: $size;
        }
    }

    .show {
        padding: $padding 0 30px;
        border: none;
        border-top: 1px solid gainsboro;
        background-color: white;

        .faq-item-q span {
            font-weight: 500;
        }

        .faq-item-a {
            margin-top: 25px;
        }
    }

    .hide {
        padding: $padding 0;

        .faq-item-q span {
            font-weight: 400;
        }
    }
}

@media (hover: hover) {
    .faq-item:hover {
        .faq-item-q {
            color: var(--purple);

            &-icon svg {
                stroke: var(--purple);
            }
        }
    }
}
</style>
