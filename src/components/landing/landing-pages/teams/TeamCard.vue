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
    return new URL(
        `/src/assets/database/teams/team-${img}.png`,
        import.meta.url
    );
};

const getImgBw = (img) => {
    return new URL(
        `/src/assets/database/teams/team-${img}-bw.png`,
        import.meta.url
    );
};
</script>

<template>
    <a class="team-item clickable" :href="`/teams/${img}`">
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

@media (max-width: 600px) {
    $padding: 22px;
    $size: 60px;

    .team-item {
        border-radius: 15px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);
        padding: $padding;
        position: relative;
        text-align: left;
        display: block;
        padding-left: calc($size + $padding + 25px);

        &-img-container {
            width: $size;
            height: $size;
            position: absolute;
            top: $padding;
            left: $padding;
        }

        &-img {
            opacity: 1;
        }

        h6 {
            margin-top: 2px;
            font-size: 0.85rem;
            color: var(--textLight);
        }

        h2 {
            font-size: 1.2rem;
            line-height: 1.6rem;
            margin: 7px 0 30px;
        }

        &-socials {
            gap: 5px;

            $size: 26px;

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
