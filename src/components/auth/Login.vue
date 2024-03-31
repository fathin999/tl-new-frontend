<script setup>
import Navbar from "../layout/Navbar.vue";
import Footer from "../layout/Footer.vue";
</script>

<template>
    <Navbar />

    <main>
        <div id="login" class="auth-page">
            <div id="login-content">
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
                            <a class="auth-link">Forgot password?</a>
                        </div>
                    </div>

                    <div class="btn-primary btn-l" @click="login">Login</div>

                    <div id="login-create">
                        <span>Not registered?</span>
                        <a class="auth-link" href="/signup"
                            >Create an account</a
                        >
                    </div>
                </form>
            </div>

            <div class="auth-page-bg" />
        </div>
    </main>

    <Footer />
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
#login {
    &-content {
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        margin: auto;
        padding: 50px 55px;
        border-radius: 20px;
        background-color: white;
        box-shadow: 0 30px 60px rgba(201, 206, 210, 0.5);
        width: 480px;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        h1 {
            display: block;
            width: 100%;
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 45px;
            font-size: 1.05rem;
        }
    }

    &-forgot {
        text-align: right;
        padding-top: 10px;
    }

    .btn-primary {
        margin-top: 5px;
    }

    &-create {
        margin-top: 20px;
        text-align-last: center;

        a {
            margin-top: 5px;
            margin-left: 10px;
        }
    }
}

.auth-link {
    color: var(--purple);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.4s ease-out;
}

.auth-link:hover {
    color: var(--black);
}
</style>
