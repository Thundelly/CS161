import React from 'react';
import NavBar from './NavBar';


const Homepage = () => {

    const BASE_URL = '//www.ics.uci.edu/~dillenco/compsci161';

    const onClick = (pageKey) => {
        switch (pageKey) {
            case 'home':
                document.getElementById('cs161').src = BASE_URL;
                break;

            case 'notes-solutions':
                document.getElementById('cs161').src = BASE_URL + '/notes';
                break;

            case 'assignments':
                document.getElementById('cs161').src = BASE_URL + '/hw';
                break;

            case 'class-schedule':
                document.getElementById('cs161').src = BASE_URL + '/sched-w21.html';
                break;

            case 'test-schedule':
                document.getElementById('cs161').src = BASE_URL + '/testing/#testschedule';
                break;

            case 'piazza':
                document.getElementById('cs161').src = '//piazza.com/uc_irvine/winter2021/compsci161'
                break;
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