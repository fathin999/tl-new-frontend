<script setup>
import ArrowLink from "@/components/button/ArrowLink.vue";
import {ref} from "vue";

let active = ref(0);

const solutions = [
    {
        title: "Learn skills",
        screen: 0,
        description:
            "Learn in-demand digital skills and future-proof your career. Learn in-demand digital skills and future-proof your career.",
        link: "View courses",
        href: "/courses",
    },
    {
        title: "Build portfolio",
        screen: 0,
        description:
            "Learn in-demand digital skills and future-proof your career. Learn in-demand digital skills and future-proof your career.",
        link: "View courses",
        href: "/courses",
    },
    {
        title: "Explore careers",
        screen: 0,
        description:
            "Learn in-demand digital skills and future-proof your career. Learn in-demand digital skills and future-proof your career.",
        link: "See career paths",
        href: "/courses",
    },
    {
        title: "Get hired",
        screen: 0,
        description:
            "Learn in-demand digital skills and future-proof your career. Learn in-demand digital skills and future-proof your career.",
        link: "Explore jobs",
        href: "/jobs",
    },
    {
        title: "Network",
        screen: 0,
        description:
            "Learn in-demand digital skills and future-proof your career. Learn in-demand digital skills and future-proof your career.",
        link: "Join us now",
        href: "/signup/choose-role",
    },
];

const getBtnClass = (index) => {
    return index === active.value
        ? "about-btn active clickable"
        : "about-btn clickable";
};
</script>

<template>
    <div id="about-content">
        <div id="about-content-btns">
            <div
                v-for="(solution, index) in solutions"
                :key="solution.title"
                :class="getBtnClass(index)"
                @click="active = index"
            >
                {{ solution.title }}
            </div>
        </div>

        <div id="about-content-screen">
            <div id="about-content-screen-bg-container">
                <img
                    src="/src/assets/landing-page/solutions/solutions-screen.svg"
                    alt="Solutions screen"
                    id="about-content-screen-background"
                />

                <img
                    src="/src/assets/landing-page/solutions/solutions-learn.png"
                    alt="Solutions - Learn"
                    id="about-content-screen-specific"
                />

                <div id="about-content-screen-select-bg" />
            </div>

            <div id="about-content-screen-description">
                <div>
                    <h4>{{ solutions[active].title }}</h4>
                    <p>
                        {{ solutions[active].description }}
                    </p>
                </div>

                <ArrowLink
                    :title="solutions[active].link"
                    :href="solutions[active].href"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#about-content {
    margin-top: 50px;
    text-align: center;

    &-btns {
        display: inline-flex;
        gap: 10px;
        margin: auto;
        padding: 7px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 50px;
    }

    .about-btn {
        transition: background 0.4s ease-out;
        background-color: white;
        padding: 15px 20px;
        border-radius: 230px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.95rem;
    }

    .active {
        background-color: var(--black);
        color: white;
    }

    .about-btn:hover {
        background-color: var(--bgMedium);
    }

    .active:hover {
        background-color: var(--black);
    }

    &-screen {
        $padding: 60px;
        $borderRadius: 20px;

        margin-top: 30px;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-direction: column;
        align-items: center;
        background: var(--bgMedium);
        border-radius: $borderRadius;
        text-align: left;

        img {
            object-fit: contain;
        }

        &-bg-container {
            position: relative;
            width: 100%;
            padding: $padding;
        }

        &-background {
            border-radius: $borderRadius;
            width: 100%;
        }

        &-specific {
            position: absolute;
            height: calc(100% - ($padding * 2) - 40px);
            width: calc(100% - ($padding * 2));
            bottom: $padding;
            left: $padding;
            border-radius: $borderRadius;
        }

        &-description {
            padding-right: calc($padding * 1.5);
            padding-left: calc($padding / 2);
            width: 100%;

            h4 {
                font-size: 1.3rem;
            }

            p {
                color: var(--textMedium);
                margin: 15px 0 35px;
            }
        }

        &-select-bg {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
}
</style>
