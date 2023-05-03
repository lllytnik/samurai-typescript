import React from "react";
import s from './MyPosts.module.css'
import { Post } from "./post/Post";
export type PropsPostType = {
    name: string
    time: string
    message: string
}
export const MyPosts = () => {
    return (
        <>
            <div className={s.myPost}>
                <form className={s.myPostForm} action="post">
                    <div className={s.formWrap}>
                        <label>Tell us your story:</label>
                        <textarea
                            className={s.formTextAria}
                            id="MyPost"
                            name="MyPost"
                            placeholder="So..."
                        />
                    </div>
                    <input id="MyPost" type="button" value="Отправить" className={s.formBtn} />
                </form>
            </div>
            <Post name="Васек" time="21:30" message="Компонента тупая" />
            <Post name="Масек" time="10:10" message="Компонента не тупая" />
            <Post name="Касек" time="22:30" message="Я мимо проходил" />
        </>
    )
}