<script setup>
import IconOnline from "@/components/landing/icons/courses/IconOnline.vue";
import IconInstructor from "@/components/landing/icons/courses/IconInstructor.vue";
import IconCalendar from "@/components/landing/icons/courses/IconCalendar.vue";
import IconLevel from "@/components/landing/icons/courses/IconLevel.vue";
import IconCertificate from "@/components/landing/icons/courses/IconCertificate.vue";
import Button from "../button/Button.vue";

defineProps({
    role: String,
    title: String,
    description: String,
    provider: String,
    type: String,
    medium: String,
    delivery: String,
    timeline: String,
    level: String,
    banner: String,
    badge: String,
    providerLogo: String,
});

const emit = defineEmits(["clickBrochure", "clickApply"]);

const getBanner = (banner) => {
    return new URL(
        `/src/assets/database/courses/course-banner-${banner}.png`,
        import.meta.url
    );
};

const getBadge = (badge) => {
    return new URL(
        `/src/assets/database/courses/course-badge-${badge}.png`,
        import.meta.url
    );
};

const getLogo = (logo) => {
    return new URL(
        `/src/assets/database/courses/course-provider-${logo}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div id="course-item-header">
        <img
            src="/src/assets/landing/courses/course-bg.png"
            alt=""
            id="course-item-header-bg"
        />

        <div class="container">
            <div class="breadcrumbs">
                <a href="/">Home </a>
                <b> > </b>
                <a href="/courses">Courses</a>
                <b> > </b>
                <a>{{ role }}</a>
            </div>

            <div id="course-item-header-texts">
                <h1>{{ title }}</h1>

                <p>{{ description }}</p>

                <div id="course-item-header-texts-provider">
                    <img :src="getLogo(providerLogo)" :alt="provider" />
                    <span>
                        <b> {{ provider }} </b>
                        <br />
                        {{ type }}
                    </span>
                </div>

                <div id="course-item-header-btns">
                    <Button :large="true" @click="$emit('clickBrochure')">
                        Get brochure
                    </Button>

                    <Button
                        :arrow="true"
                        :black="true"
                        @click="$emit('clickApply')"
                    >
                        Apply now
                    </Button>
                </div>
            </div>

            <div id="course-item-header-card">
                <div id="course-item-header-card-banner">
                    <img :src="getBanner(banner)" :alt="title" />
                </div>

                <h5>Key summary:</h5>

                <img
                    :src="getBadge(badge)"
                    :alt="title"
                    id="course-item-header-card-badge"
                />

                <div class="course-item-summary">
                    <IconOnline />
                    <span>{{ medium }}</span>
                </div>

                <div class="course-item-summary">
                    <IconInstructor />
                    <span>{{ delivery }}</span>
                </div>

                <div class="course-item-summary">
                    <IconCalendar />
                    <span>{{ timeline }}</span>
                </div>

                <div class="course-item-summary">
                    <IconLevel />
                    <span>{{ level }} level</span>
                </div>

                <div class="course-item-summary">
                    <IconCertificate />
                    <span>Certification</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#course-item-header {
    position: relative;
    width: 100%;
    margin-bottom: 50px;
    background-color: var(--bgLight);
    padding: 50px 0 80px;

    &-bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .breadcrumbs {
        margin-bottom: 45px;
    }

    &-texts {
        flex: 1;
        padding-right: 100px;

        h1 {
            margin-bottom: 15px;
            font-size: 2.7rem;
            line-height: 3.6rem;
        }

        p {
            width: 70%;
        }

        &-provider {
            display: flex;
            align-items: center;
            user-select: none;
            margin: 25px 0 40px;
            font-size: 0.9rem;

            img {
                $size: 60px;
                height: $size;
                width: $size;
                border-radius: 25%;
                border: 1px solid rgba(0, 0, 0, 0.1);
                margin-right: 20px;
            }

            b {
                display: inline-block;
                font-size: 1rem;
                padding-bottom: 5px;
            }
        }
    }

    &-btns {
        display: flex;
        gap: 10px;

        a {
            border-radius: 50px;
            min-width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }

    &-card {
        $padding: 35px;
        $margin: calc(-1 * $padding);

        width: 290px;
        position: relative;
        background-color: white;
        border-radius: 20px;
        padding: $padding;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

        $height: 90px;
        $size: 90px;
        $top: calc($height - $size * 0.7);

        &-banner {
            height: $height;
            overflow: hidden;
            margin-top: $margin;
            margin-left: $margin;
            margin-right: $margin;
            margin-bottom: calc($height - $size + $top + 25px);

            img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        &-badge {
            border: 1px solid rgb(220, 220, 220);
            height: $size;
            width: $size;
            position: absolute;
            top: $top;
            left: 0;
            right: 0;
            margin: auto;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 20%;
            backdrop-filter: blur(7px);
            -webkit-backdrop-filter: blur(7px);
        }

        h5 {
            display: none;
        }

        .course-item-summary {
            margin-bottom: 25px;
            display: flex;
            font-size: 0.95rem;

            svg {
                $size: 15px;
                height: $size;
                width: $size;
                margin-right: 25px;
                fill: var(--textMedium);
            }
        }

        .course-item-summary:last-of-type {
            margin-bottom: 0px;
        }
    }
}

@media (max-width: 1000px) {
    #course-item-header {
        padding: 30px 0 40px;
        margin-bottom: 30px;

        .breadcrumbs {
            margin-bottom: 40px;
        }

        &-texts {
            padding-right: 50px;
        }

        &-card {
            margin-top: 50px;
            background: transparent;
            border: 1px solid gainsboro;
            box-shadow: none;
            display: flex;
            flex-wrap: wrap;
            row-gap: 15px;
            width: 100%;

            &-badge,
            &-banner {
                display: none;
            }

            h5 {
                display: block;
                width: 100%;
                color: var(--textLight);
                margin-bottom: 15px;
            }

            .course-item-summary {
                display: inline-flex;
                width: 50%;
                margin: 0;

                svg {
                    margin-right: 15px;
                }
            }
        }
    }
}

@media (max-width: 900px) {
    #course-item-header {
        padding-bottom: 10px;

        .container {
            display: block;
        }

        &-card {
            margin-top: 60px;
        }
    }
}

@media (max-width: 700px) {
    #course-item-header {
        padding-top: 20px;
        padding-bottom: 0;
        margin-bottom: 20px;

        .breadcrumbs {
            margin-bottom: 40px;
        }

        &-bg {
            object-fit: cover;
            object-position: top right;
        }

        &-texts {
            padding-right: 20px;

            h1 {
                font-size: 1.5rem;
                line-height: 2rem;
                margin-bottom: 15px;
            }

            p {
                width: 90%;
            }

            &-provider {
                margin: 30px 0 40px;

                img {
                    $size: 50px;
                    height: $size;
                    width: $size;
                    border-radius: 50%;
                    margin-right: 15px;
                }
            }
        }

        &-btns {
            flex-direction: column;
            align-items: flex-start;
        }

        &-card {
            margin: 50px -20px 0;
            width: 100vw;
            padding: 30px 22px;
            border-radius: 0;

            .course-item-summary {
                width: 100%;
            }
        }
    }
}
</style>
