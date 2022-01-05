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

    const [emailError, setEmailError] = useState('');
    return (
        <Wrapper>
            <h2>Register page</h2>
            <Formik initialValues={{ email: '', password: '', firstname: '', lastname: '', age: '', gender: '', phone: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('This field is required'),
                    password: Yup.string().min(6, 'The password must be longer than 6 characters').max(64, 'The maximum length of password is 64 characters').required('This field is requred'),
                    firstname: Yup.string().min(2, 'The firstname must be longer than 2 characters').required('This field is required'),
                    lastname: Yup.string().min(2, 'The lastname must be longer than 2 characters').required('This field is required'),
                    age: Yup.number().min(1, 'Min value is 1').max(100, 'Max value is 100').required('This field is required'),
                    gender: Yup.string().oneOf(['0', '1'], 'Invalid gender choice').required('This field is required'),
                    phone: Yup.string().matches(
                        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        "Phone number is not valid"
                    )
                })}
                onSubmit={(values) => {
                    axiosInstance.post('register/', values).then((res) => {
                        navigate('/login');
                    }).catch((error) => {
                        if (error.response.status === 400) {
                            setEmailError('Sorry, this email is already in use...');
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
                        label="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="of"
                    />
                    <MyInput
                        label="firstname"
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
                        placeholder="999-888-777"
                    />

                    <button type="submit">Register</button>
                </Form>

            </Formik>
            <button onClick={handleLogin} className="login-button">Login</button>
        </Wrapper>
    );
};


// const options = [
//     { key: 'male', value: 0 },
//     { key: 'female', value: 1 },
// ]
// const validate = values => {
//     const errors = {};
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     if (!values.password) {
//         errors.password = 'Required';
//     } else if (values.password.length < 6) {
//         errors.password = 'Password must be longer than 6 characters';
//     }

//     if (!values.firstname) {
//         errors.firstname = 'Required';
//     } else if (values.firstname.length > 15) {
//         errors.firstname = 'Must be 15 characters or less';
//     }

//     if (!values.lastname) {
//         errors.lastname = 'Required';
//     } else if (values.lastname.length > 20) {
//         errors.lastname = 'Must be 20 characters or less';
//     }
//     if (!values.age) {
//         errors.age = 'Required';
//     } else if (values.age < 0 || values.age >= 100) {
//         errors.age = 'Age must be in range between 0 and 100';
//     }
//     if (!values.gender) {
//         errors.gender = 'Required';
//     }
//     return errors;
// };



// const Register = () => {
//     const navigate = useNavigate();
//     // const initialFormData = Object.freeze({
//     //     email: '',
//     //     firstname: '',
//     //     lastname: '',
//     //     password: '',
//     //     age: '',
//     //     gender: '',
//     //     phone: '',
//     // });

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             firstname: '',
//             lastname: '',
//             password: '',
//             age: '',

//             phone: '',
//         },
//         validate,
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//             // axiosInstance.post('register/', values).then((res) => {
//             //     navigate('/login');
//             //     console.log(res);
//             //     console.log(res.data);
//             // });
//         },
//     });

//     // const [formData, updateFormData] = useState(initialFormData);
//     // const handleChange = (e) => {
//     //     updateFormData({
//     //         ...formData,
//     //         [e.target.name]: e.target.value.trim(),
//     //     });

//     // }
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     console.log(formData);
//     //     axiosInstance.post('register/', {
//     //         email: formData.email,
//     //         firstname: formData.firstname,
//     //         lastname: formData.lastname,
//     //         password: formData.password,
//     //         age: formData.age,
//     //         gender: formData.gender,
//     //         phone: formData.phone,
//     //     }).then((res) => {
//     //         navigate('/login');
//     //         console.log(res);
//     //         console.log(res.data);
//     //     });
//     // };
//     return (
//         <Wrapper>
//             <form onSubmit={formik.handleSubmit}>
//                 <label htmlFor="email">
//                     email:
//                 </label >
//                 <input type="text" id="email" name="email" onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email} />
//                 {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//                 <label htmlFor="password">
//                     Password:
//                 </label>
//                 <input type="password" name="password" id="password" autoComplete="off" onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.password} />
//                 {formik.errors.password ? <div>{formik.errors.password}</div> : null}
//                 <label htmlFor="firstname">
//                     firstname:
//                 </label >
//                 <input type="text" name="firstname" id="firstname" onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.firstname} />
//                 {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}
//                 <label htmlFor="lastname">
//                     lastname:
//                 </label >
//                 <input type="text" id="lastname" name="lastname" onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.lastName} />
//                 {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
//                 <label htmlFor="age">
//                     Age:
//                 </label >
//                 <input type="text" name="age" id="age" onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.age} />
//                 {formik.errors.age ? <div>{formik.errors.age}</div> : null}

//                 {/* <label htmlFor="gender">
//                     Gender:                </label >
//                 <Field type="text" id="gender" name="gender" as='select' onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                 >
//                     {options.map(option => {
//                         return (
//                             <option key={option.value} value={option.value}>{option.key}</option>
//                         )
//                     })}
//                 </Field> */}


//                 <label htmlFor="phone">
//                     Phone:
//                 </label >
//                 <input type="text" id="phone" name="phone" onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.phone} />

//                 <button type="submit"> Register</button>
//             </form>
//         </Wrapper>
//     );
// }

export default Register;
