import React from 'react';
import Search from "../ui/Search";
import NavBar from "./NavBar";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div>
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
