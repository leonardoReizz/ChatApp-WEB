/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

import * as Yup from 'yup';

const UserRegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Nome Obrigatorio')
    .min(8, 'Minimo de 8 Caracteres')
    .max(122, 'Maximo de 122 Caracteres'),
  email: Yup.string()
    .email('Email Invalido')
    .required('Email Obrigatorio')
    .min(10, 'Email Invalido')
    .max(252, 'Email Invalido'),
  password: Yup.string()
    .required('Senha Obrigatorio')
    .min(8, 'Senha Invalida')
    .max(32, 'Senha Invalida'),
  confirmPassword: Yup.string()
    .required('Senha Obrigatorio')
    .min(8, 'Senha Invalida')
    .max(32, 'Senha Invalida'),
});

const UserRegisterInitialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default { UserRegisterSchema, UserRegisterInitialValues };
