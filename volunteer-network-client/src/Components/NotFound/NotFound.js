import React from 'react';
import { Container } from 'react-bootstrap';
import AppBar from '../AppBar/AppBar';

const NotFound = () => {
    return (
        <>
            <AppBar />
            <Container>
                <p className="display-5 h1 text-center text-danger">Page not found</p> 
            </Container>
        </>
    );
};

export default NotFound;