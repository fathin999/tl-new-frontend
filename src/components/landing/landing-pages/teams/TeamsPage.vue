<script setup>
import LandingLayout from "../../layout/LandingLayout.vue";
import Banner from "../../layout/Banner.vue";
import {getAllTeams} from "@/composable/backend/teams";
import TeamCard from "./TeamCard.vue";

// ------------------------------
// BACKEND
// ------------------------------
const teams = getAllTeams();
</script>

<template>
    <LandingLayout>
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
                    :position="team.position"
                    :slug="team.slug"
                />
            </div>
        </div>
    </LandingLayout>
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

@media (max-width: 1200px) {
    #teams-list {
        .container {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
}

@media (max-width: 900px) {
    #teams-list {
        .container {
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
    }
}

@media (max-width: 600px) {
    #teams-list {
        .container {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
}
</style>
