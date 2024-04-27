<script setup>
import IconChevron from "../icons/IconChevron.vue";
import IconSearch from "../icons/IconSearch.vue";
</script>

<template>
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
            <div class="jobs-dropdown-option">Kuala Lumpur, Malaysia</div>
            <div class="jobs-dropdown-option">Selangor, Malaysia</div>
            <div class="jobs-dropdown-option">Hong Kong (Central)</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
}
</style>
