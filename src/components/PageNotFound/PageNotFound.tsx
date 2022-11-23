import React from 'react';
import s from './PageNotFound.module.scss'
import {NavLink} from "react-router-dom";
import {routes} from "../../enums/routes";

const PageNotFound = () => {

    return (
        <div className={s.pageNotFoundContainer}>
            <div className={s.pageNotFoundBlock}>
                <div className={s.wrapper}>
                    <span>44</span>
                    <p>The page you are trying to search has been <br/> moved to another universe.</p>
                    <NavLink to={routes.login} activeClassName={s.activeLink}>
                        <button>GET ME HOME</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;