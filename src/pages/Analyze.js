import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React from 'react';
import Matching from '../components/Matching';

function Analyze() {
  return (
    <div>
      <Nav />
      <div>
        <Matching />


      </div>


      <div style={{ paddingBottom: '200px' }}>
        {/* 기존 매칭 결과 목록 코드 */}
      </div>
      <Footer />
    </div>
  );
};

export default Analyze;