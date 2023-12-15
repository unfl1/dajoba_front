//홈페이지 약간 소개 느낌

import React from 'react';
import Nav from '../components/Nav';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';

function PrivacyPolicyPage() {
    return(
        <div>
            <Nav />
            <PrivacyPolicy />
            <Footer />
        </div>
    );
}

export default PrivacyPolicyPage;