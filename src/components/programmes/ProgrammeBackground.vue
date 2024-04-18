<template>
    <div class="programme-header-bg">
        <img
            src="/src/assets/programmes/programme-bg.png"
            alt=""
            class="programme-header-bg"
        />

        <div id="programme-bg-icons">
            <img
                src="/src/assets/landing-page/hero/bg-1.png"
                alt="bg"
                id="programme-bg-icons-1"
            />
            <img
                src="/src/assets/landing-page/hero/bg-2.png"
                alt="bg"
                id="programme-bg-icons-2"
            />
            <img
                src="/src/assets/landing-page/hero/bg-3.png"
                alt="bg"
                id="programme-bg-icons-3"
            />
            <img
                src="/src/assets/landing-page/hero/bg-4.png"
                alt="bg"
                id="programme-bg-icons-4"
            />
            <img
                src="/src/assets/landing-page/hero/bg-5.png"
                alt="bg"
                id="programme-bg-icons-5"
            />
            <img
                src="/src/assets/landing-page/hero/bg-6.png"
                alt="bg"
                id="programme-bg-icons-6"
            />
            <img
                src="/src/assets/landing-page/hero/bg-7.png"
                alt="bg"
                id="programme-bg-icons-7"
            />
            <img
                src="/src/assets/landing-page/hero/bg-8.png"
                alt="bg"
                id="programme-bg-icons-8"
            />
            <img
                src="/src/assets/landing-page/hero/bg-9.png"
                alt="bg"
                id="programme-bg-icons-9"
            />
            <img
                src="/src/assets/landing-page/hero/bg-10.png"
                alt="bg"
                id="programme-bg-icons-10"
            />
            <img
                src="/src/assets/landing-page/hero/bg-11.png"
                alt="bg"
                id="programme-bg-icons-11"
            />
            <img
                src="/src/assets/landing-page/hero/bg-12.png"
                alt="bg"
                id="programme-bg-icons-12"
            />
            <img
                src="/src/assets/landing-page/hero/bg-13.png"
                alt="bg"
                id="programme-bg-icons-13"
            />
            <img
                src="/src/assets/landing-page/hero/bg-14.png"
                alt="bg"
                id="programme-bg-icons-14"
            />
            <img
                src="/src/assets/landing-page/hero/bg-15.png"
                alt="bg"
                id="programme-bg-icons-15"
            />
            <img
                src="/src/assets/landing-page/hero/bg-16.png"
                alt="bg"
                id="programme-bg-icons-16"
            />
            <img
                src="/src/assets/landing-page/hero/bg-17.png"
                alt="bg"
                id="programme-bg-icons-17"
            />
            <img
                src="/src/assets/landing-page/hero/bg-18.png"
                alt="bg"
                id="programme-bg-icons-18"
            />
            <img
                src="/src/assets/landing-page/hero/bg-19.png"
                alt="bg"
                id="programme-bg-icons-19"
            />
            <img
                src="/src/assets/landing-page/hero/bg-20.png"
                alt="bg"
                id="programme-bg-icons-20"
            />
            <img
                src="/src/assets/landing-page/hero/bg-21.png"
                alt="bg"
                id="programme-bg-icons-21"
            />
            <img
                src="/src/assets/landing-page/hero/bg-22.png"
                alt="bg"
                id="programme-bg-icons-22"
            />
            <img
                src="/src/assets/landing-page/hero/bg-23.png"
                alt="bg"
                id="programme-bg-icons-23"
            />
            <img
                src="/src/assets/landing-page/hero/bg-24.png"
                alt="bg"
                id="programme-bg-icons-24"
            />
            <img
                src="/src/assets/landing-page/hero/bg-25.png"
                alt="bg"
                id="programme-bg-icons-25"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
@mixin img($size, $top, $left, $anim: blink1) {
    position: absolute;
    height: $size;
    width: $size;
    top: $top;
    left: $left;
    object-fit: contain;
    animation: $anim 3s ease-in infinite;
    opacity: 0;
}

.programme-header-bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

