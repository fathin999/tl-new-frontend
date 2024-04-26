<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <div class="landing-layout">
        <Navbar />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>

<style lang="scss">
.landing-layout {
    *,
    *::before,
    *::after {
        font-family: "SFProDisplay", "Helvetica Neue", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 600;
    }

    p {
        line-height: 1.5rem;
    }

    a {
        text-decoration: none;
        user-select: none;
        color: var(--black);
        cursor: pointer;
    }

    // -------------------
    // LAYOUT
    // -------------------

    .container {
        width: 1200px;
        margin-right: auto;
        margin-left: auto;
        height: 100%;
    }

    main {
        padding-top: var(--navbarHeight);
    }

    // -------------------
    // SECTIONS
    // -------------------

    .section {
        $sectionMargin: 130px;

        padding: $sectionMargin 0;

        &-top {
            display: flex;
            justify-content: space-between;
            align-content: flex-end;

            p {
                width: 80%;
            }
        }

        &-title-center,
        &-title {
            position: relative;

            h2 {
                font-size: 2.5rem;
                line-height: 3.5rem;
            }

            h3 {
                font-size: 2rem;
                line-height: 2.7rem;
            }

            p {
                margin-top: 20px;
                color: var(--textMedium);
                width: 500px;
            }

            .btn-arrow {
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }

        &-title-center {
            text-align: center;

            p {
                margin-right: auto;
                margin-left: auto;
                width: 60%;
            }
        }

        .slider {
            margin-top: 50px;
        }
    }

    .blue {
        background-color: var(--bgMedium);
    }

    // -------------------
    // GLOBAL
    // -------------------

    .clickable {
        user-select: none;
        cursor: pointer;
    }

    u {
        text-decoration: none;
        display: inline-block;
        position: relative;
        z-index: 5;
    }

    u::before {
        $margin-h: -7px;
        $margin-v: -5px;

        content: "";
        position: absolute;
        top: $margin-v;
        bottom: $margin-v;
        right: $margin-h;
        left: $margin-h;
        background-color: var(--yellow);
        z-index: -1;
    }

    .disable-scroll {
        overflow: hidden !important;
    }

    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    // -------------------
    // SECONDARY BAR
    // -------------------

    .secondary-bar {
        $border: 1px solid var(--borderLight);
        background-color: white;
        border-top: $border;
        border-bottom: $border;
        padding: 5px 0;
        position: sticky;
        top: var(--navbarHeight);
        left: 0;
        z-index: 10;
        right: 0;
        overflow-x: scroll;

        .container {
            display: flex;
        }

        .bar-item {
            padding: 20px 20px;
            border-radius: 10px;
            margin-right: 10px;
            font-size: 0.95rem;
            color: var(--darkBlue);
            position: relative;
            white-space: nowrap;
        }

        .bar-item::before {
            $height: 3px;
            position: absolute;
            content: "";
            bottom: -5px;
            right: 0;
            left: 0;
            margin: auto;
            width: 0;
            height: $height;
            border-radius: calc($height / 2);
            background-color: var(--purple);
            transition: width 0.4s ease-out;
        }

        .bar-item-active {
            color: var(--purple);
            font-weight: 500;
            position: relative;
        }

        .bar-item-active::before {
            width: 40%;
        }
    }

    @media (hover: hover) {
        .secondary-bar {
            .bar-item:hover {
                background-color: var(--lightPurple);
            }
        }
    }

    // -------------------
    // SLIDER
    // -------------------

    .small-screen-slider-btn {
        display: none;
    }

    // -------------------
    // JOB CARD
    // -------------------

    .job-item {
        $itemPadding: 30px;

        transition: border 0.4s ease-out;
        cursor: default;
        border: 1px solid var(--borderMedium);
        flex-shrink: 0;
        border-radius: 20px;
        padding: $itemPadding;
        padding-bottom: 140px;
        position: relative;
        user-select: none;
        cursor: pointer;
        overflow: hidden;

        h4 {
            font-size: 1.25rem;
            line-height: 1.8rem;
            min-height: 2rem;
            max-height: 3.7rem;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        span {
            font-size: 0.95rem;
            line-height: 1.4rem;
            color: var(--textLight);

            b {
                display: inline-block;
                padding: 0 10px;
            }
        }

        &-logo {
            $size: 70px;

            border: 1px solid var(--borderMedium);
            height: $size;
            width: $size;
            border-radius: 14px;
            object-fit: cover;
        }

        &-title {
            margin: 20px 0 8px;

            h4 {
                cursor: pointer;
                display: inline-block;
                transition: color 0.3s ease-out;
            }
        }

        p {
            color: var(--black);
            font-size: 0.95rem;
            cursor: pointer;
            display: inline-block;
            transition: color 0.3s ease-out;
        }

        &-details {
            position: absolute;
            bottom: $itemPadding;
            left: $itemPadding;
            right: $itemPadding;

            &-item {
                margin-top: 15px;
                display: flex;
                align-items: center;

                span {
                    color: var(--textMedium);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                svg {
                    $size: 13px;

                    height: $size;
                    width: $size;
                    margin-right: 25px;
                    flex-shrink: 0;
                }
            }
        }
    }

    @media (hover: hover) {
        .job-item {
            &-title {
                h4:hover {
                    color: var(--purple);
                }
            }

            p:hover {
                color: var(--purple);
            }
        }
    }

    // -------------------
    // FORMS
    // -------------------

    .input {
        margin-bottom: 35px;
        width: 100%;
    }

    label {
        font-size: 0.9rem;
        font-weight: 500;
        display: block;
        padding-bottom: 10px;
        color: var(--textMedium);
    }

    $inputPadding: 20px;

    @mixin input {
        display: block;
        border: 1px solid var(--borderMedium);
        padding: 0 $inputPadding;
        border-radius: 10px;
        font-family: "SFProDisplay", "Helvetica Neue", sans-serif;
        font-size: 1rem;
        width: 100%;
    }

    input {
        @include input();
        height: 55px;
    }

    textarea {
        @include input();
        padding-top: $inputPadding;
        min-height: 150px;
    }

    textarea:focus,
    input:focus {
        outline: none;
        border-color: var(--purple);
        background: white;
    }

    input:autofill,
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
        $background: var(--bgLight);
        background-color: $background;
        -webkit-box-shadow: 0 0 0 50px $background inset;
        box-shadow: 0 0 0 50px $background inset;
    }

    // ---------------
    // BREADCRUMBS
    // ---------------

    .breadcrumbs {
        font-size: 0.83rem;
        width: 100%;
        display: flex;
        align-items: center;

        a {
            font-weight: 500;
            color: var(--textLight);
        }

        b {
            font-weight: 600;
            display: inline-block;
            padding: 0 14px;
            color: var(--purple);
        }

        a:hover {
            color: var(--purple);
        }
    }

    // ---------------
    // RESPONSIVE
    // ---------------

    @media (max-width: 1300px) {
        .container {
            $margin: 50px;
            margin-right: $margin;
            margin-left: $margin;
            width: auto;
        }

        .section {
            padding: 100px 0;
        }
    }

    @media (max-width: 900px) {
        .container {
            $margin: 20px;
            margin-right: $margin;
            margin-left: $margin;
            width: auto;
        }

        .section {
            padding: 90px 0;
        }
    }

    @media (max-width: 600px) {
        .section {
            &-title-center,
            &-title {
                h2 {
                    font-size: 6vw;
                    line-height: 8vw;
                }

                h3 {
                    font-size: 5.5vw;
                    line-height: 8vw;
                }

                p {
                    margin-top: 10px;
                    width: 90%;
                }
            }
        }

        u::before {
            $margin-h: -5px;
            $margin-v: -3px;

            top: $margin-v;
            bottom: $margin-v;
            right: $margin-h;
            left: $margin-h;
        }

        .hide-mobile {
            display: none;
        }

        .small-screen-slider-btn {
            $size: 60px;

            position: absolute;
            display: flex !important;
            align-items: center;
            justify-content: center;
            top: 0;
            bottom: 0;
            margin: auto;
            right: 10px;
            height: $size !important;
            width: $size !important;
            border-radius: 50% !important;
            background-color: white !important;
            box-shadow: 0 10px 30px rgba(141, 166, 182, 0.4);
            border: 1px solid whitesmoke;

            svg {
                $iconSize: 29%;
                height: $iconSize !important;
                width: $iconSize !important;
                fill: var(--black) !important;
            }
        }

        .secondary-bar {
            padding: 0;
            border-top: none;

            .bar-item {
                padding: 22px 17px 15px;
                border-bottom: 3px solid transparent;
                border-radius: 0;
                font-size: 0.9rem;
                color: var(--textLight);
                font-weight: 500;
            }

            .bar-item-active {
                border-color: var(--purple);
                color: var(--purple);
            }

            .bar-item-active::before {
                width: 0;
            }
        }
    }
}
</style>
