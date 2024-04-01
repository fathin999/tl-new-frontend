<script setup>
import IconStudent from "../icons/auth/IconStudent.vue";
import IconEmployer from "../icons/auth/IconEmployer.vue";
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

                    <p>
                        How will you use our platform?
                        <br />
                        Choose your role:
                    </p>

                    <div id="choose-list">
                        <a class="role-item" href="/signup?role=student">
                            <IconStudent />
                            <h4>Student / Job seeker</h4>
                            <p>
                                Learning courses and applying jobs on TalentLabs
                            </p>
                        </a>

                        <a class="role-item" href="/signup?role=employer">
                            <IconEmployer />
                            <h4>Employer</h4>
                            <p>
                                Posting jobs and managing applicants on
                                TalentLabs
                            </p>
                        </a>
                    </div>
                </div>
            </div>

            <AuthBackground />
        </div>
    </main>
</template>

<style scoped lang="scss">
.auth-page {
    h1 {
        margin-bottom: 30px;
    }

    .role-item {
        display: block;
        padding: 30px;
        border: 1px solid var(--borderMedium);
        width: 100%;
        margin: 0;
        margin-bottom: 10px;
        font-size: 1rem;
        border-radius: 15px;
        text-align: center;
        transition: border 0.3s ease-out;

        h4 {
            font-size: 1.1rem;
            color: var(--black);
            margin-bottom: 10px;
        }

        p {
            font-size: 0.9rem;
            line-height: 1.3rem;
            color: var(--textMedium);
            font-weight: 400;
            margin: 0;
        }

        svg {
            $size: 35px;
            height: $size;
            width: $size;
            margin-bottom: 20px;
            transition: transform 0.3s ease-out;
        }
    }

    .role-item:hover {
        border-color: var(--purple);

        svg {
            transform: scale(1.1);
        }
    }
}
</style>
