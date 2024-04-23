<script setup>
defineProps({
    duration: String,
    gap: {type: String, default: "0"},
    style: {type: Object, default: {}},
    outerStyle: {type: Object, default: {}},
    gradient: {type: Boolean, default: true},
    blue: {type: Boolean, default: false},
});
</script>

<template>
    <div
        :class="`slider-outer clickable ${gradient ? 'gradient' : ''} ${
            blue ? 'blue' : 'white'
        }`"
        :style="outerStyle"
    >
        <div
            class="slider-inner"
            v-for="index in 2"
            :key="`slider-list${index}`"
            :style="{
                animationDuration: duration + 's',
                gap: gap + 'px',
                paddingLeft: gap + 'px',
                ...style,
            }"
        >
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.slider {
    &-outer {
        overflow: hidden;
        position: relative;
        display: flex;
        width: 100%;
        isolation: isolate;
    }

    &-inner {
        display: flex;
        animation: slide 50s linear infinite;
        gap: 0;
    }

    &-outer:hover .slider-inner {
        animation-play-state: paused;
    }
}

@mixin gradient() {
    position: absolute;
    content: "";
    height: 100%;
    width: 80px;
    z-index: 2;
    top: 0;
}

.gradient::before {
    @include gradient();
    left: 0;
}

.gradient::after {
    @include gradient();
    right: 0;
    transform: scaleX(-1);
}

.blue::before,
.blue::after {
    background: rgb(243, 246, 251);
    background: linear-gradient(
        90deg,
        rgba(243, 246, 251, 1) 0%,
        rgba(243, 246, 251, 0) 100%
    );
}

.white::before,
.white::after {
    background: rgb(255, 255, 255);
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
    );
}

@media (max-width: 1300px) {
    .slider {
        &-outer {
            width: 100vw;
            margin-left: -50px;
        }
    }

    .gradient::after,
    .gradient::before {
        opacity: 0;
    }
}

@media (max-width: 900px) {
    .slider {
        &-outer {
            margin-left: -20px;
        }
    }
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
