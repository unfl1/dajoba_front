import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

function Nav() {
  return(
    <div className="mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center p-4 gap-5 ml-20 mt-5 pl-10">
        <Link to="/"><img src={logo} alt="" className="h-10 inline"></img></Link>
        <Link to="/"><span className="self-center text-2xl font-black whitespace-nowrap dark:text-white">DAJOBA</span></Link>
      </div>
      <div className="flex md:flex md:justify-between">
        <ul className="flex gap-10 ml-20 pl-10">
          <Link to="/Openrecruitment"><li>채용</li></Link>
          <Link to="/Recruitment"><li>공채</li></Link>
          <Link to="/Coverletterlist"><li>자기소개서</li></Link>
          <Link to="/Introduce"><li>소개</li></Link>
        </ul>
        <ul className="hidden md:flex items-center space-x-1  gap-5 mr-20 pr-10">
          <li><Link to="/Login">로그인</Link></li>
          <li><Link to="/Account">회원가입</Link></li>
        </ul>
      </div>
    </div>
  )
} 

export default Nav;