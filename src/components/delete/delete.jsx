import React from "react"
import { Wrapper } from "./delete.styles";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";

const Delete = ({ dataUsers, userEmail }) => {
    const location = useLocation()
    const { from } = location.state
    const navigate = useNavigate();
    function userDetail(user) {
        return user.email === userEmail
    }
    const information = dataUsers.filter(userDetail)
    function handleClick() {
        axiosInstance.delete('projects/' + from.id + '/').then((res) => {
            navigate('/');
        }).catch((error) => {
            console.log(error.response);
        })
    }
    return (
        <Wrapper>
            {from.owner === information[0].id ? <>
                <h2>Are you sure you want delete this project ? </h2>
                <button className="delete-project-button" type="submit" onClick={handleClick}>Delete</button>
            </> : <h2>You don't have permission to delete this Project</h2>}
            <Link to="/">Go Back</Link>
        </Wrapper>
    )
}
export default Delete;