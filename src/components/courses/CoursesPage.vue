<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import CoursesList from "./CoursesList.vue";
import FiltersList from "../browse/FiltersList.vue";
import SearchBar from "../browse/SearchBar.vue";
import {reactive} from "vue";

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

const filters = reactive([
    {
        title: "Topic",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Data analysis",
                selected: false,
            },
            {
                title: "Artificial intelligence",
                selected: false,
            },
            {
                title: "Software engineering",
                selected: false,
            },
            {
                title: "Frontend development",
                selected: false,
            },
            {
                title: "UI / UX design",
                selected: false,
            },
            {
                title: "Backend development",
                selected: false,
            },
            {
                title: "Database",
                selected: false,
            },
            {
                title: "Network",
                selected: false,
            },
            {
                title: "DevOps",
                selected: false,
            },
            {
                title: "Database",
                selected: false,
            },
            {
                title: "Digital marketing",
                selected: false,
            },
            {
                title: "Cybersecurity",
                selected: false,
            },
            {
                title: "Blockchain",
                selected: false,
            },
            {
                title: "Technology Management",
                selected: false,
            },
            {
                title: "Business",
                selected: false,
            },
            {
                title: "Finance",
                selected: false,
            },
            {
                title: "Python",
                selected: false,
            },
            {
                title: "Javascript",
                selected: false,
            },
            {
                title: "HTML & CSS",
                selected: false,
            },
        ],
    },
    {
        title: "Level",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Beginner",
                selected: false,
            },
            {
                title: "Intermediate",
                selected: false,
            },
            {
                title: "Advanced",
                selected: false,
            },
        ],
    },
    {
        title: "Provider",
        open: false,
        type: "radio",
        options: [
            {
                title: "TalentLabs",
                selected: false,
            },
            {
                title: "AWS",
                selected: false,
            },
            {
                title: "Google Certificates",
                selected: false,
            },
        ],
    },
    {
        title: "Programme",
        open: false,
        type: "radio",
        options: [
            {
                title: "K-Youth",
                selected: false,
            },
            {
                title: "MySTEP",
                selected: false,
            },
        ],
    },
]);

const toggleFilter = (index) => {
    if (typeof index == "number") filters[index].open = !filters[index].open;
};

const selectOption = (index, option, type) => {
    if (typeof index == "number" && typeof option == "number") {
        if (type == "checkbox") {
            filters[index].options[option].selected =
                !filters[index].options[option].selected;
        } else if (type == "radio") {
            for (let i = 0; i < filters[index].options.length; i++) {
                filters[index].options[i].selected = i === option;
            }
        }
    }
};
</script>

<template>
    <Navbar />

    <main>
        <div id="courses">
            <SearchBar />

            <div class="container">
                <div id="courses-filter">
                    <h1>Filter by:</h1>

                    <FiltersList
                        :filters="filters"
                        @toggleFilter="toggleFilter"
                        @selectOption="selectOption"
                    />
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
        gap: 100px;
        justify-content: space-between;
        padding-top: 40px;
        align-items: flex-start;

        h1 {
            font-size: 0.95rem;
            color: var(--textLight);
            padding-bottom: 25px;
        }
    }

    &-filter {
        position: sticky;
        top: 120px;
        left: 0;
    }
}
</style>
