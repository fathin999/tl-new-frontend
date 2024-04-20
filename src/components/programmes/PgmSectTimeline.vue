<script setup>
defineProps({
    timeline: Array,
});

const getTimelineIcon = (icon) => {
    return new URL(
        `/src/assets/programmes/programme-icon-${icon}.svg`,
        import.meta.url
    );
};
</script>

<template>
    <div class="section" id="programme-timeline">
        <div class="container">
            <div class="section-title-center">
                <h2>Programme <u>timeline</u></h2>
                <p>Understand how our it all works, from start to finish.</p>
            </div>

            <div id="programme-timeline-list">
                <div
                    v-for="(item, i) in timeline"
                    :class="`programme-timeline-item ${
                        i % 2 === 0 ? 'reverse' : ''
                    }`"
                    :key="item.title"
                >
                    <div class="programme-timeline-item-text">
                        <h4>{{ item.time }}</h4>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>

                    <div class="programme-timeline-item-dot"></div>

                    <div class="programme-timeline-item-img">
                        <div class="programme-timeline-item-img-outline">
                            <img :src="getTimelineIcon(item.icon)" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#programme {
    &-timeline {
        padding-bottom: 30px;

        &-list {
            margin-top: 60px;
            position: relative;

            $margin: 100px;

            .programme-timeline-item {
                display: flex;
                gap: 30px;
                margin-bottom: $margin;
                position: relative;

                &-text {
                    border: 1px solid white;
                    flex: 1;
                    text-align: right;
                    flex-shrink: 0;

                    h4 {
                        font-size: 1rem;
                        color: var(--purple);
                    }

                    h3 {
                        font-size: 1.7rem;
                        margin: 10px 0 15px;
                    }

                    p {
                        padding-left: 50%;
                        color: var(--textMedium);
                        font-size: 1.05rem;
                        line-height: 1.6rem;
                    }
                }

                &-dot {
                    $size: 17px;
                    width: $size;
                    height: $size;
                    background-color: var(--purple);
                    border-radius: 50%;
                }

                &-img {
                    flex: 1;
                    border: 1px solid whitesmoke;
                    flex-shrink: 0;
                    border: 1px solid white;

                    &-outline {
                        $size: 70px;
                        height: $size;
                        width: $size;
                        border-radius: 30%;
                        border: 1px solid var(--darkBlue);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }

                    img {
                        $size: 50%;
                        object-fit: contain;
                        height: $size;
                        width: $size;
                    }
                }
            }

            .reverse {
                flex-direction: row-reverse;

                .programme-timeline-item {
                    &-text {
                        text-align: left;

                        p {
                            padding: 0;
                            padding-right: 50%;
                        }
                    }

                    &-img {
                        text-align: right;

                        img {
                            display: inline-block;
                        }
                    }
                }
            }

            .programme-timeline-item::before {
                position: absolute;
                content: "";
                top: 0;
                bottom: calc($margin * -1);
                right: 0;
                left: 0;
                margin: auto;
                width: 1px;
                background-color: var(--purple);
                z-index: -1;
                opacity: 0.5;
            }

            .programme-timeline-item::last-of-type {
                margin-bottom: 0;
            }

            .programme-timeline-item:last-of-type::before {
                height: 0;
            }
        }
    }
}
</style>
