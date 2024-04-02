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
                    <h1>Create account</h1>

                    <p>Take the first step into your new future</p>

                    <form>
                        <div class="input">
                            <label>First name</label>
                            <input
                                type="text"
                                v-model="firstName"
                                placeholder="First Name"
                            />
                        </div>

                        <div class="input">
                            <label>Last name</label>
                            <input
                                type="text"
                                v-model="lastName"
                                placeholder="Last Name"
                            />
                        </div>

                        <div class="input">
                            <label>Phone number</label>
                            <input
                                type="number"
                                v-model="phoneNumber"
                                placeholder="123456789"
                            />
                        </div>

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
                        </div>

                        <div class="input">
                            <label>Confirm password</label>
                            <input
                                type="password"
                                v-model="confirmPassword"
                                placeholder="******"
                            />
                        </div>

                        <div class="input">
                            <label>Invite code</label>
                            <input
                                type="text"
                                v-model="inviteCode"
                                placeholder="Invite code"
                            />
                        </div>

                        <div class="btn-primary btn-l" @click="signup">
                            Sign Up
                        </div>

                        <div class="auth-link">
                            <span>Already have an account?</span>
                            <a href="/login"> Login instead </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            inviteCode: "",
        };
    },
    methods: {
        signup() {
            console.log("Sign up", this.email, this.password);
        },
    },
};
</script>

<style scoped lang="scss">
.auth-page {
    height: auto;

    .container {
        height: auto;
    }

    &-content {
        width: 400px;
        margin: auto;
        padding: 50px 0 80px;
    }
}
</style>
