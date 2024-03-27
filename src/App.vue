<script setup>
import IconArrow from "./components/icons/IconArrow.vue";
import Navbar from "./components/layout/Navbar.vue";
import HeroSlider from "./components/landingPage/HeroSlider.vue";
import HeroBackground from "./components/landingPage/HeroBackground.vue";
</script>

<template>
    <Navbar />

    <main>
        <div id="hero">
            <div class="container">
                <HeroBackground />

                <div id="hero-text">
                    <h1>Your tech career<br />starts <u>here</u></h1>
                    <p>
                        Our world-class, end-to-end tech career ecosystem is
                        what you need to realise your full potential.
                    </p>
                </div>

                <div id="hero-btns">
                    <a href="/" id="hero-btns-primary"
                        >Search Jobs <IconArrow
                    /></a>
                    <a href="/" id="hero-btns-black"
                        >Browse Tech Courses <IconArrow
                    /></a>
                </div>

                <HeroSlider />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
#hero {
    min-height: calc(100dvh - var(--navbarHeight));
    position: relative;

    .container {
        padding: 70px 0;
    }

    &-text {
        h1 {
            font-size: 3.5rem;
            font-weight: 600;
        }

        p {
            margin-top: 35px;
            width: 40%;
            color: var(--textMedium);
        }
    }

    &-btns {
        margin-top: 50px;
        display: inline-flex;
        gap: 10px;

        a {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 20px 32px 20px 37px;
            border-radius: 30px;
            color: white;
            font-size: 0.95rem;
            font-weight: 600;
            transition: gap 0.3s ease-out;

            svg {
                height: 13px;
                width: 13px;
                opacity: 0.8;
                fill: white;
            }
        }

        &-primary {
            background-color: var(--purple);
        }

        &-black {
            background-color: var(--black);
        }
    }
}
</style>
