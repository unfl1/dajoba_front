//회원가입 페이지

import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className=" bg-gray-200 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3 mt-8 mb-8">
        <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <Link to ='/'><h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">DAJOBA</h1></Link>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="id">아이디</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="id" id="id" placeholder="ID" />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="password">비밀번호</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="********" />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" for="confirm">비밀번호 확인</label>
            <input className="w-full bg-gray-100 px-2 py-1 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="********" />
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
          <button type="submit" className="w-full mt-6 bg-purple-600 rounded-lg px-2 py-1 text-lg text-white tracking-wide font-semibold font-sans">회원가입</button>
          <Link to ='/Login'><button type="login" className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-2 py-1 text-lg text-gray-800 tracking-wide font-semibold font-sans">로그인</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Account;