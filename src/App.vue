<script setup>
import Navbar from "./components/layout/Navbar.vue";
import LandingHero from "./components/landingPage/LandingHero.vue";
import LandingTrusted from "./components/landingPage/LandingTrusted.vue";
import LandingSolutions from "./components/landingPage/LandingSolutions.vue";
</script>

<template>
    <Navbar />

    <main>
        <LandingHero />

        <LandingTrusted />

        <LandingSolutions />
    </main>
</template>

<style lang="scss"></style>
