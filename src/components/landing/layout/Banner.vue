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
            padding: 50px 0 55px;

            h1 {
                font-size: 7vw;
                line-height: 9vw;
            }

            p {
                font-size: 0.95rem;
                line-height: 1.4rem;
                width: 80%;
                margin-top: 10px;
            }
        }
    }
}
</style>
