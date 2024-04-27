<script setup>
import AuthLayout from "./AuthLayout.vue";
import {onMounted, ref} from "vue";
import {signup} from "@/composable/backend/auth";
import {useRoute, useRouter} from "vue-router";
import Button from "../button/Button.vue";

// ROUTE
const route = useRoute();
const router = useRouter();

// V-MODELS
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const inviteCode = ref("");
const purpose = ref("");

// SIGN UP
const handleClick = () => {
    signup({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        inviteCode: inviteCode.value,
        purpose: purpose.value,
    });
};

// MOUNT
onMounted(() => {
    // re-route to select role if no queries in URL
    if (Object.keys(route.query).length === 0)
        router.push("/signup/select-role");

    // if there is, then update purpose
    if (route.query.hasOwnProperty("purpose"))
        purpose.value = route.query.purpose;
});
</script>

<template>
    <AuthLayout
        title="Create account"
        subtext="Take the first step into your new future"
    >
        <div class="input">
            <label>First name</label>
            <input type="text" v-model="firstName" placeholder="First Name" />
        </div>

        <div class="input">
            <label>Last name</label>
            <input type="text" v-model="lastName" placeholder="Last Name" />
        </div>

        <div class="input">
            <label>Phone number</label>
            <input type="number" v-model="phone" placeholder="123456789" />
        </div>

        <div class="input">
            <label>Email address</label>
            <input type="text" v-model="email" placeholder="your@email.com" />
        </div>

        <div class="input">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="******" />
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
            <input type="text" v-model="inviteCode" placeholder="Invite code" />
        </div>

        <Button :large="true" @click="handleClick"> Sign Up </Button>

        <div class="auth-link">
            <span>Already have an account?</span>
            <a href="/login"> Login instead </a>
        </div>
    </AuthLayout>
</template>
