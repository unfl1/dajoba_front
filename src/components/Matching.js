//Matching.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // React Router의 useParams를 import
import API_BASE_URL from '../Config';
import Piechart from '../components/Piechart';

function Matching() {
  const [companyData, setCompanyData] = useState([]);

  // React Router의 useParams 훅을 사용하여 URL에서 userid와 introid 값을 가져옵니다.
  const { userid, introid } = useParams();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/users/${userid}/match/${introid}`)
      .then((response) => {
        setCompanyData(response.data);
      })
      .catch((error) => {
        console.error('API 호출 오류:', error);
      });
  }, [userid, introid]); // userid와 introid를 의존성 배열에 추가하여 값이 변경될 때마다 실행

  return (
    <div>
      {companyData.map((company, index) => (
        <div className="mr-28 ml-28 mb-12 grid grid-cols-3 flex" key={index}>
          <div className="col-span-1 justify-self-end items-center">
            <div>{company.title}</div>
            <div>마감일: {company.recruit_deadline}</div>
            <div>지역: {company.working_area}</div>
          </div>
          <div className="col-span-1 flex justify-self-center items-center h-36">
            {/* Pie Chart를 그리는 코드 */}
            <Piechart matchScore={company.match_score} />
          </div>
          <div className="col-span-1 flex justify-self-right items-center">
            {/* 채용 상세보기 링크 */}
            <a href={company.job_posting_url} target="_blank" rel="noopener noreferrer">채용 상세보기</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Matching;