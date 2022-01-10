import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import MySelect from "../../fields/select";
import MyInput from "../../fields/input";
import TextArea from "../../fields/textarea";
import DatePicker from "../../fields/datePicker";
import axiosInstance from "../../../axios";
const EditForm = ({ from, dataUsers }) => {
    const navigate = useNavigate();
    const [updateError, setUpdateError] = useState('');
    return (
        <Formik enableReinitialize initialValues={{ id: from.id, owner: from.owner, started: from.started, description: from.description, ended: '', status: from.status, title: from.title, employers: from.employers }}
            validationSchema={Yup.object({
                title: Yup.string().min(6, 'The title must be longer than 6 characters').required('This field is required'),
                description: Yup.string().min(6, 'The comment must be longer than 6 characters').required('This field is required'),
                ended: Yup.date().min(from.started, 'Date cannot be in the past').required('This field is required'),
                employers: Yup.array().required('This field is required'),
            })}
            onSubmit={values => {
                axiosInstance.put('projects/' + from.id + '/', values).then((res) => {
                    navigate('/');
                    console.log(res);
                    console.log(res.data);
                }).catch((error) => {
                    console.log(error.response);
                    if (error.response.status === 403) {
                        setUpdateError("You don't have acces to update this projcet.");
                    }
                });
            }
            }
        >
            <Form>
                {updateError === '' ? null : <div className="update-error">{updateError}</div>}
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
                    label="Ended"
                    name="ended"
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

                <MySelect label="Status" name="status">
                    <option defaultValue={true} value="0">New</option>
                    <option value="1">Old</option>
                </MySelect>

                <button className="create-project-button" type="submit">Edit</button>
            </Form>
        </Formik>

    )
}
export default EditForm;