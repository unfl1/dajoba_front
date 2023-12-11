import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React from 'react';
import Matching from '../components/Matching';

function Analyze() {

  return (
    <div>
      <Nav />
      <div className="mr-48 ml-48 mb-8 mt-8">
        <div><span className="text-purple-700 font-bold">회원</span>님의 자기소개서 분석 결과</div>
        <div>합격률이 높을 것으로 예상되는 기업들입니다.</div>
      </div>
      <div>
        <Matching />
      </div>
      <div>
        <Matching />
      </div>
      <div>
        <Matching />
      </div>
      <Footer />
    </div>
  );
};

export default Analyze;