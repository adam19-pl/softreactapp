import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import MySelect from '../../fields/select';
import MyInput from '../../fields/input';
import DatePicker from '../../fields/datePicker';
import TextArea from '../../fields/textarea';

const CreateForm = ({ dataUsers, userInformation }) => {
    const navigate = useNavigate();
    return (<Formik initialValues={{ title: '', description: '', started: '', owner: userInformation[0].id, status: 0, }}
        validationSchema={Yup.object({
            title: Yup.string().min(6, 'The title must be longer than 6 characters').required('This field is required'),
            description: Yup.string().min(6, 'The description field must be longer than 6 characters').required('This field is requred'),
            started: Yup.date().required('This field is required'),
            owner: Yup.string().matches(userInformation[0].id, 'The value is not correct.').required('This field is required'),
            employers: Yup.array().required("This field is required")
        })}
        onSubmit={(values) => {
            navigate('/create/confirm/', { state: { values } })
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
                    return (userInformation[0].id === user.id ? <option selected key={user.id} value={user.id}>{user.email}</option> : <option key={user.id} value={user.id}>{user.email}</option>)
                })}

            </MySelect>
            <MySelect
                label="owner"
                name="owner"
                type="select">
                <option defaultValue={true} value={userInformation[0].id}>{userInformation[0].email}</option>
            </MySelect>

            <button className="create-project-button" type="submit">Create</button>
        </Form>

    </Formik>
    )
}

export default CreateForm;