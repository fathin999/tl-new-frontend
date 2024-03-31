import LandingPage from "./components/landing-pages/home/LandingPage.vue";
import Login from "./components/auth/Login.vue";
import Signup from "./components/auth/Signup.vue";
import CoursesPage from "./components/courses/CoursesPage.vue";
import JobsPage from "./components/jobs/JobsPage.vue";
import AboutPage from "./components/landing-pages/AboutPage.vue";
import ContactPage from "./components/landing-pages/ContactPage.vue";
import ForEnterprisePage from "./components/landing-pages/ForEnterprisePage.vue";
import ForGovernmentPage from "./components/landing-pages/ForGovernmentPage.vue";
import SpecialProgrammesPage from "./components/landing-pages/SpecialProgrammesPage.vue";
import BeAnInstructorPage from "./components/landing-pages/BeAnInstructorPage.vue";
import ISAFinancingPage from "./components/landing-pages/ISAFinancingPage.vue";
import PrivacyPolicyPage from "./components/landing-pages/PrivacyPolicyPage.vue";
import TermsAndConditionsPage from "./components/landing-pages/TermsAndConditionsPage.vue";
import TeamsPage from "./components/landing-pages/teams/TeamsPage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: "Home",
        component: LandingPage,
        path: "/",
    },
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    {
        name: "Signup",
        component: Signup,
        path: "/signup",
    },
    {
        name: "Courses",
        component: CoursesPage,
        path: "/courses",
    },
    {
        name: "Jobs",
        component: JobsPage,
        path: "/jobs",
    },
    {
        name: "About",
        component: AboutPage,
        path: "/about",
    },
    {
        name: "Contact",
        component: ContactPage,
        path: "/contact",
    },
    {
        name: "For Enterprise",
        component: ForEnterprisePage,
        path: "/for-enterprise",
    },
    {
        name: "For Government",
        component: ForGovernmentPage,
        path: "/for-government",
    },
    {
        name: "Special Programmes",
        component: SpecialProgrammesPage,
        path: "/special-programmes",
    },
    {
        name: "Be an Instructor",
        component: BeAnInstructorPage,
        path: "/be-an-instructor",
    },
    {
        name: "ISA Financing",
        component: ISAFinancingPage,
        path: "/isa-financing",
    },
    {
        name: "Terms & Conditions",
        component: TermsAndConditionsPage,
        path: "/terms-and-conditions",
    },
    {
        name: "Privacy Policy",
        component: PrivacyPolicyPage,
        path: "/privacy-policy",
    },
    {
        name: "Teams",
        component: TeamsPage,
        path: "/teams",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;