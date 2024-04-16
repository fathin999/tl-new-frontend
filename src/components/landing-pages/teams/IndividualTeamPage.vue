<script setup>
import Navbar from "../../layout/Navbar.vue";
import Footer from "../../layout/Footer.vue";
import {useRoute} from "vue-router";
import {getTeam} from "@/composable/teams/teams";

const team = getTeam();

const getImg = (img) => {
    const url = `/src/assets/teams/team-${img}.png`;
    return new URL(url, import.meta.url);
};

const getLogo = (logo) => {
    const url = `/src/assets/teams/team-logo-${logo}.png`;
    return new URL(url, import.meta.url);
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
                        <b>·</b>
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
        $margin: 50px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: $margin;
        padding-bottom: $margin;
        border-bottom: 1px solid gainsboro;

        .breadcrumbs {
            margin-bottom: 50px;
        }

        &-img {
            $size: 170px;
            height: $size;
            width: $size;
            border-radius: 50%;
            margin-right: 40px;
            object-fit: cover;
        }

        &-text {
            h1 {
                font-size: 1.8rem;
            }

            h2 {
                font-size: 1.05rem;
                font-weight: 400;
                margin: 15px 0 10px;

                b {
                    display: inline-block;
                    padding: 0 10px;
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
        line-height: 1.6rem;
    }
}
</style>
