import React from 'react';
import 'antd/dist/antd.css';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import {useAppDispatch} from "../../../redux/redux-store";
import {savePhoto} from "../../../redux/profile-reducer";

export const Arch = () => {
    const dispatch = useAppDispatch()
    const uploader = Uploader({
        // Get production API keys from Upload.io
        apiKey: "free"
    });


    const handler = (files: any) => {
        debugger
        // urlToObject(files[0].fileUrl)
        toDataURL(files[0].fileUrl, function(dataUrl:string) {
            debugger
            console.log('RESULT:', dataUrl)
            urlToObject(dataUrl)
        })
    }

    const urlToObject= async(imageURL: string)=> {
        debugger
        const response = await fetch(imageURL);
        // here image is url/location of image
        const blob = await response.blob();
        // const file = new File([blob], 'image.jpg', {type: blob.type});
        var image = new Image();
        image.src = imageURL
        console.log(image)
        const file = new File([blob], 'image.jpg',{type: blob.type});
        // {type: 'image/jpg'}
        console.log(file)
        // dispatch(savePhoto(file))
    }


    function toDataURL(url:string, callback: any) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }


    return (
        <div>
            <UploadButton uploader={uploader}
                          options={{multi: false, editor: { images: { crop: true}}}}
                          onComplete={files => handler(files)}>
                {({onClick}) =>
                    <button onClick={onClick} style={{marginTop: "75px"}}>
                        Upload a file...
                    </button>
                }
            </UploadButton>
        </div>
    );
};




