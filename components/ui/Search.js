import React from 'react';
import className from "classnames"
import style from "./Search.module.scss"

const Search = () => {
    return(
        <form style={{"position": "relative"}}>
            <input
                className={className(style.inputText)}
                type="text"
                placeholder="Buscar Productos"
            />
            <button className={className(style.inputSubmit)} type="submit">Buscar</button>
        </form>
    );
};

export default Search;
