<template>
    <div id="trusted" class="blue section">
        <div class="container">
            <div class="section-title">
                <h3>Trusted by leading organizations</h3>
            </div>

            <div id="trusted-list">
                <div class="gradient" />
                <div class="gradient" id="right" />
                <img
                    class="trusted-logos"
                    id="trusted-logos-1"
                    alt="logo"
                    src="/src/assets/landing-page/trusted/logo-set-1.png"
                />
                <img
                    class="trusted-logos"
                    id="trusted-logos-2"
                    alt="logo"
                    src="/src/assets/landing-page/trusted/logo-set-2.png"
                />
                <img
                    class="trusted-logos"
                    id="trusted-logos-3"
                    alt="logo"
                    src="/src/assets/landing-page/trusted/logo-set-1.png"
                />
                <div id="trusted-screen" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$height: 127px;
$gap: 120px;
$total: 700px;
$firstInitPos: 0;
$secondInitPos: $total;
$thirdInitPos: calc($total * 2);
$hiddenPos: calc($secondInitPos * -1);
$time: 50s;

#trusted {
    padding: 90px 0 70px;

    h3 {
        font-size: 1.7rem;
        text-align-last: center;
    }

    &-list {
        margin-top: 20px;
        position: relative;
        height: $height;
        overflow: hidden;

        .trusted-logos {
            object-fit: contain;
            height: $height;
            width: $total;
            position: absolute;
            top: 0;
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
        rgba(243, 246, 251, 1) 0%,
        rgba(243, 246, 251, 0) 100%
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
