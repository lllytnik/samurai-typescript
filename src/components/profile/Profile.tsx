import React from "react";
import s from './Profile.module.css'
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./proFileInfo/ProfileInfo";
export const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}