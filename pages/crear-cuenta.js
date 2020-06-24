import React, {useState} from 'react';
import classNames from 'classnames'
import {useFormik} from "formik";
import {object, string} from "yup";
import Router from "next/router";

import {Error, Formulario, InpuSubmit} from "../components/ui/Formulario";
import style from '../components/ui/Formulario.module.scss'
import Layout from "../components/layout/Layout";
import firebase from '../firebase'

const CrearCuenta = () => {

    const [firebaseError, setFirebaseError] = useState(false);

    let schema = object().shape({
        nombre: string()
            .required('El Nombre es requerido'),
        email: string()
            .email('Debe ser un email valido')
            .required('El Email es requerido'),
        password: string()
            .required('El Password es requerido')
            .min(6, 'El Password debe de ser de al menos 6 caracteres')
    })
    const {handleSubmit, handleChange, errors, values} = useFormik({
        initialValues:{
            nombre:'',
            email:'',
            password:''
        },
        validationSchema: schema,
        onSubmit: async values => {
            try {
                await firebase.registrar(values);
                Router.push('/');
            }catch (e) {
                setFirebaseError(e);
            }
        }
    })

    return (
        <Layout>
            <h1 css={`
                text-align: center; 
                margin-top: 5rem;
              `}>
                Crear Cuenta
            </h1>
            <>
                <Formulario onSubmit={handleSubmit}>
                    <div className={classNames(style.campo)}>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Tu Nombre"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.nombre && <Error>
                        {errors.nombre}</Error>}
                    <div className={classNames(style.campo)}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Tu Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <Error>
                        {errors.email}</Error>}
                    <div className={classNames(style.campo)}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Tu Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <Error>
                        {errors.password}</Error>}

                    {firebaseError.message && <Error>
                        {firebaseError.message}</Error>}
                    <InpuSubmit
                        type="submit"
                        value="Crear Cuenta"
                    />
                </Formulario>
            </>
        </Layout>
    );
};

export default CrearCuenta;
