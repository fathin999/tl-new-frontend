<script setup>
import EndToEndSolutions from "./EndToEndSolutions.vue";
</script>

<template>
    <div id="about" class="section">
        <div class="container">
            <div class="section-title">
                <h2>Explore our <u>all-in-one</u> platform</h2>
                <!-- <h2>
                    The digital career transformation,
                    <br />
                    We're with you at <u>every step.</u>
                </h2> -->
                <p>The career lifecycle. We are with you at every step.</p>
            </div>

            <EndToEndSolutions />
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    text-align: center;
    /* font-size: 2rem;
    line-height: 3rem; */
}

p {
    text-align: center;
    width: 100%;
}
</style>
