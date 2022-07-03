<script>
import { mapActions, mapWritableState, mapState } from 'pinia'
import { useDataRegister } from '@/store/register';
export default {
  data() {
    return {
      dataUsername: "",
      dataPassword: "",
      dataEmail: "",
    }
  },
  computed: {
    ...mapWritableState(useDataRegister, ['username', 'password', 'email']),
    ...mapState(useDataRegister, ['dataerrorusername', 'dataerrorpassword', 'dataerroremail']),
  },
  methods: {
    ...mapActions(useDataRegister, ['Register']),
    submitButton() {
      this.username = this.dataUsername
      this.password = this.dataPassword
      this.email = this.dataEmail
      this.Register()
    }
  },
  created() {
    document.body.style.backgroundImage = "linear-gradient(126deg, rgba(34,193,195,1) 27%, rgba(255,96,219,1) 65%)";
    document.body.style.backgroundRepeat = "no-repeat";
  },
}
</script>

<template>
  <div class="container w-25">
    <form>
      <center>
        <h1>REGISTER PAGE</h1>
        <img class="w-75" src="" alt="" />
        <p> Have Account?<router-link to="/login">Sign In</router-link>
        </p>
      </center>
      <div class="mb-3">
        <input v-model="dataUsername" type="text" class="form-control" aria-describedby="usernameHelp" placeholder="Username" />
      <p style="color: red;" v-if="dataerrorusername==true">Password Is Required</p>
      </div>
      <div class="mb-3">
        <input v-model="dataEmail" type="email" class="form-control" id="email" placeholder="Email" required />
      <p style="color: red;" v-if="dataerroremail==true">Email Is Required</p>
      </div>
      <div class="mb-3">
        <input v-model="dataPassword" type="password" class="form-control" id="password" placeholder="password" required />
      <p style="color: red;" v-if="dataerrorpassword==true">Password Is Required</p>
      </div>
      <button @click.prevent="submitButton" class="btn btn-info w-100 text-white">Sign Up</button>
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
