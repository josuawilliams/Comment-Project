<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useDataComment } from "../store/comment";
export default {
    data() {
        return {
            comment: "",
            dataTags: "",
        }
    },
    methods: {
        ...mapActions(useDataComment, ['getAllComment', 'postComment', 'deleteCommentById']),
        submit() {
            this.comments = this.comment
            this.tags = this.dataTags
            this.postComment()
        },
        deleteComment(id) {
            this.deleteCommentById(id)
        }
    },
    computed: {
        ...mapState(useDataComment, ['dataComment']),
        ...mapWritableState(useDataComment, ['comments', 'tags']),
    },
    created() {
        document.body.style.backgroundImage = "linear-gradient(180deg, rgba(223,222,222,1) 60%"
        setInterval(() => {
            this.getAllComment()
        }, 1500)
    }
}
</script>

<template>
    <div class="containerdiv">
        <div class="containerdashboard">
            <div>
                <div class="row justify-content-md-center">
                    <div v-for="data in dataComment" class="col-md-8 ">
                        <div v-for="comment in data.comment" class="media g-mb-1 media-comment">
                            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                                src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description">
                            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30 mb-3">
                                <div class="g-mb-0">
                                    <a @click.prevent="deleteComment(comment._id)" class="delete" href>
                                        <font-awesome-icon icon="fa-solid fa-x fa-xl" />
                                    </a>
                                    <h5 class="h5 g-color-gray-dark-v1 mb-0">{{ data.username }}</h5>
                                </div><br>
                                <p>{{ comment.comment }}</p>
                                <hr>
                                <span>
                                    <h6>Tags : {{ comment.tags }}</h6>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="panel">
                <div class="panel-body">
                    <input v-model="comment" class="form-control" rows="2" placeholder="Comment">
                    <input v-model="dataTags" class="form-control ms-1" rows="2" placeholder="Tags : Food, Drink">

                    <div class="mar-top clearfix">
                        <button @click="submit" class="btn btn-sm btn-primary pull-right ms-2" type="submit">
                            Post Comment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.delete {
    float: right;
    margin-top: -5px;
    margin-right: -5px;
    color: black;
}

.panel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.panel-body {
    display: flex;
    flex-direction: center;
    width: 105vh;
}

.containerdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.containerdashboard {
    background-color: rgb(199, 199, 199);
    border-radius: 30px;
    padding: 20px;
    box-shadow: 10px 5px 5px;
    width: 80%;
    margin-bottom: 30px;
    position: relative;
}

.media-body {
    border-radius: 10px;
}

.panel {
    border-radius: 0;
    border: 0;
    margin-bottom: 15px;
}

.panel-body {
    padding: 25px 20px;
}

.containerdashboard {
    margin-top: 30px;
}

.g-height-50 {
    height: 50px;
}

.g-width-50 {
    width: 50px !important;
}

.g-pa-30 {
    padding: 2rem !important;
}


.g-bg-secondary {
    background-color: #fafafa !important;
}

.u-shadow-v18 {
    box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.15);
}

.g-font-size-12 {
    font-size: 1rem !important;
}
</style>