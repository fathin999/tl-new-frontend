<script setup>
import LandingLayout from "../layout/LandingLayout.vue";
import SearchBar from "../browse/SearchBar.vue";
import FiltersList from "../browse/FiltersList.vue";
import IconClose from "../icons/IconClose.vue";
import IconFilter from "../icons/IconFilter.vue";
import {reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {calculatePageItems} from "@/composable/utilities/jobs";

const route = useRoute();
const router = useRouter();

const props = defineProps({
    filters: Array,
    title: String,
    placeholder: String,
    pages: Number,
    currentPage: String,
    path: String,
});

let showFilter = ref(false);
let filters = reactive(props.filters);

const toggleFilter = (index) => {
    if (typeof index == "number") filters[index].open = !filters[index].open;
};

const selectOption = (index, option, type) => {
    const query = filters[index].title;
    const filter = filters[index].options[option];

    // go to new href
    updateURL(query, filter);
};

const updateURL = (query, filter) => {
    let {page, ...newQuery} = route.query;

    // no query yet, just add
    if (!newQuery[query]) newQuery[query] = filter;
    // already have query
    else {
        Object.keys(newQuery).forEach((key) => {
            if (key === query) {
                // get all items
                let items = newQuery[key].split("AND");

                // check if item same or not
                // if has then delete
                let duplicate = items.findIndex((i) => i == filter);

                if (duplicate >= 0) {
                    items.splice(duplicate, 1);
                }
                // if not then add new item
                else items.push(filter);

                // join back items
                newQuery[key] = items.join("AND");
            }
        });
    }

    router.push({
        path: props.path,
        query: {
            page: page,
            ...newQuery,
        },
    });
};

const showFilterMenu = () => {
    showFilter.value = !showFilter.value;
    const body = document.getElementsByTagName("body")[0];

    if (showFilter.value) body.classList.add("disable-scroll");
    else body.classList.remove("disable-scroll");
};

const checkQueryTotal = () => {
    let total = 0;
    Object.keys(route.query).forEach((key) => {
        if (route.query[key]) total += 1;
    });
    return total;
};

// pages
const pageItems = calculatePageItems(props.currentPage, props.pages);
</script>

<template>
    <LandingLayout>
        <div
            id="browse"
            :class="`${
                showFilter ? 'browse-filter-open' : 'browse-filter-close'
            }`"
        >
            <SearchBar :placeholder="placeholder" :path="path" />

            <div class="container">
                <div id="filter-bg" @click="showFilterMenu" />

                <div id="browse-filter">
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
                        <h1>{{ title }}</h1>

                        <div
                            class="clickable"
                            id="show-filter-btn"
                            @click="showFilterMenu"
                        >
                            Filter

                            <b v-if="checkQueryTotal() > 1">
                                {{ checkQueryTotal() - 1 }}
                            </b>

                            <IconFilter />
                        </div>
                    </div>

                    <slot />

                    <div id="pagination-list">
                        <a
                            :class="`page-item ${
                                currentPage == page.page ? 'current' : ''
                            } ${page.pos}`"
                            v-for="(page, i) in pageItems"
                            :key="`page-item-${i}`"
                            :href="`${path}?page=${page.page}`"
                        >
                            {{ page.page }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </LandingLayout>
</template>

<style scoped lang="scss">
#browse {
    padding-bottom: 80px;
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

    #pagination-list {
        display: flex;
        justify-content: center;
        gap: 7px;
        margin-top: 30px;

        .page-item {
            $size: 32px;
            height: $size;
            min-width: $size;
            padding: 0 17px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid gainsboro;
            border-radius: 10px;
            background-color: white;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--textMedium);
            position: relative;
        }

        .current {
            background-color: var(--black);
            color: white;
        }

        .start {
            margin-right: 20px;
        }

        .end {
            margin-left: 20px;
        }

        .end::before,
        .start::before {
            content: "...";
            position: absolute;
            bottom: 0;
            height: 90%;
            width: 30px;
            right: -30px;
            text-align: center;
        }

        .end::before {
            right: auto;
            left: -30px;
        }
    }
}

@media (max-width: 1300px) {
    #browse {
        .container {
            gap: 4.5vw;
        }
    }
}

@media (max-width: 1200px) {
    #browse {
        overflow-x: hidden;

        .container {
            display: block;
            padding: 0;
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
            margin: 0 0 25px;
            align-items: center;

            h1 {
                padding: 0;
                line-height: 1rem;
            }

            #show-filter-btn {
                display: inline-flex;
                align-items: center;
                background-color: var(--lightPurple);
                padding: 8px 18px;
                border-radius: 30px;
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--purple);

                b {
                    margin-left: 10px;
                    background-color: var(--purple);
                    color: white;
                    padding: 1px 7px;
                    border-radius: 20px;
                    font-size: 0.85rem;
                }

                svg {
                    $size: 15px;
                    height: $size;
                    width: $size;
                    margin-left: 12px;
                    fill: var(--purple);
                }
            }
        }
    }

    .browse-filter {
        &-open {
            #browse-filter {
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
            #browse-filter {
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
    #browse {
        #list-container {
            max-width: 700px;
        }

        .container {
            position: relative;
        }
    }
}

@media (max-width: 600px) {
    #browse {
        &-filter {
            width: 90vw;
        }

        #list-title {
            h1 {
                margin-top: 4px;
            }
        }

        #pagination-list {
            .page-item {
                $size: 37px;
                height: $size;
                width: $size;
            }
        }
    }

    .browse-filter {
        &-open {
            #filter-bg {
                width: 100vw;
            }
        }

        &-close {
            #browse-filter {
                right: -90vw;
            }
        }
    }
}

@media (hover: hover) {
    #browse #pagination-list {
        .page-item:hover {
            background-color: var(--lightPurple);
        }

        .current:hover {
            background-color: var(--black);
        }
    }
}
</style>
