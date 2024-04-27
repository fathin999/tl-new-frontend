<script setup>
import LandingLayout from "../layout/LandingLayout.vue";
import Banner from "../layout/Banner.vue";
import FaqList from "../faq/FaqList.vue";
import {getCAFaqTypes, getFaqs} from "@/composable/backend/faqs";
import {useRoute} from "vue-router";
import {ref} from "vue";
import {scrollToTab} from "@/composable/utilities/tabs";

// route
const route = useRoute();

// -------------------
// BACKEND - getFaqs - get query from query, course type
// -------------------
const getFaqsFromQuery = (categ) => {
    if (getQuery()) {
        // if course has no category
        if (!categ) return getFaqs(route.query.type);
        // with category
        else return getFaqs(route.query.type + "-" + categ.toLowerCase());
    }
    return [];
};

// -------------------
// BACKEND - getCAFaqTypes - get CA FAQ categories, if query is CA
// -------------------
const getCategoriesIfCA = () => {
    if (getQuery() === "ca") return getCAFaqTypes();
    else return [];
};

// get query if there is one
const getQuery = () => {
    if (route.query.hasOwnProperty("type")) return route.query.type;
    else return "";
};

// categories
const categories = getCategoriesIfCA();

// get active category is there are categories
const initCategory = () => {
    if (categories.length > 0) return categories[0];
    else return "";
};

// Reactive & Ref
let category = ref(initCategory());
let faqs = ref(getFaqsFromQuery(category.value));
const btns = ref();

// click category
const changeCategory = (cat, i) => {
    category.value = cat;
    faqs.value = getFaqsFromQuery(cat);
    scrollToTab(btns.value, btns.value, i);
};
</script>

<template>
    <LandingLayout>
        <div id="course-faq" class="container">
            <Banner title="FAQ" subtext="Frequently asked questions" />

            <div
                id="course-faq-categories"
                class="hide-scrollbar"
                v-if="categories.length > 0"
                ref="btns"
            >
                <div
                    :class="`faq-category clickable ${
                        cat === category ? 'active' : ''
                    }`"
                    v-for="(cat, i) in categories"
                    :key="cat"
                    @click="changeCategory(cat, i)"
                >
                    {{ cat }}
                </div>
            </div>

            <div id="faq-course-list">
                <FaqList :faqs="faqs" />
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#course-faq {
    padding-bottom: 70px;

    &-categories {
        display: flex;
        margin: 0 auto 40px;
        justify-content: center;
        gap: 10px;

        .faq-category {
            border-radius: 10px;
            border: 1px solid darkgray;
            padding: 10px 20px;
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--textLight);
            background-color: white;
            transition: background 0.3s ease-out;
        }

        .active {
            color: white;
            background-color: var(--black);
        }
    }
}

@media (max-width: 700px) {
    #course-faq-categories {
        width: 100vw;
        margin-left: -20px;
        justify-content: flex-start;
        overflow-x: scroll;
        padding: 0 20px;

        .faq-category {
            font-size: 0.9rem;
            border-radius: 30px;
        }
    }
}

@media (hover: hover) {
    #course-faq {
        &-categories {
            .faq-category:hover {
                background-color: var(--lightPurple);
            }

            .active:hover {
                background-color: var(--black);
            }
        }
    }
}
</style>
