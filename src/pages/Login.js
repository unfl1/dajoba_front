import {Link} from 'react-router-dom';

function Login() {
    return (
      <div className="mt-10 flex h-screen w-screen flex-col items-center">
        <div className=" p-10 text-3xl font-bold">
        <Link to="/"><span>DAJOBA</span></Link>
        </div>
        <div className="border-2 pl-5 pr-5 pt-6 pb-6">
        <div className="flex w-64 flex-col p-2 pt-6">
          <span className="p-1 text-l font-normal">ID</span>
          <input className="border-2" type="text"></input>
        </div>
        <div className="flex w-64 flex-col p-2 pt-4">
          <span className="p-1 text-l font-normal">Password</span>
          <input className="border-2" type="text"></input>
        </div>
        <div className="mt-5 flex items-center justify-center pt-4 ">
          <button className=" h-12 w-60 rounded bg-purple-600 text-sm font-medium text-white">
            로그인
          </button>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center pb-6">
          <span className="text-sm pb-2">
            아이디가 없으신가요?
          </span>
          <Link to="/Account"><span className="text-sm">
            회원가입
          </span></Link>
        </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center "> 
          <span className="text-sm pt-8">문제가 생긴경우</span>
          <span className="text-sm">DAJOBA7@gmail.com 문의</span>
        </div>
      </div>
    );
  };
  
export default Login;