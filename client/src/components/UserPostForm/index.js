import React, { useState, useEffect } from "react";
import imgVideoUploadAPI from "../../utils/Img-video-upload-API";
import { Image } from 'cloudinary-react';

function UserPostForm() {

    const showWidget = (widget) => {
        window.cloudinary.openUploadWidget({ cloud_name: 'dyjugfrby', upload_preset: 'u8lavahq' },
            function (error, result) { console.log(error, result) });
    }
    return (
        <div>
            <button onClick={showWidget}>upload</button>
        </div>
    )
}

export default UserPostForm;