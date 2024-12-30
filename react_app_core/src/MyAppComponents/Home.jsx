import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Background } from './Background';
import { Profile } from './Profile';

export const Home = () => {

    return (
        <>
            {/* main Component */}
            <Row className='justify-content-center m-3'>
                <Container className='ba mx-auto p-0 row-container'>

                    {/* background */}
                    <Row className='justify-content-center m-3'>
                        <Background />
                        {/* <div className="col-md-12">
                            </div>
                            profile image
                            <div className="col-md-12">

                                <Profile />
                            </div> */}
                    </Row>
                </Container>
            </Row>
        </>
    )
}
