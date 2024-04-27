<script setup>
import HeroSlider from "./HeroSlider.vue";
import HeroBackground from "./HeroBackground.vue";
import Button from "@/components/landing/button/Button.vue";
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
                <Button href="/jobs?page=1" :arrow="true" id="btn"
                    >Search Jobs</Button
                >
                <Button
                    href="/courses?page=1"
                    :arrow="true"
                    :black="true"
                    id="btn"
                    >Browse Tech Courses</Button
                >
            </div>

            <HeroSlider />
        </div>
    </div>
</template>

<style scoped lang="scss">
#hero {
    .container {
        padding-top: 90px;
    }

    min-height: calc(100dvh - var(--navbarHeight));
    position: relative;
    padding-top: 0;
    overflow: hidden;

    &-text {
        position: relative;

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
        gap: 7px;
        z-index: 10;
        position: relative;

        #btn {
            padding: 20px 32px 20px 37px;
            border-radius: 30px;
        }
    }
}

@media (max-width: 600px) {
    #hero {
        .container {
            padding-top: 70px;
        }

        &-text {
            position: relative;
            isolation: isolate;
            z-index: 4;

            h1 {
                font-size: 11vw;
                line-height: 14vw;
            }

            p {
                margin-top: 20px;
                width: 70%;
            }
        }

        &-btns {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 40px 0 70px;
        }
    }
}
</style>
