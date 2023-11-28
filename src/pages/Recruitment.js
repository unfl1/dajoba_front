import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Board2 from '../components/Board2';

function Recruitment() {
    return(
        <div>
            <Nav />
            <div className="ml-24 mr-24">
            <Board2 />
            </div>
            <Footer />
        </div>
    );
}

export default Recruitment;