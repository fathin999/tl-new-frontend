<script setup>
import IconTeamLi from "../../icons/teams/IconTeamLi.vue";
import IconTeamFa from "../../icons/teams/IconTeamFa.vue";
import IconTeamX from "../../icons/teams/IconTeamX.vue";

const props = defineProps({
    name: String,
    img: String,
    position: String,
});

const getImg = (img) => {
    return new URL(`/src/assets/teams/team-${img}.png`, import.meta.url);
};

const getImgBw = (img) => {
    return new URL(`/src/assets/teams/team-${img}-bw.png`, import.meta.url);
};
</script>

<template>
    <a class="team-item clickable" href="/teams/1">
        <div class="team-item-img-container">
            <img :src="getImgBw(img)" :alt="name" class="team-item-img-bw" />
            <img :src="getImg(img)" :alt="name" class="team-item-img" />
        </div>

        <h6>{{ position }}</h6>
        <h2>{{ name }}</h2>

        <div class="team-item-socials">
            <a>
                <IconTeamFa />
            </a>

            <a>
                <IconTeamLi />
            </a>

            <a>
                <IconTeamX />
            </a>
        </div>
    </a>
</template>

<style scoped lang="scss">
.team-item {
    border: 1px solid var(--borderLight);
    border-radius: 20px;
    padding: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &-img-container {
        $size: 100px;
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
        margin-top: 30px;
    }

    h2 {
        margin: 7px 0 45px;
        font-size: 1.3rem;
    }

    &-socials {
        display: flex;
        gap: 5px;

        svg {
            $size: 27px;
            height: $size;
            width: $size;
            fill: var(--black);
            transition: fill 0.3s ease-out, transform 0.3s ease-out;
        }

        svg:hover {
            fill: var(--purple);
            transform: translateY(-5px);
        }
    }
}

@media (max-width: 800px) {
    .team-item {
        border: 0;
        border-top: 1px solid gainsboro;
        border-radius: 0;
        padding: 37px;

        &-img-container {
            $size: 80px;
            width: $size;
            height: $size;
        }

        &-img {
            opacity: 1;
        }

        h6 {
            margin-top: 12px;
        }

        h2 {
            font-size: 5vw;
            margin: 3px 0 15px;
        }

        &-socials {
            gap: 7px;

            $size: 27px;

            svg {
                height: $size;
                width: $size;
            }
        }
    }

    .team-item:last-of-type {
        border-bottom: 1px solid gainsboro;
    }
}

@media (hover: hover) {
    .team-item:hover {
        border-color: var(--purple);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);

        .team-item-img {
            opacity: 1;
        }
    }
}
</style>
