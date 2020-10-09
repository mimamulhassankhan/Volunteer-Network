import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import WorkItem from '../WorkItem/WorkItem';

const VolunteerWorksContainer = ({loading, events, }) => {

    return (
        <>
        <div className="text-center mt-5">
            <BeatLoader
            size={50}
            color={"#123abc"}
            loading={loading}
            />
        </div>
        <Container className="bg-transparent d-flex flex-wrap justify-content-center align-items-center">
            {
                events.map(evnt => <WorkItem data={evnt} key={evnt._id}></WorkItem>)
            }
        </Container>
        </>
    );
};

const mapStateToProps = state =>  {
    return {
        loading: state.loading,
        events : state.events
    }
}

export default connect(mapStateToProps)(VolunteerWorksContainer);