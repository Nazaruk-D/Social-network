import React, {FC} from 'react';
import s from "./MainButton.module.scss"

type ButtonPropsType = {
    onClick: () => void
    nameButton: string
    disable?: boolean
}

const MainButton: FC<ButtonPropsType> = ({onClick, nameButton, disable}) => {
    return (
        <button className={s.button} onClick={onClick} disabled={disable}>{nameButton}</button>
    );
};

export default MainButton;