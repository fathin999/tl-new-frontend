<script setup>
import AuthLayout from "./AuthLayout.vue";
import {ref} from "vue";
import {resetPassword} from "@/composable/backend/auth";
import Button from "../button/Button.vue";

// V-MODEL
const email = ref("");

// RESET PASSWORD
const handleClick = () => {
    resetPassword(email.value);
};
</script>

<template>
    <AuthLayout
        title="Reset password"
        subtext="Confirm your email and we will send the instructions"
    >
        <div class="input">
            <label>Email address</label>
            <input type="text" v-model="email" placeholder="your@email.com" />
        </div>

        <Button :large="true" @click="handleClick"> Reset password </Button>

        <div class="auth-link">
            <span>Changed your mind?</span>
            <a href="/login"> Back to login </a>
        </div>
    </AuthLayout>
</template>
