<script setup>
import IconStarOutline from "../icons/programmes/IconStarOutline.vue";
import IconStarFill from "../icons/programmes/IconStarFill.vue";
import ArrowLink from "../button/ArrowLink.vue";
import Button from "../button/Button.vue";

defineProps({
    img: String,
    title: String,
    whoFor: String,
    level: Number,
    cred: String,
    careers: Array,
    requirements: Array,
    courses: Array,
});

const getPathwayImg = (img) => {
    return new URL(
        `/src/assets/database/programmes/programme-pathway-${img}.png`,
        import.meta.url
    );
};

const getBadgeImg = (img) => {
    return new URL(`/src/assets/database/courses/${img}`, import.meta.url);
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
                <span>Accreditation:</span>

                <p>{{ cred }}</p>
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
                <span>Careers:</span>

                <div>
                    <div class="pill" v-for="career in careers" :key="career">
                        {{ career }}
                    </div>
                </div>
            </div>

            <div class="pathway-item-detail">
                <span>Courses:</span>

                <div>
                    <a
                        class="course clickable"
                        v-for="course in courses"
                        :key="course.title"
                    >
                        <img
                            :src="getBadgeImg(course.logo)"
                            alt=""
                            class="course-badge"
                        />

                        <div class="course-title">
                            <span>{{ course.level }}</span>
                            <p>
                                {{ course.title }}
                            </p>
                        </div>

                        <Button :small="true"> Apply now </Button>
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
    margin-bottom: 15px;
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
            font-size: 1.8rem;
            margin-bottom: 30px;
        }
    }

    &-detail {
        margin-bottom: 12px;
        display: grid;
        grid-template-columns: 150px 1fr;

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
                    /* fill: rgb(255, 208, 122); */
                    fill: var(--green);
                    display: none;
                }

                &-outline {
                    /* fill: rgb(222, 196, 149); */
                    fill: rgb(151, 192, 192);
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
            background-color: rgb(222, 237, 255);
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
            border-radius: 15px;
            margin-top: 7px;
            padding: 15px 20px 15px 15px;
            display: flex;
            align-items: center;
            gap: 20px;

            &-badge {
                $size: 55px;
                height: $size;
                width: $size;
                border: 1px solid gainsboro;
                object-fit: contain;
                border-radius: 10px;
                background-color: white;
            }

            &-title {
                flex: 1;

                span {
                    font-weight: 400;
                }

                p {
                    font-weight: 500;
                    font-size: 1.1rem;
                }
            }

            .btn-s {
                font-size: 0.92rem;
                padding: 10px 17px;
            }
        }
    }
}

@media (max-width: 900px) {
    .pathway-item {
        padding: 20px;
        display: block;

        &-img {
            $imgSize: 70px;
            height: $imgSize;
            width: $imgSize;
            margin-bottom: 20px;
        }

        &-text {
            h3 {
                font-size: 6vw;
                line-height: 8vw;
                margin-bottom: 25px;
            }
        }

        &-detail {
            display: block;
            margin-bottom: 30px;

            span {
                font-size: 0.85rem;
                margin-bottom: 5px;
                color: rgb(158, 158, 158);
            }

            p {
                font-size: 1.1rem;
            }

            .pill {
                padding: 8px 14px;
            }

            .point {
                font-size: 1.1rem;
                line-height: 1.7rem;
                margin: 2px 0 9px;
            }

            .point::before {
                top: 9px;
            }

            .course {
                $padding: 18px;

                display: block;
                position: relative;
                padding: $padding;
                margin-top: 8px;
                margin-bottom: 12px;

                &-badge {
                    $size: 60px;
                    height: $size;
                    width: $size;
                    position: absolute;
                    top: $padding;
                    right: $padding;
                }

                &-title {
                    padding-right: 90px;

                    span {
                        font-size: 4vw;
                        line-height: 5.5vw;
                        color: var(--black);
                        display: block;
                    }

                    p {
                        font-size: 5vw;
                        line-height: 7vw;
                    }
                }

                .btn-s {
                    font-size: 0.9rem;
                    margin-top: 20px;
                    padding: 10px 15px;
                    display: block;
                    width: 110px;
                    text-align: center;
                }
            }
        }
    }
}

@media (max-width: 650px) {
    .pathway-item {
        padding: 25px;
        border: none;
        border-radius: 0;

        &-img {
            $size: 50px;
            height: $size;
            width: $size;
        }

        &-text {
            h3 {
                font-size: 1.3rem;
                line-height: 1.8rem;
                margin: 0 0 17px;
            }
        }

        &-detail {
            margin-bottom: 22px;
        }

        .pill {
            margin: 3px 0;
            margin-right: 5px;
        }

        .course {
            width: 100%;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
            padding: 20px;

            &-title {
                span {
                    line-height: 1rem;
                    font-size: 0.95rem;
                    color: var(--textMedium);
                }

                p {
                    line-height: 1.5rem;
                    font-size: 1.1rem;
                }
            }

            .btn-s {
                margin-top: 15px;
                padding: 8px 17px;
            }
        }
    }
}

@media (hover: hover) {
    .pathway-item {
        &-detail {
            .course:hover {
                background-color: var(--lightPurple);
            }
        }
    }
}
</style>
