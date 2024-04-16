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
    $padding: 25px;
    border: 1px solid var(--borderMedium);
    border-radius: 15px;
    padding: $padding;
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

.course-instructor:hover {
    border-color: var(--purple);
}
</style>
