<script setup>
import IconArrow from "../icons/IconArrow.vue";
import {onMounted, onUnmounted, ref} from "vue";

defineOptions({
    inheritAttrs: false,
});

// carousel methods
const carousel = ref();
let isDragging = ref(false);
let startX = ref(0);
let startScrollLeft = ref(0);

const btnClick = (dir) => {
    const width = carousel.value.children[0].getBoundingClientRect().width;
    const carouselWidth = carousel.value.getBoundingClientRect().width;
    const maxScroll = carouselWidth - width;

    console.log(carousel.value.scrollLeft, maxScroll);

    if (dir === "prev") {
        if (carousel.value.scrollLeft == 0)
            carousel.value.scrollLeft += carouselWidth;
        else carousel.value.scrollLeft -= width;
    } else {
        if (carousel.value.scrollLeft + 5 > maxScroll)
            carousel.value.scrollLeft = 0;
        else carousel.value.scrollLeft += width;
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
        <div class="carousel-btn clickable" @click="btnClick('prev')">
            <IconArrow />
        </div>

        <div class="carousel-list" ref="carousel" v-bind="$attrs">
            <slot />
        </div>

        <div class="carousel-btn clickable" @click="btnClick('next')">
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
        background-color: var(--lightPurple);
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

    .carousel-btn:hover {
        background-color: var(--purple);

        svg {
            fill: var(--black);
        }
    }

    .carousel-list {
        display: grid;
        grid-auto-flow: column;
        overflow-x: auto;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory !important;
    }

    .carousel-list::-webkit-scrollbar {
        display: none;
    }

    .carousel-list {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
}

.dragging {
    .carousel-list {
        scroll-behavior: auto;
        scroll-snap-type: none;
    }
}
</style>

<style lang="scss">
.carousel-list > * {
    scroll-snap-align: start;
}
</style>
