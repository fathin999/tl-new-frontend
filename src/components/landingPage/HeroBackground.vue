<script>
export default {
    data() {
        return {
            items: ["+", "-", "?", "/", "%", "~", "?", "+", "-", ":", ";"],
        };
    },
};
</script>

<template>
    <div id="hero-background">
        <img
            src="/src/assets/landing-page/hero-bg/bg-1.png"
            alt="bg"
            id="hero-bg-1"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-2.png"
            alt="bg"
            id="hero-bg-2"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-3.png"
            alt="bg"
            id="hero-bg-3"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-4.png"
            alt="bg"
            id="hero-bg-4"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-5.png"
            alt="bg"
            id="hero-bg-5"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-6.png"
            alt="bg"
            id="hero-bg-6"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-7.png"
            alt="bg"
            id="hero-bg-7"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-8.png"
            alt="bg"
            id="hero-bg-8"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-9.png"
            alt="bg"
            id="hero-bg-9"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-10.png"
            alt="bg"
            id="hero-bg-10"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-11.png"
            alt="bg"
            id="hero-bg-11"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-12.png"
            alt="bg"
            id="hero-bg-12"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-13.png"
            alt="bg"
            id="hero-bg-13"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-14.png"
            alt="bg"
            id="hero-bg-14"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-15.png"
            alt="bg"
            id="hero-bg-15"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-16.png"
            alt="bg"
            id="hero-bg-16"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-17.png"
            alt="bg"
            id="hero-bg-17"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-18.png"
            alt="bg"
            id="hero-bg-18"
        />
        <img
            src="/src/assets/landing-page/hero-bg/bg-19.png"
            alt="bg"
            id="hero-bg-19"
        />
    </div>
</template>

<style scoped lang="scss">
#hero-bg {
    position: absolute;
    height: 400px;
    top: 0;
    right: 0;
    width: 100vw;

    @mixin img($size, $top, $left, $delay) {
        position: absolute;
        height: $size;
        width: $size;
        top: $top;
        left: $left;
        object-fit: contain;
        opacity: 0;
        animation: blink 3s ease-in infinite;
        animation-delay: $delay;
    }

    &-1 {
        @include img(3rem, 5%, 50%, 0);
    }

    &-2 {
        @include img(1.8rem, 35%, 52%, 1.2s);
    }

    &-3 {
        @include img(2.7rem, 11%, 59%, 0.7s);
    }

    &-4 {
        @include img(2rem, 12%, 67%, 0.6s);
    }

    &-5 {
        @include img(3.8rem, 9%, 74.5%, 1.4s);
    }

    &-6 {
        @include img(3.5rem, 7%, 83%, 0.8s);
    }

    &-7 {
        @include img(2rem, 6%, 93%, 1.2s);
    }

    &-8 {
        @include img(1.6rem, 20%, 88%, 1.4s);
    }

    &-9 {
        @include img(2rem, 27%, 82%, 0.5);
    }

    &-10 {
        @include img(1.7rem, 26%, 76%, 2s);
    }

    &-11 {
        @include img(1.9rem, 24%, 69%, 0.5s);
    }

    &-12 {
        @include img(3.6rem, 26%, 62%, 1.2s);
    }

    &-13 {
        @include img(2.3rem, 24%, 55%, 1.6s);
    }

    &-14 {
        @include img(2.2rem, 30%, 93%, 1.4s);
    }

    &-15 {
        @include img(2.2rem, 38%, 88%, 0.3s);
    }

    &-16 {
        @include img(2.2rem, 38%, 69%, 1.1s);
    }

    &-17 {
        @include img(3.5rem, 3%, 1%, 0.8s);
    }

    &-18 {
        @include img(2.2rem, 20%, 6%, 0.4s);
    }

    &-19 {
        @include img(2.8rem, 39%, 3%, 1.3s);
    }
}

@keyframes blink {
    0% {
        opacity: 0;
        transform: scale(0.8) rotate(0);
    }

    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: scale(1) rotate(5deg);
    }
}
</style>
