<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import LandingJobCard from "@/components/jobs/LandingJobCard.vue";
import CarouselSlider from "@/components/slider/CarouselSlider.vue";
import {getFeaturedJobs} from "@/composable/jobs/jobs";

const jobs = getFeaturedJobs();
</script>

<template>
    <div class="section" id="jobs">
        <div class="container">
            <div class="section-title-center">
                <h2>
                    <u>Get hired</u> now and advance<br />
                    your tech career
                </h2>

                <p>
                    We provide exclusive access to various tech job
                    opportunities across the region. Our hiring partners hire
                    for proven skills, not just pedigree.
                </p>
            </div>

            <CarouselSlider id="landing-jobs-carousel">
                <LandingJobCard
                    v-for="job in jobs"
                    :key="job.id"
                    :title="job.title"
                    :employer="job.employer"
                    :location="job.location"
                    :type="job.type"
                    :remote="job.remote"
                />
            </CarouselSlider>

            <div id="jobs-btn">
                <a class="btn-black btn-arrow" href="/jobs">
                    View more jobs
                    <IconArrow />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#jobs {
    .section-title-center {
        margin-bottom: 60px;
    }

    &-btn {
        margin-top: 70px;
        display: flex;
        justify-content: center;
        text-align: center;
    }
}

@media only screen and (max-width: 900px) {
    #jobs {
        &-btns {
            margin-top: 50px;
        }
    }
}
</style>

<style lang="scss">
#landing-jobs-carousel {
    $gap: 20px;
    $items: 3;
    grid-auto-columns: calc(((100% - ($items - 1) * $gap) / $items));
    gap: $gap;
}

@media only screen and (max-width: 1200px) {
    #landing-jobs-carousel {
        $gap: 20px;
        $items: 2;
        grid-auto-columns: calc(((100% - ($items - 1) * $gap) / $items));
        gap: $gap;
    }
}

/* @media only screen and (max-width: 900px) {
    #landing-jobs-carousel {
        $gap: 20px;
        $items: 2;
        grid-auto-columns: calc(((100% - ($items - 1) * $gap) / $items));
        gap: $gap;
    }
} */
</style>
