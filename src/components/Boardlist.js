import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ title, date }) => (
  <tr>
    <td><input type="checkbox" /></td>
    <td>{title}</td>
    <td>{date}</td>
  </tr>
);

const Boardlist = () => {
  const [posts] = useState([
    // 예시 데이터입니다. 실제로는 API를 통해 데이터를 불러와야 합니다.
    { title: '게시글 1', date: '2023-01-01' },
    { title: '게시글 2', date: '2023-01-02' }
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-2">
        <Link to="/Coverletter"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          글쓰기
        </button></ Link>
      </div>
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">선택</th>
            <th className="px-4 py-2">제목</th>
            <th className="px-4 py-2">작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <BoardItem key={index} {...post} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
          수정하기
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default Boardlist;