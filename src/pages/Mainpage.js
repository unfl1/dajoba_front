//메인화면

import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import intro from '../assets/intro.png';
import picture1 from '../assets/picture1.png';
import Fourrecruit from '../components/Fourrecruit';
import { Link } from 'react-router-dom';

function Mainpage() {
  return (
    <div className="h-100% w">
      <Nav />
      <div>
        <div className="grid grid-cols-2 bg-gray-100  gap-4">
          <div className="text-center">
            <img src={intro} alt="" className="mt-10 mb-10 h-3/4 w-3/4 inline object-center object-contain"></img>
          </div>
          <div className="grid grid-rows-2">
            <div className="mt-20 mr-20 text-2xl font-black">
              <div>자소서 분석을 기반으로</div>
              <div><span className="text-purple-700">합격 가능성</span>이</div>
              <div>가장 높은 채용공고를 추천받자!</div>
            </div>
            <div className="mt-10 mr-20 text-sm">
              <div>DAJOBA AI 맞춤형 모델은 모든 채용공고를 분석하여 </div>
              <div>나의 자소서와 가장 적합한 채용공고를 추천해주는 서비스를 제공합니다.</div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-purple-100 pr-4 pl-4 ml-64 mr-64 grid grid-cols-3 md:h-1/6 gap-20 rounded ">
          <div className="col-span-1  flex justify-self-end items-center">
            <Link to="/Coverletterlist">
              <button className="bg-white text-purple-600 px-4 py-2 mx-4 rounded font-bold">분석시작</button>
            </Link>
          </div>
          <div className="place-self-center">
            <div>자소서를 분석해</div>
            <div>채용공고와 매칭해 드려요</div>
          </div>
          <img src={picture1} alt="" className="h-40 object-center hidden md:flex justify-self-start items-center space-x-1 mt-6"></img>
        </div>
      </div>
      <Fourrecruit />
      <Footer />
    </div>
  )
}

export default Mainpage;