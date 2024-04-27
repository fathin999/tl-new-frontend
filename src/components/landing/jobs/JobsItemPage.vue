<script setup>
import IconBookmark from "../icons/jobs/IconBookmark.vue";
import IconLocationOutline from "../icons/jobs/IconLocationOutline.vue";
import IconBriefcase from "../icons/jobs/IconBriefcase.vue";
import IconBuilding from "../icons/jobs/IconBuilding.vue";
import IconSpanner from "../icons/jobs/IconSpanner.vue";
import IconTime from "../icons/jobs/IconTime.vue";
import SimilarJobCard from "./SimilarJobCard.vue";
import IconPeople from "../icons/jobs/IconPeople.vue";
import IconArrow from "../icons/IconArrow.vue";
import JobsList from "./JobsList.vue";
import {getTime} from "@/composable/utilities/jobs";
import {getEmployerFromSlug} from "@/composable/employers/employers";
import {useRoute} from "vue-router";
import Button from "../button/Button.vue";
import LandingLayout from "../layout/LandingLayout.vue";
import {
    applyForJob,
    bookmarkJob,
    filterJobs,
    getJobFromId,
} from "@/composable/backend/jobs";

// params
const params = useRoute().params;

// -------------------
// BACKEND
// -------------------

// BACKEND - get job from URL param
const job = getJobFromId(params.id);

// BACKEND - get employer from job
const employer = getEmployerFromSlug(job.employer);

// BACKEND - get jobs with similar role
const similarJobs = filterJobs("role", job.role);

// BACKEND - get jobs with similar employer
const otherJobs = filterJobs("employer", job.employer);

// BACKEND - applyJob
const clickApply = () => applyForJob(params.id);

// BACKEND - applyJob
const clickBookmark = () => bookmarkJob(params.id);

// -------------------
// TO CHANGE - static image to change to img URL
// -------------------
// static images
const getLogo = (slug) => {
    return new URL(
        `/src/assets/database/employers/employer-square-${slug}.png`,
        import.meta.url
    );
};
</script>

