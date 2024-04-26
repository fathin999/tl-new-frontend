<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import ProgrammeCard from "./ProgrammeCard.vue";
import ProgrammePartnersSlider from "./ProgrammePartnersSlider.vue";
import IconArrow from "../icons/IconArrow.vue";
import {getProgrammes} from "../../composable/programmes/programmes";
import {getProgrammeStats} from "@/composable/stats/stats";

const programmes = getProgrammes();

const stats = getProgrammeStats();
</script>

<template>
    <Navbar />

    <main id="programmes">
        <div id="programmes-header">
            <div class="container">
                <div>
                    <h1>Get skilled. Get <u>hired.</u></h1>

                    <p>
                        Join our career development initiatives. Grab the
                        opportunity to learn in-demand skills, future-proof your
                        portfolio and get hired by our top hiring partners.
                    </p>

                    <a href="#programmes-list" class="btn-arrow btn-primary">
                        Explore programmes

                        <IconArrow />
                    </a>

                    <div id="programmes-header-stats">
                        <div
                            class="programmes-stats"
                            v-for="stat in stats"
                            :key="stat.subtext"
                        >
                            <h3>{{ stat.title }}</h3>
                            <span>{{ stat.subtext }}</span>
                        </div>
                    </div>
                </div>

                <div id="programmes-header-img">
                    <img
                        src="/src/assets/programmes/programmes-hero.png"
                        alt=""
                    />
                </div>
            </div>
        </div>

        <ProgrammePartnersSlider />

        <div id="programmes-list">
            <div class="container">
                <h2>Explore our career development <br />programmes</h2>

                <div id="programmes-list-container">
                    <ProgrammeCard
                        v-for="programme in programmes"
                        :key="programme.title"
                        :title="programme.title"
                        :logo="programme.logo"
                        :active="programme.active"
                        :partner="programme.partner"
                        :description="programme.description"
                        :slug="programme.slug"
                    />
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#programmes {
    padding-bottom: 90px;

    &-header {
        padding: 60px 0 90px;

        .container {
            display: grid;
            grid-template-columns: 70% 1fr;
            justify-content: space-between;
            align-items: center;
        }

        h1 {
            font-size: 2.5rem;
            line-height: 3.2rem;
        }

        p {
            margin-top: 15px;
            color: var(--textMedium);
            width: 80%;
        }

        a {
            margin: 25px 0 60px;
        }

        &-stats {
            display: flex;
            gap: 50px;

            h3 {
                font-size: 1.8rem;
                margin-bottom: 5px;
            }

            span {
                color: var(--textMedium);
            }
        }

        &-img {
            img {
                height: 400px;
                width: 100%;
                object-fit: contain;
                object-position: center;
                border-radius: 20px;
            }
        }
    }

    &-list {
        margin-top: 150px;

        h2 {
            font-size: 2rem;
            text-align: center;
        }

        &-container {
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 20px;
            row-gap: 40px;
        }
    }
}

@media (max-width: 1100px) {
    #programmes {
        &-header {
            padding: 50px 0 70px;

            .container {
                grid-template-columns: 65% 1fr;
            }
        }

        &-list {
            &-container {
                grid-template-columns: 1fr 1fr;
            }
        }
    }
}

@media (max-width: 900px) {
    #programmes {
        &-header {
            padding-bottom: 80px;

            .container {
                display: block;
            }

            &-img {
                display: none;
            }
        }

        &-list {
            &-container {
                grid-template-columns: 1fr 1fr;
            }
        }
    }
}

@media (max-width: 700px) {
    #programmes {
        &-header {
            padding-bottom: 90px;

            &-stats {
                display: flex;
                justify-content: space-between;
                gap: 0;

                .programmes-stats {
                    span {
                        font-size: 0.85rem;
                    }

                    h3 {
                        margin: 0;
                        font-size: 8vw;
                        line-height: 10vw;
                    }
                }
            }
        }
    }
}

@media (max-width: 600px) {
    #programmes {
        &-header {
            padding-bottom: 70px;

            h1 {
                font-size: 2rem;
            }

            p {
                margin-top: 10px;
            }

            a {
                margin: 30px 0 55px;
            }
        }

        &-list {
            margin-top: 130px;

            h2 {
                font-size: 6vw;
                line-height: 8vw;
            }

            &-container {
                grid-template-columns: 1fr;
                gap: 25px;
                margin-top: 40px;
            }
        }
    }
}
</style>
