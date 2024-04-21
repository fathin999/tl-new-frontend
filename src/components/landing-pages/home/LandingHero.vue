<script setup>
import HeroSlider from "./HeroSlider.vue";
import HeroBackground from "./HeroBackground.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
</script>

<template>
    <div id="hero" class="section">
        <div class="container">
            <HeroBackground />

            <div id="hero-text">
                <h1>Your tech career<br />starts <u>here</u></h1>
                <p>
                    Our world-class, end-to-end tech career ecosystem is what
                    you need to realise your full potential.
                </p>
            </div>

            <div id="hero-btns">
                <a href="/jobs" class="btn-primary btn-arrow">
                    Search Jobs
                    <IconArrow />
                </a>
                <a href="/courses" class="btn-black btn-arrow">
                    Browse Tech Courses
                    <IconArrow />
                </a>
            </div>

            <HeroSlider />
        </div>
    </div>
</template>

<style scoped lang="scss">
#hero {
    min-height: calc(100dvh - var(--navbarHeight));
    position: relative;
    padding-top: 0;

    .container {
        padding-top: 70px;
    }

    &-text {
        h1 {
            font-size: 3.7rem;
        }

        p {
            margin-top: 30px;
            width: 40%;
            color: var(--textMedium);
        }
    }

    &-btns {
        margin: 50px 0 80px;
        display: inline-flex;
        gap: 10px;

        a {
            padding: 20px 32px 20px 37px;
            border-radius: 30px;
        }
    }
}
</style>
