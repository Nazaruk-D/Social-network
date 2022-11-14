import React, {FC} from 'react';
import s from './MenuButton.module.scss'

type CucumberPropsType = {
    buttonName: string
}

export const MenuButton: FC<CucumberPropsType> = ({buttonName}) => {
    return (
        <div>
            <span className={s.button}><div className={s.textButton}>{buttonName}</div></span>
        </div>
    );
};

