<script setup>
import {reactive} from "vue";
import IconPlus from "../icons/IconPlus.vue";
import IconMinus from "../icons/IconMinus.vue";
import FaqItem from "./FaqItem.vue";

const props = defineProps({
    faqs: Array,
});

const createArr = () => {
    let arr = [];

    for (let i = 0; i < props.faqs.length; i++) {
        arr.push(false);
    }

    return arr;
};

let opened = reactive(createArr());

const toggleFaq = (i) => {
    opened[i] = !opened[i];
};
</script>

<template>
    <div id="faq-list">
        <FaqItem
            v-for="(faq, i) in faqs"
            :key="faq.question"
            :index="i"
            :question="faq.question"
            :answer="faq.answer"
            :open="opened[i]"
            @toggleFaq="toggleFaq"
        />
    </div>
</template>

<style scoped lang="scss">
#faq-list {
    width: 800px;
    margin: 0 auto;
}

@media (max-width: 900px) {
    #faq-list {
        width: auto;
        margin: 0 20px;
    }
}
</style>
