import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterToEvent from './Components/RegisterToEvent/RegisterToEvent';
import NotFound from './Components/NotFound/NotFound';
import VolunteerPortal from './Components/VolunteerPortal/VolunteerPortal';
import AdminDashboardNav from './Components/AdminDashboardNav/AdminDashboardNav';
import { connect } from 'react-redux';
import { fetchEventsData, fetchEventsFailure, fetchEventsSuccess } from './Redux/VoluteerActions/VolunteerActions';

function App({ fetchEventsData, fetchEventsSuccess, fetchEventsFailure}) {

  useEffect(() => {
        const fetchOpertaion = async () => {
          fetchEventsData();
          await fetch('http://localhost:5000/getEvents')
          .then(res => res.json())
          .then(data =>{
              fetchEventsSuccess(data);
            })
            .catch(err => {
              fetchEventsFailure(err.message);
            });
          }
          fetchOpertaion();
  }, [fetchEventsData, fetchEventsSuccess, fetchEventsFailure]);

  return (
    <>
    <Router>
      <Helmet>
        <style>{`body { background-color: '#E5E5E5'}`}</style>
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/event/:id">
          <RegisterToEvent />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <VolunteerPortal />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <AdminDashboardNav/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/:user">
          <VolunteerPortal />
        </PrivateRoute>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

const mapStateToProps = state =>  {
  return {
    loading: state.loading,
    events : state.events
  }
}

const mapDispatchToProps = {
  fetchEventsData : fetchEventsData,
  fetchEventsSuccess : fetchEventsSuccess,
  fetchEventsFailure : fetchEventsFailure
}

export default connect(mapStateToProps, mapDispatchToProps)(App);