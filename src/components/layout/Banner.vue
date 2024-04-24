<script setup>
defineProps({
    title: String,
    subtext: String,
});
</script>

<template>
    <div id="banner">
        <div class="container">
            <h1>{{ title }}</h1>

            <p>
                {{ subtext }}
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
#banner {
    .container {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 70px 0 100px;

        h1 {
            font-size: 2.9rem;
        }

        p {
            width: 60%;
            font-size: 1.1rem;
            margin-top: 15px;
            color: var(--textMedium);
        }
    }
}

@media (max-width: 700px) {
    #banner {
        .container {
            padding: 60px 0 80px;

            h1 {
                font-size: 8vw;
                line-height: 10vw;
            }

            p {
                font-size: 1rem;
                width: 80%;
                margin-top: 10px;
            }
        }
    }
}
</style>
