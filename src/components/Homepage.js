import React from 'react';
import NavBar from './NavBar';


const Homepage = () => {

    const BASE_URL = '//www.ics.uci.edu/~dillenco/compsci161/';

    const onClick = (pageKey) => {
        switch (pageKey) {
            case 1:
                document.getElementById('cs161').src = BASE_URL;

        }
    };

    return (
        <div>
            <NavBar onClick={ onClick } />
            <iframe
                id='cs161'
                title='cs161'
                src={ BASE_URL }
                frameBorder='0'
                style={ {
                    display: 'flex',
                    width: '100vw',
                    height: '100vh'
                } }
            />
        </div>
    )
};

export default Homepage;