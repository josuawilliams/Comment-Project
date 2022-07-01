import { defineStore } from 'pinia'
import { BASE_URL } from './url'
import axios from 'axios'
import Swal from 'sweetalert'

export const useDataRegister = defineStore('Register', {
    state: () => ({
        username: '',
        password: '',
        email: '',
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
                Swal(
                    'Welcome',
                    ``,
                    'success'
                )
            } catch (error) {
                
                // Swal(
                //     'Error',
                //     `${error.response.data.message}`,
                //     'error'
                // )
            }
        },
    }
})