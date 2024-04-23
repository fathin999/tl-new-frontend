<script setup>
import EndToEndSolutions from "./EndToEndSolutions.vue";
</script>

<template>
    <div id="landing-solutions" class="section">
        <div class="container">
            <div class="section-title-center">
                <h2>Explore our <u>all-in-one</u> platform</h2>

                <p>The career lifecycle. We are with you at every step.</p>
            </div>

            <EndToEndSolutions />
        </div>
    </div>
</template>

<style scoped lang="scss">
@media (max-width: 750px) {
    #landing-solutions {
        padding-bottom: 0;
    }
}
</style>
