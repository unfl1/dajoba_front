import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';

function Board2() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}jobs`)
      .then((response) => {
        const jobData = response.data.map(job => ({
          title: job.title,
          job_posting_url: job.jobPostingUrl,
          titleImg: job.titleImg, // 가정: 서버에서 이미지 URL을 받아온다고 가정
        }));
        setJobs(jobData);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
      });
  }, []);

  return (
    <div className="ml-24 mb-20 mr-24 mt-16">
      <div className="pl-4"># 채용</div>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {jobs.map((job, index) => (
          <div key={index}>
            <a href={job.job_posting_url} target="_blank" rel="noopener noreferrer">
              <div>
                <img src={job.titleImg} alt="" /> 
                <p>{job.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board2;