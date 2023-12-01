//로그인 페이지

import {Link} from 'react-router-dom';

function Login() {
    return (
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: "24rem", height: "32rem" }}>
          <div className="w-72 ">
            
            <Link to ="/"><h1 className="text-xl font-semibold text-center">DAJOBA</h1></Link>
      
           
            <form className="mt-6">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">ID</label>
                <input
                  type="ID"
                  placeholder="ID를 입력해주세요"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="*********"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />{" "}
                <label htmlFor="remember" className="mr-auto text-xs font-semibold">
                  Remember for 30 days
                </label>
                <div className="text-xs font-semibold text-purple-700">
                  Forgot password?
                </div>
              </div>
              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  Sign in
                </button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img
                    className="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt="Google Icon"
                  />
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
export default Login;