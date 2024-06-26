<script setup>
import LandingJobCard from "@/components/landing/jobs/LandingJobCard.vue";
import CarouselSlider from "@/components/landing/slider/CarouselSlider.vue";
import Button from "@/components/landing/button/Button.vue";
import {filterJobs} from "@/composable/backend/jobs";

// -------------------
// BACKEND
// -------------------
// BACKEND - get featured jobs
const jobs = filterJobs("featured", true);
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

            <CarouselSlider :listStyle="$style['landing-jobs-carousel']">
                <LandingJobCard
                    v-for="job in jobs"
                    :key="job.id"
                    :title="job.title"
                    :employer="job.employer"
                    :location="job.location"
                    :type="job.type"
                    :remote="job.remote"
                    :id="job.id"
                />
            </CarouselSlider>

            <div id="jobs-btn">
                <Button :arrow="true" href="/jobs?page=1" :black="true">
                    View more jobs
                </Button>
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
        &-btn {
            margin-top: 50px;
        }
    }
}

@media only screen and (max-width: 600px) {
    #jobs {
        .section-title-center {
            margin-bottom: 50px;
        }
    }
}
</style>

<style lang="scss" module>
#landing-jobs-carousel {
    $gap: 20px;
    $items: 3;
    display: grid;
    grid-auto-columns: calc(((100% - ($items - 1) * $gap) / $items));
    min-width: 100%;
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

@media only screen and (max-width: 700px) {
    #landing-jobs-carousel {
        $gap: 20px;
        $items: 1;
        grid-auto-columns: calc(((100% - ($items - 1) * $gap) / $items));
        gap: $gap;
    }
}
</style>
