import React, {useState} from 'react';
import s from './Settings.module.scss'
import rickGif from '../../assets/gif/gif3.gif'
import portalGun from '../../assets/png/portalGun.png'
import portalGunOn from '../../assets/png/portalGunOn.png'


export const Settings = () => {

    const [switchGun, setSwitchGun] = useState(false)

    const turnOnPortal = switchGun ? s.portalOn : s.portalGif

    return (
        <div className={s.settingsContainer}>
            {switchGun
                ? <img src={portalGunOn} alt="portalGun" className={s.portalGun} onClick={() => setSwitchGun(!switchGun)}/>
                : <img src={portalGun} alt="portalGun" className={s.portalGun} onClick={() => setSwitchGun(!switchGun)}/>
            }
            <div className={s.portalBlock}>
                <a href={"https://nazaruk-d.github.io/Portfolio/#"}>
                    <img src={rickGif} alt="Rick" className={turnOnPortal}/>
                </a>
            </div>
        </div>
    );
};
