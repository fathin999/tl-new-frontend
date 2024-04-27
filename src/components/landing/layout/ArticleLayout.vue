<script setup>
import LandingLayout from "./LandingLayout.vue";
import Banner from "./Banner.vue";

defineProps({
    title: String,
    subtext: String,
});
</script>

<template>
    <LandingLayout>
        <Banner :title="title" :subtext="subtext" />

        <div class="container" id="article">
            <slot />
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#article {
    width: 750px;
    padding-bottom: 90px;
    font-size: 1.1rem;
    line-height: 1.7rem;
}

@media (max-width: 1300px) {
    #article {
        width: 750px;
        margin-left: auto;
        margin-right: auto;
    }
}

@media (max-width: 900px) {
    #article {
        width: auto;
        margin: auto 20px;
    }
}
</style>

<style lang="scss">
.landing-layout #article {
    h2 {
        font-size: 1.8rem;
        margin: 4rem 0 2.2rem;
    }

    .first {
        margin-top: 0;
    }

    ul,
    ol {
        padding-left: 15px;

        li {
            padding-left: 20px;
        }
    }

    a {
        font-weight: 500;
        color: var(--purple);
    }
}

@media (max-width: 600px) {
    .landing-layout #article {
        h2 {
            font-size: 6vw;
            line-height: 8vw;
            margin: 3.5rem 0 2rem;
        }

        ul,
        ol {
            padding-left: 25px;

            li {
                padding-left: 10px;
                margin-bottom: 10px;
            }
        }
    }
}

@media (hover: hover) {
    .landing-layout #article {
        a:hover {
            text-decoration: underline;
        }
    }
}
</style>
