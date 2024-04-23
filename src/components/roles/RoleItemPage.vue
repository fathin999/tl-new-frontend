<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import {getRole} from "../../composable/roles/roles";
import {getRoleTabs} from "../../composable/view-models/roles";
import {ref} from "vue";

const role = getRole();
const active = ref(0);
const tabs = getRoleTabs();

const getImg = (slug) => {
    return new URL(`/src/assets/roles/role-${slug}.svg`, import.meta.url);
};
</script>

<template>
    <Navbar />

    <main id="role">
        <div class="container" id="role-header">
            <div class="breadcrumbs">
                <a href="/">Home </a>
                <b> > </b>
                <a href="/career-roles">Career roles</a>
                <b> > </b>
                <a>{{ role.title }}</a>
            </div>

            <img :src="getImg(role.slug)" alt="" />

            <h1>{{ role.title }}</h1>
        </div>

        <div class="secondary-bar">
            <div class="container">
                <div
                    v-for="(tab, i) in tabs"
                    :key="`role-tab-${i}`"
                    :class="`bar-item clickable ${
                        active === i ? 'bar-item-active' : ''
                    }`"
                    @click="active = i"
                >
                    {{ tab }}
                </div>
            </div>
        </div>

        <div id="role-content">
            <div class="container section-small">
                <div id="role-content-who">
                    <div>
                        <h1 class="first">Who are they?</h1>

                        <p>
                            Software engineers create web applications, mobile
                            apps, robots, operating systems, and network
                            systems. They develop software solutions that meet
                            their companies' needs and expectations. Note that
                            the terms "software engineer" and "software
                            developer" are used interchangeably in the industry,
                            but these positions' responsibilities vary slightly.
                            <br />
                            <br />
                            Software engineers design software solutions, while
                            software developers build those solutions to make
                            them ready for consumers. Depending on the type of
                            company they work for, software engineers will
                            create original code for software and applications.
                            They also build reusable code for future use.
                        </p>
                    </div>

                    <img src="" alt="" />
                </div>

                <div id="role-content-do">
                    <h1>What do they do?</h1>

                    <h1>Who m</h1>
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#role {
    position: relative;

    &-header {
        padding: 20px 0 50px;

        img {
            $size: 70px;
            height: $size;
            width: $size;
            margin: 50px 0 10px;
        }
    }

    .section-small {
        padding: 80px 0;
    }

    &-content {
        h1 {
            font-size: 1.7rem;
            margin: 60px 0 25px;
        }

        .first {
            margin-top: 0;
        }

        &-who {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 350px;
            gap: 120px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                background: gainsboro;
                border-radius: 50px;
                border-top-right-radius: 0;
            }
        }

        &-who::after {
            $size: 110px;
            content: "";
            height: $size;
            width: $size;
            border: 5px solid white;
            bottom: -6px;
            right: -6px;
            position: absolute;
            border-top-left-radius: 100%;
        }
    }
}
</style>
