import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../Config';
import Piechart from '../components/Piechart';
import { useSelector } from 'react-redux';

function Matching() {
  const { introid } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const user = useSelector(state => state.user.user);

  const fetchData = useCallback(async () => {
    try {
      const numericIntroId = Number(introid);
      const response = await axios.get(`${API_BASE_URL}users/${user.userid}/match/${numericIntroId}`);
      setData(response.data.matchLists || []); // 서버 응답 데이터 중 matchLists 배열을 상태에 저장
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('데이터를 가져오는 중 오류가 발생했습니다.'); // 오류 메시지 상태에 저장
    }
  }, [introid, user.userid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {error && <p>{error}</p>}

      {/* 데이터가 있을 경우, 한 번만 표시되는 부분 */}
      {Array.isArray(data) && data.length > 0 && (
        <div className="mr-48 ml-48 mb-8 mt-8">
          <div><span className="text-purple-700 font-bold">{data[0].userName}</span>님의 자기소개서 분석 결과</div>
          <div>합격률이 높을 것으로 예상되는 기업들입니다.</div>
        </div>
      )}

      {/* 데이터 목록을 반복하여 렌더링 */}
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <div className="mr-28 ml-28 mb-12 grid grid-cols-3 flex">
              <div className="col-span-1 justify-self-end items-center">
                <div>{item.jobPostingTitle}</div>
                <div>{item.companyName}</div>
              </div>
              <div className="col-span-1 flex justify-self-center items-center h-36">
                <Piechart matchScore={item.matchScore} />
              </div>
              <div className="col-span-1 flex justify-self-right items-center">
              <a href={`/Recruitment/detail/${item.jobPostingId}`} target="_blank" rel="noopener noreferrer">채용 상세보기</a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="ml-24">매칭 결과를 조회중입니다. 잠시만 기다려 주세요.</p> 
      )}
    </div>
  );
}

export default Matching;