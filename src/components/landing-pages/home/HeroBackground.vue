<template>
    <div id="hero-background">
        <img
            src="/src/assets/landing-page/hero/bg-1.png"
            alt="bg"
            id="hero-bg-1"
        />
        <img
            src="/src/assets/landing-page/hero/bg-2.png"
            alt="bg"
            id="hero-bg-2"
        />
        <img
            src="/src/assets/landing-page/hero/bg-3.png"
            alt="bg"
            id="hero-bg-3"
        />
        <img
            src="/src/assets/landing-page/hero/bg-4.png"
            alt="bg"
            id="hero-bg-4"
        />
        <img
            src="/src/assets/landing-page/hero/bg-5.png"
            alt="bg"
            id="hero-bg-5"
        />
        <img
            src="/src/assets/landing-page/hero/bg-6.png"
            alt="bg"
            id="hero-bg-6"
        />
        <img
            src="/src/assets/landing-page/hero/bg-7.png"
            alt="bg"
            id="hero-bg-7"
        />
        <img
            src="/src/assets/landing-page/hero/bg-8.png"
            alt="bg"
            id="hero-bg-8"
        />
        <img
            src="/src/assets/landing-page/hero/bg-9.png"
            alt="bg"
            id="hero-bg-9"
        />
        <img
            src="/src/assets/landing-page/hero/bg-10.png"
            alt="bg"
            id="hero-bg-10"
        />
        <img
            src="/src/assets/landing-page/hero/bg-11.png"
            alt="bg"
            id="hero-bg-11"
        />
        <img
            src="/src/assets/landing-page/hero/bg-12.png"
            alt="bg"
            id="hero-bg-12"
        />
        <img
            src="/src/assets/landing-page/hero/bg-13.png"
            alt="bg"
            id="hero-bg-13"
        />
        <img
            src="/src/assets/landing-page/hero/bg-14.png"
            alt="bg"
            id="hero-bg-14"
        />
        <img
            src="/src/assets/landing-page/hero/bg-15.png"
            alt="bg"
            id="hero-bg-15"
        />
        <img
            src="/src/assets/landing-page/hero/bg-16.png"
            alt="bg"
            id="hero-bg-16"
        />
        <img
            src="/src/assets/landing-page/hero/bg-17.png"
            alt="bg"
            id="hero-bg-17"
        />
        <img
            src="/src/assets/landing-page/hero/bg-18.png"
            alt="bg"
            id="hero-bg-18"
        />
        <img
            src="/src/assets/landing-page/hero/bg-19.png"
            alt="bg"
            id="hero-bg-19"
        />
        <img
            src="/src/assets/landing-page/hero/bg-20.png"
            alt="bg"
            id="hero-bg-20"
        />
        <img
            src="/src/assets/landing-page/hero/bg-21.png"
            alt="bg"
            id="hero-bg-21"
        />
        <img
            src="/src/assets/landing-page/hero/bg-22.png"
            alt="bg"
            id="hero-bg-22"
        />
        <img
            src="/src/assets/landing-page/hero/bg-23.png"
            alt="bg"
            id="hero-bg-23"
        />
        <img
            src="/src/assets/landing-page/hero/bg-24.png"
            alt="bg"
            id="hero-bg-24"
        />
        <img
            src="/src/assets/landing-page/hero/bg-25.png"
            alt="bg"
            id="hero-bg-25"
        />
    </div>
</template>

<style scoped lang="scss">
#hero-background {
    position: absolute;
    height: calc(100% + 100px);
    top: 0;
    right: 0;
    width: 100vw;
    opacity: 0.9;
}

#hero-bg {
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
        @include img(4.2rem, 3%, 47%, 0);
    }

    &-2 {
        @include img(2.1rem, 4.5%, 61%, 1.2s);
    }

    &-3 {
        @include img(3.2rem, 3.3%, 72%, 0.7s);
    }

    &-4 {
        @include img(1.9rem, 6%, 81%, 0.6s);
    }

    &-5 {
        @include img(3.9rem, 2.2%, 93%, 1.4s);
    }

    &-6 {
        @include img(3.8rem, 10%, 53%, 0.8s);
    }

    &-7 {
        @include img(3.2rem, 11%, 67%, 1.2s);
    }

    &-8 {
        @include img(2.3rem, 15%, 77%, 1.4s);
    }

    &-9 {
        @include img(4.1rem, 13%, 83%, 0.5);
    }

    &-10 {
        @include img(3.2rem, 16%, 93%, 2s);
    }

    &-11 {
        @include img(4rem, 22%, 49%, 0.5s);
    }

    &-12 {
        @include img(2.7rem, 23%, 56%, 1.2s);
    }

    &-13 {
        @include img(2.7rem, 17%, 61%, 1.6s);
    }

    &-14 {
        @include img(2.4rem, 25%, 70%, 1.4s);
    }

    &-15 {
        @include img(1.9rem, 25%, 79%, 0.3s);
    }

    &-16 {
        @include img(4rem, 28%, 85%, 1.1s);
    }

    &-17 {
        @include img(2.2rem, 28%, 96%, 0.8s);
    }

    &-18 {
        @include img(2.6rem, 35%, 49%, 0.4s);
    }

    &-19 {
        @include img(2.5rem, 33%, 58%, 1.3s);
    }

    &-20 {
        @include img(2.1rem, 32%, 66%, 1.1s);
    }

    &-21 {
        @include img(2.9rem, 35%, 75%, 0.8s);
    }

    &-22 {
        @include img(2rem, 38%, 93%, 0.4s);
    }

    &-23 {
        @include img(3.8rem, 6%, 1%, 1.3s);
    }

    &-24 {
        @include img(2.2rem, 20%, 6%, 0.8s);
    }

    &-25 {
        @include img(2.2rem, 35%, 3%, 1s);
    }
}

@media (max-width: 700px) {
    #hero-background {
        width: 150vw;
        z-index: -5;
        opacity: 1;
        right: -10vw;
        height: calc(100% + 210px);

        img {
            isolation: isolate;
        }
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
