<script setup>
import Navbar from "../layout/Navbar.vue";
import AuthBackground from "./AuthBackground.vue";
</script>

<template>
    <Navbar />

    <main>
        <div class="auth-page">
            <div class="container">
                <div class="auth-page-content">
                    <h1>Login</h1>

                    <p>Be part of the innovators of tomorrow</p>

                    <form>
                        <div class="input">
                            <label>Email address</label>
                            <input
                                type="text"
                                v-model="email"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div class="input">
                            <label>Password</label>
                            <input
                                type="password"
                                v-model="password"
                                placeholder="******"
                            />
                            <div id="login-forgot">
                                <a> Forgot password? </a>
                            </div>
                        </div>

                        <div class="btn-primary btn-l" @click="login">
                            Login
                        </div>

                        <div class="auth-link">
                            <span>Not registered?</span>
                            <a href="/signup/choose-role">
                                Create an account
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <AuthBackground />
        </div>
    </main>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            console.log("Login", this.email, this.password);
        },
    },
};
</script>

<style scoped lang="scss">
#login-forgot {
    text-align: right;
    padding-top: 10px;
}
</style>
