import React from "react";

type MessageProps = {
    text: string
}

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div>{props.text}</div>
    )
}

