<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import IconChevron from "@/components/icons/IconChevron.vue";
import LandingJobCard from "@/components/jobs/LandingJobCard.vue";

const jobs = [
    {
        id: 1,
        logo: "wristcheck",
        title: "Junior Software Engineer (Frontend)",
        location: "Hong Kong",
        type: "Full-time",
        remote: "Onsite",
        employer: "WRISTCHECK",
    },
    {
        id: 2,
        logo: "dolphin",
        title: "eCommerce Data Operations Specialist",
        location: "Central, Hong Kong",
        type: "Part-time",
        remote: "Hybrid",
        employer: "Dolphin Pharmaceuticals",
    },
    {
        id: 3,
        logo: "fave",
        title: "Software Engineer (Backend)",
        location: "Kuala Lumpur, Malaysia",
        type: "Contract",
        remote: "Remote",
        employer: "Fave",
    },
];
</script>

<template>
    <div class="section" id="courses">
        <div class="container">
            <div class="section-title">
                <h2>
                    <u>Get hired</u> now and advance<br />
                    your tech career
                </h2>

                <p>
                    We provide exclusive access to various tech job
                    opportunities across the region. Our hiring partners hire
                    for proven skills, not just pedigree.
                </p>

                <a class="btn-black btn-arrow" href="/jobs">
                    View more jobs
                    <IconArrow />
                </a>
            </div>

            <div class="slider">
                <div class="slider-list">
                    <div class="slider-inner">
                        <LandingJobCard
                            v-for="job in jobs"
                            :key="job.id"
                            :logo="job.logo"
                            :title="job.title"
                            :employer="job.employer"
                            :location="job.location"
                            :type="job.type"
                            :remote="job.remote"
                        />
                    </div>
                </div>

                <div class="slider-btns">
                    <div class="slider-btns-btn btn-prev">
                        <IconChevron />
                    </div>
                    <div class="slider-btns-btn btn-next">
                        <IconChevron />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
