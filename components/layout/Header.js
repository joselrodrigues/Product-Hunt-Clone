import React from 'react';
import clasNames from 'classnames'
import Search from "../ui/Search";
import NavBar from "./NavBar";
import Link from "next/link";
import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={clasNames(style.header)}>
            <div className={clasNames(style.headerContainer)}>
                <div>
                    <p>Icono</p>
                    <Search/>
                    <NavBar />
                </div>
                <div>
                    <p>
                        Hola: Jose
                    </p>
                    <button type="button">Log Out</button>
                    <Link href="/"><a>Log In</a></Link>
                    <Link href="/"><a>Register</a></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
