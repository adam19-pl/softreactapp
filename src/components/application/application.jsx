import React from "react";
import { Wrapper } from "./Application.styles";
import Header from "../header/header";


import AuthenticatedContainer from "./authenticatedContainer/authenticatedContainer";
const Application = ({ dataUsers, userEmail }) => {

    return (
        <Wrapper>
            <Header />
            <AuthenticatedContainer dataUsers={dataUsers} userEmail={userEmail} />
        </Wrapper>
    )
}


export default Application;