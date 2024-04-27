<script setup>
import IconPlus from "../icons/IconPlus.vue";
import IconMinus from "../icons/IconMinus.vue";
import FaqItem from "./FaqItem.vue";
import {ref} from "vue";

const props = defineProps({
    faqs: Array,
});

let open = ref(-1);

const toggleFaq = (i) => {
    if (open.value === i) open.value = -1;
    else open.value = i;
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
            :open="open === i"
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
    }
}

@media (max-width: 600px) {
    #faq-list {
        border-bottom: 1px solid gainsboro;
    }
}
</style>
