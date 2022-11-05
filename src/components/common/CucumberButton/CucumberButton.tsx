import React, {FC} from 'react';
import button from '../../../assets/png/button.webp'
// import img from '../../../assets/images/image.webp'
import s from './CucumberButton.module.scss'

type CucumberPropsType = {
    buttonName: string
}

export const CucumberButton: FC<CucumberPropsType> = ({buttonName}) => {
    return (
        <div>
            <span className={s.button}><p className={s.textButton}>{buttonName}</p></span>
        </div>
    );
};

