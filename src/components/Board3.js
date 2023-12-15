import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Board3 = () => {
  const { introid } = useParams();  // URL에서 introId를 추출 (문자열 형태)
  const user = useSelector(state => state.user.user);
  const [introName, setIntroName] = useState('');
  const [introContent, setIntroContent] = useState('');
  const [desireField, setDesireField] = useState(0); // 정수로 변경
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // introid를 숫자로 변환하여 요청
        const numericIntroId = Number(introid);
        const response = await axios.get(`${API_BASE_URL}users/${user.userid}/selfintro/${numericIntroId}`);
        const data = response.data;
        setIntroName(data.introName || '');
        setIntroContent(data.introContent || '');
        setDesireField(Number(data.desireField) || 0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [introid, user.userid]);

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

  const handleJobChange = (event) => {
    const selectedJobName = event.target.value;
    const selectedJobId = Object.keys(categoryNames).find(key => categoryNames[key] === selectedJobName);
    setDesireField(Number(selectedJobId) || 0); // 정수로 변경
  };

  const handleTitleChange = (event) => {
    setIntroName(event.target.value || '');
  };

  const handleTextChange = (event) => {
    setIntroContent(event.target.value || '');
  };

  const handleSelfSave = async () => {
    alert('저장되었습니다.');
  };

  const handleSave = async (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    try {
      const putData = new URLSearchParams({
        
        introName,
        introContent,
        desireField,
      });
  
      await axios.put(`${API_BASE_URL}users/${user.userid}/selfintro/${introid}`, putData);
      console.log('데이터가 성공적으로 업데이트되었습니다.');
      
      // 데이터를 저장한 후에 상태(state)를 업데이트하여 현재 페이지를 그대로 유지합니다.
      // 이렇게 하면 데이터를 저장한 후에도 화면은 그대로 유지됩니다.
      // 필요한 경우 상태 업데이트 후에 화면을 다시 그릴 수 있습니다.
      setIntroName(introName);
      setIntroContent(introContent);
      setDesireField(desireField);

      handleSelfSave();
    } catch (error) {
      console.error('데이터 업데이트 중 오류 발생:', error);
      // 여기서 오류를 처리하고 표시할 수 있습니다.
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[960px]">
        <form onSubmit={handleSave}>
                    <div className="mb-6">
            <label htmlFor="desireField" className="mb-3 block text-base font-medium text-[#07074D]">
              직군(희망분야)
            </label>
            <select
              id="desireField"
              name="desireField"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
              value={categoryNames[desireField] || ""}
              onChange={handleJobChange}
            >
              {Object.entries(categoryNames).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
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
              value={introName || ""}
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
              value={introContent || ""}
              onChange={handleTextChange}
            ></textarea>
            <div className="text-right mt-2">
              공백 포함 <span className="text-purple-600">{introContent.length}</span> 자
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none"
            
              저장
            >
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Board3;