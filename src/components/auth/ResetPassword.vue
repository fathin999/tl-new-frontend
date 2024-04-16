<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
</script>

<template>
    <Navbar />

    <main id="reset">
        <div class="auth-page">
            <div class="container">
                <div class="auth-page-content">
                    <h1>Reset password</h1>

                    <p>Confirm yoru email and we will send the instructions</p>

                    <form>
                        <div class="input">
                            <label>Email address</label>
                            <input
                                type="text"
                                v-model="email"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div class="btn-primary btn-l" @click="login">
                            Reset password
                        </div>

                        <div class="auth-link">
                            <span>Changed your mind?</span>
                            <a href="/login"> Back to login </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<script>
export default {
    name: "Reset password",
    data() {
        return {
            email: "",
        };
    },
    methods: {
        reset() {
            console.log("Reset password", this.email);
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
