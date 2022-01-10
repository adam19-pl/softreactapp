import React from "react";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "../CreateComment/createComment.styles";
import { useLocation } from 'react-router-dom';
import CreateCommentForm from "./CreateCommentForm/createCommentForm";




const CreateComment = ({ dataUsers, userEmail, }) => {
    const location = useLocation()
    const { from } = location.state
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
            <h2>Create Comment</h2>
            <CreateCommentForm from={from} userInformation={userInformation} />
            <button onClick={handleGoBack} className="login-button">Go back</button>
        </Wrapper >
    );
};

export default CreateComment;