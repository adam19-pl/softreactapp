import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextArea from "../../fields/textarea";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";

const CreateCommentForm = ({ from, userInformation }) => {
    const navigate = useNavigate();
    return (
        <Formik initialValues={{ project: from.id, autor: userInformation[0].id, started: Date.now(), comment: '', }}
            validationSchema={Yup.object({
                comment: Yup.string().min(6, 'The comment must be longer than 6 characters').required('This field is required'),
            })}
            onSubmit={(values) => {
                axiosInstance.post('comments/', values).then((res) => {

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
                <TextArea
                    label="Comment"
                    name="comment"
                    type="textarea"
                    placeholder="Comment..."
                />
                <button className="create-project-button" type="submit">Create</button>
            </Form>

        </Formik>
    );
}

export default CreateCommentForm;