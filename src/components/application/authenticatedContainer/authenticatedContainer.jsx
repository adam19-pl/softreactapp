import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import CreateProject from '../../CreateProject/createproject';
import Home from '../../home/home';
import CreateComment from '../../CreateComment/createComment';
import Detail from '../../detail/detail';
import Edit from '../../edit/edit';
import Delete from '../../delete/delete';
import User from '../../user/user';
import CreateProjectConfirm from '../../CreateProject/CreateProjectConfirm/createProjectConfirm';


const AuthenticatedContainer = ({ dataUsers, userEmail }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateProject dataUsers={dataUsers} userEmail={userEmail} />} />
            <Route path="/create/confirm" element={<CreateProjectConfirm dataUsers={dataUsers} userEmail={userEmail} />} />
            <Route path="/comment" element={<CreateComment dataUsers={dataUsers} userEmail={userEmail} />} />
            <Route path="/detail" element={<Detail dataUsers={dataUsers} userEmail={userEmail} />} />
            <Route path="/edit" element={<Edit dataUsers={dataUsers} userEmail={userEmail} />} />
            <Route path="/delete" element={<Delete dataUsers={dataUsers} userEmail={userEmail} />} />
            <Route path="/user" element={<User dataUsers={dataUsers} userEmail={userEmail} />} />
        </Routes>
    )
}

export default AuthenticatedContainer;