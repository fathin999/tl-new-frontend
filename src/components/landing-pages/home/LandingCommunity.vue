<script setup>
import Button from "@/components/button/Button.vue";

const getImg = (index) => {
    return new URL(
        `/src/assets/landing-page/community/landing-community-${index}.png`,
        import.meta.url
    );
};

const getClass = (i) => {
    const cls = "community-img community-img-";
    const isYellow = i === 0 || i == 6 || i == 32 || i == 44;
    const isBlue = i == 39 || i == 54 || i == 56;
    const isGreen = i == 20 || i == 65;
    const isGreenAnim = i == 50 || i == 34;
    const isBlueAnim = i == 9 || i == 27;

    if (isYellow) return cls + "yellow";
    else if (isBlue) return cls + "blue";
    else if (isGreen) return cls + "green";
    else if (isGreenAnim) return cls + "green-anim";
    else if (isBlueAnim) return cls + "blue-anim";
    else return cls + "hover";
};
</script>

<template>
    <div class="section" id="community">
        <div class="container">
            <div id="community-title">
                <div class="section-title">
                    <h2>
                        Meet our
                        <br />
                        <u>community</u>
                    </h2>

                    <p>
                        Our community of students, instructors and mentors come
                        from the world's leading universities and companies.
                        Join a global network of highly accomplished leaders in
                        the technology industry.
                    </p>

                    <Button
                        :arrow="true"
                        href="/signup/select-role"
                        :black="true"
                    >
                        Join our family
                    </Button>
                </div>

                <img
                    src="/src/assets/landing-page/community/community-bg.svg"
                    alt=""
                />
            </div>

            <div id="community-list">
                <div
                    :class="getClass(index - 1)"
                    v-for="index in 70"
                    :key="index"
                >
                    <img
                        :src="getImg(index - 1)"
                        :alt="`community-img-${index}`"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@mixin ring($color, $border: 4px) {
    $margin: calc(($border + 2px) * -1);
    content: "";
    position: absolute;
    top: $margin;
    bottom: $margin;
    left: $margin;
    right: $margin;
    border-radius: 50%;
    border: $border solid $color;
}

@mixin animatedRing($color) {
    @include ring($color, 5px);
    animation: popup 2s ease-out infinite;
}

#community {
    $sectionWidth: 1100px;
    $width: 500px;
    padding-top: 80px;

    .container {
        display: grid;
        grid-template-columns: 1fr $width;
        width: $sectionWidth;
        position: relative;
    }

    .section-title {
        width: 65%;
        padding: 40px;
        border-radius: 20px;
        background-color: white;
        box-shadow: 0 7px 30px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: calc(var(--navbarHeight) + 30px);
        left: 0;

        p {
            width: 90%;
            margin-top: 30px;
        }

        a {
            position: relative;
            margin-top: 40px;
        }
    }

    &-list {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        user-select: none;
        gap: 25px;

        .community-img {
            $gap: 25px;
            $size: calc(($width - 7 * $gap) / 7);
            width: $size;
            height: $size;
            position: relative;

            &-yellow::before {
                @include ring(var(--yellow));
            }

            &-blue::before {
                @include ring(var(--blue));
            }

            &-green::before {
                @include ring(var(--green));
            }

            &-green-anim::before {
                @include animatedRing(var(--green));
            }

            &-blue-anim::before {
                @include animatedRing(var(--blue));
            }

            &-hover::before {
                @include ring(var(--purple));
                opacity: 0;
                transition: opacity 0.4s ease-out;
            }
        }

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    &-title {
        position: relative;

        img {
            border: blue;
            position: absolute;
            top: 0;
            left: -20%;
            height: 100%;
            width: 105%;
            z-index: -1;
            opacity: 0.5;
        }
    }
}

@media (max-width: 1300px) {
    #community {
        $width: 500px;

        .container {
            width: 100%;
            padding: 50px;
            margin: auto;
            grid-template-columns: 1fr $width;
        }

        .section-title {
            width: 70%;
            left: 7%;
        }

        &-title {
            img {
                left: 0;
                width: 97%;
            }
        }
    }
}

@media (max-width: 1100px) {
    $width: 450px;

    #community {
        .container {
            grid-template-columns: 1fr $width;
        }

        .section-title {
            width: 75%;
            left: 0;
        }

        &-list {
            $gap: 20px;

            gap: $gap;

            .community-img {
                $size: calc(($width - 7 * $gap) / 7);
                width: $size;
                height: $size;
            }
        }
    }
}

@media (max-width: 1000px) {
    #community {
        .container {
            width: 100%;
            display: block;
        }

        &-title {
            padding-bottom: 80px;

            img {
                width: 70%;
                left: 30%;
                top: 7%;
                height: 93%;
            }
        }

        .section-title {
            width: 60%;
        }

        &-list {
            $gap: 4vw;

            grid-template-columns: repeat(10, 1fr);
            column-gap: $gap;
            row-gap: 30px;

            .community-img {
                $size: calc(((100vw - 100px) - ($gap * 9)) / 10);
                width: $size;
                height: $size;
            }
        }
    }
}

@media (max-width: 700px) {
    #community {
        .container {
            padding: 0 20px;
        }

        .section-title {
            left: 0;
            width: 100%;
            padding: 20px 0 0;
            box-shadow: none;
            background-color: rgba(255, 255, 255, 0.7);
            text-align: center;

            p {
                margin-right: auto;
                margin-left: auto;
            }
        }

        &-title {
            padding: 0 0 70px;
            margin: 0;
            width: 100%;

            img {
                $margin: 80px;
                height: calc(100% + $margin);
                top: -$margin;
                width: 100vw;
                left: auto;
                right: -20px;
                object-fit: cover;
                object-fit: center right;
                opacity: 0.4;
            }
        }

        &-list {
            $gap: 6vw;

            gap: $gap;
            grid-template-columns: repeat(7, 1fr);

            .community-img {
                $size: calc(((100vw - 40px) - ($gap * 6)) / 7);
                width: $size;
                height: $size;
            }
        }
    }
}

@media (max-width: 500px) {
    #community {
        &-list {
            $gap: 4.2vw;

            gap: $gap;
            grid-template-columns: repeat(7, 1fr);

            .community-img {
                $size: calc(((100vw - 40px) - ($gap * 6)) / 7);
                width: $size;
                height: $size;

                &-blue::before {
                    @include animatedRing(var(--blue));
                }

                &-yellow::before {
                    @include animatedRing(var(--yellow));
                }
            }
        }
    }
}

@media (max-width: 370px) {
    #community {
        .section-title {
            width: calc(100vw - 50px);
        }
    }
}

@media (hover: hover) {
    #community-list {
        .community-img-hover:hover::before {
            opacity: 1;
        }
    }
}

@keyframes popup {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
