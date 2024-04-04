<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import CoursesList from "./CoursesList.vue";
import FiltersList from "../browse/FiltersList.vue";
import SearchBar from "../browse/SearchBar.vue";

const courses = [
    {
        id: 1,
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Data Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
    },
    {
        id: 2,
        badge: "cada",
        banner: "cabed",
        title: "Certified Associate in Backend Development",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
    },
    {
        id: 3,
        badge: "devops",
        banner: "devops",
        title: "AWS DevOps Engineer",
        type: "AWS Professional",
        level: "Advanced",
        provider: "Amazon Web Services (AWS)",
        providerLogo: "aws",
    },
    {
        id: 4,
        badge: "cada",
        banner: "cada",
        title: "Certified Associate in Data Analytics",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
    },
    {
        id: 5,
        badge: "cada",
        banner: "cabed",
        title: "Certified Associate in Backend Development",
        type: "Certified Associate",
        level: "Intermediate",
        provider: "TalentLabs",
        providerLogo: "tl",
    },
    {
        id: 6,
        badge: "devops",
        banner: "devops",
        title: "AWS DevOps Engineer",
        type: "AWS Professional",
        level: "Advanced",
        provider: "Amazon Web Services (AWS)",
        providerLogo: "aws",
    },
];
</script>

<template>
    <Navbar />

    <main>
        <div id="courses">
            <SearchBar />

            <div class="container">
                <div>
                    <h1>Filter by:</h1>

                    <FiltersList />
                </div>

                <div>
                    <h1>All courses</h1>

                    <CoursesList :courses="courses" />
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#courses {
    .container {
        padding: 0 0 90px;
        display: grid;
        grid-template-columns: 210px 1fr;
        gap: 90px;
        justify-content: space-between;
        padding-top: 40px;

        h1 {
            font-size: 0.95rem;
            color: var(--textLight);
            padding-bottom: 25px;
        }
    }
}
</style>
