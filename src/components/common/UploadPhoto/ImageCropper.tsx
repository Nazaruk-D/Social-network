import React, {FC, useState} from "react";
import Cropper, {Area} from "react-easy-crop";
import s from './UploadPhoto.module.scss'


type ImageCropperPropsType = {
    image: string
    onCropDone: (imgCroppedArea: any) => void
    onCropCancel: () => void
}

const ImageCropper: FC<ImageCropperPropsType> = ({ image, onCropDone, onCropCancel }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(5 / 4);

    const onCropComplete = (croppedAreaPercentage: Area, croppedAreaPixels: any) => {
        setCroppedArea(croppedAreaPixels);
    };

    const onAspectRatioChange = (event: any) => {
        setAspectRatio(event.target.value);
    };

    const zoomHandler = () => {
        window.onwheel = (e) => {
            if (e.deltaY < 0) {
                setZoom(zoom + 0.2)
            } else {
                setZoom(zoom - 0.2)
            }
        }
    }

    return (
        <div className={s.cropperContainer}>
            <div className={s.cropper}>
                <Cropper
                    image={image}
                    aspect={aspectRatio}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={zoomHandler}
                    onCropComplete={onCropComplete}
                    style={{
                        containerStyle: {
                            width: "100%",
                            height: "80%",
                            backgroundColor: "#fff",
                        },
                    }}
                />
            </div>

            <div className={s.settings}>
                <div className={s.radioButton} onChange={onAspectRatioChange}>
                    <input type="radio" value={1 / 1} name="ratio"/> 1:1
                    <input type="radio" value={5 / 4} name="ratio"/> 5:4
                    <input type="radio" value={4 / 3} name="ratio" /> 4:3
                    <input type="radio" value={3 / 2} name="ratio" /> 3:2
                    <input type="radio" value={5 / 3} name="ratio" /> 5:3
                    <input type="radio" value={16 / 9} name="ratio" /> 16:9
                    <input type="radio" value={3 / 1} name="ratio" /> 3:1
                </div>
                <div className={s.buttons}>
                    <button className={s.button} onClick={onCropCancel}>
                        Cancel
                    </button>

                    <button
                        className={s.button}
                        onClick={() => {
                            onCropDone(croppedArea);
                        }}
                    >
                        Done
                    </button>
                </div>


            </div>
        </div>
    );
}

export default ImageCropper;