import React from "react";

type ContentPropType = {
    img: string,
    img2: string,
    myPost: string,
    newPost: string,
    post: string,


}

export const Profile: React.FC<ContentPropType> = (props) => {
    return (<div className="content">
        <div>
            <img src={props.img} style={{width: "1000px", height: "300px"}} alt=""/>
        </div>
        <div>
            <img src={props.img2} style={{width: "100px"}} alt=""/>
        </div>
        <div>
            {props.myPost}
        </div>
        <div>
            {props.newPost}
        </div>
        <div>
            <div>
                {props.post}
            </div>
            <div>
                {props.post}
            </div>
        </div>
    </div>);
}


