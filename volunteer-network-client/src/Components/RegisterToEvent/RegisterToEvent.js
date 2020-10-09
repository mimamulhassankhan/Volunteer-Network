import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const RegisterToEvent = ({user, events}) => {
    const {id} = useParams();
    const history = useHistory();

    const toEvent = events.filter(evnt => evnt._id === id)[0];
    
    const [registrationData,setRegistrationData] = useState({
        name: user.displayName,
        email: user.email,
        date: toEvent.date,
        description: '',
        eventName: toEvent.title,
        eventId: toEvent._id
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if(registrationData.eventName && registrationData.date && registrationData.name && registrationData.email && registrationData.description) {
            fetch('https://stormy-peak-51840.herokuapp.com/registration',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(registrationData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.status === 'success') {
                    history.push(`/dashboard`)
                }
                else{
                    prompt(data.message);
                }
            });
        }
    }
    return (
        <>
            <div className="text-center mt-5">
                <Image width={180} src="/logos/Group 1329.png" alt="Group" />
                <div className="p-5 border border-dark bg-white w-50 mx-auto mt-4 rounded" style={{ minHeight: ''}}>
                    <h1 className="font-weight-bold text-left">Register as a Volunteer</h1>
                    <Form className="text-left">
                        <Form.Group>
                            <TextField className="text-warning" fullWidth={true} label="Full name" defaultValue={user.displayName} disabled/>
                            <br/>
                            <TextField type="email" fullWidth={true} label="Username or Email" defaultValue={user.email} disabled/>
                            <br/>
                            <TextField key={registrationData.date} value={registrationData.date} className="mt-3" fullWidth type="date" disabled/>
                            <br/>
                            <TextField onChange={(e) => {
                                const {value} = e.target;
                                setRegistrationData({...registrationData, description: value});
                            }} fullWidth label="Description" required/>
                            <br/>
                            <TextField key={registrationData.eventName} defaultValue={registrationData.eventName} fullWidth={true} label="Event name" disabled/>
                            <br/>
                            <br/>
                        </Form.Group>
                            <Button onClick={handleSubmit} className="btn-block" variant="primary" type="submit"> Registration </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

const  mapStateToProps = (state) => {
    return {
        user: state.user,
        events: state.events
    }
}
export default connect(mapStateToProps)(RegisterToEvent);