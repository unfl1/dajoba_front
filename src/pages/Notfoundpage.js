import React from 'react';
import { Link } from 'react-router-dom';

function Notfoundpage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">페이지를 찾을 수 없습니다.</p>
        <p className="text-gray-600 mt-2">요청하신 페이지는 존재하지 않거나, 이동되었을 수 있습니다.</p>
        <Link to="/" className="mt-6 inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default Notfoundpage;