import React from 'react';
import s from './ZoomPhoto.module.scss'
import {AiFillCloseCircle} from "react-icons/ai";

type ZoomPhotoPropsType = {
    setZoomPhoto: (zoomPhoto: boolean) => void
    img: any
}

const ZoomPhoto: React.FC<ZoomPhotoPropsType> = ({setZoomPhoto, img}) => {
    return (
        <div className={s.zoomPhotoContainer}>
            <div className={s.closeIcon} onClick={() => setZoomPhoto(false)}> <AiFillCloseCircle
                style={{fontSize: "22px"}}/></div>
            <img src={img} alt="zoom Photo" className={s.zoomPhoto}/>
        </div>
    );
};

export default ZoomPhoto;