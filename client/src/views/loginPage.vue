<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useDataLogin } from '@/store/login';
export default {
  data() {
    return {
      datausername: '',
      datapassword: '',
    }
  },
  computed: {
    ...mapWritableState(useDataLogin, ['username', 'password']),
    ...mapState(useDataLogin, ['dataerrorusername', 'dataerrorpassword']),
  },
  methods: {
    ...mapActions(useDataLogin, ['Login', 'LoginGoogle']),
    clickLogin() {
      this.username = this.datausername;
      this.password = this.datapassword;
      this.Login()
    },
  },
  created() {
   document.getElementsByTagName('body')[0].style.backgroundImage = "linear-gradient(126deg, rgba(34,193,195,1) 27%, rgba(255,96,219,1) 65%)";
    document.body.style.backgroundRepeat = "no-repeat";
  },
  
}
</script>

<template>
  <div class="container w-25">
    <form>
      <center>
        <h1>LOGIN PAGE</h1>
        <img class="w-75" src="" alt="" />
        <p>Don't Have Account?<router-link to="/register">Sign Up</router-link></p>
      </center>
      <div class="mb-3">
       <input v-model="datausername" type="text" class="form-control" aria-describedby="username"
          placeholder="Username" required/>
      <p style="color: red;" v-if="dataerrorusername==true">Username Is Required</p>
      </div>
      <div class="mb-3">
        <input v-model="datapassword" type="password" class="form-control" id="password" placeholder="password" required/>
      <p style="color: red;" v-if="dataerrorpassword==true">Password Is Required</p>
      </div>
      <button @click.prevent="clickLogin" class="btn btn-info w-100 text-white">Sign In</button>
    </form>
  </div>
</template>

<style>
.container {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 30px;
  margin-top: 30vh;
}
</style>
