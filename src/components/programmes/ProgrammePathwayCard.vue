<script setup>
import IconStarOutline from "../icons/programmes/IconStarOutline.vue";
import IconStarFill from "../icons/programmes/IconStarFill.vue";
import ArrowLink from "../button/ArrowLink.vue";

defineProps({
    img: String,
    title: String,
    description: String,
    whoFor: String,
    level: String,
    cred: String,
    careers: Array,
    requirements: Array,
    courses: Array,
});

const getPathwayImg = (img) => {
    return new URL(
        `/src/assets/programmes/programme-pathway-${img}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="pathway-item">
        <div class="pathway-item-img">
            <img :src="getPathwayImg(img)" alt="" />
        </div>

        <div class="pathway-item-text">
            <h3>{{ title }}</h3>

            <div class="pathway-item-detail">
                <span>Difficulty:</span>

                <div class="pathway-item-detail-stars">
                    <div
                        v-for="index in 5"
                        :key="`pathway-star-${index}`"
                        :class="`pathway-item-detail-star ${
                            index <= level ? 'yellow' : ''
                        }`"
                    >
                        <IconStarFill class="star-fill" />
                        <IconStarOutline class="star-outline" />
                    </div>
                </div>
            </div>

            <div class="pathway-item-detail">
                <span>Who is it for:</span>

                <p>{{ whoFor }}</p>
            </div>

            <div class="pathway-item-detail">
                <span>Extra accreditation:</span>

                <p>{{ cred }}</p>
            </div>

            <div class="pathway-item-detail">
                <span>Careers:</span>

                <div>
                    <div class="pill" v-for="career in careers" :key="career">
                        {{ career }}
                    </div>
                </div>
            </div>

            <div class="pathway-item-detail">
                <span>Requirements:</span>

                <div>
                    <div class="point" v-for="req in requirements" :key="req">
                        {{ req }}
                    </div>
                </div>
            </div>

            <div class="pathway-item-detail">
                <span>Courses:</span>

                <div>
                    <a
                        class="course clickable"
                        href=""
                        v-for="course in courses"
                        :key="course.title"
                    >
                        <p>
                            {{ course.title }}
                        </p>

                        <ArrowLink title="Apply now" href="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pathway-item {
    $imgWidth: 90px;

    border: 1px solid gainsboro;
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: $imgWidth 1fr;
    gap: 50px;

    &-img {
        width: $imgWidth;

        img {
            width: 100%;
        }
    }

    &-text {
        h3 {
            font-size: 1.7rem;
            margin-bottom: 30px;
        }
    }

    &-detail {
        margin-bottom: 15px;
        display: grid;
        grid-template-columns: 180px 1fr;

        span {
            font-weight: 500;
            color: var(--textLight);
            font-size: 0.9rem;
        }

        span,
        p {
            line-height: 1.7rem;
        }

        &-star {
            $iconSize: 18px;

            height: $iconSize;
            width: $iconSize;
            position: relative;

            svg {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            .star {
                &-fill {
                    fill: rgb(255, 202, 103);
                    display: none;
                }

                &-outline {
                    fill: rgb(202, 187, 160);
                }
            }
        }

        &-stars {
            display: flex;
            gap: 5px;
            margin-top: 2px;

            .yellow {
                .star-fill {
                    display: block;
                }

                .star-outline {
                    display: none;
                }
            }
        }

        .pill {
            display: inline-block;
            font-weight: 500;
            font-size: 0.95rem;
            margin: 3px 0 5px;
            margin-right: 5px;
            padding: 5px 12px;
            border-radius: 7px;
            background-color: var(--lightBlue);
        }

        .point {
            margin: 5px 0 10px;
            position: relative;
            padding-left: 20px;
        }

        .point::before {
            $pointSize: 6px;
            position: absolute;
            content: "";
            height: $pointSize;
            width: $pointSize;
            border-radius: 50%;
            background-color: var(--black);
            top: 6px;
            left: 0;
        }

        .course {
            border: 1px solid gainsboro;
            border-radius: 10px;
            margin-bottom: 10px;
            padding: 15px 25px;
            display: flex;

            p {
                flex: 1;
                font-size: 1.05rem;
                font-weight: 500;
            }
        }

        .course:hover {
            background-color: var(--lightPurple);
        }
    }
}
</style>
