import React from "react";
import s from './Post.module.css'
import user1 from "../../../../images/dialog/user1.png";
import { PropsPostType } from "../MyPosts";
export const Post = (props: PropsPostType) => {
    return (
        <div className={s.post} >
            <div className={s.postWrapper}>
                <img className={s.postAvatar} src={user1} />
                <div className={s.postWrap}>
                    <h3 className={s.postTitle}>{props.name}</h3>
                    <span className={s.postTime}>{props.time}</span>
                </div>
            </div>
            <p className={s.postText}>{props.message}</p>
        </div>
    );
}