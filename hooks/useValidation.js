import React, {useEffect, useState} from 'react';

const useValidation = (stateInit, validate, fn) => {
    const [valores, setValores] = useState(stateInit);
    const [errores, setErrores] = useState({})
    const [submitform, setSubmitform] = useState(false);

    useEffect(()=>{
        if (submitform){
            console.log(errores)
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores){
                fn();
            }
            setSubmitform(false);
        }
    }, [])

    const handleChange = e => {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const erroresValidacion = await validate(valores);
        setErrores(erroresValidacion);
        setSubmitform(true)
    }
    return {
        errores,
        valores,
        submitform,
        handleSubmit,
        handleChange
    };
};

export default useValidation;
