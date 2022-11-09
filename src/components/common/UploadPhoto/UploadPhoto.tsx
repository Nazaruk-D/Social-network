import React from 'react';
import 'antd/dist/antd.css';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import {useAppDispatch} from "../../../redux/redux-store";
import {savePhoto} from "../../../redux/profile-reducer";

export const UploadPhoto = () => {
    const dispatch = useAppDispatch()
    const uploader = Uploader({
        // Get production API keys from Upload.io
        apiKey: "free"
    });

    const handler = (files: any) => {
        urlToObject(files[0].fileUrl)
    }

    const urlToObject= async(imageURL: string)=> {
        debugger
        const response = await fetch(imageURL);
        // here image is url/location of image
        const blob = await response.blob();
        const file = new File([blob], 'image.jpg', {type: blob.type});
        dispatch(savePhoto(file))
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