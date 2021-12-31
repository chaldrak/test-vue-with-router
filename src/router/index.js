
import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ForgotPassword from "../components/ForgotPassword.vue";

const routes = [
    {
        name: "Login",
        path: "/",
        component: Login
    },
    {
        name: "Register",
        path: "/signup",
        component: Register
    },
    {
        name: "Forgot Password",
        path: "/forgot-password",
        component: ForgotPassword
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;