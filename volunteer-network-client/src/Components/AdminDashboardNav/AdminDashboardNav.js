import React from 'react';
import { Col, Image, Nav, Row, Tab } from 'react-bootstrap';
import AdminAddService from '../AdminAddService/AdminAddService';
import VolunteerRegisterList from '../VolunteerRegisterList/VolunteerRegisterList';
const AdminDashboardNav = () => {
    return (
        <>
            <Tab.Container defaultActiveKey="volunteerlist">
                <Row className="h-100">
                    <Col sm={3} >
                        <Nav variant="pills" className=" flex-column bg-warning min-vh-100">
                            <Nav.Item className="mx-auto pt-4">
                                <Image width={180} src="/logos/Group 1329.png" alt="Group"/>
                            </Nav.Item>
                            <Nav.Item className="pt-3">
                                <Nav.Link className="text-decoration-none text-white font-weight-bold" eventKey="volunteerlist"><Image width={30} src="/logos/users-alt 1.png" alt="user"/><span className="ml-3">Volunteer Register List</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-decoration-none text-white font-weight-bold" eventKey="addservice"><Image width={30} src="/logos/plus 1.png" alt="services"/><span className="ml-3">Add Event</span></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="volunteerlist">
                            <VolunteerRegisterList/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="addservice">
                            <AdminAddService/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
        </>
    );
};

export default AdminDashboardNav;