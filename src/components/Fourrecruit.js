import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config'; // 전역 API 기본 URL을 가져옵니다.

function Fourrecruit() {
  const [jobs, setJobs] = useState([]);
  const localImages = [
    '/assets/work1.jpg',
    '/assets/work2.jpg',
    '/assets/work3.jpg',
    '/assets/work4.jpg'
  ];

  useEffect(() => {
    // 전역 API 기본 URL을 사용하여 API 엔드포인트를 업데이트합니다.
    axios.get(`${API_BASE_URL}/api/jobs/latest`)
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
      });
  }, []);

  return (
    <div className="ml-24 mb-20 mr-24 mt-16">
      <div className="pl-4"># 최신 채용</div>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {jobs.map((job, index) => (
          <div key={index}>
            <img src={localImages[index]} alt="" />
            <p>{job.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fourrecruit;