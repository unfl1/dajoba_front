import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Board2 from '../components/Board2';

function Recruitment() {
    return (
        <div>
            <Nav />
            <div className="bg-gray-100">
            <div>
                <div className="ml-12 mr-12 mt-10 ">
                    <Board2 />
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Recruitment;