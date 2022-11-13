import React, {FC} from 'react';
import s from "./Button.module.scss";

type ButtonPropsType = {
    onClick: () => void
}

const Button: FC<ButtonPropsType> = ({onClick}) => {
    return (
        <button className={s.button} onClick={onClick}>AddPost</button>
    );
};

export default Button;