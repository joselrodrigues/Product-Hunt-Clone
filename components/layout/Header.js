import React from 'react';
import classNames from 'classnames'
import Search from "../ui/Search";
import NavBar from "./NavBar";
import Link from "next/link";
import {Button} from "../ui/Button";
import style from "./Header.module.scss"

const Header = () => {
    const usuario = false;

    return (
        <header className={classNames(style.header)}>
            <div className={classNames(style.headerContainer)}>
                <div className={classNames(style.search)}>
                    <Link href="/">
                        <a>
                            <p className={classNames(style.logo)}>Icono</p>
                        </a>
                    </Link>
                    <Search/>
                    <NavBar />
                </div>

                <div className={classNames(style.divName)}>
                    {usuario ? (
                        <>
                            <p className={classNames(style.pName)}>
                                Hola: Jose
                            </p>
                            <Button bgColor="true">Log Out</Button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button bgColor="true">Log In</Button>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Button>Register</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
