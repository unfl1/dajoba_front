import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Board = () => {
  const user = useSelector(state => state.user.user);
  const [introName, setIntroName] = useState(''); // 백엔드의 introName 변수와 일치
  const [introContent, setIntroContent] = useState(''); // 백엔드의 introContent 변수와 일치
  const [desireField, setDesireField] = useState(''); // 백엔드의 desireFiled 변수와 일치
  const navigate = useNavigate();

  const categoryNames = {
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

  // 직군(희망분야) 드롭다운 변경 핸들러
  const handleJobChange = (event) => {
    const selectedJobName = event.target.value;
    // 직군 이름을 사용하여 해당 직군의 ID를 찾음
    const selectedJobId = Object.keys(categoryNames).find(key => categoryNames[key] === selectedJobName) || "518";
    setDesireField(selectedJobId);
  };

  const handleTitleChange = (event) => {
    setIntroName(event.target.value); // 백엔드의 introName 변수와 연결
  };

  const handleTextChange = (event) => {
    setIntroContent(event.target.value); // 백엔드의 introContent 변수와 연결
  };

  const handleSave = async () => {
  try {
    // 데이터를 객체로 묶어서 전송
    const postData = new URLSearchParams({
      introName: introName,
      introContent: introContent,
      desireField: desireField,
    });

    // Axios를 사용하여 데이터 전송 (userId를 URL에 포함)
    const response = await axios.post(`${API_BASE_URL}users/${user.userid}/selfintro`, postData);

    console.log('데이터가 성공적으로 전송되었습니다.', response.data);

    // 백엔드에서 반환된 자기소개서 ID를 이용하여 경로 이동
    navigate(`/Mycoverletter/${response.data}`);
  } catch (error) {
    console.error('데이터 전송 중 오류 발생:', error);
  }
};

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[960px]">
        <form>
          <div className="mb-6">
            <label htmlFor="desireField" className="mb-3 block text-base font-medium text-[#07074D]">
              직군(희망분야)
            </label>
            <select
              id="desireField"
              name="desireField"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
              value={categoryNames[desireField]}
              onChange={handleJobChange}
            >
              {Object.entries(categoryNames).map(([key, value]) => (
                <option key={key} value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="introName" className="mb-3 block text-base font-medium text-[#07074D]">
              제목
            </label>
            <input
              type="text"
              id="introName"
              name="introName"
              placeholder="제목을 입력해주세요"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
              value={introName}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="introContent" className="mb-3 block text-base font-medium text-[#07074D]">
              자기소개서 작성
            </label>
            <textarea
              rows="20"
              name="introContent"
              id="introContent"
              placeholder="해당 내용을 입력해주세요"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
              value={introContent}
              onChange={handleTextChange}
            ></textarea>
            <div className="text-right mt-2">
              공백 포함 <span className="text-purple-600">{introContent.length}</span> 자
            </div>
          </div>
          <div>
            <button
              type="button" // 버튼을 폼 전송 버튼으로 지정
              className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none"
              onClick={handleSave}
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Board;
