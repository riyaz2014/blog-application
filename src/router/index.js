import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blog.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ForgetPassword from "../views/ForgetPassword.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta:{
      title: "home",
    }
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
    meta:{
      title: "blogs",
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{
      title: "login",
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta:{
      title: "register",
    }
  },
  {
    path: "/forgetpassword",
    name: "forgetpassword",
    component: ForgetPassword,
    meta:{
      title: "ForgetPassword",
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to , from , next) =>{
  document.title = `${to.meta.title} | FireBlog`;
  next();
})
export default router;

