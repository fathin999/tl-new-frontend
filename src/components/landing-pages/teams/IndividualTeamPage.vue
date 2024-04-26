<script setup>
import LandingLayout from "../../layout/LandingLayout.vue";
import {useRoute} from "vue-router";
import {getTeam, getTeamFromSlug} from "@/composable/teams/teams";
import IconTeamLi from "@/components/icons/teams/IconTeamLi.vue";
import IconTeamFa from "@/components/icons/teams/IconTeamFa.vue";
import IconTeamX from "@/components/icons/teams/IconTeamX.vue";

// params
const params = useRoute().params;

const team = getTeam();
const paramTeam = getTeamFromSlug(params.slug);

const getImg = (img) => {
    return new URL(`/src/assets/teams/team-${img}.png`, import.meta.url);
};
</script>

<template>
    <LandingLayout id="team">
        <div class="container">
            <div id="team-header">
                <div class="breadcrumbs">
                    <a href="/">Home</a>
                    <b>></b>
                    <a href="/teams">Teams</a>
                    <b>></b>
                    <a>{{ paramTeam.name }}</a>
                </div>

                <img
                    :src="getImg(paramTeam.img)"
                    :alt="paramTeam.name"
                    id="team-header-img"
                />

                <h1>{{ paramTeam.name }}</h1>

                <h2>
                    {{ paramTeam.position }}
                </h2>

                <div id="team-header-socials">
                    <IconTeamFa />
                    <IconTeamLi />
                    <IconTeamX />
                </div>
            </div>

            <p>
                {{ team.description }}
            </p>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#team {
    .container {
        padding: 20px 0 90px;
        width: 700px;
        margin: auto;
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

        h1 {
            font-size: 1.9rem;
        }

        h2 {
            font-size: 1rem;
            font-weight: 400;
            margin: 7px 0 30px;
        }

        &-socials {
            display: flex;
            gap: 7px;

            svg {
                $size: 30px;
                height: $size;
                width: $size;
                fill: var(--black);
                user-select: none;
                cursor: pointer;
                transition: fill 0.3s ease-out, transform 0.3s ease-out;
            }

            svg:hover {
                fill: var(--purple);
                transform: translateY(-5px);
            }
        }
    }

    p {
        font-size: 1.1rem;
        line-height: 1.8rem;
    }
}

@media (max-width: 900px) {
    #team {
        .container {
            width: auto;
            margin: 0 20px;
        }
    }
}

@media (max-width: 600px) {
    #team {
        &-header {
            padding-bottom: 40px;
            margin-bottom: 40px;

            &-img {
                $size: 90px;
                height: $size;
                width: $size;
                margin-bottom: 17px;
            }

            h1 {
                font-size: 1.4rem;
                line-height: 1.9rem;
            }

            h2 {
                font-size: 0.95rem;
                line-height: 1.4rem;
                color: var(--textLight);
                margin: 5px 0 17px;
            }
        }
    }
}
</style>
