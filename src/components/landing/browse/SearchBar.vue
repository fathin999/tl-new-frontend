<script setup>
import {getRoleSuggestions} from "@/composable/backend/roles";
import IconSearch from "../icons/IconSearch.vue";
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

// ROUTE
const route = useRoute();
const router = useRouter();

// PROPS
const props = defineProps({
    placeholder: String,
    path: String,
});

// REF
const keyword = ref("");
const suggestions = ref([keyword.value]);

// -------------------
// BACKEND - get Role suggestions
// -------------------
const change = () => {
    suggestions.value.splice(0);

    if (keyword.value !== "") {
        const roles = getRoleSuggestions(keyword.value);
        suggestions.value = [keyword.value];
        roles.forEach((role) => suggestions.value.push(role.title));
    }
};

// METHODS

// Search methods
const search = (i) => {
    const query = route.query;

    console.log(suggestions.value);

    router.push({
        path: props.path,
        query: {
            ...query,
            keyword: suggestions.value[i],
        },
    });
};

// View methods
const checkKeyword = () => {
    return keyword.value !== "";
};
</script>

<template>
    <div id="header">
        <div id="search">
            <input
                type="text"
                v-model="keyword"
                :placeholder="placeholder"
                @input="change"
            />

            <div id="search-icon" @click="search(0)">
                <IconSearch />
            </div>

            <div v-if="checkKeyword()" id="search-suggestions">
                <div
                    class="suggestion-item clickable"
                    v-for="(suggestion, i) in suggestions"
                    :key="suggestion"
                    @click="search(i)"
                >
                    <IconSearch />
                    <span>
                        {{ suggestion }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#header {
    background-color: white;
    padding: 60px 0 50px;

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
        border: 1px solid darkgrey;
        height: $height;
        position: relative;

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
            transition: background 0.2s ease-out;

            svg {
                $size: 22px;
                height: $size;
                width: $size;
                fill: white;
                display: block;
                margin: auto;
                transition: fill 0.2s ease-out;
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

    #search-suggestions {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        text-align: left;
        border-radius: 15px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        z-index: 5;
        background-color: white;
        border: 1px solid whitesmoke;
        overflow: hidden;

        .suggestion-item {
            padding: 15px 35px;
            display: flex;
            align-items: center;

            span {
                color: var(--black);
            }

            svg {
                $size: 15px;
                height: $size;
                width: $size;
                margin-right: 20px;
                fill: var(--black);
            }
        }
    }
}

@media (max-width: 600px) {
    #header {
        padding: 25px 20px 35px;

        #search {
            $height: 50px;
            $margin: 6px;
            width: auto;
            height: $height;
            padding: 0 $margin 0 25px;

            &-icon {
                height: calc($height - ($margin * 2));
                width: calc($height * 1.3);

                svg {
                    $size: 20px;
                    height: $size;
                    width: $size;
                }
            }
        }
    }
}

@media (hover: hover) {
    #header {
        #search {
            &-icon:hover {
                background-color: white;

                svg {
                    fill: var(--purple);
                }
            }
        }

        #search-suggestions {
            .suggestion-item:hover {
                background-color: var(--black);

                span {
                    color: white;
                }

                svg {
                    fill: white;
                }
            }
        }
    }
}
</style>
