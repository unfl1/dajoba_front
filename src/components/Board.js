import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../components/Checkbox';
import { useSelector } from 'react-redux';

const Board = () => {
  const user = useSelector(state => state.user.user);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (checkboxName) => {
    const updatedCheckboxes = selectedCheckboxes.includes(checkboxName)
      ? selectedCheckboxes.filter(name => name !== checkboxName)
      : [...selectedCheckboxes, checkboxName];
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const endpoint = `/users/${user.userid}/self-intro`;
    const fullUrl = API_BASE_URL + endpoint;

    axios.post(fullUrl, { title, text, selectedCheckboxes })
      .then((response) => {
        console.log('데이터가 성공적으로 전송되었습니다.', response.data);
        navigate('/Coverletterlist');
      })
      .catch((error) => {
        console.error('데이터 전송 중 오류 발생:', error);
      });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="mb-6">직군(희망분야)</div>
        <Checkbox checkboxNames={['개발', '경영·비즈니스', '마케팅·광고', '디자인', '영업', '고객서비스·리테일', '미디어', '엔지니어링·설계', 'HR', '게임 제작', '금융', '제조·생산', '의료·제약·바이오', '교육', '물류·무역', '식·음료', '법률·법집행기관', '건설·시설', '공공·복지']} selectedCheckboxes={selectedCheckboxes} onCheckboxChange={handleCheckboxChange} />
        <div className="mb-5">
          <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
            제목
          </label>
          <textarea rows="1" name="title" id="title" placeholder="제목을 입력해주세요" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md" value={title} onChange={handleTitleChange}></textarea>
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
            자기소개서 작성
          </label>
          <textarea rows="20" name="message" id="message" placeholder="해당 내용을 입력해주세요" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md" value={text} onChange={handleTextChange}></textarea>
          <div className="text-right mt-2">
            공백 포함 <span className="text-purple-600">{text.length}</span> 자
          </div>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={handleSave}>
            저장
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;