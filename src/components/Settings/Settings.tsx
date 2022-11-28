import React, {useState} from 'react';
import s from './Settings.module.scss'
import rickGif from '../../assets/gif/gif3.gif'
import portalGun from '../../assets/png/portalGun.png'
import portalGunWithShadow from '../../assets/png/portalGunWithShodow.png'
import portalGunOn from '../../assets/png/portalGunOn.png'
import garage from '../../assets/png/Garage.png'


export const Settings = () => {

    const [switchGun, setSwitchGun] = useState(false)
    const [portalGunShadow, setPortalGunShadow] = useState(false)
    const turnOnPortal = switchGun ? s.portalOn : s.portalOff

    const portalGunOffWithShadow = !portalGunShadow ? portalGun : portalGunWithShadow

    return (
        <div className={s.settingsContainer}>
            <div className={s.portalBlock}>
                {/*<a href={"https://nazaruk-d.github.io/Portfolio/#"}>*/}
                    <img src={rickGif} alt="Rick" className={turnOnPortal}/>
                    <img src={garage} alt="Garage" className={s.garage}/>
                {/*</a>*/}
                {switchGun
                    ? <img src={portalGunOn} alt="portalGun" className={s.portalGun} onClick={() => setSwitchGun(!switchGun)} onMouseEnter={()=>setPortalGunShadow(true)} onMouseLeave={()=>setPortalGunShadow(false)}/>
                    : <img src={portalGunOffWithShadow} alt="portalGun" className={s.portalGun} onClick={() => setSwitchGun(!switchGun)} onMouseEnter={()=>setPortalGunShadow(true)} onMouseLeave={()=>setPortalGunShadow(false)}/>
                }
            </div>
        </div>
    );
};
