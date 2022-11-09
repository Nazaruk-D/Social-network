import React, {FC} from 'react';
import button from '../../../assets/png/button.webp'
// import img from '../../../assets/images/image.webp'
import s from './MainButton.module.scss'

type CucumberPropsType = {
    buttonName: string
}

export const MainButton: FC<CucumberPropsType> = ({buttonName}) => {
    return (
        <div>
            <span className={s.button}><div className={s.textButton}>{buttonName}</div></span>
        </div>
    );
};