<template>
    <LandingLayout>
        <div class="container" id="job">
            <div id="job-header">
                <div class="breadcrumbs">
                    <a href="/">Home</a>
                    <b>></b>
                    <a href="/jobs?page=1">Jobs</a>
                    <b>></b>
                    <a>Software engineering </a>
                </div>

                <div id="job-overview">
                    <h1>{{ job.title }}</h1>

                    <a
                        id="job-overview-employer"
                        class="clickable"
                        :href="`/employers/${employer.slug}`"
                    >
                        <img
                            :src="getLogo(employer.slug)"
                            :alt="employer.shortTitle"
                        />

                        <span>{{ employer.shortTitle }}</span>
                    </a>

                    <div id="job-overview-summary">
                        <div
                            class="job-summary-item"
                            id="job-overview-summary-location"
                        >
                            <IconLocationOutline />
                            <span>{{ job.location }}</span>
                        </div>

                        <div class="job-summary-item">
                            <IconBriefcase />
                            <span>{{ job.type }}</span>
                        </div>

                        <div class="job-summary-item">
                            <IconBuilding />
                            <span>{{ job.remote }}</span>
                        </div>

                        <div class="job-summary-item">
                            <IconSpanner />
                            <span>{{ job.role }}</span>
                        </div>

                        <div class="job-summary-item">
                            <IconTime />
                            <span>{{ getTime(job.createdAt) }}</span>
                        </div>
                    </div>
                </div>

                <div id="job-header-btns">
                    <Button
                        :black="true"
                        :outline="true"
                        @click="clickBookmark"
                    >
                        <IconBookmark />
                        Save
                    </Button>

                    <Button :black="true" @click="clickApply"> Apply </Button>
                </div>
            </div>

            <div id="job-content">
                <div id="job-content-description">
                    <div v-html="job.description"></div>

                    <div id="job-content-description-btn">
                        <Button :large="true"> Apply Now </Button>
                    </div>
                </div>

                <div id="job-content-similar" v-if="similarJobs.length !== 0">
                    <h2>Similar jobs</h2>

                    <SimilarJobCard
                        v-for="job in similarJobs"
                        :key="job.id"
                        :title="job.title"
                        :logo="job.logo"
                        :employer="job.employer"
                        :location="job.location"
                        :id="job.id"
                    />
                </div>
            </div>

            <div id="job-company">
                <h2>More about {{ employer.shortTitle }}</h2>

                <a id="job-company-card" :href="`/employers/${employer.slug}`">
                    <div id="job-company-card-title">
                        <img
                            :src="getLogo(employer.slug)"
                            :alt="employer.shortTitle"
                        />
                        <h1>{{ employer.title }}</h1>
                    </div>

                    <div class="job-company-detail one-line">
                        <IconLocationOutline />
                        {{ employer.location }}
                    </div>

                    <div class="job-company-detail">
                        <IconBuilding />
                        {{ employer.industry }}
                    </div>

                    <div class="job-company-detail">
                        <IconPeople />
                        {{ employer.size }}
                    </div>

                    <div id="job-company-card-btn">
                        More
                        <IconArrow />
                    </div>
                </a>

                <div v-if="otherJobs.length !== 0">
                    <h2>Other jobs from {{ employer.shortTitle }}</h2>

                    <JobsList :jobs="otherJobs" />
                </div>
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#job {
    overflow-x: hidden;
    margin: auto;
    width: 1000px;

    h2 {
        font-size: 0.95rem;
        color: var(--textMedium);
        margin-bottom: 20px;
    }

    &-header {
        display: flex;
        padding-bottom: 50px;
        border-bottom: 1px solid var(--borderMedium);
        flex-wrap: wrap;

        .breadcrumbs {
            margin: 10px 0 45px;
        }

        &-btns {
            display: flex;
            gap: 10px;
            padding-top: 5px;

            .btn-m {
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            svg {
                $size: 15px;
                height: $size;
                width: $size;
                margin: auto;
                margin-right: 10px;
            }
        }
    }

    &-overview {
        flex: 1;

        &-employer {
            display: inline-flex;
            margin-top: 15px;
            align-items: center;

            img {
                $size: 45px;
                height: $size;
                width: $size;
                border-radius: 50%;
                margin-right: 10px;
                border: 1px solid gainsboro;
            }

            span {
                font-size: 1.1rem;
                transition: color 0.3s ease-out;
            }
        }

        &-summary {
            margin-top: 25px;
            display: flex;
            flex-wrap: wrap;
            row-gap: 15px;
            column-gap: 35px;

            .job-summary-item {
                display: flex;
                align-items: center;
                font-size: 0.95rem;

                svg {
                    $size: 14px;
                    height: $size;
                    width: $size;
                    margin-right: 12px;
                    fill: var(--textMedium);
                }
            }

            &-location {
                width: 100%;
            }
        }
    }

    &-content {
        display: grid;
        grid-template-columns: 1fr 310px;
        gap: 100px;
        padding: 40px 0 50px;

        &-description:deep(h1, h2, h3, h4, h5, h6) {
            font-size: 1.2rem;
            margin: 0 0 15px;
        }

        &-description:deep(li) {
            margin-left: 14px;
            padding-left: 10px;
            margin-bottom: 10px;
        }

        &-description {
            font-size: 1rem;
            line-height: 1.5rem;

            &-btn {
                margin: 50px auto 0;
                text-align: center;
            }
        }
    }

    &-company {
        border-top: 1px solid var(--borderMedium);
        padding: 50px 0;
        width: 70%;

        &-card {
            $padding: 30px;

            border: 1px solid var(--borderMedium);
            border-radius: 20px;
            margin-bottom: 50px;
            padding: $padding;
            display: flex;
            flex-wrap: wrap;
            column-gap: 50px;
            transition: border 0.3s ease-out;
            position: relative;

            &-title {
                display: flex;
                align-items: center;
                width: 100%;
                margin-bottom: 25px;

                img {
                    $size: 65px;
                    height: $size;
                    width: $size;
                    border-radius: 50%;
                    border: 1px solid gainsboro;
                }

                h1 {
                    margin-left: 20px;
                    font-size: 1.3rem;
                    line-height: 1.9rem;
                    padding-right: 200px;
                }
            }

            .job-company-detail {
                display: flex;
                align-items: center;
                margin-top: 15px;

                svg {
                    $size: 16px;
                    height: $size;
                    width: $size;
                    fill: var(--textMedium);
                    margin-right: 15px;
                }
            }

            .one-line {
                width: 100%;
            }

            &-btn {
                $margin: calc($padding + 5px);
                position: absolute;
                top: $margin;
                right: $margin;
                display: flex;
                align-items: center;
                color: var(--purple);
                font-weight: 500;
                transition: color 0.3s ease-out;

                svg {
                    $size: 15px;
                    height: $size;
                    width: $size;
                    fill: var(--purple);
                    margin-left: 10px;
                    transition: fill 0.3s ease-out, transform 0.3s ease-out;
                }
            }
        }
    }
}

