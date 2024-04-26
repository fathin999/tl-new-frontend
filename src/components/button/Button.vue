<script setup>
import IconArrow from "../icons/IconArrow.vue";

const props = defineProps({
    href: String,
    primary: {type: Boolean, default: true},
    black: {type: Boolean, default: false},
    outline: {type: Boolean, default: false},
    arrow: {type: Boolean, default: false},
    small: {type: Boolean, default: false},
    large: {type: Boolean, default: false},
});

defineEmits(["handleClick"]);

const getBtnClass = () => {
    let btnClass = "";

    // colour and border
    if (props.black && !props.outline) btnClass += "btn-black ";
    else if (props.black && props.outline) btnClass += "btn-black-outline ";
    else if (props.primary && props.outline) btnClass += "btn-primary-outline ";
    else btnClass += "btn-primary ";

    // size and arrow
    if (props.arrow) btnClass += "btn-arrow";
    else if (props.small) btnClass += "btn-s";
    else if (props.large) btnClass += "btn-l";
    else btnClass += "btn-m";

    return btnClass;
};
</script>

<template>
    <a :href="href" @click="$emit('handleClick')" :class="getBtnClass()">
        <slot />

        <IconArrow v-if="arrow" />
    </a>
</template>

<style scoped lang="scss">
// ----------------
// BUTTON
// ----------------

@mixin button($bg, $border, $color) {
    font-weight: 500;
    transition: color 0.4s ease-out, background 0.4s ease-out,
        border 0.4s ease-out;
    background-color: $bg;
    border-color: $border;
    border-width: 1px;
    border-style: solid;
    color: $color;
    display: inline-block;
    user-select: none;
    cursor: pointer;
    flex-shrink: 0;

    svg {
        fill: $color;
        transition: fill 0.4s ease-out, transform 0.4s ease-out;
    }
}

@mixin buttonHover($bg, $border, $color) {
    background-color: $bg;
    border-color: $border;
    color: $color;

    svg {
        fill: $color;
    }
}

.btn {
    &-primary {
        @include button(var(--purple), var(--purple), white);
    }

    &-primary-outline {
        @include button(transparent, var(--purple), var(--purple));
    }

    &-black {
        @include button(var(--black), var(--black), white);
    }

    &-black-outline {
        @include button(transparent, var(--black), var(--black));
    }

    &-s {
        border-radius: 25px;
        padding: 8px 20px;
    }

    &-m {
        border-radius: 30px;
        padding: 15px 30px;
    }

    &-l {
        border-radius: 40px;
        padding: 18px 30px;
        text-align: center;
        min-width: 300px;
    }

    &-arrow {
        border-radius: 30px;
        padding: 15px 27px 15px 35px;

        svg {
            $size: 12px;
            margin-left: 10px;
            height: $size;
            width: $size;
        }
    }
}

@media (max-width: 600px) {
    .btn-m,
    .btn-l,
    .btn-arrow {
        width: auto;
    }

    .btn-l {
        min-width: 0;
        padding-right: 35px;
        padding-left: 35px;
    }
}

@media (hover: hover) {
    .btn {
        &-primary:hover {
            @include buttonHover(transparent, var(--purple), var(--purple));
        }

        &-primary-outline:hover {
            @include button(var(--purple), var(--purple), white);
        }

        &-black:hover {
            @include buttonHover(transparent, var(--black), var(--black));
        }

        &-black-outline:hover {
            @include buttonHover(var(--black), var(--black), white);
        }

        &-arrow:hover {
            svg {
                transform: translateX(4px);
            }
        }
    }
}
</style>
