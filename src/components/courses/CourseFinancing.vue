<script setup>
import IconChevron from "../icons/IconChevron.vue";
import {ref} from "vue";
import {getCountries, getCourseFees} from "@/composable/courses/courses";

const countries = getCountries();
const fees = getCourseFees();

const open = ref(false);
const chosen = ref(0);

const getClass = (picked) => {
    const cls = "course-fees-item ";
    return picked ? cls + "course-fees-picked" : cls;
};

const getCountryImg = (img) => {
    return new URL(
        `/src/assets/courses/flags/flag-${img}.png`,
        import.meta.url
    );
};

const chooseCountry = (index) => {
    chosen.value = index;
    open.value = false;
};
</script>

<template>
    <div id="course-fees-dropdown" class="clickable">
        <div id="course-fees-dropdown-header" @click="open = !open">
            <img
                :src="getCountryImg(countries[chosen].img)"
                :alt="countries[chosen].name"
            />
            <span>{{ countries[chosen].name }}</span>
            <IconChevron />
        </div>

        <div id="course-fees-dropdown-options" v-if="open">
            <div
                class="course-fees-option"
                v-for="(country, index) in countries"
                :key="country.img"
                @click="chooseCountry(index)"
            >
                <img :src="getCountryImg(country.img)" :alt="country.name" />
                {{ country.name }}
            </div>
        </div>
    </div>

    <div id="course-fees-list">
        <div
            v-for="fee in fees"
            :key="fee.title"
            :class="getClass(fee.mostPicked)"
        >
            <h2>{{ fee.title }}</h2>

            <p>{{ fee.description }}</p>

            <div class="course-fees-item-price">
                <div class="course-fees-item-price-slash">
                    <span class="course-fees-item-price-currency">
                        {{ fee.price.currency }}
                    </span>

                    <h3 v-if="fee.price.old !== ''">{{ fee.price.old }}</h3>

                    <h1>{{ fee.price.new }}</h1>
                </div>

                <span class="course-fees-item-price-frequency">
                    {{ fee.price.frequency }}
                </span>
            </div>

            <div class="course-fees-item-points">
                <div
                    class="course-fees-item-point"
                    v-for="point in fee.points"
                    :key="point"
                >
                    {{ point }}
                </div>
            </div>

            <div class="course-fees-item-picked" v-if="fee.mostPicked">
                Most picked
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#course-fees {
    &-dropdown {
        $height: 55px;
        $imgSize: 25px;

        height: $height;
        border: 1px solid gainsboro;
        width: 270px;
        border-radius: 10px;
        position: relative;

        &-header {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 20px;
            font-size: 1rem;

            img {
                height: $imgSize;
                width: $imgSize;
                border-radius: 50%;
                margin-right: 15px;
            }

            svg {
                $size: 13px;
                height: $size;
                width: $size;
                transform: rotate(90deg);
            }

            span {
                flex: 1;
            }
        }

        &-options {
            background-color: white;
            max-height: 300px;
            overflow-y: scroll;
            z-index: 50;
            position: absolute;
            top: $height;
            left: 0;
            width: 100%;
            border-radius: 10px;
            border: 1px solid gainsboro;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);

            .course-fees-option {
                padding: 15px 20px;
                display: flex;
                align-items: center;
                font-size: 1rem;
                border-bottom: 1px solid gainsboro;

                img {
                    height: $imgSize;
                    width: $imgSize;
                    margin-right: 15px;
                }
            }
        }

        &-header:hover,
        .course-fees-option:hover {
            background-color: var(--lightPurple);
        }
    }

    &-list {
        display: flex;
        margin-top: 40px;
        gap: 15px;
    }
}

.course-fees {
    &-item {
        $padding: 25px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        border: 1px solid whitesmoke;
        padding: 35px $padding;
        border-radius: 15px;
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
            font-size: 1.3rem;
            height: 3.4rem;
            margin-bottom: 20px;
        }

        p {
            font-size: 0.9rem;
            color: var(--textMedium);
            line-height: 1.3rem;
            height: 5.2rem;
        }

        &-price {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            margin: 30px 0 20px;

            &-slash {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                text-align: right;
            }

            &-currency {
                flex: 1;
                font-size: 0.9rem;
                font-weight: 500;
            }

            h1 {
                flex: 1;
                padding-left: 15px;
                font-size: 3.5rem;
                line-height: 3.5rem;
                color: var(--purple);
                margin-top: -5px;
            }

            h3 {
                text-decoration: line-through;
                font-size: 1.5rem;
                color: var(--textMedium);
                padding-left: 10px;
            }

            &-frequency {
                width: 100%;
                font-weight: 500;
                font-size: 0.85rem;
                line-height: 1.3rem;
                text-align: right;
                height: 1.3rem;
            }
        }

        &-points {
            $margin: 30px;
            margin-top: $margin;
            padding-top: $margin;
            border-top: 1px solid gainsboro;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        &-point {
            font-size: 1rem;
            line-height: 1.5rem;
            padding-left: 25px;
            position: relative;
        }

        &-point::before {
            $size: 7px;
            background-color: var(--black);
            content: "";
            position: absolute;
            top: 8px;
            left: 0;
            height: $size;
            width: $size;
            border-radius: 50%;
        }

        &-picked {
            position: absolute;
            background-color: var(--purple);
            padding: 3px 15px;
            color: white;
            font-weight: 500;
            border-radius: 10px;
            font-size: 0.9rem;
            top: -15px;
            right: $padding;
        }
    }

    &-picked {
        border: 1px solid var(--purple);
    }
}

@media (max-width: 600px) {
    #course-fees-list {
        flex-direction: column-reverse;
    }

    .course-fees {
        &-item {
            h2 {
                height: auto;
                font-size: 6vw;
                line-height: 8vw;
            }

            p {
                height: auto;
            }

            &-price {
                margin: 40px 0 20px;
            }

            &-points {
                margin-top: 10px;
            }
        }
    }
}
</style>
