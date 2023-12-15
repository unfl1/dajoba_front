//채용 페이지

import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Board2 from '../components/Board2';

function Recruitment() {
    return (
        <div>
            <Nav />
            <div className="bg-gray-100">            
                <div className="ml-12 mr-12 pt-4 ">
                    <Board2 />
                </div>                
                
            <Footer />
            </div>
        </div>
    );
}

export default Recruitment;