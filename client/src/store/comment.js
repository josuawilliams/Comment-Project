import { defineStore } from 'pinia'
import { BASE_URL } from './url'
import axios from 'axios'
import Swal from 'sweetalert'

export const useDataComment = defineStore('Comment', {
    state: () => ({
        dataComment : "",
        comments : "",
        tags:"",
    }),
    getters: {

    },
    actions: {
        async getAllComment() {
            try {
                const data = await axios({
                    method: 'GET',
                    url: BASE_URL ,
                    headers: {
                        access_token : localStorage.getItem("access_token")
                    }
                })
                this.dataComment = data.data
            } catch (error) {
                console.log(error);
            }
        },

        async postComment(){
            try {
                const data = await axios({
                    method: 'POST',
                    url: BASE_URL + "post-comment",
                    headers: {
                        access_token : localStorage.getItem("access_token")
                    },
                    data: {
                        comment: this.comments,
                        tags: this.tags
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },

        async deleteCommentById(id){
            try {
                const data = await axios({
                    method: 'DELETE',
                    url: BASE_URL + "delete-comment/" + id,
                    headers: {
                        access_token : localStorage.getItem("access_token")
                    }
                })
                console.log(data);
            } catch (error) {
                Swal(
                    'You Cant Delete this',
                    `${error.response.data.message}`,
                    'error'
                )
            }
        }
    }
})