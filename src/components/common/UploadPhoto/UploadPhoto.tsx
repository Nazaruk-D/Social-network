import React, {FC, useState} from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";
import s from './UploadPhoto.module.scss'

type UploadPhotoPropsType = {
    setUploadPhoto: (uploadPhoto: boolean) => void
    savePhoto: (file: any) => void
}

const UploadPhoto: FC<UploadPhotoPropsType> = ({savePhoto, setUploadPhoto}) => {
    const [image, setImage] = useState("");
    const [currentPage, setCurrentPage] = useState("choose-img");
    const [imgAfterCrop, setImgAfterCrop] = useState("");

    // Invoked when new image file is selected
    const onImageSelected = (selectedImg: string) => {
        setImage(selectedImg);
        setCurrentPage("crop-img");
    };

    // Generating Cropped Image When Done Button Clicked
    const onCropDone = (imgCroppedArea: any) => {

        const canvasEle = document.createElement("canvas");
        canvasEle.width = imgCroppedArea.width;
        canvasEle.height = imgCroppedArea.height;

        const context = canvasEle.getContext("2d");

        let imageObj1 = new Image();
        imageObj1.src = image;
        imageObj1.onload = function () {
            context!.drawImage(
                imageObj1,
                imgCroppedArea.x,
                imgCroppedArea.y,
                imgCroppedArea.width,
                imgCroppedArea.height,
                0,
                0,
                imgCroppedArea.width,
                imgCroppedArea.height
            );

            const dataURL = canvasEle.toDataURL("image/jpeg");

            setImgAfterCrop(dataURL);
            setCurrentPage("img-cropped");
            savePhoto(dataURL)

            urlToObject(dataURL)

        };
    };

    const urlToObject = async (imageURL: string) => {
        debugger
        const response = await fetch(imageURL);
        // here image is url/location of image
        const blob = await response.blob();
        // const file = new File([blob], 'image.jpg', {type: blob.type});
        var image = new Image();
        image.src = imageURL
        console.log(image)
        const file = new File([blob], 'image.jpg', {type: blob.type});
        // {type: 'image/jpg'}
        console.log(file)
        savePhoto(file)
        setUploadPhoto(false)
    }

    // Handle Cancel Button Click
    const onCropCancel = () => {
        setCurrentPage("choose-img");
        setImage("");
    };

    return (
        <div className={s.uploadPhotoContainer}>
            <div className={s.closeTag} onClick={() => setUploadPhoto(false)}>X</div>
            {currentPage === "choose-img" ? (
                <FileInput onImageSelected={onImageSelected}/>
            ) : currentPage === "crop-img" ? (
                <ImageCropper
                    image={image}
                    onCropDone={onCropDone}
                    onCropCancel={onCropCancel}
                />
            ) : (
                <div className={s.bottomBlock}>
                    <div>
                        <img src={imgAfterCrop} className={s.croppedIMG}/>
                    </div>

                    <button
                        onClick={() => {
                            setCurrentPage("crop-img");
                        }}
                        className="btn"
                    >
                        Crop
                    </button>

                    <button
                        onClick={() => {
                            setCurrentPage("choose-img");
                            setImage("");
                        }}
                        className="btn"
                    >
                        New Image
                    </button>
                </div>
            )}
        </div>
    );
}

export default UploadPhoto;