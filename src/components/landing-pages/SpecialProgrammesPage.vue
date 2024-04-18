<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import ProgrammeCard from "../programmes/ProgrammeCard.vue";
import ProgrammePartnersSlider from "../programmes/ProgrammePartnersSlider.vue";
import IconArrow from "../icons/IconArrow.vue";
import {getProgrammes} from "../../composable/programmes/programmes";

const programmes = getProgrammes();

const stats = [
    {
        title: "1,300+",
        subtext: "total students",
    },
    {
        title: "90%",
        subtext: "placement rate",
    },
    {
        title: "60+",
        subtext: "hiring partners",
    },
];
</script>

<template>
    <Navbar />

    <main id="programmes">
        <div id="programmes-header">
            <div class="container">
                <div>
                    <h1>Get skilled. Get <u>hired.</u></h1>

                    <h2>
                        Join our career development initiatives. Grab the
                        opportunity to learn in-demand skills, future-proof your
                        portfolio and get hired by our top hiring partners.
                    </h2>

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
                        :img="programme.img"
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
        padding: 60px 0 80px;

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

        h2 {
            margin-top: 15px;
            font-weight: 400;
            line-height: 1.5rem;
            font-size: 1rem;
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
</style>
