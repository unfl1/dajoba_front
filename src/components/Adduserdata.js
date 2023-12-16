import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useSelector } from 'react-redux';
import defalutImage from '../assets/picture1.png';
import bubble from '../assets/speech-bubbles.svg'

function Adduserdata() {
  const [formData, setFormData] = useState({
    academicBackground: '',
    experience: '',
    profilePicture: null,
  });

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/users/${user.userid}/extrainfo`)
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
    if (name === 'profilePicture') {
      // 파일 입력인 경우 파일 객체를 저장합니다.
      if (event.target.files.length) {
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: event.target.files[0],
        }));
      }
    } else {
      // 다른 입력 필드인 경우
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const postData = new URLSearchParams(formData);

    await axios.post(`${API_BASE_URL}/users/${user.userid}/extrainfo`, postData);

    // 성공 메시지나 리디렉션 등을 수행할 수 있습니다.
  };

  return (
    <div className=" "  style={{
      paddingTop: '170px'
    }}>
      <form onSubmit={handleSave}>
        <div className="mr-24 ml-24 mt-10 mb-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full overflow-hidden  w-25 h-24 border border-gray-300">
              {formData.profilePicture ? (
                <img src={URL.createObjectURL(formData.profilePicture)} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <img src={defalutImage} alt=" " className="w-full h-full object-cover" />
              )}

            </div>
            <span className="text-purple-600 font-semibold text-lg">
                  {user.userid}
                </span>
            <div className="mt-6">
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor="profilePicture"
                className="cursor-pointer hover:bg-fuchsia-400 text-black py-2 px-7 rounded  border border-gray-300 "

              >
                프로필 사진 변경
              </label>

            </div>
          </div>

          <div class="mb-5 "
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                borderRadius: '12px',
                backgroundColor: 'hsla(225, 5%, 46%, 0.05)',
              }}>
              <img src={bubble} width="51" height="26" alt="경력/학력 추가 안내" />
              <span class=" pl-4"
              style={{
                marginRight: '16px',
              }}>
                 나에게 맞는 채용공고를 찾을 수 있게   
                <strong style={{ color: 'rgba(156, 39, 250, 1)' }}> 학력 / 경력을 추가</strong>하고 
                <strong style={{ color: 'rgba(156, 39, 250, 1)'}}> 이력서를 완성</strong>해 주세요.
              </span>
            </div>

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

