<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";

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

                    <a class="btn-black btn-arrow" href="/signup/choose-role">
                        Join our family
                        <IconArrow />
                    </a>
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
#community {
    $sectionWidth: 1100px;
    $width: 500px;
    padding-top: 50px;

    .container {
        display: grid;
        grid-template-columns: 1fr $width;
        width: $sectionWidth;
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
        display: flex;
        flex-wrap: wrap;
        user-select: none;

        .community-img {
            $gap: 25px;
            $size: calc(($width - 7 * $gap) / 7);
            width: $size;
            height: $size;
            position: relative;
            margin-left: $gap;
            margin-bottom: $gap;

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

            &-hover:hover::before {
                opacity: 1;
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
