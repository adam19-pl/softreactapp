import React, { useState, useEffect } from "react";
import { Wrapper } from "./home.styles";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import { Table } from 'reactstrap';
import Moment from 'moment';
const Home = () => {
    const [mounted, setMounted] = useState(false);
    const [dataProjects, setDataProjects] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!mounted) {
        axiosInstance.get('projects/').then((res) => {
            setIsAuthenticated(true);
            setDataProjects(res.data);

        }).catch((error) => {
            if (error.response.status === 401) {
                console.log(error.response);
            }
            console.log(error.response);
        });
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Wrapper>
            <div>
                <h2>Projects</h2>
                <Link to="/create">Create New +</Link>
            </div>



            {dataProjects.length === 0 ? <h3>You don't have any projects yet</h3> :
                <Table responsive>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                Started
                            </th>
                            <th>
                                Ended
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Operations
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {dataProjects.map(project =>

                            <tr key={project.id}>
                                <th scope="row">{project.id}</th>
                                <td>{project.title}</td>
                                <td>{Moment(project.started).format('DD-MM-YYYY')}</td>
                                <td>{project.endeded === '' || !project.ended ? '' : Moment(project.ended).format('DD-MM-YYYY')}</td>
                                <td>{project.status === "(0, 'new')" || project.status === 0 ? "New" : "Old"}</td>
                                <td><Link to="/comment" state={{ from: project }}>Comment</Link>
                                    <Link to="/edit" state={{ from: project }}>Edit</Link>
                                    <Link to="/detail" state={{ from: project }}>Detail</Link>
                                    <Link to="/delete" state={{ from: project }}>Delete</Link>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            }

        </Wrapper>
    )
}

export default Home;