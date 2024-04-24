<script setup>
import ProgrammePathwayCard from "./ProgrammePathwayCard.vue";
import {ref} from "vue";

defineProps({
    pathways: Array,
});

const active = ref(0);
</script>

<template>
    <div class="section" id="programme-pathways">
        <div class="container">
            <div class="section-title-center">
                <h2>Choose your <u>career pathways</u></h2>
                <p>
                    Explore our industry-standard courses based on your dream
                    career.
                </p>
            </div>
        </div>

        <div id="programme-pathways-content">
            <div class="container">
                <div id="programme-pathways-btns" class="hide-scrollbar">
                    <div
                        v-for="(pathway, i) in pathways"
                        :key="`pathway-btn-${i}`"
                        :class="`pathway-btn clickable ${
                            active === i ? 'active' : ''
                        }`"
                        @click="active = i"
                    >
                        {{ pathway.title }}
                    </div>
                </div>

                <div id="programme-pathways-list">
                    <div
                        v-for="(pathway, i) in pathways"
                        :key="pathway.title"
                        :class="`programme-card-container ${
                            i === active ? 'show' : ''
                        }`"
                    >
                        <ProgrammePathwayCard
                            :title="pathway.title"
                            :img="pathway.img"
                            :level="pathway.level"
                            :whoFor="pathway.for"
                            :cred="pathway.accreditation"
                            :careers="pathway.careers"
                            :requirements="pathway.requirements"
                            :courses="pathway.courses"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#programme-pathways {
    $cardWidth: 920px;

    &-content {
        margin-top: 60px;

        .container {
            display: grid;
            grid-template-columns: 250px 1fr;
            gap: 35px;
            position: relative;
            align-items: flex-start;
        }
    }

    &-list {
        position: relative;

        .programme-card-container {
            display: none;
            animation: appear 0.3s ease-out;
        }

        .show {
            display: block;
        }
    }

    &-btns {
        position: sticky;
        top: 200px;
        left: 0;
        border: 1px solid gainsboro;
        border-radius: 20px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .pathway-btn {
            padding: 15px 17px;
            border-radius: 12px;
            font-size: 0.92rem;
        }

        .active {
            background-color: var(--black);
            color: white;
            font-weight: 500;
        }
    }
}

@media (max-width: 1200px) {
    #programme-pathways {
        &-content {
            margin-top: 50px;

            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }
        }

        &-list {
            width: 850px;
        }

        &-btns {
            flex-direction: row;
            border-color: rgba(0, 0, 0, 0.3);
            padding: 10px;
            gap: 10px;
            border-radius: 40px;
            position: relative;
            top: 0;

            .pathway-btn {
                border-radius: 30px;
                padding: 15px 22px;
                font-size: 0.9rem;
            }
        }
    }
}

@media (max-width: 900px) {
    #programme-pathways {
        &-content {
            margin-top: 40px;

            .container {
                display: block;
            }
        }

        &-list {
            width: auto;
            margin-top: 30px;
        }

        &-btns {
            overflow-x: scroll;
            border: none;
            border-radius: 0;
            width: 100vw;
            margin-left: -20px;
            padding: 0 20px;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;

            .pathway-btn {
                scroll-snap-align: center;
                white-space: nowrap;
            }
        }
    }
}

@media (max-width: 700px) {
    #programme-pathways {
        &-btns {
            .pathway-btn {
                background-color: var(--bgMedium);
            }

            .active {
                background-color: var(--black);
            }
        }
    }
}

@media (hover: hover) {
    #programme-pathways {
        &-btns {
            .pathway-btn:hover {
                background-color: var(--lightPurple);
            }

            .active:hover {
                background-color: var(--black);
            }
        }
    }
}

@keyframes appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
