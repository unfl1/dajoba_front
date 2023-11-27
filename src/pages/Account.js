import { Link } from 'react-router-dom';

function Account() {
  return (
    <div className="mt-10 flex h-screen w-screen flex-col items-center">
        <div className="border-2 pl-20 pr-20 pt-4 pb-6">
        <div className=" pl-10 pr-10 pt-3 pb-6">
          <Link to="/"><div className="text-center text-3xl font-black ">DAJOBA</div></Link>
          <div className="flex w-64 flex-col p-1 pt-6 pb-2">
            <span className="p-1 text-l font-normal">ID</span>
            <input placeholder='ID' className="border-2 " type="text" ></input>
          </div>
          <div className="flex w-64 flex-col p-1 ">
            <span className="p-1 text-l font-normal">Password</span>
            <input placeholder='한글영어를 포함하여 8글자' className="border-2" type="text"></input>
          </div>
          <div className="flex w-64 flex-col p-1">
            <span className="p-1 text-l font-normal">Password 확인</span>
            <input placeholder='한글영어를 포함하여 8글자' className="border-2" type="text"></input>
          </div>
          <div className="flex w-64 flex-col p-1">
            <span className="p-1 text-l font-normal">이름</span>
            <input placeholder='실명을 입력해주세요' className="border-2" type="text"></input>
          </div>
          <div className="flex w-64 flex-col p-1">
            <span className="p-1 text-l font-normal">닉네임</span>
            <input className="border-2" type="text"></input>
          </div>
          <div className="flex w-64 flex-col p-1">
            <span className="p-1 text-l font-normal">생년월일</span>
            <input placeholder='ex) 1990년 1월 1일' className="border-2" type="text"></input>
          </div>
          <div className="flex w-64 flex-col p-1">
            <span className="p-1 text-l font-normal">전화번호</span>
            <input placeholder='ex) 01012345678' className="border-2" type="text "></input>
          </div>
          <div className="flex w-64 flex-col p-1">
            <span className="p-1 text-l font-normal">E-mail</span>
            <input placeholder='ex) DAJOBA7@gmail.com' className="border-2" type="text"></input>
          </div>

          <div className="mt-5 flex items-center justify-center pt-4 ">
            <button className=" h-12 w-60 rounded bg-purple-600 text-sm font-medium text-white">
              회원가입
            </button>
          </div>
        </div>

      </div>
      <div className="mt-6 flex flex-col items-center justify-center ">
        <span className="text-sm pt-8">문제가 생긴경우 DAJOBA7@gmail.com 문의</span>
      </div>
    </div>
  );
};

export default Account;