import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./user.styles";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyInput from "../fields/input";
import MySelect from "../fields/select";
import axiosInstance from "../../axios";
import { useNavigate } from 'react-router-dom';
const User = ({ dataUsers, userEmail }) => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    function userDetail(user) {
        return user.email === userEmail
    }
    const information = dataUsers.filter(userDetail);
    return (
        <Wrapper>
            <h2>Edit User</h2>

            <Formik enableReinitialize initialValues={{ email: information[0].email, password: '', firstname: information[0].firstname, lastname: information[0].lastname, age: information[0].age, gender: information[0].gender, phone: information[0].phone === null ? '' : information[0].phone }}
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
                    axiosInstance.put('users/' + information[0].id + '/', values).then((res) => {
                        navigate('/');;
                    }).catch((error) => {
                        console.log(error.response);
                        if (error.response.status === 400) {
                            setEmailError('Popełniłęm błąd z hasłem ... :)');
                        }
                    });
                }}
            >
                <Form>
                    {emailError === '' ? null : <div className="email-error">{emailError}</div>}
                    <MyInput
                        label="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />


                    <MyInput
                        label="firstname"
                        name="firstname"
                        type="text"
                        placeholder="Your name"
                    />
                    <MyInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="password"
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
                        placeholder="999-888-777"
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <Link to="/">Go back</Link>
        </Wrapper>
    )
}

export default User;