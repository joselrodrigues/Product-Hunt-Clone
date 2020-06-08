import React from 'react';
import classNames from 'classnames'
import Layout from "../components/layout/Layout";
import {Formulario, InpuSubmit} from "../components/ui/Formulario";
import style from '../components/ui/Formulario.module.scss'

import useValidation from "../hooks/useValidation";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

const CrearCuenta = () => {

    const INITIAL_STATE = {
        nombre:'',
        email:'',
        password:''
    }

    const {errores, valores, submitform, handleSubmit, handleChange} = useValidation(INITIAL_STATE, validarCrearCuenta, crearCuenta);

    const {nombre, email, password} = valores;

    async function crearCuenta() {
        console.log("Creando cuenta....")
    }

    console.log(errores)
    return (
        <Layout>
            <h1 css={`
                text-align: center; 
                margin-top: 5rem;
              `}>
                Crear Cuenta
            </h1>
            <>
                <Formulario>
                    <div className={classNames(style.campo)}>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Tu Nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classNames(style.campo)}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Tu Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classNames(style.campo)}>
                        <label htmlFor="password">Email</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Tu Password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <InpuSubmit
                        type="submit"
                        value="Crear Cuenta"
                        onClick={handleSubmit}
                    />
                </Formulario>
            </>
        </Layout>
    );
};

export default CrearCuenta;
