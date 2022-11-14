import React, {FC} from 'react';
import s from "./BigButton.module.scss"

type ButtonPropsType = {
    onClick: () => void
}

const BigButton: FC<ButtonPropsType> = ({onClick}) => {
    return (
        <button className={s.button} onClick={onClick}>AddPost</button>
    );
};

export default BigButton;