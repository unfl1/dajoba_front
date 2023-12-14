import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useSelector } from 'react-redux';

function Adduserdata() {
  const userId = useSelector(state => state.user.user); // 여기에서 userId를 구합니다.

  const [formData, setFormData] = useState({
    education: '', // 최종학력 상태
    experience: '', // 경력 상태
  });

  useEffect(() => {
    // 사용자 추가 정보 가져오기
    axios.get(`${API_BASE_URL}/users/${userId}/extra-info`)
      .then(response => {
        setFormData({
          education: response.data.academicBackground || '',
          experience: response.data.experience || '',
        });
      })
      .catch(error => console.error('데이터 가져오기 오류:', error));
  }, [userId]); // userId를 의존성 배열에 추가합니다.

  const handleEducationChange = (event) => {
    setFormData({ ...formData, education: event.target.value });
  };

  const handleExperienceChange = (event) => {
    setFormData({ ...formData, experience: event.target.value });
  };

  const handleSave = async () => {
    await axios.post(`${API_BASE_URL}/users/${userId}/extra-info`, formData)
      .then(response => {
        // 응답 처리, 예: 성공 메시지 표시
      })
      .catch(error => {
        // 오류 처리, 예: 오류 메시지 표시
      });
  };

  return (
    <div>
      <div className="mr-24 ml-24 mt-10 mb-4">
        <div className="mb-2 pl-4">* 최종학력</div>
        <select
          value={formData.education}
          onChange={handleEducationChange} // 이 부분을 수정합니다.
          className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
        >
          <option value="">최종학력 선택</option>
          <option value="고등학교 졸업">고등학교 졸업</option>
          <option value="전문학사(2년제 전문대학)">전문학사(2년제 전문대학)</option>
          <option value="학사(4년제 졸업)">학사(4년제 졸업)</option>
          <option value="석사">석사</option>
          <option value="박사">박사</option>
        </select>
      </div>
      <div className="mr-24 ml-24 mb-4">
        <div className="pl-4 pb-2">* 경력</div>
        <select
          value={formData.experience}
          onChange={handleExperienceChange} // 이 부분을 수정합니다.
          className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
        >
          <option value="">경력 선택</option>
          <option value="1년미만">1년미만</option>
          <option value="1~3년">1~3년</option>
          <option value="3~5년">3~5년</option>
          <option value="5년이상">5년이상</option>
        </select>
      </div>
      <div className="text-center pt-6">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleSave}
        >
          저장
        </button>
      </div>
    </div>
  );
}

export default Adduserdata;