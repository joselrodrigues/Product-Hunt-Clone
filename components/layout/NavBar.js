import React from 'react';
import Link from "next/link";
import classNames from "classnames"
import style from "./NavBar.module.scss"
const NavBar = () => {
    return (
        <nav className={classNames(style.navegacion)}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/populares"><a>Top</a></Link>
            <Link href="/nuevo-producto"><a>New Product</a></Link>
        </nav>
    );
};

export default NavBar;
