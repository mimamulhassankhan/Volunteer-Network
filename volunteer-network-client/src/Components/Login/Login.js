import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { addLoggedinUser } from '../../Redux/VoluteerActions/VolunteerActions';
import { defaulftLoggingFramework, handleGoogleSignIn } from './LoginManager';

const Login = ({user, addLoggedinUser}) => {

    defaulftLoggingFramework();

    const location = useLocation();
    const history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        handleGoogleSignIn()
        .then(res => {
            addLoggedinUser(res);
            storeAuthToken();
        })
        .catch(err => console.log(err));
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <>
            <div className="text-center mt-5">
                <Image width={180} src="/logos/Group 1329.png" alt="Group" />
                <div className="p-5 border border-dark bg-white w-50 mx-auto mt-4 rounded" style={{ minHeight: ''}}>
                    <h1 className="font-weight-bold">Login</h1>
                    <Button onClick={handleGoogle} variant="outline-secondary" className="mt-5 btn btn-block rounded-pill"><Image width={22} src="/logos/Google.png" alt="Google"/><span>Sign In With Google</span></Button>
                    <p className="mt-3">Don't have an account? <a className="text-primary" role="button" href="/#">Crate an account.</a></p>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser: addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);