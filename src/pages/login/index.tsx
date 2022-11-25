import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import formikLogin from '../../utils/Formik/UserLoginSchema';
import InputFormik from '../../components/Inputs/InputFormik';
import Button from '../../components/Buttons/Button';
import ErrorMessage from '../../components/Error/ErrorMessage';

import * as types from '../../types/types'
import { UserLogin } from './types';
import sphereDark from '../../assets/images/sphereDark.png';
import sphereGreen from '../../assets/images/sphereGreen.png';

import styles from './styles.module.sass';
import APIUser from '../../api/user';
import { Link, useNavigate } from 'react-router-dom';
import { changeUser } from '../../redux/userSlice';
import { IStore } from '../../redux/types';

const Login = (): JSX.Element => {
  const [message, setMessage] = useState<types.Message| undefined>();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { user } = useSelector((state: IStore ) => state);

  const onSubmit = async (values: UserLogin) => {
    setMessage(undefined);
    const login = await APIUser.login({email: values.email, password: values.password});
    switch (login.status) {
      case 200:
        dispath(changeUser({
          id: login.data.msg._id,
          email: login.data.msg.email,
          fullName: login.data.msg.fullName,
          token: login.data.msg.token
        }))
        navigate('/home');
        break;
      case 400:
        if (login.data.msg === 'Invalid email or password') {
          setMessage({ type: 'error', value: 'Email ou senha invalidos' });
        }
        break;
      default:
        setMessage({ type: 'error', value: 'Erro ao realizar login' });
        break;
    }
  };


  const formikProps = useFormik({
    initialValues: formikLogin.userLoginInitialValues,
    validationSchema: formikLogin.userLoginSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <img className={styles.sphereGreen} src={sphereGreen} alt="balls" />
        <img className={styles.sphereDark} src={sphereDark} alt="balls" />

        <div className={styles.loginContent}>
          <h1>Entre</h1>
          {message && <ErrorMessage text={message.value} />}
          <form onSubmit={formikProps.handleSubmit}>
            <InputFormik
              placeholder="Email"
              name="email"
              type="text"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              errorMessage={
                formikProps.touched.email && formikProps.errors.email
                  ? formikProps.errors.email
                  : undefined
              }
            />
            <InputFormik
              placeholder="Senha"
              name="password"
              type="password"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              errorMessage={
                formikProps.touched.password && formikProps.errors.password
                  ? formikProps.errors.password
                  : undefined
              }
            />
            <Button type="submit">Entrar</Button>
          </form>
          <span>
            Ainda nao tem uma contra? <Link to="/register"> Cadastre-se </Link>
          </span>
          <Link to="/replacePassword">Esqueceu sua senha?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
