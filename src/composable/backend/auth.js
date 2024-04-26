// -----------------------
// LOGIN
// -----------------------
// used in: Login.vue

export const login = (email, password) => {
    console.log(email);
    console.log(password);
};

// -----------------------
// SIGN UP
// -----------------------
// used in: Signup.vue

export const signup = (signupDetails) => {
    // signupDetails is an object with the items below:
    console.log(signupDetails.firstName);
    console.log(signupDetails.lastName);
    console.log(signupDetails.email);
    console.log(signupDetails.phone);
    console.log(signupDetails.password);
    console.log(signupDetails.confirmPassword);
    console.log(signupDetails.inviteCode);
    console.log(signupDetails.purpose);
};

// -----------------------
// FORGOT PASSWORD
// -----------------------
// used in: ResetPassword.vue

export const resetPassword = (email) => {
    console.log(email);
};
