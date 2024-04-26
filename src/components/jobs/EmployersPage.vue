<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import {getEmployer} from "@/composable/employers/employers";
import {getAllJobsFromEmployer} from "@/composable/jobs/jobs";
import {getEmployerTabs} from "@/composable/view-models/employer";
import JobsList from "../jobs/JobsList.vue";
import {ref} from "vue";
import IconLocationOutline from "../icons/jobs/IconLocationOutline.vue";
import IconBuilding from "../icons/jobs/IconBuilding.vue";
import IconPeople from "../icons/jobs/IconPeople.vue";
import IconWorld from "../icons/jobs/IconWorld.vue";
import {useRoute} from "vue-router";

const params = useRoute().params;
const employer = getEmployer(params.slug);
const jobs = getAllJobsFromEmployer(employer.slug);
const active = ref(0);
const tabs = getEmployerTabs();

const getBanner = () => {
    return new URL(
        `/src/assets/employers/employer-banner-${employer.slug}.png`,
        import.meta.url
    );
};

const getLogo = () => {
    return new URL(
        `/src/assets/employers/employer-square-${employer.slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <Navbar />

    <main id="employer">
        <div id="employer-header">
            <div class="container">
                <div class="breadcrumbs">
                    <a href="/">Home</a>
                    <b>></b>
                    <a href="/jobs">Jobs</a>
                    <b>></b>
                    <a>{{ employer.title }} </a>
                </div>

                <div id="employer-header-banner">
                    <img :src="getBanner()" :alt="employer.title" />
                </div>

                <img
                    :src="getLogo()"
                    :alt="employer.title"
                    id="employer-header-logo"
                />

                <h1>{{ employer.shortTitle }}</h1>
                <h2 v-if="employer.shortTitle !== employer.title">
                    {{ employer.title }}
                </h2>
            </div>
        </div>

        <div id="employer-bar">
            <div class="container">
                <div
                    v-for="(tab, i) in tabs"
                    :key="tab.title"
                    :class="`bar-item clickable ${
                        active === i ? 'active' : ''
                    }`"
                    @click="active = i"
                >
                    <component :is="tab.icon" />
                    {{ tab.title }}
                </div>
            </div>
        </div>

        <div id="employer-content">
            <div class="container">
                <div id="employer-overview" v-if="active === 0">
                    <div class="employer-detail">
                        <IconLocationOutline />
                        <span>{{ employer.location }}</span>
                    </div>

                    <div class="employer-detail">
                        <IconBuilding />
                        <span>{{ employer.industry }}</span>
                    </div>

                    <div class="employer-detail">
                        <IconPeople />
                        <span>{{ employer.size }}</span>
                    </div>

                    <div class="employer-detail">
                        <IconWorld />

                        <a :href="employer.website" target="_blank">
                            {{ employer.website }}
                        </a>
                    </div>

                    <div>
                        <h6>About {{ employer.shortTitle }}</h6>
                        <p>
                            {{ employer.profile }}
                        </p>
                    </div>
                </div>

                <div id="employer-jobs" v-if="active === 1 && jobs.length > 0">
                    <JobsList :jobs="jobs" :card="true" />

                    <div id="employer-jobs-btn">
                        <a href="/jobs" class="btn-l btn-primary"
                            >See more jobs</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#employer {
    padding-bottom: 90px;
    position: relative;

    .container {
        width: 850px;
        margin: auto;
    }

    &-header {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;

        .breadcrumbs {
            margin: 30px 0 20px;
        }

        &-banner {
            width: 100%;
            height: 180px;
            border-radius: 15px;
            overflow: hidden;
            background-color: whitesmoke;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &-logo {
            $size: 120px;
            height: $size;
            widows: $size;
            border-radius: 50%;
            border: 10px solid white;
            margin-top: -80px;
        }

        h1 {
            font-size: 1.7rem;
            line-height: 2.2rem;
            margin-top: 3px;
        }

        h2 {
            margin-top: 4px;
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.7rem;
        }
    }

    &-bar {
        margin: 55px 0 50px;
        position: sticky;
        top: var(--navbarHeight);
        left: 0;
        background-color: white;
        z-index: 5;

        .container {
            display: flex;
            border-bottom: 1px solid gainsboro;
        }

        .bar-item {
            padding: 13px 20px;
            font-weight: 500;
            font-size: 0.95rem;
            color: var(--textLight);
            margin-right: 25px;
            display: flex;
            align-items: center;
            border-bottom: 3px solid transparent;

            svg {
                $iconSize: 16px;
                height: $iconSize;
                width: $iconSize;
                margin-right: 9px;
                fill: var(--textLight);
            }
        }

        .active {
            border-color: var(--purple);
            color: var(--purple);

            svg {
                fill: var(--purple);
            }
        }
    }

    &-content {
        .container {
            width: 750px;
        }

        h2 {
            font-size: 1.4rem;
            margin-bottom: 40px;
        }
    }

    &-overview {
        .employer-detail {
            margin-bottom: 17px;
            display: flex;
            align-items: center;

            svg {
                $iconSize: 17px;
                height: $iconSize;
                width: $iconSize;
                margin-right: 20px;
            }
        }

        h6 {
            padding: 40px 0 25px;
            font-size: 0.95rem;
            color: var(--textLight);
        }

        p {
            font-size: 1.1rem;
            line-height: 1.7rem;
        }
    }

    &-jobs {
        margin: auto;

        &-btn {
            margin: 35px auto 0;
            text-align: center;
        }
    }
}

@media (max-width: 900px) {
    #employer {
        .container {
            width: 100%;
            padding: 0 20px;
        }
    }
}

@media (max-width: 600px) {
    #employer {
        &-header {
            .breadcrumbs {
                margin: 20px 0 25px;
            }

            &-banner {
                height: 110px;
                margin-left: -20px;
                width: 100vw;
                border-radius: 0;
            }

            &-logo {
                $size: 80px;
                height: $size;
                widows: $size;
                margin-top: -60px;
            }

            h1 {
                font-size: 1.3rem;
                line-height: 1.8rem;
            }

            h2 {
                font-size: 0.95rem;
            }
        }

        &-bar {
            margin: 25px 0 35px;

            .bar-item {
                padding: 20px 17px 15px;
                font-size: 0.9rem;
                margin-right: 15px;

                svg {
                    $size: 14px;
                    height: $size;
                    width: $size;
                    margin-right: 7px;
                }
            }
        }

        &-overview {
            .employer-detail {
                margin-bottom: 12px;
            }
        }
    }
}

@media (hover: hover) {
    #employer {
        &-bar {
            .bar-item:hover {
                color: var(--purple);

                svg {
                    fill: var(--purple);
                }
            }
        }

        &-overview {
            .employer-detail {
                a:hover {
                    color: var(--purple);
                }
            }
        }
    }
}
</style>
