import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import axiosInstance from "../../axios";
import { Wrapper } from "./detail.styles";
import { Link } from "react-router-dom";
import Moment from 'moment';
const Detail = () => {
    const location = useLocation()
    const { from } = location.state
    const [mounted, setMounted] = useState(false);
    const [dataProject, setDataProject] = useState('');
    const [comments, setComments] = useState([]);

    if (!mounted) {
        axiosInstance.get('projects/' + from.id).then((res) => {
            setDataProject(res.data);

        }).catch((error) => {
            if (error.response.status === 401) {
                console.log(error.response);
            }
            console.log(error.response);
        });
        axiosInstance.get('comments/').then((response) => {
            setComments(response.data);
        });
    }
    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        <Wrapper>
            <div className="detail-header">
                <h3>Project Detail</h3>
                <Link to="/">Go back</Link>
            </div>
            <h2>Title: {dataProject.title}</h2>
            <h2>Description: {dataProject.description}</h2>
            <h2>Status : {dataProject.status === "(0, 'new')" || dataProject.status === 0 ? "New" : "Old"}</h2>
            <h2>Created : {Moment(dataProject.started).format('DD-MM-YYYY hh:mm')}</h2>
            <h2>Ended: {dataProject.ended}</h2>
            <h2>Comments : </h2>
            <div>

                {comments.map(comment =>
                    <div key={comment.id}>{comment.project === dataProject.id ? <div className={dataProject.owner === comment.autor ? "autor-comment comment" : "comment"}>
                        <h4 >{Moment(comment.date_created).format('DD-MM-YYYY hh:mm')}</h4>
                        <h2 >{comment.comment}</h2>
                        <h4 >{comment.autor}</h4>

                    </div> : null}</div>
                )}

            </div>
        </Wrapper>
    )
}
export default Detail;