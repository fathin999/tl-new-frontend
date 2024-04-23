<script setup>
import IconHeroChart from "@/components/icons/landingPage/IconHeroChart.vue";

const props = defineProps({
    title: String,
    subtext: String,
    green: {type: Boolean, default: false},
    purple: {type: Boolean, default: false},
    blue: {type: Boolean, default: false},
});

const getClass = () => {
    let cls = "stats ";

    if (props.green) cls += "green";
    else if (props.purple) cls += "purple";
    else if (props.blue) cls += "blue";
    else cls += "dark";

    return cls;
};
</script>

<template>
    <div :class="getClass()">
        <div class="slider-icon">
            <slot />
        </div>

        <h2>{{ title }}</h2>
        <p>{{ subtext }}</p>
    </div>
</template>

<style scoped lang="scss">
.stats {
    padding: 37px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    h2 {
        font-size: 3.5rem;
        font-weight: 600;
    }

    p {
        margin-top: 5px;
        font-size: 1rem;
    }

    .slider-icon {
        flex: 1;
    }
}

.green {
    background-color: var(--lightGreen);
}

.purple {
    background-color: var(--lightPurple);
}

.blue {
    background-color: var(--lightBlue);
}

.dark {
    background-color: var(--black);
    color: white;

    .slider-icon svg {
        fill: white;
    }
}

@media (max-width: 700px) {
    .stats {
        padding: 27px;

        h2 {
            font-size: 11vw;
        }

        p {
            font-size: 0.95rem;
            margin: 0;
        }
    }
}
</style>
