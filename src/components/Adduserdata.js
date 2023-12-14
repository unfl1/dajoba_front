import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useSelector } from 'react-redux';

function Adduserdata() {
  const [formData, setFormData] = useState({
    academicBackground: '',
    experience: '',
  });

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    axios.get(`${API_BASE_URL}users/${user.userid}/extrainfo`)
      .then((response) => {
        setFormData({
          academicBackground: response.data.academicBackground || '',
          experience: response.data.experience || '',
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [user.userid]);

  const AcademicBackgroundNames = {
    "HI": "고등학교 졸업",
    "AD": "전문학사(2년제 전문대학)",
    "BD": "학사(4년제 졸업)",
    "MD": "석사",
    "DD": "박사",
    // 나머지 학력도
  };

  const experienceNames = {
    "1": "1년 미만",
    "3": "1~3년",
    "5": "3~5년",
    "6": "5년이상",
    // 나머지 경력도
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const postData = new URLSearchParams(formData);

    await axios.post(`${API_BASE_URL}users/${user.userid}/extrainfo`, postData);

    // 성공 메시지나 리디렉션 등을 수행할 수 있습니다.
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="mr-24 ml-24 mt-10 mb-4">
          <div className="mb-2 pl-4">* 최종학력</div>
          <select
            id="academicBackground"
            name="academicBackground"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
            value={formData.academicBackground}
            onChange={handleChange}
          >
            {Object.entries(AcademicBackgroundNames).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="mr-24 ml-24 mb-4">
          <div className="pl-4 pb-2">* 경력</div>
          <select
            id="experience"
            name="experience"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-500 focus:shadow-md"
            value={formData.experience}
            onChange={handleChange}
          >
            {Object.entries(experienceNames).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
          >
            저장
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adduserdata;