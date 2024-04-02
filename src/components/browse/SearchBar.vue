<script setup>
import IconSearch from "../icons/IconSearch.vue";
</script>

<template>
    <div id="header">
        <div id="search">
            <input type="text" v-model="keyword" placeholder="Search" />
            <div id="search-icon" @click="search">
                <IconSearch />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Search Bar",
    data() {
        return {
            keyword: "",
        };
    },
    methods: {
        search() {
            console.log(this.keyword);
        },
    },
};
</script>

<style scoped lang="scss">
#header {
    background-color: white;
    padding: 15px 0 25px;

    #search {
        $height: 65px;
        $margin: 7px;
        display: flex;
        align-items: center;
        width: 600px;
        margin: auto;
        border-radius: calc($height / 2);
        padding: 0 $margin 0 35px;
        background-clip: white;
        border: 1px solid var(--darkBlue);
        height: $height;

        &-icon {
            height: calc($height - ($margin * 2));
            width: calc($height * 1.3);
            background: var(--purple);
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--purple);
            user-select: none;
            cursor: pointer;
            transition: background 0.3s ease-out;

            svg {
                $size: 22px;
                height: $size;
                width: $size;
                fill: white;
                display: block;
                margin: auto;
                transition: fill 0.3s ease-out;
            }
        }

        &-icon:hover {
            background-color: white;

            svg {
                fill: var(--purple);
            }
        }

        input:focus,
        input {
            height: $height;
            background-color: transparent;
            outline: none;
            border: none;
            padding: 0;
        }
    }
}
</style>
