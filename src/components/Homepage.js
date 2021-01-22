import React, { useState } from 'react';
import Iframe from 'react-iframe';
import NavBar from './NavBar';


const Homepage = props => {
    return (
        <div>
            <NavBar />
            <Iframe url='https://www.ics.uci.edu/~dillenco/compsci161/'
                width='100%'
                height='100%'
                display="initial"
                position="absolute"
            />
        </div>
    )
}

export default Homepage;