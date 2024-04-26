<script setup>
import IconStudent from "../icons/auth/IconStudent.vue";
import IconEmployer from "../icons/auth/IconEmployer.vue";
import AuthLayout from "./AuthLayout.vue";
</script>

<template>
    <AuthLayout
        title="Create account"
        subtext="How will you use our platform? Choose your role:"
    >
        <div id="choose-list">
            <a class="role-item" href="/signup?purpose=learn">
                <IconStudent />
                <h4>Student / Job seeker</h4>
                <p>Learning courses and applying jobs on TalentLabs</p>
            </a>

            <a class="role-item" href="/signup?purpose=recruit">
                <IconEmployer />
                <h4>Employer</h4>
                <p>Posting jobs and managing applicants on TalentLabs</p>
            </a>
        </div>
    </AuthLayout>
</template>

<style scoped lang="scss">
#choose-list {
    a {
        margin-left: 0;
    }
}

.role-item {
    display: block;
    padding: 40px;
    border: 1px solid var(--borderMedium);
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
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

@media (max-width: 600px) {
    .role-item {
        border-radius: 15px;
        margin-bottom: 17px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);
        padding: 30px;

        h4 {
            margin-bottom: 5px;
        }

        svg {
            $size: 30px;
            height: $size;
            width: $size;
            margin-bottom: 15px;
        }
    }
}

@media (hover: hover) {
    .role-item:hover {
        border-color: var(--purple);

        svg {
            transform: scale(1.1);
        }
    }
}
</style>
