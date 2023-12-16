import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../Config';
import Piechart from '../components/Piechart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const spinAnimation = `@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

// 스피너 컴포넌트
const Spinner = () => (
  <div style={{
    width: '40px',
    height: '40px',
    border: '5px solid rgba(0, 0, 0, 0.1)',
    borderTop: '5px solid rgba(0, 0, 0, 0.8)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto',
  }} />
);

function Matching() {
  const { introid } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const user = useSelector(state => state.user.user);

  const [firstColor, setFirstColor] = useState('text-rose-500');

  const getOrdinal = (num) => {
    const ordinals = ["1st", "2nd", "3rd", "4th", "5th"];
    return ordinals[num] || `${num + 1}th`;
  };



  const fetchData = useCallback(async () => {
    try {
      const numericIntroId = Number(introid);
      const response = await axios.get(`${API_BASE_URL}/users/${user.userid}/match/${numericIntroId}`);
      setData(response.data.matchLists || []); // 서버 응답 데이터 중 matchLists 배열을 상태에 저장
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('데이터를 가져오는 중 오류가 발생했습니다.'); // 오류 메시지 상태에 저장
    }
  }, [introid, user.userid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const colors = ['text-amber-500', 'text-amber-300'];
    let currentColorIndex = 0;

    const changeColor = () => {
      currentColorIndex = (currentColorIndex + 1) % colors.length;
      setFirstColor(colors[currentColorIndex]);
    };

    const colorInterval = setInterval(changeColor, 1500);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {/* 스타일 태그를 컴포넌트 반환값 내부에 위치 */}
      <style>{spinAnimation}</style>

      {/* 데이터가 있을 경우, 한 번만 표시되는 부분 */}
      {Array.isArray(data) && data.length > 0 && (
        <div className="mr-48 ml-48 mb-8 mt-8"
          style={{
            paddingTop: '190px'
          }}>

          <div><span className="text-purple-700 font-bold">
            {data[0].userName}</span>님의 자기소개서 분석 결과</div>
          <div>합격률이 높을 것으로 예상되는 기업들입니다.</div>
        </div>
      )}

      {/* 데이터 목록을 반복하여 렌더링 */}
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="mr-32 ml-32 mb-12 ">


            <div className={`grid grid-cols-4 gap-2 p-4 ${index === 0 ? "bg-fuchsia-50" : "bg-slate-50"
              } rounded-lg shadow-lg hover:shadow-2xl transition duration-300`}>
              <div className="col-span-8 flex justify-start items-center">
                <div className={`${index === 0 ? "text-4xl" : "text-3xl"} pr-4 ${index === 0 ? `font-bold ${firstColor}` : "font-semibold text-rose-400"}`}>
                  {getOrdinal(index)}
                </div>
              </div>

              <div className="col-span-2 flex flex-col justify-center items-center">
                <img src={item.logoImg} alt="Company Logo" className="w-20 h-20 object-contain border-2 border-black-300 shadow-md" />
                <div className="mt-2 text-lg font-semibold">{item.jobPostingTitle}</div>
                <div className="text-gray-600">{item.companyName}</div>
              </div>
              <div className="flex justify-center items-center">
                <div className="items-center w-36 h-36">
                  <Piechart matchScore={item.matchScore} />
                </div>
                <div className="ml-8">
                  <div className="text-2xl font-bold" style={{
                    color: 'rgba(156, 39, 250, 1)'
                  }}
                  >{`${parseFloat(item.matchScore).toFixed(2)}%`}</div>

                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <Link to={`/Recruitment/detail/${item.jobPostingId}`}
                  className="bg-sky-200 hover:bg-rose-200 font-bold text-gray-500 py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300">
                  채용 상세보기
                </Link>
              </div>

            </div>
          </div>
        ))

      ) : (
        <div className="text-center" style={{ paddingTop: '230px' }}>

          <p>매칭 결과를 조회중입니다. 잠시만 기다려 주세요.</p>
          <Spinner />
        </div>
      )}

      {/* 여분의 하단 공간 */}
      <div style={{ paddingBottom: '250px' }}></div>
    </div>
  );
}


export default Matching;


