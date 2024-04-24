<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import Banner from "../layout/Banner.vue";
import FaqList from "../faq/FaqList.vue";
import {getCourseFaq} from "@/composable/courses/courses";

const faqs = getCourseFaq();
</script>

<template>
    <Navbar />

    <main id="course-faq">
        <Banner title="FAQ" subtext="Frequently asked questions" />

        <div id="faq-course-list">
            <FaqList :faqs="faqs" />
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#course-faq {
    padding-bottom: 70px;
}
</style>
