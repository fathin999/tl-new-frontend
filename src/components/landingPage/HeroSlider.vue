<script setup>
import IconHeroBriefcase from "../icons/landingPage/IconHeroBriefcase.vue";
import IconHeroChart from "../icons/landingPage/IconHeroChart.vue";
</script>

<template>
    <div id="hero-slider">
        <div class="hero-slider-container" id="hero-slider-first">
            <div class="hero-slider-item-m">
                <img
                    src="/src/assets/landing-page/img-1.png"
                    alt="People smiling"
                />
            </div>
            <div class="hero-slider-item-s">
                <img
                    src="/src/assets/landing-page/img-2.png"
                    alt="People smiling"
                />
            </div>
            <div class="hero-slider-item-s stats" id="hero-slider-green">
                <div class="hero-slider-icon">
                    <IconHeroChart />
                </div>

                <h2>97%</h2>
                <p>Average student placement rate</p>
            </div>
        </div>

        <div class="hero-slider-container" id="hero-slider-second">
            <div class="hero-slider-item-l">
                <img
                    src="/src/assets/landing-page/img-3.png"
                    alt="People smiling"
                />
            </div>
            <div class="hero-slider-item-s stats" id="hero-slider-purple">
                <div class="hero-slider-icon">
                    <IconHeroChart />
                </div>

                <h2>97%</h2>
                <p>Average student placement rate</p>
            </div>
        </div>

        <div class="hero-slider-container" id="hero-slider-third">
            <div class="hero-slider-item-m">
                <img
                    src="/src/assets/landing-page/img-4.png"
                    alt="People smiling"
                />
            </div>
            <div class="hero-slider-item-s stats" id="hero-slider-blue-light">
                <div class="hero-slider-icon">
                    <IconHeroChart />
                </div>

                <h2>97%</h2>
                <p>Average student placement rate</p>
            </div>
            <div class="hero-slider-item-s stats" id="hero-slider-blue-dark">
                <div class="hero-slider-icon">
                    <IconHeroChart />
                </div>

                <h2>97%</h2>
                <p>Average student placement rate</p>
            </div>
        </div>

        <div id="hero-slider-screen" />
    </div>
</template>

<style scoped lang="scss">
$gap: 20px;
$long: 590px;
$medium: 400px;
$small: 250px;
$long: calc($small + $medium + $gap);
$total: calc($long + $small + $gap);
$firstInitPos: 0;
$secondInitPos: calc($total + $gap);
$thirdInitPos: calc($total * 2 + $gap * 2);
$hiddenPos: calc($secondInitPos * -1);
$time: 50s;
$borderRadius: 25px;

#hero-slider {
    margin-top: 70px;
    height: 330px;
    border-radius: $borderRadius;
    overflow: hidden;
    position: relative;
    isolation: isolate;
    transform: translateZ(0);
    user-select: none;

    &-first {
        left: $firstInitPos;
        animation: slide1 $time linear infinite;
    }

    &-second {
        left: $secondInitPos;
        animation: slide2 $time linear infinite;
    }

    &-third {
        left: $thirdInitPos;
        animation: slide3 $time linear infinite;
    }

    &-green {
        background-color: var(--lightGreen);
    }

    &-purple {
        background-color: var(--lightPurple);
    }

    &-blue {
        &-light {
            background-color: var(--lightBlue);
        }

        &-dark {
            background-color: var(--black);
            color: white;

            .hero-slider-icon svg {
                fill: white;
            }
        }
    }

    h2 {
        font-size: 3.5rem;
        font-weight: 600;
    }

    p {
        margin-top: 7px;
        font-size: 0.9rem;
        line-height: 1.2rem;
    }

    &-screen {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 5;
    }
}

.hero-slider {
    &-container {
        position: absolute;
        height: 100%;
        display: flex;
        gap: $gap;
        flex-wrap: nowrap;
        top: 0;
    }

    @mixin item($w) {
        width: $w;
        background-color: gainsboro;
        border-radius: $borderRadius;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    &-item {
        &-l {
            @include item($long);
        }

        &-m {
            @include item($medium);
        }

        &-s {
            @include item($small);
        }
    }

    &-icon {
        $iconSize: 45px;

        flex: 1;

        svg {
            height: $iconSize;
            width: $iconSize;
            fill: var(--black);
        }
    }
}

.stats {
    padding: 40px;
    display: flex;
    flex-direction: column;
}

@keyframes slide1 {
    0% {
        left: $firstInitPos;
    }
    33.2% {
        opacity: 1;
    }
    33.33% {
        left: $hiddenPos;
        opacity: 0;
    }
    33.34% {
        left: $thirdInitPos;
        opacity: 0;
    }
    33.35% {
        opacity: 1;
    }
    66.6% {
        left: $secondInitPos;
    }
    100% {
        left: $firstInitPos;
    }
}

@keyframes slide2 {
    0% {
        left: $secondInitPos;
    }
    33.3% {
        left: $firstInitPos;
    }
    66.65% {
        opacity: 1;
    }
    66.66% {
        left: $hiddenPos;
        opacity: 0;
    }
    66.67% {
        left: $thirdInitPos;
        opacity: 0;
    }
    66.68% {
        opacity: 1;
    }
    100% {
        left: $secondInitPos;
    }
}

@keyframes slide3 {
    0% {
        left: $thirdInitPos;
        opacity: 1;
    }
    33.3% {
        left: $secondInitPos;
    }
    66.7% {
        left: $firstInitPos;
    }
    99.97% {
        opacity: 1;
    }
    99.98% {
        left: $hiddenPos;
        opacity: 0;
    }
    99.99% {
        left: $thirdInitPos;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
