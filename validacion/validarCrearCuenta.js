import {string, object } from "yup";

export default async function validarCrearCuenta(valores) {
    let schema = object().shape({
        nombre: string().required(),
        email: string().email().required(),
        password: string().required().min(6)
    })
    let error = {};
    try {
        const valid = await schema.validate(valores)
    } catch (e) {
        error = {...error, errores:e.message }
    }

    return error;
}