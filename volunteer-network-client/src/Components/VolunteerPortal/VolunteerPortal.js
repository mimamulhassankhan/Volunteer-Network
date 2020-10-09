import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import AppBar from '../AppBar/AppBar';

const VolunteerPortal = ({user, loading, events}) => {
    const [userEvents, setUserEvents] = useState([]);

    useEffect(() => {
        const fetchOpertaion = async () => {
            await fetch('http://localhost:5000/events?email='+user.email,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                data && data.map(dt => {
                    const item = events.filter(evnt => evnt.eventName === dt.eventName)[0];
                    console.log(item);
                    if(item) dt.photo = item.photo;
                    return dt;
                })
                setUserEvents(data);
            });
        }
        fetchOpertaion();
    }, [user, events]);

    return (
        <>
            <AppBar/>
            <div className="text-center mt-5">
                <BeatLoader
                    size={50}
                    color={"#123abc"}
                    loading={loading}
                />
            </div>
            <Container>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {
                        userEvents && userEvents.map(evnt => 
                        <Card key={evnt._id} bg="light" text="dark" className="m-1" style={{width:'45%'}}>
                            <div className="d-flex justify-content-around align-content-between align-items-start blockquote mb-0 card-body">
                                <div>
                                    <Card.Img style={{width: '130px', height: '150px'}} src={`data:${evnt.photo?.contentType};base64,${evnt.photo?.image}`} />
                                </div>
                                <div className="d-flex flex-column flex-fill">
                                    <h4>{evnt.eventName}</h4>
                                    <h6>{evnt.date}</h6>
                                    <Button variant="danger" className=" align-self-end">Cencel</Button>
                                </div>
                            </div>
                        </Card>)
                    }
                </div>
            </Container>
        </>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.loading,
        events: state.events,
        user: state.user
    }
}
export default connect(mapStateToProps)(VolunteerPortal);