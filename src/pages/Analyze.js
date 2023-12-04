import Piechart from '../components/Piechart';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React from 'react';

function Analyze() {

  return (
    <div>
      <Nav />
      <div className="mr-48 ml-48 mb-8 mt-8">
        <div><span className="text-purple-700 font-bold">일이삼</span>님의 자기소개서 분석 결과</div>
        <div>합격률이 높을 것으로 예상되는 기업들입니다.</div>
      </div>
      <div className="flex mr-28 ml-28 mb-12  grid grid-cols-3">
        <div className="col-span-1 justify-self-end items-center">
          <div >기업이름</div>
          <div >간단요약</div>
          <div >지역</div>
        </div>
        <div className="col-span-1 flex justify-self-center items-center h-36"><Piechart /></div>
        <div className="col-span-1 flex justify-self-right items-center">채용 상세보기</div>
      </div>
      <div className="mr-28 ml-28 mb-12 grid grid-cols-3 flex ">
      <div className="col-span-1 justify-self-end items-center">
          <div >기업이름</div>
          <div >간단요약</div>
          <div >지역</div>
        </div>
        <div className="col-span-1 flex justify-self-center items-center h-36"><Piechart /></div>
        <div className="col-span-1 flex justify-self-right items-center">채용 상세보기</div>
      </div>
      <div className="mr-28 ml-28 mb-12 grid grid-cols-3 flex ">
      <div className="col-span-1 justify-self-end items-center">
          <div >기업이름</div>
          <div >간단요약</div>
          <div >지역</div>
        </div>
        <div className="col-span-1 flex justify-self-center items-center h-36"><Piechart /></div>
        <div className="col-span-1 flex justify-self-right items-center">채용 상세보기</div>
      </div>
      <Footer />
    </div>
  );
};

export default Analyze;