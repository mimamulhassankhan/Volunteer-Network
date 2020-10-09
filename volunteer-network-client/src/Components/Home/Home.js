import React from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../AppBar/AppBar';
import TopHeader from '../TopHeader/TopHeader';
import VolunteerWorksContainer from '../VolunteerWorksContainer/VolunteerWorksContainer';

const Home = () => {
    return (
        <>
            <Helmet>
                <style>{'body { background-image: url("/images/Mask Group.png"); background-size : 100vw 480px; background-repeat: no-repeat; }'}</style>
            </Helmet>
            <AppBar />
            <TopHeader />
            <VolunteerWorksContainer/>
        </>
    );
};

export default Home;