import React, { useState } from 'react';

const Board2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('직군별');
  const categories = ['직군별', '지역별', '산업별'];

  const posts = {
    '직군별': ['개발', '경영·비즈니스', '마케팅·광고', '디자인', '영업', '고객서비스·리테일', '미디어', '엔지니어링·설계', 'HR', '게임 제작', '금융', '제조·생산', '의료·제약·바이오', '교육', '물류·무역', '식·음료', '법률·법집행기관', '건설·시설', '공공·복지'],
    '지역별': ['Post 2-1', 'Post 2-2'],
    '산업별': ['Post 3-1']
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex">
      <div className="w-64 flex-shrink-0 p-4 bg-purple-400">
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2 ">
            조건을 선택해주세요:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-lg font-semibold text-gray-800">
           {selectedCategory}:
        </h2>
        <ul className="list-disc pl-5 mt-2">
          {posts[selectedCategory].map((post, index) => (
            <li key={index} className="text-gray-600">
              {post}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Board2;