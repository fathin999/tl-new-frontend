<script setup>
import Navbar from "../../layout/Navbar.vue";
import Footer from "../../layout/Footer.vue";
import Banner from "../../layout/Banner.vue";
import {getAllTeams} from "../../../composable/teams/teams";

const teams = getAllTeams();

const getImg = (img) => {
    const url = `/src/assets/teams/team-${img}.png`;
    return new URL(url, import.meta.url);
};

const getImgBw = (img) => {
    const url = `/src/assets/teams/team-${img}-bw.png`;
    return new URL(url, import.meta.url);
};

const getLogo = (logo) => {
    const url = `/src/assets/teams/team-logo-${logo}.png`;
    return new URL(url, import.meta.url);
};
</script>

<template>
    <Navbar />

    <main>
        <Banner
            title="Meet our team"
            subtext="Our team consists of highly-accomplished individuals, bringing together our individual expertise and knowledge based on our real-world experience to help accelerate your career."
        />

        <div id="teams-list">
            <div class="container">
                <a
                    class="team-item clickable"
                    v-for="team in teams"
                    :key="team.name"
                    href="/teams/1"
                >
                    <div class="team-item-img-container">
                        <img
                            :src="getImgBw(team.img)"
                            :alt="team.name"
                            class="team-item-img-bw"
                        />
                        <img
                            :src="getImg(team.img)"
                            :alt="team.name"
                            class="team-item-img"
                        />
                    </div>

                    <h6>{{ team.position }}</h6>
                    <h2>{{ team.name }}</h2>

                    <p>{{ team.job }}</p>

                    <img
                        :src="getLogo(team.logo)"
                        :alt="team.name"
                        class="team-item-logo"
                    />
                </a>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#teams-list {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 40px;
        column-gap: 20px;
        justify-content: center;
        padding-bottom: 90px;
    }
}

.team-item {
    border: 1px solid var(--borderLight);
    border-radius: 20px;
    padding: 30px;

    &-img-container {
        $size: 110px;
        width: $size;
        height: $size;
        border-radius: 50%;
        overflow: hidden;
        position: relative;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: opacity 0.4s ease-out;
        }
    }

    &-img {
        opacity: 0;
    }

    h6 {
        color: var(--textMedium);
        font-size: 0.9rem;
        font-weight: 400;
        margin-top: 25px;
    }

    h2 {
        margin: 10px 0 50px;
        font-size: 1.3rem;
    }

    p {
        color: var(--textMedium);
        margin-bottom: 15px;
    }

    &-logo {
        width: 50%;
        height: 30px;
        object-fit: contain;
        object-position: left center;
    }
}

.team-item:hover {
    border-color: var(--purple);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);

    .team-item-img {
        opacity: 1;
    }
}
</style>
