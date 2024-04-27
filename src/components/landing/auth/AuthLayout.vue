<script setup>
import LandingLayout from "../layout/LandingLayout.vue";

defineProps({
    title: String,
    subtext: String,
});
</script>

<template>
    <LandingLayout>
        <div id="auth-page">
            <div class="container">
                <div id="auth-page-content">
                    <h1>{{ title }}</h1>

                    <p>{{ subtext }}</p>

                    <form>
                        <slot />
                    </form>
                </div>
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#auth-page {
    &-content {
        width: 400px;
        margin: auto;
        padding: 50px 0 80px;
        min-height: calc(100dvh - var(--navbarHeight));

        h1 {
            display: block;
            width: 100%;
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 50px;
            font-size: 1.05rem;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
    }
}

@media (max-width: 600px) {
    #auth-page-content {
        width: 100%;

        h1 {
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: 7px;
        }

        p {
            margin-bottom: 40px;
            font-size: 0.95rem;
            color: var(--textMedium);
        }
    }
}
</style>

<style lang="scss">
.landing-layout #auth-page-content {
    .auth-link {
        text-align: center;
        margin-top: 20px;
    }

    a {
        color: var(--purple);
        transition: color 0.4s ease-out;
        font-size: 0.95rem;
        font-weight: 500;
        margin-left: 10px;
    }

    .btn-primary {
        margin-top: 5px;
        color: white;
        font-size: 1rem;
    }
}

@media (max-width: 600px) {
    .landing-layout #auth-page-content {
        .btn-primary {
            width: 100%;
        }
    }
}

@media (hover: hover) {
    .landing-layout #auth-page-content {
        a:hover {
            color: var(--black);
        }

        .btn-primary:hover {
            color: var(--purple);
        }
    }
}
</style>
