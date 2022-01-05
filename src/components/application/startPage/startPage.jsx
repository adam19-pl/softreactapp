import React from "react";
import { Wrapper } from "./startPage.styles";
import { Link } from "react-router-dom";

const StartApp = () => {
    return (
        <Wrapper>
            <h2>Welcom to Project Management App</h2>
            <h4>Please Login or Register</h4>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </Wrapper>
    )
}

export default StartApp;