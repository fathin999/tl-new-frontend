import LandingPage from "./components/landing/landing-pages/home/LandingPage.vue";
import Login from "./components/landing/auth/Login.vue";
import Signup from "./components/landing/auth/Signup.vue";
import ResetPassword from "./components/landing/auth/ResetPassword.vue";
import ChooseRole from "./components/landing/auth/ChooseRole.vue";
import CoursesPage from "./components/landing/courses/CoursesPage.vue";
import CareerRolesPage from "./components/landing/roles/CareerRolesPage.vue";
import RoleItemPage from "./components/landing/roles/RoleItemPage.vue";
import CourseItemPage from "./components/landing/courses/CourseItemPage.vue";
import CourseFAQPage from "./components/landing/courses/CourseFAQPage.vue";
import JobsPage from "./components/landing/jobs/JobsPage.vue";
import AboutPage from "./components/landing/landing-pages/AboutPage.vue";
import ContactPage from "./components/landing/landing-pages/ContactPage.vue";
import ForEnterprisePage from "./components/landing/landing-pages/ForEnterprisePage.vue";
import ForGovernmentPage from "./components/landing/landing-pages/ForGovernmentPage.vue";
import SpecialProgrammesPage from "./components/landing/programmes/SpecialProgrammesPage.vue";
import IndividualProgrammePage from "./components/landing/programmes/IndividualProgrammePage.vue";
import BeAnInstructorPage from "./components/landing/landing-pages/BeAnInstructorPage.vue";
import ISAFinancingPage from "./components/landing/landing-pages/ISAFinancingPage.vue";
import PrivacyPolicyPage from "./components/landing/landing-pages/PrivacyPolicyPage.vue";
import TermsAndConditionsPage from "./components/landing/landing-pages/TermsAndConditionsPage.vue";
import TeamsPage from "./components/landing/landing-pages/teams/TeamsPage.vue";
import IndividualTeamPage from "./components/landing/landing-pages/teams/IndividualTeamPage.vue";
import EmployersPage from "./components/landing/jobs/EmployersPage.vue";
import JobsItemPage from "./components/landing/jobs/JobsItemPage.vue";

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
        name: "ResetPassword",
        component: ResetPassword,
        path: "/reset-password-request",
    },
    {
        name: "Choose Role",
        component: ChooseRole,
        path: "/signup/select-role",
    },
    {
        name: "Courses",
        component: CoursesPage,
        path: "/courses",
    },
    {
        name: "Course Item Page",
        component: CourseItemPage,
        path: "/courses/:id",
    },
    {
        name: "Course FAQ Page",
        component: CourseFAQPage,
        path: "/courses-faq",
    },
    {
        name: "Career Roles",
        component: CareerRolesPage,
        path: "/career-roles",
    },
    {
        name: "Role Item Page",
        component: RoleItemPage,
        path: "/career-roles/:slug",
    },
    {
        name: "Jobs",
        component: JobsPage,
        path: "/jobs",
    },
    {
        name: "Jobs Item Page",
        component: JobsItemPage,
        path: "/jobs/:id",
    },
    {
        name: "Employers",
        component: EmployersPage,
        path: "/employers/:slug",
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
        name: "Individual Programme",
        component: IndividualProgrammePage,
        path: "/special-programmes/:slug",
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
    {
        name: "Individual Team",
        component: IndividualTeamPage,
        path: "/teams/:slug",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
