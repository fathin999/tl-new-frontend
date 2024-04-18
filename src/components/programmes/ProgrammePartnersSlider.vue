<template>
    <div id="programme-partners">
        <div class="container">
            <div id="programme-partners-list">
                <div class="gradient" />
                <div class="gradient" id="right" />
                <img
                    class="programme-partners-logos"
                    id="programme-partners-logos-1"
                    alt="logo"
                    src="/src/assets/programmes/programme-logo-set-0.png"
                />
                <img
                    class="programme-partners-logos"
                    id="programme-partners-logos-2"
                    alt="logo"
                    src="/src/assets/programmes/programme-logo-set-1.png"
                />
                <img
                    class="programme-partners-logos"
                    id="programme-partners-logos-3"
                    alt="logo"
                    src="/src/assets/programmes/programme-logo-set-2.png"
                />
                <div id="programme-partners-screen" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$height: 120px;
$ratio: calc(960 / 200);
$width: calc($height * $ratio);
$firstInitPos: 0;
$secondInitPos: $width;
$thirdInitPos: calc($width * 2);
$hiddenPos: calc($secondInitPos * -1);
$time: 50s;

#programme-partners {
    padding: 0;

    h3 {
        font-size: 1.7rem;
        text-align-last: center;
    }

    &-list {
        position: relative;
        height: $height;
        overflow: hidden;
        isolation: isolate;

        .programme-partners-logos {
            object-fit: contain;
            object-position: center center;
            height: $height;
            width: $width;
            position: absolute;
            top: 0;
            isolation: isolate;
        }
    }

    &-logos {
        &-1 {
            left: $firstInitPos;
            animation: slide1 $time linear infinite;
        }

        &-2 {
            left: $secondInitPos;
            animation: slide2 $time linear infinite;
        }

        &-3 {
            left: $thirdInitPos;
            animation: slide3 $time linear infinite;
        }
    }

    &-screen {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 5;
    }
}

.gradient {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 200px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
    );

    &#right {
        left: auto;
        right: 0;
        transform: scaleX(-1);
    }
}

@keyframes slide1 {
    0% {
        left: $firstInitPos;
    }
    33.2% {
        opacity: 1;
    }
    33.33% {
        left: $hiddenPos;
        opacity: 0;
    }
    33.34% {
        left: $thirdInitPos;
        opacity: 0;
    }
    33.35% {
        opacity: 1;
    }
    66.6% {
        left: $secondInitPos;
    }
    100% {
        left: $firstInitPos;
    }
}

@keyframes slide2 {
    0% {
        left: $secondInitPos;
    }
    33.3% {
        left: $firstInitPos;
    }
    66.65% {
        opacity: 1;
    }
    66.66% {
        left: $hiddenPos;
        opacity: 0;
    }
    66.67% {
        left: $thirdInitPos;
        opacity: 0;
    }
    66.68% {
        opacity: 1;
    }
    100% {
        left: $secondInitPos;
    }
}

@keyframes slide3 {
    0% {
        left: $thirdInitPos;
        opacity: 1;
    }
    33.3% {
        left: $secondInitPos;
    }
    66.7% {
        left: $firstInitPos;
    }
    99.97% {
        opacity: 1;
    }
    99.98% {
        left: $hiddenPos;
        opacity: 0;
    }
    99.99% {
        left: $thirdInitPos;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
