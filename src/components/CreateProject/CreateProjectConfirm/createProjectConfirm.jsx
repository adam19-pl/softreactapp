import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from './createprojectconfirm.styles';
import Moment from 'moment';
import { Link } from "react-router-dom";
import axiosInstance from "../../../axios";

const CreateProjectConfirm = ({ dataUsers }) => {

    const [backendError, setBackendError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const values = location.state.values;
    function userDetail(user) {
        return user.id === values.owner
    }
    const information = dataUsers.filter(userDetail);
    const handleSubmit = () => {
        axiosInstance.post('projects/', values).then((res) => {
            navigate('/');
        }).catch((error) => {
            if (error.response.status === 400) {
                setBackendError(error.response.data.Error);
            }
        });
    }
    console.log('to są values', values);
    console.log(information);
    return (
        <Wrapper>
            {backendError === '' ? null : <div className="backend-error">{backendError}</div>}
            <h2>Title : {location.state.values.title}</h2>
            <h2>Description : {location.state.values.description}</h2>
            <h2>Started : {Moment(location.state.values.started).format('DD-MM-YYYY')}</h2>
            <h2>Owner : {information[0].email}</h2>
            <h2>Status : {location.state.values.status === 0 ? 'New' : 'Old'}</h2>
            <Link to="/">Cancel</Link>
            <button className="button-back" onClick={() => navigate(-1)}>Go back</button>
            <button className="button-submit" onClick={handleSubmit}>Create</button>
        </Wrapper>
    )
}

export default CreateProjectConfirm;