<script setup>
import IconArrow from "../icons/IconArrow.vue";

defineProps({
    logo: String,
    title: String,
    tagline: String,
    subtext: String,
    slug: String,
});

defineEmits(["scrollToRef"]);

const getHeaderImg = (slug) => {
    let temp = "kyouth";
    return new URL(
        `/src/assets/programmes/programme-banner-${temp}.png`,
        import.meta.url
    );
};

const getLogo = (logo) => {
    let temp = "kyouth";
    return new URL(
        `/src/assets/programmes/programme-logo-${logo}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div id="programme-header">
        <div id="programme-bg">
            <img
                id="programme-bg-arrow-top"
                src="/src/assets/programmes/programme-bg-arrow.svg"
                alt=""
            />

            <img
                id="programme-bg-arrow-btm"
                src="/src/assets/programmes/programme-bg-arrow.svg"
                alt=""
            />
        </div>

        <div class="container">
            <div class="breadcrumbs">
                <a href="/">Home </a>
                <b> > </b>
                <a href="/special-programmes#programmes-list">Programmes</a>
            </div>

            <div id="programme-header-content">
                <div id="programme-header-title">
                    <div id="programme-header-logo">
                        <img :src="getLogo(logo)" alt="" />
                        <h3>{{ title }}</h3>
                    </div>

                    <h1>{{ tagline }}</h1>

                    <p>{{ subtext }}</p>

                    <div id="programme-header-btns">
                        <div
                            class="btn-black btn-arrow"
                            @click="$emit('scrollToRef')"
                        >
                            Explore career pathways
                            <IconArrow />
                        </div>
                        <a
                            class="btn-primary btn-arrow"
                            @click="$emit('scrollToRef')"
                        >
                            Apply now
                            <IconArrow />
                        </a>
                    </div>
                </div>

                <div id="programme-header-img">
                    <img :src="getHeaderImg(slug)" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#programme {
    overflow: hidden;

    &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.08;

        $imgMargin: 10px;
        $height: 300px;
        $time: 3s;

        img {
            position: absolute;
            height: $height;
            opacity: 0;
        }

        &-arrow-top {
            top: 0;
            left: 0;
            animation: moveRight $time linear infinite;
        }

        &-arrow-btm {
            top: calc($height + 40px);
            left: $height;
            animation: moveRight $time linear infinite 0.5s;
        }
    }

    &-header {
        position: relative;

        .container {
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;

            .breadcrumbs {
                margin: 15px 0;
            }
        }

        $size: 400px;

        &-content {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 40%;
            align-items: center;
            gap: 100px;
            min-height: 550px;
            padding-bottom: 50px;
        }

        &-logo {
            display: flex;
            align-items: center;

            img {
                $logoSize: 40px;
                height: $logoSize;
                width: $logoSize;
                border: 1px solid gainsboro;
                margin-right: 10px;
                border-radius: 50%;
            }
        }

        &-title {
            h3 {
                font-size: 0.95rem;
                color: var(--purple);
            }

            h1 {
                font-size: 3.4rem;
                margin: 50px 0 20px;
                line-height: 4.3rem;
            }

            p {
                width: 70%;
            }

            &-partners {
                height: 45px;
                width: 100%;
                object-fit: contain;
                object-position: center left;
            }
        }

        &-btns {
            margin: 50px 0 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }

        &-img {
            position: relative;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
    }
}

@media (max-width: 1300px) {
    #programme {
        &-header {
            &-content {
                gap: 50px;
            }
        }
    }
}

@media (max-width: 1100px) {
    #programme {
        &-bg {
            opacity: 0.15;
            width: 70%;
            left: auto;
            right: 0;

            img {
                height: 250px;
            }

            &-arrow-btm {
                top: 300px;
            }
        }

        &-header {
            &-title {
                h1 {
                    font-size: 5vw;
                    margin: 25px 0 10px;
                }
            }

            &-content {
                gap: 30px;
                min-height: 0;
                padding-top: 10px;
                padding-bottom: 70px;
            }

            &-img {
                height: auto;
            }
        }
    }
}

@media (max-width: 600px) {
    #programme {
        &-bg {
            opacity: 0.2;
            width: 100%;
            right: 0;
            height: 40%;
            top: 60%;

            img {
                height: 150px;
            }

            &-arrow-btm {
                top: 200px;
                left: 140px;
            }
        }

        &-header {
            &-content {
                display: block;
            }

            &-title {
                h3 {
                    font-size: 0.9rem;
                }

                h1 {
                    font-size: 9vw;
                    line-height: 11vw;
                    margin: 50px 0 20px;
                }

                p {
                    width: 85%;
                }
            }

            &-img {
                margin-top: 40px;
                width: 100%;
                max-height: 80vw;
            }
        }
    }
}

@keyframes moveRight {
    0% {
        transform: translateX(-50px);
        opacity: 1;
    }
    30% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(-50px);
        opacity: 0;
    }
}
</style>
