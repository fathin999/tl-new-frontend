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

                <div class="about-item-description">
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
                </div>
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
            <img
                src="/src/assets/landing-page/solutions/solutions-learn.png"
                alt="Solutions - Learn"
            />

            <div id="about-content-screen-bg" />
        </div>
    </div>
</template>

<style scoped lang="scss">
#about-content {
    display: grid;
    grid-template-columns: 340px 1fr;
    margin-top: 50px;
    gap: 150px;

    &-btns {
        padding-top: 30px;
    }

    .about-item {
        margin-bottom: 15px;

        &-description {
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
        }
    }

    .about-btn {
        transition: background 0.4s ease-out;
        background-color: whitesmoke;
        padding: 10px;
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
            padding-top: 11px;

            svg {
                $svgSize: 20px;
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
        margin-bottom: 50px;

        .about-btn {
            background-color: var(--black);
            color: white;
        }
    }

    .about-btn:hover {
        background-color: gainsboro;
    }

    .active:hover {
        .about-btn {
            background-color: var(--black);
        }
    }

    &-screen {
        position: relative;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }

        &-bg {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }
    }
}
</style>
