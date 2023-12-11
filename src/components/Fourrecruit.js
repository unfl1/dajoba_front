import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config'; // 전역 API 기본 URL을 가져옵니다.
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';


function Fourrecruit() {
  const [jobs, setJobs] = useState([]);
  const localImages = [
    work1,
    work2,
    work3,
    work4,
  ];

  useEffect(() => {
    // 전역 API 기본 URL을 사용하여 API 엔드포인트를 업데이트합니다.
    axios.get(`${API_BASE_URL}jobs/latest`)
      .then((response) => {
        // API 응답 데이터에서 "title" 키 값을 가져와 배열로 저장합니다.
        const jobTitles = response.data.map(job => job.title);
        setJobs(jobTitles);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
      });
  }, []);

  return (
    <div className="ml-24 mb-20 mr-24 mt-16">
      <div className="pl-4"># 최신 채용</div>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {jobs.map((title, index) => (
          <div key={index}>
            <img src={localImages[index]} alt="" />
            <p>{title}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fourrecruit;