<script setup>
import {getTeamFromSlug} from "@/composable/teams/teams";

const props = defineProps({
    id: String,
});

const instructor = getTeamFromSlug(props.id);

const getLogo = () => {
    return new URL(
        `/src/assets/teams/team-logo-${instructor.logo}.png`,
        import.meta.url
    );
};

const getImg = () => {
    return new URL(
        `/src/assets/teams/team-${instructor.img}.png`,
        import.meta.url
    );
};
</script>

<template>
    <div class="course-instructor clickable">
        <img
            :src="getImg()"
            :alt="instructor.name"
            class="course-instructor-img"
        />

        <h4>{{ instructor.name }}</h4>

        <p>{{ instructor.job }}</p>

        <img
            :src="getLogo()"
            :alt="instructor.name"
            class="course-instructor-logo"
        />
    </div>
</template>

<style scoped lang="scss">
.course-instructor {
    border: 1px solid var(--borderMedium);
    border-radius: 15px;
    padding: 25px;
    position: relative;
    display: flex;
    flex-direction: column;

    &-img {
        $size: 70px;
        height: $size;
        width: $size;
        border-radius: 50%;
    }

    h4 {
        margin-top: 20px;
        font-size: 1.05rem;
        line-height: 1.5rem;
    }

    p {
        width: 100%;
        font-size: 0.9rem;
        margin: 2px 0 25px;
        line-height: 1.3rem;
        padding-right: 10%;
        color: var(--textMedium);
        flex: 1;
    }

    &-logo {
        width: 55%;
        height: 25px;
        object-fit: contain;
        object-position: left bottom;
    }
}

@media (max-width: 600px) {
    .course-instructor {
        $size: 50px;
        $padding: 20px;

        padding: $padding;
        position: relative;
        padding-left: calc($size + $padding * 2);
        border-radius: 10px;

        &-img {
            height: $size;
            width: $size;
            position: absolute;
            top: $padding;
            left: $padding;
        }

        h4 {
            margin-top: 3px;
            font-size: 1.1rem;
            line-height: 1.6rem;
        }

        p {
            margin: 5px 0 20px;
        }

        &-logo {
            width: 200px;
            height: 21px;
        }
    }
}

@media (hover: hover) {
    .course-instructor:hover {
        border-color: var(--purple);
    }
}
</style>
