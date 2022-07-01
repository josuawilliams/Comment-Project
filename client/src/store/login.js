import { defineStore } from 'pinia'
import { BASE_URL } from './url'
import axios from 'axios'
import Swal from 'sweetalert'

export const useDataLogin = defineStore('Login', {
    state: () => ({
        username: '',
        password: '',
        dataerrorusername: "",
        dataerrorpassword: ""
    }),
    getters: {

    },
    actions: {
        async Login() {
            try {
                const data = await axios({
                    method: 'POST',
                    url: BASE_URL + 'login',
                    data: {
                        username: this.username,
                        password: this.password
                    }
                })
                localStorage.setItem('access_token', data.data.access_token)
                this.router.push('/')
                Swal(
                    'Welcome',
                    ``,
                    'success'
                )
            } catch (error) {
                let dataerror = error.response.data.message
                if(dataerror.split(', ').find(item =>item === "Username is required")){
                    this.dataerrorusername = true
                }
                if(dataerror.split(', ').find(item =>item === "Password is required")){
                    this.dataerrorpassword = true
                }
                setTimeout(() => {
                    this.dataerrorpassword = false
                    this.dataerrorusername = false
                }, 2500);
                if(dataerror==="Username Or Password Wrong"){
                    Swal(
                        'Error',
                        `${error.response.data.message}`,
                        'error'
                    )
                }
            }
        },
    }
})