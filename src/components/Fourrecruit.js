import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';

function Fourrecruit() {
  const [jobs, setJobs] = useState([]);
  const [color, setColor] = useState('text-red-300'); // 색상 상태 추가

  useEffect(() => {
    // 채용 데이터 가져오기
    axios.get(`${API_BASE_URL}jobs/latest`)
      .then((response) => {
        const jobData = response.data.map(job => ({
          title: job.title,
          id: job.id,
          titleImg: job.titleImg,
        }));
        setJobs(jobData);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
      });

    // 색상 변경 로직
    const colors = ['text-red-300', 'text-blue-300', 'text-green-300', 'text-yellow-300', 'text-pink-300', 'text-purple-300', 'text-indigo-300', 'text-teal-300'];
    const intervalId = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 1000); // 1.5초마다 색상 변경

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 해제
  }, []);

  return (
    <div className="ml-24 mb-20 mr-24 mt-16">
      <div className={`pl-4 text-2xl font-bold ${color}`}>실시간 Hot! 채용</div>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {jobs.map((job, index) => (
          <div key={index}>
            <div>
              <a href={`/Recruitment/detail/${job.id}`} target="_blank" rel="noopener noreferrer">
                <img className="w-full"
                  style={{
                    borderRadius: '5px',
                    padding: '5px 5px',


                  }}
                  src={job.titleImg} alt={job.title} />
                <p className="font-bold text-xl mb-2"
                  style={{
                    fontSize: '1rem',
                    color: 'black',
                    textAlign: 'center'
                    
                  }}>{job.title}</p>
              </a>
            </div>

          </div>
        ))} 
      </div>
    </div>
  );
}

export default Fourrecruit;
