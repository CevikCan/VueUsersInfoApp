import Vue from "vue";
import VueRouter from "vue-router";
import usersList from "./components/usersList";
import userDelete from "./components/userDelete";
import userAdd from "./components/userAdd";
Vue.use(VueRouter);

const routes = [
    { path:"/",component:usersList },
    { path:"/user-delete",component:userDelete },
    { path:"/user-add",component:userAdd }    
]

export const router = new VueRouter({
    mode:"history",
    routes
})