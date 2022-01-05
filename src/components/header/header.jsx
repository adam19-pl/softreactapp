import React from "react";
import { Wrapper } from "./Header.styles";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate('/logout');
    }
    const handleEditUser = () => {
        navigate('/user');
    }
    return (
        <Wrapper>
            <h2>ProjectManagmentApp</h2>
            <div>
                <button onClick={handleLogOut}>Logout</button>
                <button onClick={handleEditUser}>Edit User</button>
            </div>
        </Wrapper>
    )
}

export default Header;