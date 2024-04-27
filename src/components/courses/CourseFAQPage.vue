<script setup>
import LandingLayout from "../layout/LandingLayout.vue";
import Banner from "../layout/Banner.vue";
import FaqList from "../faq/FaqList.vue";
import {getCourseFaq} from "@/composable/courses/courses";

const faqs = getCourseFaq();
</script>

<template>
    <LandingLayout>
        <div id="course-faq" class="container">
            <Banner title="FAQ" subtext="Frequently asked questions" />

            <div id="faq-course-list">
                <FaqList :faqs="faqs" />
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#course-faq {
    padding-bottom: 70px;
}
</style>
