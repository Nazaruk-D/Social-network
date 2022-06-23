import React from "react";

type HeaderType = {
    img: string
}

export const Header: React.FC<HeaderType> = (props) => {
    return (<div>
        <header className="header">
            <img src={props.img} alt=""/>
        </header>
    </div>);
}


