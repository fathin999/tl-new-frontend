<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import FiltersList from "../browse/FiltersList.vue";
import IconChevron from "../icons/IconChevron.vue";
import JobsList from "./JobsList.vue";
import IconSearch from "../icons/IconSearch.vue";
import SearchBar from "../browse/SearchBar.vue";
import {reactive} from "vue";
import {getAllJobs} from "../../composable/jobs/jobs";

const jobs = getAllJobs();

const filters = reactive([
    {
        title: "Role",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Software engineer",
                selected: true,
            },
            {
                title: "UI / UX designer",
                selected: false,
            },
            {
                title: "Product manager",
                selected: false,
            },
            {
                title: "Data science",
                selected: false,
            },
            {
                title: "Cybersecurity",
                selected: false,
            },
            {
                title: "Consulting & systems integration",
                selected: false,
            },
            {
                title: "IT Support",
                selected: false,
            },
            {
                title: "Network & systems administrator",
                selected: false,
            },
            {
                title: "Digital marketing",
                selected: false,
            },
            {
                title: "Graphics design",
                selected: false,
            },
            {
                title: "Multimedia",
                selected: false,
            },
            {
                title: "Technical writing",
                selected: false,
            },
            {
                title: "Business & management",
                selected: false,
            },
            {
                title: "Sales & accounts",
                selected: false,
            },
            {
                title: "Other",
                selected: false,
            },
        ],
    },
    {
        title: "Location",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Hong Kong",
                selected: true,
            },
            {
                title: "Malaysia",
                selected: false,
            },
            {
                title: "Central, Hong Kong",
                selected: false,
            },
            {
                title: "Eastern, Hong Kong",
                selected: false,
            },
            {
                title: "Western, Hong Kong",
                selected: false,
            },
            {
                title: "Northern, Hong Kong",
                selected: false,
            },
            {
                title: "Southern, Hong Kong",
                selected: false,
            },
            {
                title: "Kuala Lumpur, Malaysia",
                selected: false,
            },
            {
                title: "Selangor, Malaysia",
                selected: false,
            },
            {
                title: "Putrajaya, Malaysia",
                selected: false,
            },
        ],
    },
    {
        title: "Type",
        open: false,
        type: "checkbox",
        options: [
            {
                title: "Full-time",
                selected: true,
            },
            {
                title: "Part-time",
                selected: false,
            },
            {
                title: "Contract",
                selected: false,
            },
            {
                title: "Internship",
                selected: false,
            },
        ],
    },
    {
        title: "Remote",
        open: false,
        type: "radio",
        options: [
            {
                title: "Remote",
                selected: true,
            },
            {
                title: "Onsite",
                selected: false,
            },
            {
                title: "Hybrid",
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
        <div id="jobs">
            <SearchBar />

            <div id="jobs-content" class="container">
                <div id="jobs-content-filter">
                    <h1>Filter by:</h1>

                    <FiltersList
                        :filters="filters"
                        @toggleFilter="toggleFilter"
                        @selectOption="selectOption"
                    />
                </div>

                <div>
                    <h1>All jobs</h1>

                    <JobsList :card="false" :jobs="jobs" />
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#jobs {
    &-content {
        padding: 0 0 90px;
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 120px;
        justify-content: space-between;
        padding-top: 40px;
        align-items: flex-start;
        position: relative;

        h1 {
            font-size: 0.95rem;
            color: var(--textLight);
            padding-bottom: 25px;
        }

        &-filter {
            position: sticky;
            top: 120px;
            left: 0;
        }
    }
}
</style>
