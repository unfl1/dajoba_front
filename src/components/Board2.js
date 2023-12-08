import React, { useState, useEffect } from 'react';
import Rmboard from './Rmboard';
import axios from 'axios';
import API_BASE_URL from '../Config'; // Config.js에서 글로벌 주소 가져오기

const Board2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('개발');
  const [data, setData] = useState([]); // 데이터를 저장할 상태(State)
  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터를 저장할 상태(State)

  const categories = ['개발', '경영·비즈니스', '마케팅·광고', '디자인', '영업', '고객서비스·리테일', '미디어', '엔지니어링·설계', 'HR', '게임 제작', '금융', '제조·생산', '의료·제약·바이오', '교육', '물류·무역', '식·음료', '법률·법집행기관', '건설·시설', '공공·복지'];

  useEffect(() => {
    // REST API 호출 및 데이터를 상태에 저장하는 코드
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/jobs`, {
          params: {
            id: 'job_group', // ID 필드 지정
          },
        });
        const jsonData = response.data;
        setData(jsonData); // 카테고리 정보가 포함된 데이터
      } catch (error) {
        console.error('데이터 가져오기 오류: ', error);
      }
    };

    fetchData(); // 데이터 가져오기
  }, []);

  useEffect(() => {
    // 선택한 카테고리에 따라 데이터 필터링
    const filtered = data.filter((item) => item.category === selectedCategory);
    setFilteredData(filtered);
  }, [selectedCategory, data]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <div className="w-64 flex-shrink-0 p-4">
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-700 pb-8">
            직군별 분류
          </div>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`w-full mb-1 px-4 py-2 text-left ${selectedCategory === category ? 'bg-gray-300' : 'bg-white'} rounded-md border border-gray-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow p-4">
        <div className="text-lg font-semibold text-gray-800 ml-8">
          {selectedCategory}
        </div>
        <div className="pt-10">
          {/* 필터링된 데이터와 선택한 카테고리를 Rmboard 컴포넌트에 전달 */}
          <Rmboard data={filteredData} selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

export default Board2;