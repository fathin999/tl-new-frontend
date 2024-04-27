<script setup>
import {getLandingHeroStats} from "@/composable/stats/stats";
import Slider from "../../slider/Slider.vue";
import HeroStatsItem from "./HeroStatsItem.vue";

const stats = getLandingHeroStats();
</script>

<template>
    <Slider duration="45" :gradient="false" borderRadius="20">
        <div id="hero-slider-inner-container">
            <img
                src="/src/assets/landing/landing-page/img-1.png"
                alt="People smiling"
                class="slider-item-m"
            />

            <img
                src="/src/assets/landing/landing-page/img-2.png"
                alt="People smiling"
                class="slider-item-s"
            />

            <div class="slider-item-s stats">
                <HeroStatsItem
                    :title="stats[0].title"
                    :subtext="stats[0].subtext"
                    :green="true"
                >
                    <component :is="stats[0].icon" />
                </HeroStatsItem>
            </div>

            <img
                src="/src/assets/landing/landing-page/img-3.png"
                alt="People smiling"
                class="slider-item-l"
            />

            <div class="slider-item-s stats">
                <HeroStatsItem
                    :title="stats[1].title"
                    :subtext="stats[1].subtext"
                    :purple="true"
                >
                    <component :is="stats[1].icon" />
                </HeroStatsItem>
            </div>

            <img
                src="/src/assets/landing/landing-page/img-4.png"
                alt="People smiling"
                class="slider-item-m"
            />

            <div class="slider-item-s">
                <HeroStatsItem
                    :title="stats[2].title"
                    :subtext="stats[2].subtext"
                    :blue="true"
                >
                    <component :is="stats[2].icon" />
                </HeroStatsItem>
            </div>

            <div class="slider-item-s">
                <HeroStatsItem
                    :title="stats[3].title"
                    :subtext="stats[3].subtext"
                >
                    <component :is="stats[3].icon" class="dark" />
                </HeroStatsItem>
            </div>
        </div>
    </Slider>
</template>

<style scoped lang="scss">
#hero-slider-inner-container {
    $gap: 20px;
    display: flex;
    gap: $gap;
    padding-left: $gap;
}

.slider {
    @mixin item($w) {
        width: $w;
        border-radius: 25px;
        overflow: hidden;
        height: 330px;
        object-fit: cover;
    }

    &-item {
        &-l {
            @include item(470px);
        }

        &-m {
            @include item(340px);
        }

        &-s {
            @include item(250px);

            svg {
                height: 43px;
                width: 47px;
                fill: var(--black);
                margin-top: 10px;
            }

            .dark {
                fill: rgba(255, 255, 255, 0.9);
            }
        }
    }
}

@media (max-width: 700px) {
    #hero-slider-inner-container {
        $gap: 10px;
        display: flex;
        gap: $gap;
        padding-left: $gap;
    }

    .slider {
        &-outer {
            border-radius: 0 !important;
        }

        @mixin item($w) {
            width: $w;
            height: 220px;
        }

        &-item {
            &-l {
                @include item(280px);
            }

            &-m {
                @include item(220px);
            }

            &-s {
                @include item(180px);

                svg {
                    height: 33px;
                    width: 40px;
                    margin-top: 7px;
                }
            }
        }
    }
}
</style>
