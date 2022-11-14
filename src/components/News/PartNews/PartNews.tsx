import React, {FC} from 'react';
import s from "./PartNews.module.scss";

type PartNewsPropsType = {
    title: string
    photo: string
    text: string
    author: string
}


const PartNews: FC<PartNewsPropsType> = ({author, text, title, photo}) => {
    return (
        <div className={s.news}>
            <img src={photo} alt="news image" className={s.newsImg}/>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{text}</div>
            <div className={s.author}>Author: {author}</div>
        </div>
    );
};

export default PartNews;


