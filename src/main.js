import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from './store/index.js';
import firebase from 'firebase/app';
import 'firebase/auth'

firebase.auth().onAuthStateChanged(()=>{
    createApp(App).use(router).use(store).mount("#app");
});


