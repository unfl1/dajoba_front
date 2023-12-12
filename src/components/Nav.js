//Nav.js

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/Authactions';
import logo from '../assets/logo.png';

function Nav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const user = useSelector(state => state.user.user); // 유저 정보 가져오기

  const handleLogout = () => {
    dispatch(logout());
    // 필요하다면 로그아웃 후 리다이렉트를 여기에 추가할 수 있습니다.
  };

  return (
    <div className="mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center p-4 gap-5 ml-20 mt-5 pl-10">
        <Link to="/"><img src={logo} alt="" className="h-10 inline"></img></Link>
        <Link to="/"><span className="self-center text-3xl font-black whitespace-nowrap dark:text-white">DAJOBA</span></Link>
      </div>
      <div className="flex md:flex md:justify-between">
        <ul className="flex gap-10 ml-20 pl-10">
          <Link to="/Recruitment"><li>채용</li></Link>          
          <Link to="/Coverletterlist"><li>자기소개서</li></Link>
          <Link to="/Projectintroduce"><li>소개</li></Link>
        </ul>
        <ul className="hidden md:flex items-center space-x-1 gap-5 mr-20 pr-10">
          {isLoggedIn ? (
            <>
              <li>{user.userid}님 안녕하세요!</li>
              <li><button onClick={handleLogout}>로그아웃</button></li>
            </>
          ) : (
            <>
              <li><Link to="/Login">로그인</Link></li>
              <li><Link to="/Account">회원가입</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Nav;