import React from "react"
import s from './Header.module.css'
import logo from "../../images/logo/logo.png";
export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img className={s.logoImg} src={logo} alt="logo" />
            </div>
        </header>
    )
}