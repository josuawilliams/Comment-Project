import { defineStore } from 'pinia'
import { BASE_URL } from './url'
import axios from 'axios'

export const useDataLogin = defineStore('Login', {
    state: () => ({
        username: '',
        password: '',
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
                console.log(data);
                // localStorage.setItem('access_token', data.data.access_token)
                // this.router.push('/')
                // Swal.fire(
                //     'Selamat Datang',
                //     `Silakan Membaca`,
                //     'success'
                // )
            } catch (error) {
                console.log(error.response.data.message);
                // Swal.fire(
                //     'Ohh Noo',
                //     `${error.response.data.message}`,
                //     'error'
                // )
            }
        },

        //         async LoginGoogle() {
        //             try {
        //                 const data = await axios({
        //                     method: 'POST',
        //                     url: base_URL + 'login-google',
        //                     data: {
        //                         token: this.TokenGoogle
        //                     }
        //                 })
        //                 localStorage.setItem('access_token', data.data.access_token)
        //                 Swal.fire('Thank You For Joining', `Welcome to This Universe`, 'success')
        //                 this.router.push("/")
        //             } catch (error) {
        //                 Swal.fire(
        //                     'Something went wrong',
        //                     'error'
        //                 )
        //             }
        //         }
    }
})