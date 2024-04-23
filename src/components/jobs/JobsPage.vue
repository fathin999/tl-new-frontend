<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import FiltersList from "../browse/FiltersList.vue";
import IconChevron from "../icons/IconChevron.vue";
import JobsList from "./JobsList.vue";
import IconSearch from "../icons/IconSearch.vue";
import IconClose from "../icons/IconClose.vue";
import IconFilter from "../icons/IconFilter.vue";
import SearchBar from "../browse/SearchBar.vue";
import {reactive, ref} from "vue";
import {getAllJobs} from "../../composable/jobs/jobs";

let showFilter = ref(false);

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

const showFilterMenu = () => {
    showFilter.value = !showFilter.value;
    const body = document.getElementsByTagName("body")[0];

    if (showFilter.value) body.classList.add("disable-scroll");
    else body.classList.remove("disable-scroll");
};
</script>

<template>
    <Navbar />

    <main>
        <div
            id="jobs"
            :class="`${showFilter ? 'jobs-filter-open' : 'jobs-filter-close'}`"
        >
            <SearchBar />

            <div id="jobs-content" class="container">
                <div id="filter-bg" @click="showFilterMenu" />

                <div id="jobs-content-filter">
                    <div class="clickable close-btn" @click="showFilterMenu">
                        <IconClose />
                    </div>

                    <h1>Filter by:</h1>

                    <FiltersList
                        :filters="filters"
                        @toggleFilter="toggleFilter"
                        @selectOption="selectOption"
                    />
                </div>

                <div id="list-container">
                    <div id="list-title">
                        <h1>All jobs</h1>

                        <div
                            class="clickable"
                            id="show-filter-btn"
                            @click="showFilterMenu"
                        >
                            Filter

                            <IconFilter />
                        </div>
                    </div>

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

    #filter-bg,
    .close-btn,
    #show-filter-btn {
        display: none;
    }
}

@media (max-width: 1300px) {
    #jobs {
        .container {
            gap: 6vw;
        }
    }
}

@media (max-width: 1200px) {
    #jobs {
        .container {
            display: block;
        }

        &-content-filter {
            position: fixed;
            background: white;
            z-index: 10;
            top: var(--navbarwidth);
            bottom: 0;
            height: calc(100dvh - var(--navbarHeight));
            overflow-x: hidden;
            width: 500px;
            padding: 20px 20px 30px;
            border-top: 1px solid gainsboro;
            border-right: 1px solid gainsboro;
            overflow-y: scroll;
            transition: right 0.3s ease-out;
            left: auto;

            h1 {
                margin-bottom: 10px;
            }

            .close-btn {
                $size: 30px;

                height: $size;
                width: $size;
                border: 1px solid var(--purple);
                background-color: var(--purple);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin-right: 0;
                margin-left: auto;

                svg {
                    height: 40%;
                    width: 40%;
                    fill: white;
                }
            }
        }

        #list-container {
            max-width: 750px;
            margin: 0 auto;
        }

        #filter-bg {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.5);
            transition: opacity 0.3s ease-out, width 0.3s ease-out;
            height: 100dvh;
            display: block;
        }

        #list-title {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            align-items: center;

            h1 {
                height: 1rem;
            }

            #show-filter-btn {
                display: inline-flex;
                align-items: center;
                border: 1px solid var(--purple);
                padding: 12px 25px;
                border-radius: 30px;
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--purple);

                svg {
                    $size: 17px;
                    height: $size;
                    width: $size;
                    margin-left: 15px;
                    fill: var(--purple);
                }
            }
        }
    }

    .jobs-filter {
        &-open {
            #jobs-content-filter {
                right: 0;
            }

            #filter-bg {
                width: calc(100vw - 500px);
                opacity: 1;
                touch-action: auto;
                pointer-events: auto;
            }
        }

        &-close {
            #jobs-content-filter {
                right: -500px;
            }

            #filter-bg {
                width: 100vw;
                touch-action: none;
                pointer-events: none;
                opacity: 0;
            }
        }
    }
}

@media (max-width: 900px) {
    #jobs {
        overflow-x: hidden;
    }
}

@media (max-width: 700px) {
    #jobs {
        &-content-filter {
            width: 90vw;

            .close-btn {
                $size: 35px;
                height: $size;
                width: $size;
            }
        }

        #list-title {
            h1 {
                margin-top: 4px;
            }
        }
    }

    .jobs-filter {
        &-open {
            #filter-bg {
                width: 100vw;
            }
        }

        &-close {
            #jobs-content-filter {
                right: -90vw;
            }
        }
    }
}
</style>
