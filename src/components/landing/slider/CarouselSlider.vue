<script setup>
import IconArrow from "../icons/IconArrow.vue";
import {onMounted, onUnmounted, ref} from "vue";

defineProps({
    listStyle: Object,
});

// carousel methods
const carousel = ref();
let isDragging = ref(false);
let startX = ref(0);
let startScrollLeft = ref(0);

const btnClick = (dir) => {
    const width = carousel.value.children[0].getBoundingClientRect().width;
    const carouselWidth = carousel.value.getBoundingClientRect().width;
    const total = carousel.value.children.length;
    const allWidth = width * total;
    const maxScroll = allWidth - carouselWidth;

    if (dir === "prev") {
        if (carousel.value.scrollLeft == 0) {
            carousel.value.scrollLeft += allWidth;
        } else {
            carousel.value.scrollLeft -= width;
        }
    } else {
        if (carousel.value.scrollLeft > maxScroll) {
            carousel.value.scrollLeft = 0;
        } else {
            carousel.value.scrollLeft += width;
        }
    }
};

const dragStart = (e) => {
    isDragging.value = true;
    startX.value = e.pageX;
    startScrollLeft.value = carousel.value.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging.value) return;
    carousel.value.scrollLeft =
        startScrollLeft.value - (e.pageX - startX.value);
};

const dragStop = () => {
    isDragging.value = false;
};

onMounted(() => {
    carousel.value.addEventListener("mousemove", dragging);
    carousel.value.addEventListener("mousedown", dragStart);
    carousel.value.addEventListener("mouseup", dragStop);
});

onUnmounted(() => {
    carousel.value.removeEventListener("mousemove", dragging);
    carousel.value.removeEventListener("mousedown", dragStart);
    carousel.value.removeEventListener("mouseup", dragStop);
});
</script>

<template>
    <div id="carousel" :class="`${isDragging ? 'dragging' : ''}`">
        <div
            class="carousel-btn small-screen-slider-btn clickable"
            @click="btnClick('prev')"
        >
            <IconArrow />
        </div>

        <div
            class="carousel-list hide-scrollbar"
            ref="carousel"
            :id="listStyle"
        >
            <slot />
        </div>

        <div
            class="carousel-btn small-screen-slider-btn clickable"
            @click="btnClick('next')"
        >
            <IconArrow />
        </div>
    </div>
</template>

<style scoped lang="scss">
#carousel {
    $btnHeight: 45px;

    display: grid;
    grid-template-columns: $btnHeight 1fr $btnHeight;
    gap: 30px;
    align-items: center;

    .carousel-btn {
        height: $btnHeight;
        width: $btnHeight;
        background-color: var(--bgMedium);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--purple);

        svg {
            $size: 32%;
            height: $size;
            width: $size;
            fill: var(--black);
        }
    }

    .carousel-btn:first-of-type {
        transform: scaleX(-1);
    }

    .carousel-list {
        display: grid;
        grid-auto-flow: column;
        overflow-x: auto;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory !important;
    }
}

.dragging {
    .carousel-list {
        scroll-behavior: auto;
        scroll-snap-type: none;
    }
}

@media (max-width: 900px) {
    #carousel {
        gap: 15px;
    }
}

@media (max-width: 600px) {
    #carousel {
        width: 100vw;
        margin-left: -20px;
        display: block;
        position: relative;
        overflow: hidden;

        $margin: 10px;

        .carousel-btn:first-of-type {
            display: none;
        }

        .disable {
            opacity: 0;
        }
    }
}

@media (hover: hover) {
    #carousel {
        .carousel-btn:hover {
            background-color: var(--lightBlue);

            svg {
                fill: var(--black);
            }
        }
    }
}
</style>

<style lang="scss">
.landing-layout #carousel {
    .carousel-list > * {
        scroll-snap-align: start;
    }
}

@media (max-width: 600px) {
    .landing-layout #carousel {
        .carousel-list {
            $gap: 20px;
            $items: 1.2;

            grid-auto-columns: calc(((100% - ($items - 1) * $gap) / $items));
            gap: $gap;
            width: 100vw;
            padding: 0 20px;
        }

        .carousel-list > * {
            scroll-snap-align: center;
        }
    }
}
</style>
