import React, {useState} from 'react';
import classNames from 'classnames'
import {useFormik} from "formik";
import {object, string} from "yup";
import Router from "next/router";

import {Error, Formulario, InpuSubmit} from "../components/ui/Formulario";
import style from '../components/ui/Formulario.module.scss'
import Layout from "../components/layout/Layout";
import firebase from '../firebase'

const Login = () => {

    const [firebaseError, setFirebaseError] = useState(false);

    let schema = object().shape({
        email: string()
            .email('Debe ser un email valido')
            .required('El Email es requerido'),
        password: string()
            .required('El Password es requerido')
            .min(6, 'El Password debe de ser de al menos 6 caracteres')
    })
    const {handleSubmit, handleChange, errors, values} = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log('Logeando....')
        }
    })

    return (
        <Layout>
            <h1 css={`
                text-align: center; 
                margin-top: 5rem;
              `}>
                Iniciar Sesion
            </h1>
            <>
                <Formulario onSubmit={handleSubmit}>
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
                        value="Login"
                    />
                </Formulario>
            </>
        </Layout>
    );
};


export default Login;
