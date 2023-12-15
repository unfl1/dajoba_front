//홈페이지 약간 소개 느낌

import React from 'react';
import Nav from '../components/Nav';
import TermsOfUse from '../components/TermsOfUse';
import Footer from '../components/Footer';

function TermsOfUsePage() {
    return(
        <div>
            <Nav />
            <TermsOfUse />
            <Footer />
        </div>
    );
}

export default TermsOfUsePage;