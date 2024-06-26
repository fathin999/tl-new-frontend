<script setup>
import LandingLayout from "@/components/landing/layout/LandingLayout.vue";
import {filterRoles} from "@/composable/backend/roles";

// -------------------
// BACKEND - get featured roles
// -------------------
// BACKEND
const roles = filterRoles("featured", true);

// -------------------
// TO CHANGE - static image to change to img URL
// -------------------
// static images
const getImg = (slug) => {
    return new URL(
        `/src/assets/database/roles/role-${slug}.svg`,
        import.meta.url
    );
};
</script>

<template>
    <LandingLayout>
        <div id="roles" class="container">
            <div class="breadcrumbs">
                <a href="/">Home </a>
                <b> > </b>
                <a>Career roles</a>
            </div>

            <h1>Explore our <u>career roles</u></h1>

            <p>
                Discover a variety of roles tailored to your skills and
                interests, and find the perfect match for your career
                aspirations.
            </p>

            <div id="roles-list">
                <a
                    v-for="(role, index) in roles"
                    :key="`role-item-${index}`"
                    class="role-item clickable"
                    :href="`/career-roles/${role.slug}`"
                >
                    <div class="role-item-img">
                        <img :src="getImg(role.slug)" alt="" />
                    </div>

                    <span>
                        {{ role.title }}
                    </span>
                </a>
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#roles {
    padding-bottom: 90px;

    .breadcrumbs {
        margin-top: 20px;
    }

    h1 {
        text-align: center;
        margin: 60px 0 25px;
        font-size: 2.5rem;
        line-height: 3rem;
    }

    p {
        width: 50%;
        margin: 0 auto 80px;
        text-align: center;
    }

    &-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
    }

    .role-item {
        /* background-color: var(--bgMedium); */
        border: 1px solid gainsboro;
        border-radius: 15px;
        padding: 30px;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        img {
            $size: 75px;
            height: $size;
            width: $size;
            transition: transform 0.3s ease-out;
        }

        span {
            margin-top: 20px;
            font-size: 1.1rem;
        }
    }
}

@media (max-width: 900px) {
    #roles {
        &-list {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}

@media (max-width: 700px) {
    #roles {
        h1 {
            font-size: 6vw;
            line-height: 8vw;
            margin: 60px 0 15px;
        }

        p {
            width: 100%;
            margin: 0 auto 50px;
        }

        &-list {
            grid-template-columns: repeat(2, 1fr);
            gap: 7px;
        }

        .role-item {
            height: auto;
            border-radius: 10px;
            padding: 25px 20px;

            img {
                $size: 45px;
                height: $size;
                width: $size;
            }

            span {
                font-size: 1rem;
                margin-top: 12px;
            }
        }
    }
}

@media (max-width: 350px) {
    #roles {
        &-list {
            grid-template-columns: 1fr;
        }
    }
}

@media (hover: hover) {
    #roles {
        .role-item:hover {
            border-color: var(--purple);

            img {
                transform: scale(1.15);
            }

            /* span {
            color: var(--purple);
        } */
        }
    }
}
</style>
