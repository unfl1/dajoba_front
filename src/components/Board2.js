//자기소개서 목록 위에 추가로 받을 유저 정보

import React, { useState } from 'react';
import Rmboard from './Rmboard';

const Board2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('개발');
  const categories = ['개발', '경영·비즈니스', '마케팅·광고', '디자인', '영업', '고객서비스·리테일', '미디어', '엔지니어링·설계', 'HR', '게임 제작', '금융', '제조·생산', '의료·제약·바이오', '교육', '물류·무역', '식·음료', '법률·법집행기관', '건설·시설', '공공·복지'];



  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <div className="w-64 flex-shrink-0 p-4 ">
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-700 mb-2">
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
        <Rmboard />
        </div>
      </div>
    </div>
  );
}

export default Board2;