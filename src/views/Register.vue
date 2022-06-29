<template>
  <div>
    <div class="form-wrap">
        <form class="register">
          <p class="login-register">
            Already registered?
            <router-link class="router-link" :to="{name:'login'}">Login</router-link>
          </p>
          <h2>Register to FireBlogs</h2>
          <div class="inputs">
            <div class="input">
              <input type="text" placeholder="First Name" v-model="firstName">
              <img src="../assets/Icons/user-alt-light.svg" class="icon" alt=""/>
            </div>
            <div class="input">
              <input type="text" placeholder="Last Name" v-model="lastName">
              <img src="../assets/Icons/user-alt-light.svg" class="icon" alt=""/>
            </div>
            <div class="input">
              <input type="text" placeholder="username" v-model="username">
              <img src="../assets/Icons/user-alt-light.svg" class="icon" alt=""/>
            </div>
            <div class="input">
              <input type="text" placeholder="Email" v-model="email">
              <img src="../assets/Icons/envelope-regular.svg" class="icon" alt=""/>
            </div>
            <div class="input">
              <input type="text" placeholder="Password" v-model="password">
              <img src="../assets/Icons/lock-alt-solid.svg" class="icon" alt=""/>
            </div>
            <div class="error" v-show="error">{{this.errorMsg}}</div>
          </div>
          <button @click.prevent="register">Sign Up</button>
          <div class="angle"></div>
        </form>
        <div class="background"></div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'
import db from '../firebase/firebaseInit.js'
export default {
    name:"RegisterView",
    data(){
      return {
        firstName:"", 
        lastName: "", 
        username:"",
        email:"",
        password:"",
        error: false,
      }
    },
    methods:{
      async register(){
        if(this.firstName != "" && this.lastName != "" && this.username != "" && this.email != "" && this.password != ""){
          this.error = false;
          this.errorMsg = "";
          const firebaseAuth = firebase.auth();
          const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email , this.password);
          const result = createUser;
          const database = db.collection("user").doc(result.user.uid);
          await database.set({
            firstName : this.firstName,
            lastName : this.lastName,
            username : this.username,
            email : this.email, 
          })
          this.$router.push({name:"home"})
          return ;
        }

        this.error = true;
        this.errorMsg = "Please fill out all the fields"
        return ;
      }
    }

}
</script>

<style lang="scss">
.register{
  h2 {
    max-width: 350px;
  }
}
</style>