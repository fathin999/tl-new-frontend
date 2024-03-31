<script setup>
import IconSolAI from "../icons/landingPage/solutions/IconSolAI.vue";
import IconSolStack from "../icons/landingPage/solutions/IconSolStack.vue";
import IconSolBriefcase from "../icons/landingPage/solutions/IconSolBriefcase.vue";
import IconSolPeople from "../icons/landingPage/solutions/IconSolPeople.vue";
import IconArrow from "../icons/IconArrow.vue";
</script>

<template>
    <div id="about-content">
        <div id="about-content-btns">
            <div class="about-item active">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">
                        <IconSolAI />
                    </div>
                    <div class="about-btn-title">Learn skills</div>
                </div>

                <!-- <div class="about-item-description">
                    <p>
                        From beginner-friendly courses to specialized training,
                        our offerings include a range of courses in key digital
                        fields like software development, data anlaysis, A.I.,
                        machine learning and more.
                    </p>

                    <a class="about-content-link">
                        View courses
                        <IconArrow />
                    </a>
                </div> -->
            </div>

            <div class="about-item">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">
                        <IconSolStack />
                    </div>
                    <div class="about-btn-title">Build portfolio</div>
                </div>
            </div>

            <div class="about-item">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">
                        <IconSolBriefcase />
                    </div>
                    <div class="about-btn-title">Get hired</div>
                </div>
            </div>

            <div class="about-item">
                <div class="about-btn clickable">
                    <div class="about-btn-icon">
                        <IconSolPeople />
                    </div>
                    <div class="about-btn-title">Network</div>
                </div>
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
                <p>Learn in-demand skills and future-proof your career</p>

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
    display: grid;
    grid-template-columns: 340px 1fr;
    margin-top: 60px;
    gap: 100px;

    &-btns {
        padding-top: 10px;
    }

    .about-item {
        margin-bottom: 20px;

        /* &-description {
            padding-top: 20px;
            padding-left: 35px;

            p {
                color: var(--textMedium);
                margin-bottom: 30px;
                padding-right: 30px;
                font-size: 0.95rem;
                line-height: 1.4rem;
            }

            a {
                font-size: 1.05rem;
                font-weight: 500;
                color: var(--purple);
                user-select: none;
                cursor: pointer;
                transition: color 0.4s ease-out;

                svg {
                    $size: 13px;

                    fill: var(--purple);
                    height: $size;
                    width: $size;
                    margin-left: 12px;
                    transition: fill 0.4s ease-out, margin 0.4s ease-out;
                }
            }

            a:hover {
                color: var(--black);

                svg {
                    fill: var(--black);
                    margin-left: 17px;
                }
            }
        } */
    }

    .about-btn {
        transition: background 0.4s ease-out;
        background-color: var(--bgMedium);
        padding: 12px;
        border-radius: 40px;
        display: flex;
        align-items: center;

        &-icon {
            $size: 45px;
            height: $size;
            width: $size;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-content: center;
            justify-content: center;
            padding-top: 13px;

            svg {
                $svgSize: 18px;
                height: $svgSize;
                widows: $svgSize;
            }
        }

        &-title {
            padding-left: 20px;
            font-weight: 500;
            font-size: 1.05rem;
        }
    }

    .active {
        .about-btn {
            background-color: var(--black);
            color: white;
        }
    }

    .about-btn:hover {
        background-color: gainsboro;
        background-color: var(--lightBlue);
    }

    .active:hover {
        .about-btn {
            background-color: var(--black);
        }
    }

    &-screen {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--bgMedium);
        padding: 40px;
        border-radius: 25px;

        img {
            object-fit: contain;
        }

        &-bg-container {
            position: relative;
            width: 70%;
        }

        &-background {
            border-radius: 20px;
            box-shadow: 0 20px 40px -2px rgba(210, 214, 217, 0.5);
            width: 100%;
        }

        &-specific {
            position: absolute;
            top: 70px;
            left: 1%;
            width: 98%;
            height: calc(100% - 100px);
            border-radius: 20px;
        }

        &-description {
            width: 100%;
            display: grid;
            grid-template-columns: 300px 190px;
            justify-content: space-between;
            /* margin-top: 50px; */
            margin-top: 70px;
            align-items: center;
            /* border: 1px solid var(--borderMedium); */
            /* padding: 35px 40px; */
            border-radius: 20px;

            p {
                font-size: 1.3rem;
                line-height: 1.8rem;
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
