<script setup>
import AuthLayout from "./AuthLayout.vue";
import {login} from "@/composable/backend/auth";
import {ref} from "vue";
import Button from "../button/Button.vue";

// V-MODELS
const email = ref("");
const password = ref("");

// LOGIN
const handleClick = () => {
    login(email.value, password.value);
};
</script>

<template>
    <AuthLayout title="Login" subtext="Be part of the innovators of tomorrow">
        <div class="input">
            <label>Email address</label>
            <input type="text" v-model="email" placeholder="your@email.com" />
        </div>

        <div class="input">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="******" />
            <div id="login-forgot">
                <a href="/reset-password-request"> Forgot password? </a>
            </div>
        </div>

        <Button :large="true" @click="handleClick"> Login </Button>

        <div class="auth-link">
            <span>Not registered?</span>
            <a href="/signup/select-role"> Create an account </a>
        </div>
    </AuthLayout>
</template>

<style scoped lang="scss">
#login-forgot {
    text-align: right;
    padding-top: 10px;
}
</style>
