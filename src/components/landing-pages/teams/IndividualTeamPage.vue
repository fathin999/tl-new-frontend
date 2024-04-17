<script setup>
import Navbar from "../../layout/Navbar.vue";
import Footer from "../../layout/Footer.vue";
import {useRoute} from "vue-router";
import {getTeam} from "@/composable/teams/teams";

const team = getTeam();

const getImg = (img) => {
    return new URL(`/src/assets/teams/team-${img}.png`, import.meta.url);
};

const getLogo = (logo) => {
    return new URL(`/src/assets/teams/team-logo-${logo}.png`, import.meta.url);
};
</script>

<template>
    <Navbar />

    <main id="team">
        <div class="container">
            <div id="team-header">
                <div class="breadcrumbs">
                    <a href="/">Home</a>
                    <b>></b>
                    <a href="/teams">Teams</a>
                    <b>></b>
                    <a>{{ team.name }}</a>
                </div>

                <img
                    :src="getImg(team.img)"
                    :alt="team.name"
                    id="team-header-img"
                />

                <div id="team-header-text">
                    <h1>{{ team.name }}</h1>

                    <h2>
                        {{ team.position }}
                        <b>|</b>
                        {{ team.job }}
                    </h2>

                    <img :src="getLogo(team.logo)" :alt="team.name" />
                </div>
            </div>

            <p>
                {{ team.description }}
            </p>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#team {
    .container {
        padding: 20px 0 90px;
        width: 700px;
    }

    &-header {
        $margin: 55px;
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: $margin;
        padding-bottom: $margin;
        border-bottom: 1px solid gainsboro;

        .breadcrumbs {
            margin-bottom: $margin;
        }

        &-img {
            $size: 130px;
            height: $size;
            width: $size;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 25px;
        }

        &-text {
            h1 {
                font-size: 1.9rem;
            }

            h2 {
                font-size: 1rem;
                font-weight: 400;
                margin: 10px 0 15px;

                b {
                    display: inline-block;
                    padding: 0 10px;
                    font-weight: 400;
                }
            }

            img {
                object-fit: contain;
                height: 25px;
                width: 120px;
            }
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.8rem;
    }
}
</style>
