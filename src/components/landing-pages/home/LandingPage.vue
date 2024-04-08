<script setup>
import LandingHero from "./LandingHero.vue";
import LandingTrusted from "./LandingTrusted.vue";
import LandingSolutions from "./LandingSolutions.vue";
import LandingCoursesRole from "./LandingCoursesRole.vue";
import LandingJobs from "./LandingJobs.vue";
import LandingTestimonies from "./LandingTestimonies.vue";
import LandingInstructor from "./LandingInstructor.vue";
import LandingCommunity from "./LandingCommunity.vue";
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
    <Navbar />

    <main>
        <LandingHero />

        <LandingTrusted />

        <LandingSolutions />

        <LandingCoursesRole />

        <LandingTestimonies />

        <LandingJobs />

        <LandingCommunity />

        <LandingInstructor />
    </main>

    <Footer />
</template>
