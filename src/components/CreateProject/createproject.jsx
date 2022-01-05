import React, { useState } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "./createproject.styles";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyInput from "../../components/fields/input";
import MySelect from "../../components/fields/select";
import TextArea from "../fields/textarea";
import DatePicker from "../fields/datePicker";



const CreateProject = ({ dataUsers, userEmail }) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/')
    }

    function filterUser(dataUsers) {
        return dataUsers.email === userEmail ? dataUsers : null;

    }
    const userInformation = dataUsers.filter(filterUser);

    return (
        <Wrapper>
            <h2>Create Project</h2>
            <Formik initialValues={{ title: '', description: '', started: '', owner: userInformation[0].id, status: 0, }}
                validationSchema={Yup.object({
                    title: Yup.string().min(6, 'The title must be longer than 6 characters').required('This field is required'),
                    description: Yup.string().min(6, 'The description field must be longer than 6 characters').required('This field is requred'),
                    started: Yup.date().required('This field is required'),
                    owner: Yup.string().required('This field is required'),
                    employers: Yup.array().required("This field is required")
                })}
                onSubmit={(values) => {
                    axiosInstance.post('projects/', values).then((res) => {

                        navigate('/');
                        console.log(res);
                        console.log(res.data);
                    }).catch((error) => {
                        console.log(values);
                        console.log(error.response);
                    });
                }}
            >
                <Form>
                    <MyInput
                        label="Title"
                        name="title"
                        type="text"
                        placeholder="Title"
                    />

                    <TextArea
                        label="Description"
                        name="description"
                        type="textarea"
                        placeholder="description"
                    />

                    <DatePicker
                        label="started"
                        name="started"
                        type="date" />

                    <MySelect
                        label="employers"
                        name="employers"
                        type="select"
                        multiple={true}
                    >
                        {dataUsers.map(user => {
                            return (<option key={user.id} value={user.id}>{user.email}</option>)
                        })}

                    </MySelect>
                    <MySelect
                        label="owner"
                        name="owner"
                        type="select">
                        <option value="">Choose owner</option>
                        <option defaultValue={true} value={userInformation[0].id}>{userInformation[0].email}</option>
                    </MySelect>

                    <button className="create-project-button" type="submit">Create</button>
                </Form>

            </Formik>
            <button onClick={handleGoBack} className="login-button">Go back</button>
        </Wrapper >
    );
};

export default CreateProject;