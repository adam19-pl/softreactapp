import React from "react";
import { useLocation } from 'react-router-dom'
import { Wrapper } from "./edit.styles";
import { Link } from "react-router-dom";
import EditForm from "./editForm/editForm";
const Edit = ({ dataUsers, userEmail }) => {
    const location = useLocation()
    const { from } = location.state;

    function userDetail(user) {
        return user.email === userEmail
    }
    const information = dataUsers.filter(userDetail);
    return (
        <Wrapper>
            <h2>Edit</h2>
            {from.owner === information[0].id ? <EditForm from={from} dataUsers={dataUsers} />
                : <h2>You don't have permission to edit this project</h2>}
            <Link to="/">Go Back</Link>
        </Wrapper>
    )
}

export default Edit;