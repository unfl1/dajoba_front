import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import work1 from '../assets/work1.jpg';
import work2 from '../assets/work2.jpg';
import work3 from '../assets/work3.jpg';
import work4 from '../assets/work4.jpg';

function Fourrecruit() {
  const [jobs, setJobs] = useState([]);
  const localImages = [work1, work2, work3, work4];

  useEffect(() => {
    axios.get(`${API_BASE_URL}jobs/latest`)
      .then((response) => {
        const jobData = response.data.map(job => ({
          title: job.title,
          job_posting_url: job.jobPostingUrl,
        }));
        setJobs(jobData);
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
            <a href={job.job_posting_url} target="_blank" rel="noopener noreferrer">
              <div>
                <img src={localImages[index]} alt="" />
                <p>{job.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fourrecruit;