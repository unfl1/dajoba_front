import React, { useState, useEffect, useMemo } from 'react';
import Rmboard from './Rmboard';
import axios from 'axios';
import API_BASE_URL from '../Config';

const Board2 = () => {
  const categoryMap = useMemo(() => ({
    518: '개발',
    507: '경영·비즈니스',
    523: '마케팅·광고',
    511: '디자인',
    530: '영업',
    510: '고객서비스·리테일',
    524: '미디어',
    513: '엔지니어링·설계',
    517: 'HR',
    959: '게임 제작',
    508: '금융',
    522: '제조·생산',
    515: '의료·제약·바이오',
    10101: '교육',
    532: '물류·무역',
    10057: '식·음료',
    521: '법률·법집행기관',
    509: '건설·시설',
    514: '공공·복지'
  }), []);

  const [selectedCategory, setSelectedCategory] = useState(518); // 초기값을 518로 설정
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}jobs`, {
          params: {
            id: selectedCategory,
          },
        });
        const jsonData = response.data;
        setData(jsonData);
      } catch (error) {
        console.error('데이터 가져오기 오류: ', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
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
          {Object.entries(categoryMap).map(([categoryValue, categoryName], index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(categoryValue)}
              className={`w-full mb-1 px-4 py-2 text-left ${selectedCategory === categoryValue ? 'bg-gray-300' : 'bg-white'} rounded-md border border-gray-300`}
            >
              {categoryName}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow p-4">
        <div className="text-lg font-semibold text-gray-800 ml-8">
          {categoryMap[selectedCategory]}
        </div>
        <div className="pt-10">
          <Rmboard data={filteredData} selectedCategory={categoryMap[selectedCategory]} />
        </div>
      </div>
    </div>
  );
}

export default Board2;