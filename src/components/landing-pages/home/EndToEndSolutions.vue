<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import IconSolAI from "@/components/icons/landingPage/solutions/IconSolAI.vue";
import IconSolStack from "@/components/icons/landingPage/solutions/IconSolStack.vue";
import IconSolBriefcase from "@/components/icons/landingPage/solutions/IconSolBriefcase.vue";
import IconSolPeople from "@/components/icons/landingPage/solutions/IconSolPeople.vue";
</script>

<template>
    <div id="about-content">
        <div id="about-content-btns">
            <div class="about-btn active clickable">
                <div class="about-btn-icon">
                    <IconSolAI />
                </div>
                <div class="about-btn-title">Learn skills</div>
            </div>

            <div class="about-btn clickable">
                <div class="about-btn-icon">
                    <IconSolStack />
                </div>
                <div class="about-btn-title">Build portfolio</div>
            </div>

            <div class="about-btn clickable">
                <div class="about-btn-icon">
                    <IconSolBriefcase />
                </div>
                <div class="about-btn-title">Get hired</div>
            </div>

            <div class="about-btn clickable">
                <div class="about-btn-icon">
                    <IconSolPeople />
                </div>
                <div class="about-btn-title">Network</div>
            </div>

            <div class="about-btn clickable">
                <div class="about-btn-icon">
                    <IconSolPeople />
                </div>
                <div class="about-btn-title">Network</div>
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
                    <h4>Learn skills</h4>
                    <p>
                        Learn in-demand digital skills and future-proof your
                        career. Learn in-demand digital skills and future-proof
                        your career.
                    </p>
                </div>

                <a class="btn-primary btn-arrow">
                    View courses
                    <IconArrow />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#about-content {
    margin-top: 60px;

    &-btns {
        display: flex;
        gap: 10px;
    }

    .about-btn {
        transition: background 0.4s ease-out;
        background-color: var(--bgMedium);
        padding: 12px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex: 1;

        &-icon {
            $size: 40px;
            height: $size;
            width: $size;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-content: center;
            justify-content: center;

            svg {
                $svgSize: 40%;
                height: $svgSize;
                widows: $svgSize;
                margin: auto;
            }
        }

        &-title {
            padding-left: 15px;
            font-weight: 500;
        }
    }

    .active {
        background-color: var(--black);
        color: white;
    }

    .about-btn:hover {
        background-color: gainsboro;
        background-color: var(--lightBlue);
    }

    .active:hover {
        background-color: var(--black);
    }

    &-screen {
        $padding: 60px;
        $borderRadius: 20px;

        margin-top: 10px;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-direction: column;
        align-items: center;
        background: var(--bgMedium);
        border-radius: $borderRadius;

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
            /* box-shadow: 0 20px 40px -2px rgba(210, 214, 217, 0.5); */
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
            padding-right: $padding;
            padding-left: calc($padding / 2);
            width: 100%;

            h4 {
                font-size: 1.3rem;
            }

            p {
                color: var(--textMedium);
                margin: 15px 0 30px;
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
