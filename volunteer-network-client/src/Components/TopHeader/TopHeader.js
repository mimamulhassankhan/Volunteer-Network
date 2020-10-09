import React from 'react';
import { Button, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <>
            <Jumbotron className="text-center bg-transparent">
                <h1 className="font-weight-bold">I GROW BY HELPING PEOPLE IN NEED!</h1>
                <InputGroup size="lg"  className="pt-4 w-25 mx-auto">
                    <FormControl
                    placeholder="Search..."
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        </>
    );
};

export default TopHeader;