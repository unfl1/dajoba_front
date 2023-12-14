import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/Authactions';
import logo2 from '../assets/logo2.png';

function Nav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const user = useSelector(state => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    // 로그아웃 후 리다이렉트 가능
  };

  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className="mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center p-4 gap-5 ml-20 mt-5 pl-10">
        <Link to="/">
          <img src={logo2} alt="" className="h-10 inline" />
        </Link>
        <Link to="/">
          <span className="self-center text-3xl font-black whitespace-nowrap dark:text-white">
            DAJOBA
          </span>
        </Link>
      </div>
      <div className="flex md:flex md:justify-between">
        <ul className="flex gap-10 mt-4 ml-20 pl-10">
        <Link to="/Recruitment">
          <li className="relative group font-medium hover:text-pink-400">
            <div className="absolute -top-4 text-xs font-semibold text-pink-500 group-hover:text-pink-400">
              {currentYear}
            </div>
            채용
          </li>
          </Link>
          <Link to="/Coverletterlist">
            <li className="font-medium hover:text-pink-400">자기소개서</li>
          </Link>
          <Link to="/Projectintroduce">
            <li className="font-medium hover:text-pink-400">소개</li>
          </Link>
        </ul>
        <ul className="hidden md:flex items-center space-x-1 gap-5 mr-20 pr-10">
          {isLoggedIn ? (
            <>
              <li>
                <span className="text-purple-600 font-semibold text-lg">
                  {user.userid}
                </span>
                님 안녕하세요!
              </li>
              <li>
                <button className="hover:text-pink-400" onClick={handleLogout}>
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Login" className="hover:text-purple-600">
                  로그인
                </Link>
              </li>
              <li>
                <Link to="/Account" className="hover:text-purple-600">
                  회원가입
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;