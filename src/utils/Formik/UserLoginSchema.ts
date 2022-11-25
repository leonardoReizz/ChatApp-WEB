/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

import * as Yup from 'yup';

const userLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email Invalido')
    .required('Email Obrigatorio')
    .min(10, 'Email Invalido')
    .max(252, 'Email Invalido'),
  password: Yup.string()
    .required('Senha Obrigatorio')
    .min(8, 'Senha Invalida')
    .max(32, 'Senha Invalida'),
});

const userLoginInitialValues = {
  email: '',
  password: '',
};

export default { userLoginSchema, userLoginInitialValues };
