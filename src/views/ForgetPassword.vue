<template>
  <div class="reset-password">
    <Model :modalMessage="modelMessage" v-if="modelActive" v-on:close-modal="closeModel"/>
    <Loading v-if="loading"/>
    <div class="form-wrap">
        <form class="reset">
          <p class="login-register">
            Back to
            <router-link class="router-link" :to="{ name: 'login' }">Login</router-link>
          </p>
          <h2>Reset Password</h2>
          <p>Forgot your password Enter your email to reset it</p>
          <div class="inputs">
            <div class="input">
              <input type="text" placeholder="Email" v-model="email">
              <img src="../assets/Icons/envelope-regular.svg" class="icon" alt=""/>
            </div>
          </div>
          <button @click.prevent="resetPassword">Reset</button>
          <div class="angle"></div>
        </form>
        <div class="background"></div>
      </div>
  </div>
</template>

<script>
import Model from '../components/Model.vue'
import Loading from '../components/Loading.vue'
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
    name:"ForgetPasswordView",
    data(){
      return {
        email: "",
        modelActive:false,
        modelMessage: "this number is not registered",
        loading:null,
      }
    },
    components: {
      Model,
      Loading,
    },
    methods: {
      resetPassword(){
        this.loading = true;
        firebase.auth().sendPasswordResetEmail(this.email)
        .then(()=>{
          this.modelMessage = "if your account exists you will get recieve an email(spam folder)";
          this.loading = false;
          this.modelActive = true;
        })
        .catch((err)=>{
          this.modelMessage = err.message;
          this.loading = false;
          this.modelActive = true;
        })

      },
      closeModel(){
        this.modelActive=(!this.modelActive);
        this.email = "";
      }
    }
}
</script>

<style lang="scss">
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>