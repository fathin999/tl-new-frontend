<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
import FiltersList from "../browse/FiltersList.vue";
import IconChevron from "../icons/IconChevron.vue";
import JobsList from "./JobsList.vue";
import IconSearch from "../icons/IconSearch.vue";
</script>

<template>
    <Navbar />

    <main>
        <div id="jobs">
            <div id="jobs-header" class="container">
                <h2>I'm searching for</h2>
                <div class="jobs-search">
                    <input
                        placeholder="Eg: Developer"
                        type="text"
                        name="search-keyword"
                    />

                    <IconSearch />
                </div>

                <h2>jobs, hiring in</h2>

                <div class="jobs-dropdown">
                    <span class="jobs-dropdown-placeholder">Location</span>
                    <IconChevron />

                    <div class="jobs-dropdown-options">
                        <div class="jobs-dropdown-search">
                            <IconSearch />

                            <input
                                type="text"
                                name="locationKeyword"
                                placeholder="Search"
                            />
                        </div>
                        <div class="jobs-dropdown-option">Remote</div>
                        <div class="jobs-dropdown-option">Malaysia</div>
                        <div class="jobs-dropdown-option">Hong Kong</div>
                        <div class="jobs-dropdown-option">Singapore</div>
                        <div class="jobs-dropdown-option">Indonesia</div>
                        <div class="jobs-dropdown-option">Brunei</div>
                        <div class="jobs-dropdown-option">Thailand</div>
                        <div class="jobs-dropdown-option">Vietnam</div>
                        <div class="jobs-dropdown-option">Philippines</div>
                        <div class="jobs-dropdown-option">Cambodia</div>
                        <div class="jobs-dropdown-option">Laos</div>
                        <div class="jobs-dropdown-option">
                            Kuala Lumpur, Malaysia
                        </div>
                        <div class="jobs-dropdown-option">
                            Selangor, Malaysia
                        </div>
                        <div class="jobs-dropdown-option">
                            Hong Kong (Central)
                        </div>
                    </div>
                </div>

                <div class="btn-primary btn-m">Search</div>
            </div>

            <div id="jobs-content" class="container">
                <div>
                    <h1>Filter by:</h1>

                    <FiltersList />
                </div>

                <div>
                    <h1>All jobs</h1>

                    <JobsList :card="false" />
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped lang="scss">
#jobs {
    &-header {
        text-align: center;
        padding: 45px 0 55px;

        h2 {
            display: inline-block;
            margin: 0;
            font-size: 1.6rem;
        }
    }

    &-content {
        padding: 0 0 90px;
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 100px;
        justify-content: space-between;
        padding-top: 40px;

        h1 {
            font-size: 0.95rem;
            color: var(--textLight);
            padding-bottom: 25px;
        }
    }
}

.jobs {
    $padding: 17px;

    @mixin input($width) {
        padding: $padding 20px $padding 25px;
        display: inline-flex;
        border: 1px solid gainsboro;
        border-radius: 10px;
        user-select: none;
        cursor: pointer;
        text-align: left;
        align-items: center;
        position: relative;
        width: $width;
        margin: 0 20px;

        span {
            flex: 1;
        }
    }

    &-dropdown {
        @include input(210px);

        svg {
            $size: 15px;
            height: $size;
            width: $size;
            transform: rotate(90deg);
            margin-top: 3px;
            fill: var(--textLight);
        }

        &-placeholder {
            color: var(--textMedium);
        }

        &-options {
            display: none;
            border: 1px solid red;
            position: absolute;
            width: 100%;
            left: 0;
            top: 53px;
            background-color: white;
            border: 1px solid gainsboro;
            border-radius: 10px;
            z-index: 5;
            max-height: 40vh;
            overflow-y: scroll;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        &-option {
            padding: 15px 20px;
            border-bottom: 1px solid gainsboro;
        }

        &-option:last-of-type {
            border-bottom: none;
        }

        &-option:hover {
            background-color: var(--bgMedium);
        }

        &-search {
            border-bottom: 1px solid gainsboro;
            position: relative;

            input {
                $padding: 30px;
                padding: $padding 20px $padding 50px;
                outline: none;
                border: none;
                border-radius: 0;
                background-color: transparent;
            }

            input:focus {
                border: none;
                outline: none;
            }

            svg {
                $searchSize: 18px;
                position: absolute;
                left: 20px;
                top: 0;
                bottom: 0;
                margin: auto;
                height: $searchSize;
                width: $searchSize;
                fill: var(--textLight);
            }
        }
    }

    &-dropdown:hover {
        border-color: var(--purple);

        span {
            color: var(--purple);
        }

        svg {
            fill: var(--purple);
        }

        .jobs-dropdown-options {
            display: block;
        }
    }

    &-search {
        display: inline-block;
        position: relative;

        input {
            @include input(270px);
            padding-left: 55px;
        }

        svg {
            $size: 20px;
            height: $size;
            width: $size;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            left: 40px;
            fill: var(--textLight);
        }
    }
}
</style>
