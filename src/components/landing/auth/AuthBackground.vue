<template>
    <img src="/src/assets/login/bg-simple.svg" alt="page background" />

    <div class="auth-quote">
        <h1>
            "Learning is an experience,
            <br />
            everything else is information."
        </h1>

        <p>Albert Einstein</p>
    </div>
</template>
<style scoped lang="scss">
.auth-quote {
    position: absolute;
    width: 500px;
    top: 40%;
    right: 12%;
    text-align: center;

    h1 {
        font-size: 1.7rem;
        line-height: 2.3rem;
        color: var(--textMedium);
        margin-bottom: 25px;
    }

    p {
        color: var(--textLight);
    }
}
</style>
