import React from 'react';
import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>Top</a></Link>
            <Link href="/"><a>New Product</a></Link>
        </nav>
    );
};

export default NavBar;
