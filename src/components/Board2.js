
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';

function Board2() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 20;

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // 선택한 카테고리 ID
  const [selectedCategory, setSelectedCategory] = useState(518); // 기본값은 '개발' 카테고리

  const categoryNames = {
    "": "전체",
    "518": "개발",
    "507": "경영·비즈니스",
    "523": "마케팅",
    "511": "디자인",
    "530": "영업",
    "510": "고객서비스·리테일",
    "524": "미디어",
    "513": "엔지니어링·설계",
    "517": "HR",
    "959": "게임 제작",
    "508": "금융",
    "522": "제조·생산",
    "515": "의료·제약·바이오",
    "532": "물류·무역",
    "10057": "식·음료",
    "521": "법률·법진행기관",
    "509": "건설·시설",
    "514": "공공·복지"
    // 나머지 직군들도 여기에 추가
  };


  useEffect(() => {
    const categoryURL = `${API_BASE_URL}jobs/${selectedCategory}`
    axios.get(categoryURL, {
      params: {
        page: page - 1,
        size: pageSize
      }
    })
      .then((response) => {
        const jobData = response.data.content.map(job => ({
          title: job.title,          
          id: job.id,
          titleImg: job.titleImg,
        }));
        setJobs(jobData);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
      });
  }, [page, selectedCategory]);

  const handleNextTen = () => {
    setMaxPageNumberLimit(maxPageNumberLimit + 10);
    setMinPageNumberLimit(minPageNumberLimit + 10);
  };

  const handlePrevTen = () => {
    setMaxPageNumberLimit(maxPageNumberLimit - 10);
    setMinPageNumberLimit(minPageNumberLimit - 10);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = minPageNumberLimit + 1; i <= Math.min(maxPageNumberLimit, totalPages); i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          style={{
            marginRight: '30px',
            color: 'violet',
            backgroundColor: page === i ? '#D8BFD8' : '#E6E6FA',
            border: '2px solid #DDA0DD',
            borderRadius: '5px',
            padding: '5px 5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          {i}
        </button>
      );
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          onClick={handlePrevBtn}
          disabled={page === 1}
          style={{
            marginRight: '30px',
            color: 'black',
            borderRadius: '5px',
            padding: '5px 5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          이전
        </button>
        {minPageNumberLimit >= 1 && (
          <button onClick={handlePrevTen} style={{ /* 스타일 */ }}>

          </button>
        )}
        {pageNumbers}
        {totalPages > maxPageNumberLimit && maxPageNumberLimit < totalPages && (
          <button onClick={handleNextTen} style={{ /* 스타일 */ }}>

          </button>
        )}
        <button
          onClick={handleNextBtn}
          disabled={page === totalPages}
          style={{
            marginRight: '30px',
            color: 'black',
            borderRadius: '5px',
            padding: '5px 5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          다음
        </button>
      </div>
    );
  }

  const handlePrevBtn = () => {
    setPage(prevPage => prevPage - 1);
    if ((page - 1) % 10 === 0) {
      handlePrevTen();
    }
  };

  const handleNextBtn = () => {
    setPage(nextPage => nextPage + 1);
    if (page + 1 > maxPageNumberLimit) {
      handleNextTen();
    }
  };

  return (
    <div className="ml-24 mb-20 mr-24 mt-6">
      {/* 카테고리 선택 옵션 */}
      <div>
        <label
          htmlFor="categorySelect"
          style={{
            paddingTop: '3px',
            marginRight: '15.5px',
            fontSize: '24px',
            lineHeight: '29px',
            fontWeight: '700',
            color: '#333'
          }}
        >
          {categoryNames[selectedCategory]}
        </label>

        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            position: 'relative',
            border: '1px solid #e1e2e3',
            borderRadius: '9999px',
            backgroundColor: '#fff',
            width: '21px',
            height: '26px',
            WebkitTransition: '.3s',
            transition: '.3s',
            flexShrink: '0'
           

          }}
        >
          <option value="">전체</option>
          <option value="518">개발</option>
          <option value="507">경영·비즈니스</option>
          <option value="523">마케팅</option>
          <option value="511">디자인</option>
          <option value="530">영업</option>
          <option value="510">고객서비스·리테일</option>
          <option value="524">미디어</option>
          <option value="513">엔지니어링·설계</option>
          <option value="517">HR</option>
          <option value="959">게임 제작</option>
          <option value="508">금융</option>
          <option value="522">제조·생산</option>
          <option value="515">의료·제약·바이오</option>
          <option value="532">물류·무역</option>
          <option value="10057">식·음료</option>
          <option value="521">법률·법진행기관</option>
          <option value="509">건설·시설</option>
          <option value="514">공공·복지</option>

        </select>
      </div>
      <div className="grid grid-cols-4 mt-5 pt-6 gap-5">
        {jobs.map((job, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <a href={`/Recruitment/detail/${job.id}`} target="_blank" rel="noopener noreferrer">
              <img className="w-full"
                style={{


                }} src={job.titleImg} alt={job.title} />
              <div className="px-6 py-4">
                <p className="font-bold text-1/2 mb-2"
                  style={{
                    textAlign: 'center'
                  }}>{job.title}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="pagination pb-6" >
        {renderPageNumbers()}
      </div>
    </div>
  );
}

export default Board2;
