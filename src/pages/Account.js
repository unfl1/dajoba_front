// Account.js
import React, { useState } from 'react';
import axios from 'axios'; // Axios 라이브러리를 import

import { Link } from 'react-router-dom';

import API_BASE_URL from '../Config'; // Config.js 파일의 경로를 적절히 수정하세요.

function Account() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirm: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password' || name === 'confirm') {
      const passwordValue = name === 'password' ? value : formData.password;
      const confirmPasswordValue = name === 'confirm' ? value : formData.confirm;
      setPasswordMatch(passwordValue === confirmPasswordValue);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const apiUrl = `${API_BASE_URL}/signup`;

    const userData = {
      id: formData.id,
      password: formData.password,
      name: formData.name,
      nick_name: formData.username,
      birth: formData.birth,
      phone_number: formData.phonenumber,
      email: formData.email,
    };

    try {
      const response = await axios.post(apiUrl, userData);

      console.log('사용자가 성공적으로 등록되었습니다!', response.data);
      // 필요한 작업을 수행하거나 사용자를 리디렉션할 수 있습니다.
    } catch (error) {
      console.error('사용자 등록 오류:', error);
      // 오류 메시지를 사용자에게 표시하거나 오류를 처리할 수 있습니다.
    }
  };
  return (
    <div className="bg-gray-200 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3 mt-8 mb-8">
        <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <Link to="/">
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">DAJOBA</h1>
          </Link>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="id">아이디</label>
            <input
              className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none"
              type="text"
              name="id"
              id="id"
              placeholder="ID"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">비밀번호</label>
            <input
              className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="confirm">비밀번호 확인</label>
            <input
              className={`w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none ${passwordMatch ? 'text-green-500' : 'text-red-500'
                }`}
              type="password"
              name="confirm"
              id="confirm"
              placeholder="********"
              onChange={handleChange}
              required
            />
            {!passwordMatch && <p className="text-red-500">불일치합니다</p>}
            {passwordMatch && <p className="text-green-500">일치합니다</p>}
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="name">이름</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="name" id="rname" placeholder="*실명" />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="username">닉네임</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="닉네임" />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="birth">생년월일</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="birth" id="bitrh" placeholder="ex)2000년 1월 2일" />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="phonenumber">전화번호</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="phonenumber" id="phonenumber" placeholder="ex)01012345678" />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="daboja7@gmail.com" />
          </div>
          <button
            type="submit"
            onClick={handleSignUp}
            className="w-full mt-6 bg-purple-600 rounded-lg px-2 py-1 text-lg text-white tracking-wide font-semibold font-sans"
          >
            회원가입
          </button>
          <Link to="/Login">
            <button
              type="login"
              className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-2 py-1 text-lg text-gray-800 tracking-wide font-semibold font-sans"
            >
              로그인
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Account;
