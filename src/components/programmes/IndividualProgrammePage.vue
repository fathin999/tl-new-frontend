<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import ProgrammeBackground from "./ProgrammeBackground.vue";
</script>

<template>
    <Navbar />

    <main id="programme">
        <div id="programme-header">
            <ProgrammeBackground />

            <div class="container">
                <h1>Individual Programme Page</h1>
            </div>
        </div>

        <div id="programme-content"></div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#programme {
    &-header {
        height: 350px;
        position: relative;
        margin-bottom: 30px;
    }
}
</style>
