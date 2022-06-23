import React from "react";

type NavPropsType = {
    profile: string,
    message: string,
    news: string,
    music: string,
    settings: string
}

export const Nav: React.FC<NavPropsType> = (props) => {
    return (<div className="nav">
        <nav >
            <div>
                <a href="">{props.profile}</a>
            </div>
            <div>
                <a href="">{props.message}</a>
            </div>
            <div>
                <a href="">{props.news}</a>
            </div>
            <div>
                <a href="">{props.music}</a>
            </div>
            <div>
                <a href="">{props.settings}</a>
            </div>
        </nav>
    </div>);
}


