import axios from "axios";

export default {

    postImage: function (imageToUpload) {
        // console.log(imageToUpload);

        return axios.post("/save/image", imageToUpload);
    }
}