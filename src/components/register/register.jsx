import React, { useState } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "./Register.styles";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyInput from "../../components/fields/input";
import MySelect from "../../components/fields/select";

const Register = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }

    const [backendError, setBackendError] = useState('');
    return (
        <Wrapper>
            <h2>Register page</h2>
            <Formik initialValues={{ email: '', password: '', firstname: '', lastname: '', age: '', gender: '0', phone: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('This field is required'),
                    password: Yup.string().min(6, 'The password must be longer than 6 characters').max(64, 'The maximum length of password is 64 characters').required('This field is requred'),
                    firstname: Yup.string().min(2, 'The firstname must be longer than 2 characters').matches(/^[A-Za-z ]*$/, 'Please enter valid name').required('This field is required'),
                    lastname: Yup.string().min(2, 'The lastname must be longer than 2 characters').matches(/^[A-Za-z ]*$/, 'Please enter valid name').required('This field is required'),
                    age: Yup.number().min(1, 'Min value is 1').max(100, 'Max value is 100').required('This field is required'),
                    gender: Yup.string().oneOf(['0', '1'], 'Invalid gender choice').required('This field is required'),
                    phone: Yup.string().matches(
                        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        "Phone number is not valid"
                    ).min(9, 'Phone number must have 9 numbers minimum').max(9, 'Phone number must have 9 numbers maximum')
                })}
                onSubmit={(values) => {
                    axiosInstance.post('register/', values).then((res) => {
                        navigate('/login');
                    }).catch((error) => {
                        if (error.response.status === 400) {
                            if (error.response.data.Error) {
                                setBackendError(error.response.data.Error);
                            }
                            else if (error.response.data.age) {
                                setBackendError('Age must be between 1 and 100');
                            }
                            else if (error.response.data.phone) {
                                setBackendError('Phone number must have 9 characters');
                            }
                        }
                    });
                }}
            >

                <Form>
                    {backendError === '' ? null : <div className="backend-error">{backendError}</div>}
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
                    <MyInput
                        label="Firstname"
                        name="firstname"
                        type="text"
                        placeholder="Your name"
                    />

                    <MyInput
                        label="Lastname"
                        name="lastname"
                        type="text"
                        placeholder="Your lastname"
                    />
                    <MyInput
                        label="Age"
                        name="age"
                        type="number"
                        placeholder="18"
                    />

                    <MySelect label="Gender" name="gender">
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                    </MySelect>

                    <MyInput
                        label="Phone"
                        name="phone"
                        type="text"
                        placeholder="555666777"
                    />

                    <button type="submit">Register</button>
                </Form>

            </Formik>
            <button onClick={handleLogin} className="login-button">Login</button>
        </Wrapper >
    );
};


export default Register;
