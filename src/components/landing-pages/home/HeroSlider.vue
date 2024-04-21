<script setup>
import IconHeroChart from "@/components/icons/landingPage/IconHeroChart.vue";
import {getLandingHeroStats} from "@/composable/stats/stats";
import Slider from "../../slider/Slider.vue";
import HeroStatsItem from "./HeroStatsItem.vue";

const stats = getLandingHeroStats();
</script>

<template>
    <Slider duration="45" gap="20" :gradient="false">
        <img
            src="/src/assets/landing-page/img-1.png"
            alt="People smiling"
            class="slider-item-m"
        />

        <img
            src="/src/assets/landing-page/img-2.png"
            alt="People smiling"
            class="slider-item-s"
        />

        <div class="slider-item-s stats">
            <HeroStatsItem
                :title="stats[0].title"
                :subtext="stats[0].subtext"
                :green="true"
            />
        </div>

        <img
            src="/src/assets/landing-page/img-3.png"
            alt="People smiling"
            class="slider-item-l"
        />

        <div class="slider-item-s stats">
            <HeroStatsItem
                :title="stats[1].title"
                :subtext="stats[1].subtext"
                :purple="true"
            />
        </div>

        <img
            src="/src/assets/landing-page/img-4.png"
            alt="People smiling"
            class="slider-item-m"
        />

        <div class="slider-item-s">
            <HeroStatsItem
                :title="stats[2].title"
                :subtext="stats[2].subtext"
                :blue="true"
            />
        </div>

        <div class="slider-item-s">
            <HeroStatsItem
                :title="stats[3].title"
                :subtext="stats[3].subtext"
            />
        </div>
    </Slider>
</template>

<style scoped lang="scss">
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
        }
    }
}
</style>
