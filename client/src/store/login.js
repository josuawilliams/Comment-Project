import { defineStore } from 'pinia'
import { BASE_URL } from './url'
import axios from 'axios'
import Swal from 'sweetalert'

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
                localStorage.setItem('access_token', data.data.access_token)
                this.router.push('/')
                Swal(
                    'Welcome',
                    ``,
                    'success'
                )
            } catch (error) {
                Swal(
                    'Error',
                    `${error.response.data.message}`,
                    'error'
                )
            }
        },
    }
})