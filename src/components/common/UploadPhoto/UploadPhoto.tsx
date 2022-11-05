import React, {useEffect, useState} from 'react';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import 'antd/dist/antd.css';
import s from "../../Profile/ProfileInfo/ProfileInfo.module.scss";
import uploadPhotoPNG from "../../../assets/png/uploadPhoto.png";
import {savePhoto} from "../../../redux/profile-reducer";
import {useDispatch} from "react-redux";


// const getSrcFromFile = (file) => {
//     return new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//     });
// };


export const UploadPhoto = () => {
    // const dispatch = useDispatch()
    // const [fileList, setFileList] = useState([
    //     {
    //         uid: '-1',
    //         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //     },
    // ]);
    //
    // const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList);
    //     console.log(fileList)
    // };
    //
    // const onPreview = async (file) => {
    //     const src = file.url || (await getSrcFromFile(file));
    //     const imgWindow = window.open(src);
    //
    //     if (imgWindow) {
    //         const image = new Image();
    //         image.src = src;
    //         imgWindow.document.write(image.outerHTML);
    //         if (image) {
    //         }
    //     } else {
    //         window.location.href = src;
    //     }
    // };

    // useEffect(()=>{
    //     dispatch(savePhoto(fileList.url))
    // }, [fileList, setFileList])


    // const dispatch = useDispatch()
    // useEffect(()=>{
    //
    // }, [])

    const mainPhotoSelectedHandler = (e: any) => {
        if (e.target.files![0]) {
            savePhoto(e.target.files![0])
        }
    }
    return (
        <ImgCrop>
            <Upload onChange={mainPhotoSelectedHandler}>+ Add image</Upload>
        </ImgCrop>
        // <ImgCrop grid rotate>
        //     <Upload
        //         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        //         listType="picture-card"
        //         fileList={fileList}
        //         onChange={onChange}
        //         onPreview={onPreview}
        //     >
        //         <div className={s.uploadPhotoBlock}>
        //             <div className={s.supportText}>Click to upload photo</div>
        //             <img src={uploadPhotoPNG} alt="uploadPhoto" className={s.uploadPhoto}/>
        //         </div>
        //     </Upload>
        // </ImgCrop>
    );
};
