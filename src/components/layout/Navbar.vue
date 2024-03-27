<script setup>
import IconNavbarLogin from "../icons/IconNavbarLogin.vue";
</script>

<template>
    <header>
        <div class="container">
            <a href="/">
                <img
                    id="navbarLogo"
                    src="/src/assets/talentlabs-logo-thicker.svg"
                    alt=""
                />
            </a>

            <div id="navContainer">
                <nav>
                    <a href="/">Home</a>
                    <a href="/">Courses</a>
                    <a href="/">Jobs</a>
                    <a href="/">For Enterprise</a>
                    <a href="/">For Government</a>
                </nav>

                <div id="authLinks">
                    <a id="loginButton" href="/">
                        <IconNavbarLogin />

                        Login
                    </a>

                    <a href="/" id="signupButton" class="button-primary"
                        >Sign Up</a
                    >
                </div>
            </div>

            <div id="navMenuButton">menu button</div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: var(--navbarHeight);
    background: white;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #navbarLogo {
        width: 115px;
    }

    #navContainer {
        display: flex;
    }

    nav,
    #authLinks {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    a {
        font-weight: 500;
    }

    nav {
        padding-right: 40px;
        margin-right: 40px;
        border-right: 1px solid gainsboro;

        a {
            color: var(--darkBlue);
            display: block;
            position: relative;
            font-size: 0.85rem;
        }

        a::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            margin: auto;
            height: 1px;
            width: 0;
            transition: width 0.5s ease-out;
            border-radius: 1px;
            background: var(--darkBlue);
        }

        a:hover::after {
            width: 70%;
        }
    }

    #authLinks a {
        font-weight: 600;
        font-size: 0.9rem;
    }

    #loginButton {
        display: flex;
        gap: 10px;
        color: var(--purple);
        transition: color 0.4s ease-out;

        svg {
            fill: var(--purple);
            transition: fill 0.4s ease-out;
        }
    }

    #loginButton:hover {
        color: black;

        svg {
            fill: black;
        }
    }

    #navMenuButton {
        display: none;
    }
}

@media (max-width: 900px) {
}
</style>
