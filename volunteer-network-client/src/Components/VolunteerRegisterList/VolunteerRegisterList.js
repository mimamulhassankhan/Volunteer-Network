import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';

const VolunteerRegisterList = () => {
    const [registrationList, setRegistrationList] = useState([]);
    
    
    useEffect(() => {
        const fetchOpertaion = async () => {
            await fetch('https://stormy-peak-51840.herokuapp.com/getRegistrations',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => setRegistrationList(data))
            .catch(err => console.log(err.message));
        }
        fetchOpertaion();
    }, []);

    const handleDeleteEntry = id => {
        const fetchOpertaion = async () => {
            await fetch('https://stormy-peak-51840.herokuapp.com/deleteRegistration/'+id,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.status === 'success'){
                    const remaining = registrationList.filter(reg => reg._id !== id);
                    setRegistrationList(remaining);
                }
            })
        }
        fetchOpertaion();
    }

    return (
        <>
            <h1 className="pt-3 mb-5">Registered Volunteer List</h1>
            <Table className="text-center" striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registed Date</th>
                        <th>Volutering Item</th>
                        <th>Actions</th>                 
                    </tr>
                </thead>
                <tbody>
                    {
                        registrationList.map((registration => 
                            <tr key={registration._id}>
                                <td>{registration.name}</td>
                                <td>{registration.email}</td>
                                <td>{registration.date}</td>
                                <td>{registration.eventName}</td>
                                <td>
                                    <Button onClick={() => handleDeleteEntry(registration._id)} variant="danger"><Image width={20} src="/logos/trash-2 9.png" alt="Delete"/> </Button>
                                </td>
                            </tr>))
                    }
                </tbody>
                </Table>
        </>
    );
};

export default VolunteerRegisterList;