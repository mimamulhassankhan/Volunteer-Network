import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { addLoggedinUser } from '../../Redux/VoluteerActions/VolunteerActions';
import { handleSignOut } from './SignOutManager';

const AppBar = ({user, addLoggedinUser}) => {

    const location = useLocation();
    const history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const signOut = () => {
        handleSignOut()
        .then(res => {
            addLoggedinUser(res);
            sessionStorage.removeItem('token');
            history.replace(from);
        })
        .catch(err => console.log(err));
    }
    return (
        <>
           <Navbar className="bg-transparent" variant="light">
               <Container>
                    <Navbar.Brand><Link to={`/`}><Image width={180} src="/logos/Group 1329.png" alt="logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end font-weight-bold">
                        <Navbar.Text>
                            <Link className="nav-link" to={`/`}>Home</Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Nav.Link>Donation</Nav.Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Nav.Link>Events</Nav.Link>
                        </Navbar.Text>
                        <Navbar.Text>
                            <Nav.Link>Blog</Nav.Link>
                        </Navbar.Text>
                        {
                            user.email ?
                            <>
                            <Navbar.Text>
                                <Nav.Link>{user.displayName}</Nav.Link>
                            </Navbar.Text>
                            <Navbar.Text>
                               <Link to={`/dashboard`} className="nav-link">My Events</Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Nav.Link><Button onClick={signOut} className="font-weight-bold" variant="warning">Sign Out</Button></Nav.Link>
                            </Navbar.Text>
                            </>:
                            <>
                            <Navbar.Text>
                               <Link to={`/dashboard`} className="nav-link"><Button className="font-weight-bold" variant="primary">My Registrations</Button></Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Nav.Link href={`/admin`}><Button className="font-weight-bold" variant="secondary">Admin</Button></Nav.Link>
                            </Navbar.Text>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);