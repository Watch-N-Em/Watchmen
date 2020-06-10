// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dyjugfrby',
    api_key: '889553419496734',
    api_secret: 'PzFatjyS79RYGTiPiDkdriHNkUY'
});

// express instance
const app = express()

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/watchmen")

// serve static if in prod
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
};

// app.use(routes);
app.post("/save/image", function (req, res) {
    // image
    console.log(req.body);

    cloudinary.uploader.upload(req.body.fileName,
        function (error, result) { console.log(result, error) });
})

// video
// cloudinary.uploader.upload("earth.mp4",
//     {
//         resource_type: "video",
//         public_id: "my_folder/my_sub_folder/dog_closeup",
//         chunk_size: 6000000,
//         eager: [
//             { width: 300, height: 300, crop: "pad", audio_codec: "none" },
//             { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" }],
//         eager_async: true,
//         eager_notification_url: "https://mysite.example.com/notify_endpoint"
//     },
//     function (error, result) { console.log(result, error) });

app.listen(PORT, () => {
    if (process.env.NODE_ENV === "production") {

    } else {
        console.log(`server started at http://localhost:${PORT}/`)
    }
})