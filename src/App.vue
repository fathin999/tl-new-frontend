<script setup>
import Navbar from "./components/layout/Navbar.vue";
import LandingHero from "./components/landingPage/LandingHero.vue";
import LandingTrusted from "./components/landingPage/LandingTrusted.vue";
import LandingSolutions from "./components/landingPage/LandingSolutions.vue";
import LandingCourses from "./components/landingPage/LandingCourses.vue";
import LandingJobs from "./components/landingPage/LandingJobs.vue";
import LandingTestimonies from "./components/landingPage/LandingTestimonies.vue";
import LandingInstructor from "./components/landingPage/LandingInstructor.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
    <Navbar />

    <main>
        <LandingHero />

        <LandingTrusted />

        <LandingSolutions />

        <LandingCourses />

        <LandingTestimonies />

        <LandingJobs />

        <LandingInstructor />
    </main>

    <Footer />
</template>

<style lang="scss"></style>
