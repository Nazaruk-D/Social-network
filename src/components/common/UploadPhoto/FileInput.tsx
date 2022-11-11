import React, {FC, useRef} from "react";
import s from './UploadPhoto.module.scss'
import './Style.css'

type FileInputPropsType = {
  onImageSelected: (selectedImg: string | ArrayBuffer | null) => void
}


const FileInput: FC<FileInputPropsType> = ({ onImageSelected }) => {
  const inputRef = useRef<any>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };

  return (
    <div className={s.fileInputContainer}>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      <button className="btn" onClick={onChooseImg}>
        Choose Image
      </button>
    </div>
  );
}

export default FileInput;