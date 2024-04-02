<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import CoursesList from "./CoursesList.vue";
import FiltersList from "../browse/FiltersList.vue";
import SearchBar from "../browse/SearchBar.vue";
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

                    <CoursesList />
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
