<script setup>
import IconArrow from "./components/icons/IconArrow.vue";
import Navbar from "./components/layout/Navbar.vue";
import HeroSlider from "./components/landingPage/HeroSlider.vue";
import HeroBackground from "./components/landingPage/HeroBackground.vue";
</script>

<template>
    <Navbar />

    <main>
        <div id="hero" class="section">
            <div class="container">
                <HeroBackground />

                <div id="hero-text">
                    <h1>Your tech career<br />starts <u>here</u></h1>
                    <p>
                        Our world-class, end-to-end tech career ecosystem is
                        what you need to realise your full potential.
                    </p>
                </div>

                <div id="hero-btns">
                    <a href="/" id="hero-btns-primary"
                        >Search Jobs <IconArrow
                    /></a>
                    <a href="/" id="hero-btns-black"
                        >Browse Tech Courses <IconArrow
                    /></a>
                </div>

                <HeroSlider />
            </div>
        </div>

        <div id="trusted" class="blue section">
            <div class="container">
                <div class="section-title">
                    <h2>Trusted by</h2>
                    <p>
                        TalentLabs is trusted by a diverse range of industry
                        leaders, from innovative startups to top global
                        companies.
                    </p>
                </div>

                <div id="trusted-list">
                    <img
                        class="trusted-logo-item"
                        alt="logo"
                        src="/src/assets/landing-page/trusted/trusted-logo-1.png"
                    />
                    <img
                        class="trusted-logo-item"
                        alt="logo"
                        src="/src/assets/landing-page/trusted/trusted-logo-2.png"
                    />
                    <img
                        class="trusted-logo-item"
                        alt="logo"
                        src="/src/assets/landing-page/trusted/trusted-logo-3.png"
                    />
                    <img
                        class="trusted-logo-item"
                        alt="logo"
                        src="/src/assets/landing-page/trusted/trusted-logo-4.png"
                    />
                    <img
                        class="trusted-logo-item"
                        alt="logo"
                        src="/src/assets/landing-page/trusted/trusted-logo-5.png"
                    />
                    <img
                        class="trusted-logo-item"
                        alt="logo"
                        src="/src/assets/landing-page/trusted/trusted-logo-4.png"
                    />
                </div>
            </div>
        </div>

        <div id="about" class="section">
            <div class="container">
                <div class="section-title">
                    <h2>
                        All-in-one solution to <br />
                        kickstart your <u>tech career</u>
                    </h2>
                    <p>
                        We provide end-to-end solutions to ensure that you can
                        effectively realise your tech career - from learning to
                        getting a job.
                    </p>
                </div>

                <div id="about-content">
                    <div id="about-content-btns">
                        <div class="about-btn clickable active">
                            <div class="about-btn-icon">A</div>
                            <div class="about-btn-title">Learn skills</div>
                        </div>

                        <div class="about-btn clickable">
                            <div class="about-btn-icon">A</div>
                            <div class="about-btn-title">Improve resume</div>
                        </div>

                        <div class="about-btn clickable">
                            <div class="about-btn-icon">A</div>
                            <div class="about-btn-title">Get hired</div>
                        </div>
                    </div>

                    <div id="about-content-screen"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
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

    &-title {
        width: 50%;

        h2 {
            font-size: 2.8rem;
            line-height: 3.8rem;
        }

        p {
            margin-top: 20px;
            color: var(--textMedium);
        }
    }
}

.blue {
    background-color: var(--bgMedium);
}

#hero {
    min-height: calc(100dvh - var(--navbarHeight));
    position: relative;
    padding-top: 0;

    .container {
        padding-top: 70px;
    }

    &-text {
        h1 {
            font-size: 3.7rem;
        }

        p {
            margin-top: 30px;
            width: 40%;
            color: var(--textMedium);
        }
    }

    &-btns {
        margin-top: 50px;
        display: inline-flex;
        gap: 10px;

        a {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 20px 32px 20px 37px;
            border-radius: 30px;
            color: white;
            font-size: 0.95rem;
            font-weight: 600;
            transition: gap 0.3s ease-out;

            svg {
                height: 13px;
                width: 13px;
                opacity: 0.8;
                fill: white;
            }
        }

        &-primary {
            background-color: var(--purple);
        }

        &-black {
            background-color: var(--black);
        }
    }
}

#trusted {
    .container {
        display: flex;
        justify-content: space-between;

        .section-title {
            width: 40%;
        }
    }

    &-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 42%;
        gap: 30px;

        .trusted-logo-item {
            width: 23%;
            object-fit: contain;
        }
    }
}

#about {
    &-content {
        display: grid;
        grid-template-columns: 290px 1fr;
        margin-top: 70px;
        gap: 70px;

        &-btns {
            position: relative;
            padding-top: 30px;

            .about-btn {
                transition: background 0.4s ease-out;
                background-color: whitesmoke;
                margin-bottom: 50px;
                padding: 10px;
                border-radius: 40px;
                display: flex;
                align-items: center;

                &-icon {
                    $size: 50px;
                    height: $size;
                    width: $size;
                    border-radius: 50%;
                    background-color: white;
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    color: var(--black);
                }

                &-title {
                    padding-left: 25px;
                    font-weight: 500;
                    font-size: 1.05rem;
                }
            }

            .active {
                background-color: var(--black);
                color: white;
            }

            .about-btn:hover {
                background-color: gainsboro;
            }

            .active:hover {
                background-color: rgb(35, 35, 35);
            }
        }

        &-btns::before {
            content: "";
            position: absolute;
            border-left: 1px dashed rgb(168, 168, 168);
            top: 30px;
            bottom: 60px;
            left: 35px;
            z-index: -1;
        }

        &-screen {
            border: 1px solid whitesmoke;
        }
    }
}
</style>
