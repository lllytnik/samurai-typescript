import React from "react"
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'

type LinksActiveType = {
    isActive: boolean
}

export const NavBar = () => {
    const setActive = ({ isActive }: LinksActiveType) => {
        return isActive ? s.activeLink : s.navLink;
    };

    return (

        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <NavLink className={setActive} to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={setActive} to="/dialogs">
                        Messages
                    </NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={setActive} to="/news">
                        News
                    </NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={setActive} to="/music">
                        Music
                    </NavLink>
                </li>
                <li className={s.navItem}>
                    <NavLink className={setActive} to="/settings">
                        Settings
                    </NavLink>
                    <li className={s.navItem}>
                        <NavLink className={setActive} to="/users">
                            Users
                        </NavLink>
                    </li>
                </li>
            </ul>
        </nav>
    )
}