@media (max-width: 1100px) {
    #job {
        width: auto;
        padding-right: 50px;
        padding-left: 50px;
    }
}

@media (max-width: 900px) {
    #job {
        padding-right: 20px;
        padding-left: 20px;

        &-header {
            display: block;

            &-btns {
                margin-top: 40px;
            }
        }

        &-content {
            display: block;

            &-description {
                font-size: 1.1rem;
                line-height: 1.7rem;
                padding-bottom: 50px;
                margin-bottom: 30px;
                border-bottom: 1px solid gainsboro;

                &-btn {
                    margin: 30px auto 0;
                }
            }
        }

        &-company {
            width: 100%;
        }
    }
}

@media (max-width: 600px) {
    #job {
        &-header {
            padding-top: 20px;
            padding-bottom: 35px;

            .breadcrumbs {
                margin: 0;
            }

            &-btns {
                padding: 0;
                margin-top: 30px;
            }
        }

        &-overview {
            margin-top: 40px;

            h1 {
                font-size: 1.7rem;
                line-height: 2.2rem;
            }

            &-employer {
                margin-top: 20px;

                img {
                    $size: 35px;
                    height: $size;
                    width: $size;
                }
            }

            &-summary {
                margin-top: 15px;
            }
        }

        &-content {
            padding-top: 30px;

            &-description {
                padding-bottom: 40px;
            }
        }

        &-company {
            &-card {
                padding: 22px;
                background-color: var(--lightPurple);
                border: none;
                border-radius: 15px;
                box-shadow: 0 7px 15px rgba(174, 157, 174, 0.5);

                &-title {
                    margin-bottom: 10px;

                    img {
                        $size: 55px;
                        height: $size;
                        width: $size;
                    }

                    h1 {
                        padding-right: 0;
                        font-size: 1.1rem;
                        line-height: 1.6rem;
                        margin-left: 10px;
                    }
                }

                &-btn {
                    position: relative;
                    top: 0;
                    right: 0;
                    width: 100%;
                    margin-top: 25px;
                    margin-bottom: 5px;
                }

                .job-company-detail {
                    margin-top: 8px;
                    font-size: 0.95rem;
                }
            }
        }
    }
}

@media (hover: hover) {
    #job {
        &-header {
            &-btns {
                .btn-black-outline:hover {
                    border-color: var(--purple);
                    background-color: transparent;
                    color: var(--purple);

                    svg {
                        fill: var(--purple);
                    }
                }

                .btn-black:hover {
                    background-color: var(--purple);
                    color: white;
                    border-color: var(--purple);
                }
            }
        }

        &-overview {
            &-employer:hover {
                span {
                    color: var(--purple);
                }
            }
        }

        &-company {
            &-card:hover {
                border-color: var(--purple);

                #job-company-card-btn {
                    color: var(--black);

                    svg {
                        fill: var(--black);
                        transform: translateX(5px);
                    }
                }
            }
        }
    }
}
</style>
