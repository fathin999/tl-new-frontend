<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import Button from "@/components/button/Button.vue";
import {scrollToTab} from "@/composable/utilities/tabs";
import {getSolutions} from "@/composable/view-models/platform-solutions";
import {ref} from "vue";

let active = ref(0);
const btns = ref();

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

const chooseTab = (i) => {
    active.value = i;

    scrollToTab(btns.value, btns.value, i);
};
</script>

<template>
    <div id="about-content">
        <div id="about-content-btns" class="hide-scrollbar" ref="btns">
            <div
                v-for="(solution, i) in solutions"
                :key="solution.title"
                :class="getBtnClass(i)"
                @click="chooseTab(i)"
            >
                {{ solution.title }}
            </div>
        </div>

        <div id="about-content-screen">
            <div id="about-content-screen-bg-container">
                <div id="about-content-screen-sidebar">
                    <div
                        v-for="(solution, i) in solutions"
                        @click="chooseTab(i)"
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

                <Button :href="solutions[active].href" :arrow="true">
                    {{ solutions[active].link }}
                </Button>
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

        @media (hover: hover) {
            &-item:hover {
                transform: scale($scaleRatio);
            }
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

@media (max-width: 1300px) {
    #about-content {
        &-screen {
            padding: 45px 55px;
            gap: 60px;
        }
    }
}

@media (max-width: 1150px) {
    #about-content {
        margin-top: 35px;

        &-screen {
            padding: 50px 35px;
            gap: 55px;

            $height: 280px;
            $margin: 5px;
            $screenRatio: calc(534 / 326);
            $screenHeight: calc($height - $margin * 2);

            &-sidebar {
                $largeRadius: 22px;
                $smallRadius: 10px;
                $width: 65px;

                height: $height;
                width: $width;
                border-top-left-radius: $largeRadius;
                border-bottom-left-radius: $largeRadius;
                border-top-right-radius: $smallRadius;
                border-bottom-right-radius: $smallRadius;
            }

            &-item {
                height: $screenHeight;
                width: calc($screenRatio * $screenHeight);
                margin-top: $margin;
            }
        }

        .sidebar {
            &-icon {
                $iconSize: 47px;
                height: $iconSize;
                border-radius: 12px;
                width: $iconSize;

                svg {
                    $svgSize: 15px;
                    height: $svgSize;
                    width: $svgSize;
                }
            }
        }
    }
}

@media (max-width: 1000px) {
    #about-content {
        &-screen {
            display: block;
            padding: 40px;

            $barWidth: 65px;
            $width: 500px;
            $screenRatio: calc(534 / 326);
            $screenHeight: calc($width / $screenRatio);

            &-item {
                width: $width;
                height: $screenHeight;
                margin: 0;
                background: white;

                img {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    object-fit: contain;
                }
            }

            &-sidebar {
                $smallRadius: 10px;
                width: $barWidth;
                height: $screenHeight;
                border-top-right-radius: $smallRadius;
                border-bottom-right-radius: $smallRadius;
                gap: 8px;
            }

            @media (hover: hover) {
                &-item:hover {
                    transform: scale(1.03);
                }
            }

            &-description {
                margin-top: 50px;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;

                p {
                    width: 60%;
                    margin: 15px auto 30px;
                }
            }
        }
    }
}

@media (max-width: 750px) {
    #about-content {
        padding-bottom: 0;
        margin-top: 40px;

        &-btns {
            gap: 10px;
            margin-bottom: 12px;
            padding: 0 20px 2px;
            border-radius: 0;
            overflow: scroll;
            width: auto;
            max-width: 100vw;
            margin-left: -20px;
            border: none;
            position: relative;

            .about-btn {
                border: 1px solid darkgrey;
                flex-shrink: 0;
                padding: 12px 18px;
                font-size: 0.85rem;
                white-space: nowrap;
                overflow: hidden;
                /* background-color: var(--bgMedium); */
            }

            .active {
                background-color: var(--black);
                color: white;
            }
        }

        &-screen {
            $padding: 23px;

            padding: 40px $padding 45px;
            /* margin: 30px -20px 0; */
            margin: 0 -20px 0;
            /* border-radius: 10px; */
            border-radius: 0;
            border: 1px solid gainsboro;
            /* background-color: var(--bgLight); */

            $barWidth: 13vw;
            $width: calc(100vw - ($padding * 2) - $barWidth);
            $screenRatio: calc(534 / 326);
            $screenHeight: calc($width / $screenRatio);
            $largeRadius: 3vw;

            &-sidebar {
                height: $screenHeight;
                width: $barWidth;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                border-top-left-radius: $largeRadius;
                border-bottom-left-radius: $largeRadius;
                display: grid;
                grid-template-rows: repeat(5, 1fr);
                padding: 2vw;
                gap: 1vw;

                .sidebar-icon {
                    width: auto;
                    height: auto;
                    border-radius: 25%;
                    font-size: 2vw;
                    margin: 0;
                    padding: 1vw 0;

                    svg {
                        $size: 3vw;
                        height: $size;
                        width: $size;
                    }

                    span {
                        line-height: 2vw;
                        font-size: 2vw;
                        margin-top: 1vw;
                    }
                }
            }

            &-item {
                width: $width;
                height: $screenHeight;
                border-top-right-radius: $largeRadius;
                border-bottom-right-radius: $largeRadius;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }

            &-description {
                margin-top: 45px;

                h4 {
                    font-size: 5vw;
                    line-height: 7vw;
                }

                p {
                    width: 85%;
                    margin: 7px auto 25px;
                }
            }
        }
    }
}

@media (hover: hover) {
    #about-content {
        .about-btn:hover {
            background-color: var(--bgMedium);
        }

        .active:hover {
            background-color: var(--black);
        }

        .sidebar {
            &-unclicked:hover {
                span {
                    opacity: 1;
                }

                svg {
                    opacity: 1;
                }
            }
        }
    }

    @media (max-width: 750px) {
        #about-content {
            .about-btn:hover {
                background-color: var(--lightBlue);
            }

            .active:hover {
                background-color: var(--black);
            }
        }
    }
}
</style>
