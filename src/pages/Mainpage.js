//메인화면
import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import intro from '../assets/intro.png';
import picture1 from '../assets/picture1.png';
import Fourrecruit from '../components/Fourrecruit';
import { Link } from 'react-router-dom';
import adImage from '../assets/taba.png';

function Mainpage() {
  // 광고를 보여줄 지 여부를 결정하는 상태
  const [showAd, setShowAd] = useState(true);

  useEffect(() => {
    // localStorage에서 'hideAd' 값을 불러와서 확인합니다.
    // const hideAd = localStorage.getItem('hideAd');
    // if (hideAd === 'true') {
    //   setShowAd(false); // 광고를 숨깁니다.
    // }
  }, []);

  const handleHideAd = () => {
    setShowAd(false);
    localStorage.setItem('hideAd', 'true');
  };

  const handleCloseAd = () => {
    setShowAd(false);
  };

  return (
    <div className="h-100% w">
      <Nav />
      <div className="relative"  style={{ paddingTop: '190px'}}>
        <div className="grid grid-cols-2 bg-purple-100 w-full gap-4">
          <div className="text-center">
            <img src={intro} alt="" className="mt-10 mb-10 h-3/4 w-3/4 inline object-center object-contain"></img>
          </div>
          <div className="grid grid-rows-2">
            <div className="mt-20 mr-20 text-2xl font-black ">
              <div>자기소개서 분석을 기반으로</div>
              <div><span className="text-purple-700">합격 가능성</span>이</div>
              <div>가장 높은 채용공고를 추천받자!</div>
            </div>
            <div className="mt-10 mr-20 text-sm">
              <div>DAJOBA AI 맞춤형 모델은 모든 채용공고를 분석하여 </div>
              <div>나의 자기소개서와 가장 적합한 채용공고를 추천해주는 서비스를 제공합니다.</div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-200 pr-4 pl-4 mx-auto  grid grid-cols-3 gap-20 rounded w-1/2">
          <div className="col-span-1 flex justify-self-end items-center md:text-right">
            <Link to="/Coverletterlist">
              <button className="bg-white text-purple-600 px-4 py-2 mx-4 rounded font-bold md:mx-0">분석시작</button>
            </Link>
          </div>
          <div className="place-self-center text-center md:text-left">
            <div>자기소개서를 분석해</div>
            <div>채용공고와 매칭해 드려요</div>
          </div>
          <img src={picture1} alt="" className="h-2/3 hidden md:flex space-x-1 mt-6"></img>
        </div>
        {/* 사이드바 광고 */}
        {showAd && (
          <div className="fixed top-40 right-0 p-1 w-60 bg-white shadow-md">
            <a href="https://www.youtube.com/watch?v=cGQI8LjdCKI&feature=youtu.be" target="_blank" rel="noopener noreferrer">
        
              <img src={adImage} alt="Ad" />
              </a>
              <div className="onday_close">
                <div className="onday_input_wrap">
                  <input
                    type="checkbox"
                    data-seq="3"
                    id="pop_chk_3"
                    name="popups_chk"
                    onChange={handleHideAd}
                  />
                  <label htmlFor="pop_chk_3"
                    style={{
                      fontSize: '14px'

                    }}>
                    하루동안 보지 않기
                  </label>
                </div>
                <button className="close_pop" data-seq="3" onClick={handleCloseAd}
                  style={{
                    fontSize: '14px'

                  }}>
                  닫기
                </button>
              </div>
          </div>
        )}
      </div>
      <Fourrecruit />
      <Footer />
    </div>
  )
}

export default Mainpage;