#programme-bg-icons {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;

    &-1 {
        @include img(4.2rem, 7.5%, 47%, blink5);
    }

    &-2 {
        @include img(2.1rem, 11.3%, 61%, blink7);
    }

    &-3 {
        @include img(3.2rem, 8.3%, 72%, blink8);
    }

    &-4 {
        @include img(1.9rem, 15%, 81%, blink9);
    }

    &-5 {
        @include img(3.9rem, 5.5%, 93%, blink10);
    }

    &-6 {
        @include img(3.8rem, 25%, 53%, blink5);
    }

    &-7 {
        @include img(3.2rem, 27.5%, 67%, blink7);
    }

    &-8 {
        @include img(2.3rem, 37.5%, 77%, blink8);
    }

    &-9 {
        @include img(4.1rem, 32.5%, 83%, blink9);
    }

    &-10 {
        @include img(3.2rem, 40%, 93%, blink10);
    }

    &-11 {
        @include img(4rem, 55%, 49%, blink5);
    }

    &-12 {
        @include img(2.7rem, 57.5%, 56%, blink6);
    }

    &-13 {
        @include img(2.7rem, 42.5%, 61%, blink7);
    }

    &-14 {
        @include img(2.4rem, 62.5%, 70%, blink8);
    }

    &-15 {
        @include img(1.9rem, 62.5%, 79%, blink8);
    }

    &-16 {
        @include img(4rem, 70%, 85%, blink9);
    }

    &-17 {
        @include img(2.2rem, 70%, 96%, blink10);
    }

    &-18 {
        @include img(2.6rem, 87.5%, 49%, blink5);
    }

    &-19 {
        @include img(2.5rem, 82.5%, 58%, blink6);
    }

    &-20 {
        @include img(2.1rem, 80%, 66%, blink7);
    }

    &-21 {
        @include img(2.9rem, 87.5%, 75%, blink8);
    }

    &-22 {
        @include img(2rem, 95%, 93%, blink10);
    }

    &-23 {
        @include img(3.8rem, 15%, 1%);
    }

    &-24 {
        @include img(2.2rem, 50%, 6%);
    }

    &-25 {
        @include img(2.2rem, 87.5%, 3%);
    }
}

$opacity: 0.7;

@keyframes blink1 {
    0% {
        opacity: $opacity;
    }
    5% {
        opacity: 0;
    }
    10% {
        opacity: $opacity;
    }
    100% {
        opacity: $opacity;
    }
}

@keyframes blink5 {
    0% {
        opacity: $opacity;
    }
    40% {
        opacity: $opacity;
    }
    45% {
        opacity: 0;
    }
    50% {
        opacity: $opacity;
    }
    100% {
        opacity: $opacity;
    }
}

@keyframes blink6 {
    0% {
        opacity: $opacity;
    }
    50% {
        opacity: $opacity;
    }
    55% {
        opacity: 0;
    }
    60% {
        opacity: $opacity;
    }
    100% {
        opacity: $opacity;
    }
}

@keyframes blink7 {
    0% {
        opacity: $opacity;
    }
    60% {
        opacity: $opacity;
    }
    65% {
        opacity: 0;
    }
    70% {
        opacity: $opacity;
    }
    100% {
        opacity: $opacity;
    }
}

@keyframes blink8 {
    0% {
        opacity: $opacity;
    }
    70% {
        opacity: $opacity;
    }
    75% {
        opacity: 0;
    }
    80% {
        opacity: $opacity;
    }
    100% {
        opacity: $opacity;
    }
}

@keyframes blink9 {
    0% {
        opacity: $opacity;
    }
    80% {
        opacity: $opacity;
    }
    85% {
        opacity: 0;
    }
    90% {
        opacity: $opacity;
    }
    100% {
        opacity: $opacity;
    }
}

@keyframes blink10 {
    0% {
        opacity: $opacity;
    }
    90% {
        opacity: $opacity;
    }
    95% {
        opacity: 0;
    }
    100% {
        opacity: $opacity;
    }
}
</style>
