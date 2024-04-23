<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import CoursesList from "./CoursesList.vue";
import FiltersList from "../browse/FiltersList.vue";
import SearchBar from "../browse/SearchBar.vue";
import IconClose from "../icons/IconClose.vue";
import IconFilter from "../icons/IconFilter.vue";
import {reactive, ref} from "vue";

let showFilter = ref(false);

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
            id="courses"
            :class="`${
                showFilter ? 'courses-filter-open' : 'courses-filter-close'
            }`"
        >
            <SearchBar />

            <div class="container">
                <div id="filter-bg" @click="showFilterMenu" />

                <div id="courses-filter">
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
                        <h1>All courses</h1>

                        <div
                            class="clickable"
                            id="show-filter-btn"
                            @click="showFilterMenu"
                        >
                            Filter

                            <IconFilter />
                        </div>
                    </div>

                    <CoursesList :courses="courses" class="courses-page-list" />
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

    #filter-bg,
    .close-btn,
    #show-filter-btn {
        display: none;
    }
}

@media (max-width: 1300px) {
    #courses {
        .container {
            gap: 4.5vw;
        }
    }
}

@media (max-width: 1200px) {
    #courses {
        overflow-x: hidden;

        .container {
            display: block;
        }

        #list-container {
            max-width: 900px;
            margin: 0 auto;
        }

        &-filter {
            position: fixed;
            background: white;
            z-index: 10;
            top: var(--navbarHeight);
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

    .courses-filter {
        &-open {
            #courses-filter {
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
            #courses-filter {
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

@media (max-width: 1000px) {
    #courses {
        #list-container {
            max-width: 700px;
        }

        .courses-page-list {
            grid-template-columns: 1fr 1fr;
        }

        .container {
            position: relative;
        }
    }
}

@media (max-width: 700px) {
    #courses {
        #list-container {
            max-width: 400px;
        }

        .courses-page-list {
            grid-template-columns: 1fr;
            gap: 25px;
        }

        &-filter {
            width: 90vw;
        }

        #list-title {
            h1 {
                margin-top: 4px;
            }
        }
    }

    .courses-filter {
        &-open {
            #filter-bg {
                width: 100vw;
            }
        }

        &-close {
            #courses-filter {
                right: -90vw;
            }
        }
    }
}
</style>
