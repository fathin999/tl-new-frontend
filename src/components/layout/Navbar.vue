<script setup>
import IconNavbarLogin from "../icons/IconNavbarLogin.vue";
import IconMenu from "../icons/IconMenu.vue";
import IconClose from "../icons/IconClose.vue";
import {ref} from "vue";

let open = ref(false);

const toggleMenu = () => {
    open.value = !open.value;
    const body = document.getElementsByTagName("body")[0];

    if (open.value) body.classList.add("disable-scroll");
    else body.classList.remove("disable-scroll");
};
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

            <div
                id="navContainer"
                :class="`${open ? 'nav-open' : 'nav-close'}`"
            >
                <nav>
                    <a href="/">Home</a>
                    <a href="/courses">Courses</a>
                    <a href="/special-programmes">Programmes</a>
                    <a href="/jobs">Jobs</a>
                    <a href="/for-enterprise">For Enterprise</a>
                    <a href="/for-government">For Government</a>
                </nav>

                <div id="authLinks">
                    <a id="loginButton" href="/login">
                        <IconNavbarLogin />

                        Sign In
                    </a>

                    <!-- <a href="/" id="signupButton" class="btn-primary btn-small"
                        >Sign Up</a
                    > -->
                </div>
            </div>

            <div
                :id="`${open ? 'nav-menu-btn-open' : 'nav-menu-btn-close'}`"
                class="clickable"
                @click="toggleMenu"
            >
                <IconMenu v-if="!open" />
                <IconClose v-if="open" id="close" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: var(--navbarHeight);
    width: 100vw;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    #navbarLogo {
        width: 115px;
        transition: opacity 0.2s ease-out;
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
        font-weight: 400;
    }

    nav {
        padding-right: 40px;
        margin-right: 40px;
        border-right: 1px solid gainsboro;

        a {
            color: var(--darkBlue);
            display: block;
            position: relative;
            font-size: 0.95rem;
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
        font-weight: 500;
        font-size: 0.95rem;
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

    #nav-menu-btn-open,
    #nav-menu-btn-close {
        display: none;
        transition: border 0.3s ease-out, background 0.3s ease-out;
    }
}

@media (max-width: 1100px) {
    .container {
        #navbarLogo {
            width: 100px;
        }

        nav,
        #authLinks {
            gap: 30px;
        }

        $margin: 25px;

        nav {
            padding-right: $margin;
            margin-right: $margin;
        }
    }
}

@media (max-width: 950px) {
    .container {
        #navbarLogo {
            width: 115px;
        }

        @mixin menuBtn($border, $bg, $fill) {
            $size: 40px;
            height: $size;
            width: $size;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $bg;
            border: 1px solid $border;

            svg {
                $iconSize: 45%;

                height: $iconSize;
                width: $iconSize;
                fill: $fill;
            }

            #close {
                $iconSize: 38%;

                height: $iconSize;
                width: $iconSize;
            }
        }

        #nav-menu-btn-close {
            @include menuBtn(transparent, var(--lightPurple), var(--purple));
        }

        #nav-menu-btn-open {
            @include menuBtn(white, var(--purple), white);
        }

        #navContainer {
            width: 100vw;
            top: var(--navbarHeight);
            left: 0;
            position: fixed;
            display: flex;
            flex-direction: column;
            padding: 0;
            background-color: white;
            transition: height 0.3s ease-out;
            overflow: hidden;

            nav a::after {
                background: transparent;
            }

            nav {
                flex-direction: column;
                margin: 0;
                padding: 0;
                gap: 0;
                flex: 1;
                border-right: 0;
                transition: opacity 0.3s ease-out;

                a {
                    padding: 0;
                    font-size: 1.2rem;
                    flex: 1;
                    display: inline-flex;
                    align-items: center;
                    width: 100%;
                    justify-content: center;
                    text-align: center;
                    border-bottom: 1px solid rgb(229, 229, 229);
                }
            }

            #authLinks {
                #loginButton {
                    margin: 30px auto 40px;
                    padding: 15px 15px 15px 10px;
                    width: 180px;
                    border-radius: 30px;
                    font-size: 1rem;
                    justify-content: center;
                    text-align: center;
                    display: inline-flex;
                    align-items: center;
                    background-color: var(--purple);
                    color: white;
                    border: 1px solid transparent;
                    transition: border 0.3s ease-out, background 0.3s ease-out;

                    svg {
                        $size: 16px;
                        height: $size;
                        width: $size;
                        margin-right: 7px;
                        fill: white;
                    }
                }
            }
        }

        .nav-open {
            height: calc(100dvh - var(--navbarHeight));
            border-top: 1px solid rgb(229, 229, 229);

            nav,
            #authLinks {
                opacity: 1;
            }
        }

        .nav-close {
            height: 0;

            nav,
            #authLinks {
                opacity: 0;
            }
        }
    }

    @media (hover: hover) {
        .container #navContainer {
            nav a:hover {
                color: var(--purple);
            }

            #authLinks #loginButton:hover {
                border-color: var(--purple);
                color: var(--purple);
                background-color: white;

                svg {
                    fill: var(--purple);
                }
            }
        }
    }
}

@media (max-width: 900px) {
    .container {
        #navbarLogo {
            width: 110px;
        }
    }
}

@media (hover: hover) {
    .container {
        #navbarLogo:hover {
            opacity: 0.5;
        }

        a:hover::after {
            width: 70%;
        }

        #loginButton:hover {
            color: black;

            svg {
                fill: black;
            }
        }

        #nav-menu-btn-open:hover {
            background-color: var(--black);
        }

        #nav-menu-btn-close:hover {
            border-color: var(--purple);
        }
    }
}
</style>
