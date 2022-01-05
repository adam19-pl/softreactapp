import React, { useState } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "./Login.styles";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyInput from "../../components/fields/input";


const Login = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register')
    }
    const [loginError, setLoginError] = useState('');

    return (
        <Wrapper>
            <h2>Login page</h2>
            <Formik initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('This field is required'),
                    password: Yup.string().min(6, 'The password must be longer than 6 characters').max(64, 'The maximum length of password is 64 characters').required('This field is requred'),
                })}
                onSubmit={(values) => {
                    axiosInstance.post('api/token/', values).then((res) => {
                        localStorage.setItem('access_token', res.data.access);
                        localStorage.setItem('refresh_token', res.data.refresh);
                        localStorage.setItem('authenticated_email', values.email);
                        axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
                        navigate('/');
                    }).catch((error) => {
                        if (error.response.status === 401) {
                            setLoginError("The email or password didn't match... Try again.");
                        }
                    });

                }} >
                <Form>
                    <MyInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />

                    <MyInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="of"
                    />
                    {loginError === '' ? null : <div className="login-error">{loginError}</div>}
                    <button type="submit">Login</button>
                </Form>

            </Formik>
            <button className="register-button" onClick={handleRegister}> Register</button >
        </Wrapper>
    )
}

export default Login;
