import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Head from "next/head";

const Layout = props => {
    return (
        <>
            <Head>
                <html lang="es" />
                <title>Product Hunt</title>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
