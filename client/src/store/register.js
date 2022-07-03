import { defineStore } from 'pinia'
import { BASE_URL } from './url'
import axios from 'axios'
import Swal from 'sweetalert'

export const useDataRegister = defineStore('Register', {
    state: () => ({
        username: '',
        password: '',
        email: '',
        dataerrorusername: "",
        dataerrorpassword: "",
        dataerroremail: ""
    }),
    getters: {

    },
    actions: {
        async Register() {
            try {
                const data = await axios({
                    method: 'POST',
                    url: BASE_URL + 'register',
                    data: {
                        username: this.username,
                        password: this.password,
                        email: this.email
                    }
                })
                this.router.push('/login')
            } catch (error) {
                let dataerror = error.response.data.message
                if(dataerror.split(', ').find(item =>item === "Username is required")){
                    this.dataerrorusername = true
                }
                if(dataerror.split(', ').find(item =>item === "Password is required")){
                    this.dataerrorpassword = true
                }
                if(dataerror.split(', ').find(item =>item === "Email is required")){
                    this.dataerroremail = true
                }
                setTimeout(() => {
                    this.dataerrorpassword = false
                    this.dataerrorusername = false
                    this.dataerroremail = false
                }, 2000);
                if(dataerror==="Email is already used"){
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