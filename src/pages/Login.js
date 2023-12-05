import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import { login, logout } from '../redux/actions/Authactions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const isLoggedIn = useSelector(state => state.user.isAuthenticated);
  const [user, setUser] = useState({ username: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();

    const testUsername = 'test';
    const testPassword = '1234';

    if (user.username === testUsername && user.password === testPassword) {
      dispatch(login({ username: user.username, isAuthenticated: true }));
      console.log('로그인 성공');
      navigate('/'); // 홈 화면으로 리다이렉트
    } else {
      console.error('로그인 실패');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    console.log('로그아웃 성공');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      {!isLoggedIn && (
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: "24rem", height: "32rem" }}>
            <div className="w-72 ">
              <Link to="/"><h1 className="text-xl font-semibold text-center">DAJOBA</h1></Link>
              <form className="mt-6" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">ID</label>
                  <input
                    type="ID"
                    name="username"
                    placeholder="ID를 입력해주세요"
                    onChange={handleChange}
                    value={user.username}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="*********"
                    onChange={handleChange}
                    value={user.password}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <h2>로그인 성공!</h2>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;