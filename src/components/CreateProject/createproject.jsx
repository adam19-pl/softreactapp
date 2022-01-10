import React from "react";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "./createproject.styles";
import CreateForm from "./CreateForm/createform";


const CreateProject = ({ dataUsers, userEmail }) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/')
    }
    // Filter information about current user
    function filterUser(dataUsers) {
        return dataUsers.email === userEmail ? dataUsers : null;

    }
    const userInformation = dataUsers.filter(filterUser);

    return (
        <Wrapper>
            <h2>Create Project</h2>
            <CreateForm dataUsers={dataUsers} userInformation={userInformation} />
            <button onClick={handleGoBack} className="login-button">Go back</button>
        </Wrapper >
    );
};

export default CreateProject;