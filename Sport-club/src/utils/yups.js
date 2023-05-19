import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    nombre: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Solo letras')
        .min(2, 'Muy corto!')
        .max(50, 'Muy largo!')
        .required('Requerido'),
    apellido: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Solo letras')
        .min(2, 'Muy corto!')
        .max(50, 'Muy largo!')
        .required('Requerido'),
    dni: Yup.number()
        .required('Requerido'),
    since: Yup.date()
        .required('Requerido'),
    email: Yup.string()
        .email('Email invalido')
        .required('Requerido'),
    phone: Yup.number()
        .required('Requerido')
});