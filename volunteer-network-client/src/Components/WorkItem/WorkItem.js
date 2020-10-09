import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WorkItem = ({data}) => {
    const {_id, title, photo} = data;
    const bgColor = ['primary', 'info', 'danger', 'success', 'warning'];
    const randomBgColor = bgColor[Math.floor(Math.random() * bgColor.length)];
    return (
        <>
            <Card  className="m-3" style={{ width: '14rem', borderRadius: '10px', overflow: 'hidden'}}>
                <Link to={`/event/${_id}`} className="text-decoration-none">
                    <Card.Img height={200} variant="top" src={`data:${photo.contentType};base64,${photo.image}`} alt="Child Support"/>
                    <Card.Body className={`text-center bg-${randomBgColor} text-white`}>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                </Link>
            </Card>
        </>
    );
};

export default WorkItem;