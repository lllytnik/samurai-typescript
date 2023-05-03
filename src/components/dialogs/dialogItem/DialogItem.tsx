import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
import { type } from "os";

type DialogItemType = {
    name: string
    id: number

}
type LinksActiveType = {
    isActive: boolean
}

const setActive = ({ isActive }: LinksActiveType) => (isActive ? s.activeLink : s.dialogLink);

export const DialogItem = (props: DialogItemType) => {

    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink className={setActive} to={path}>
                {" "}
                {props.name}{" "}
            </NavLink>
        </div>
    );
};

export default DialogItem;