<script>
import { mapActions, mapWritableState } from 'pinia'
import { useDataLogin } from '@/store/login';
export default {
  data() {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    
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
        <p> Have Account?<router-link to="/login">Sign In</router-link></p>
      </center>
      <div class="mb-3">
        <input type="text" class="form-control" aria-describedby="usernameHelp"
          placeholder="Username" />
      </div>
      <div class="mb-3">
        <input type="email" class="form-control" id="email" placeholder="Email" required/>
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" id="password" placeholder="password" required/>
      </div>
      <button class="btn btn-info w-100 text-white">Sign Up</button>
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
