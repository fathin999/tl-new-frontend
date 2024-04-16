<script setup>
import Navbar from "../../layout/Navbar.vue";
import Footer from "../../layout/Footer.vue";
import Banner from "../../layout/Banner.vue";
import {getAllTeams} from "../../../composable/teams/teams";
import TeamCard from "./TeamCard.vue";

const teams = getAllTeams();
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
                <TeamCard
                    v-for="team in teams"
                    :key="team.name"
                    :name="team.name"
                    :job="team.job"
                    :position="team.position"
                    :img="team.img"
                    :logo="team.logo"
                />
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
</style>
