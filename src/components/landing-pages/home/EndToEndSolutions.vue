<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import {getSolutions} from "@/composable/view-models/platform-solutions";
import {ref} from "vue";

let active = ref(0);

const solutions = getSolutions();

const getBtnClass = (index) => {
    return index === active.value
        ? "about-btn active clickable"
        : "about-btn clickable";
};

const getScreen = (img) => {
    return new URL(
        `/src/assets/landing-page/platform/landing-platform-${img}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div id="about-content">
        <div id="about-content-btns">
            <div
                v-for="(solution, i) in solutions"
                :key="solution.title"
                :class="getBtnClass(i)"
                @click="active = i"
            >
                {{ solution.title }}
            </div>
        </div>

        <div id="about-content-screen">
            <div id="about-content-screen-bg-container">
                <div id="about-content-screen-sidebar">
                    <div
                        v-for="(solution, i) in solutions"
                        @click="active = i"
                        :key="`sidebar-${solution.title}`"
                        :class="`sidebar-icon clickable ${
                            i === active
                                ? 'sidebar-clicked'
                                : 'sidebar-unclicked'
                        }`"
                    >
                        <component :is="solution.icon" />
                        <span>{{ solution.slug }}</span>
                    </div>
                </div>

                <div id="about-content-screen-item">
                    <img
                        :src="getScreen(solutions[active].slug)"
                        alt="Solutions - Learn"
                    />
                </div>
            </div>

            <div id="about-content-screen-description">
                <div>
                    <h4>{{ solutions[active].title }}</h4>
                    <p>
                        {{ solutions[active].description }}
                    </p>
                </div>

                <a :href="solutions[active].href" class="btn-arrow btn-primary">
                    {{ solutions[active].link }}
                    <IconArrow />
                </a>
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
        gap: 5px;
        margin: auto;
        padding: 7px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 50px;
    }

    .about-btn {
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

    .sidebar {
        &-icon {
            $iconSize: 55px;
            height: $iconSize;
            width: $iconSize;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 17px;
            transition: background 0.3s ease-out;

            svg {
                $svgSize: 17px;
                height: $svgSize;
                width: $svgSize;
                fill: white;
            }

            span {
                font-size: 0.55rem;
                text-transform: capitalize;
                margin-top: 5px;
                color: white;
            }
        }

        &-unclicked {
            svg,
            span {
                opacity: 0.45;
            }

            svg {
                fill: white;
            }
        }

        &-clicked {
            background-color: rgba(255, 255, 255, 0.1);

            span,
            svg {
                opacity: 1;
            }
        }

        &-unclicked:hover {
            span {
                opacity: 1;
            }

            svg {
                opacity: 1;
            }
        }
    }

    &-screen {
        $padding: 60px;
        $borderRadius: 20px;

        margin-top: 30px;
        position: relative;
        display: flex;
        align-items: center;
        background: var(--bgMedium);
        border-radius: 20px;
        text-align: left;
        padding: 60px 70px;
        gap: 80px;

        $height: 340px;
        $margin: 8px;
        $width: 73px;
        $screenHeight: calc($height - $margin * 2);
        $screenRatio: calc(534 / 326);
        $scaleRatio: calc($height / $screenHeight);

        &-sidebar {
            $largeRadius: 27px;
            $smallRadius: 15px;
            height: $height;
            width: $width;
            border-top-left-radius: $largeRadius;
            border-bottom-left-radius: $largeRadius;
            border-top-right-radius: $smallRadius;
            border-bottom-right-radius: $smallRadius;
            background-color: var(--darkBlue);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            z-index: 5;
        }

        &-item {
            object-fit: contain;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            height: $screenHeight;
            width: calc($screenRatio * $screenHeight);
            margin-top: $margin;
            display: block;
            position: relative;
            overflow: hidden;
            background-color: white;
            transition: transform 0.3s ease-out;

            img {
                height: 100%;
            }
        }

        &-item:hover {
            transform: scale($scaleRatio);
        }

        &-bg-container {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        &-description {
            h4 {
                font-size: 1.3rem;
            }

            p {
                color: var(--textMedium);
                margin: 15px 0 35px;
            }
        }
    }
}
</style>
