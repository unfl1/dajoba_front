//자기소개서 목록 게시판

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ title, date, index, selectedRows, setSelectedRows }) => {
  const handleModifyClick = () => {
    // 수정 로직 추가
    console.log(`수정 중인 항목: ${title}`);
  };

  const handleDeleteClick = () => {
    // 삭제 로직 추가
    console.log(`삭제 중인 항목: ${title}`);
  };

  const handleAnalysisClick = () => {
    // 분석 로직 추가
    console.log(`분석 중인 항목: ${title}`);
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{date}</td>
      <td>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={handleModifyClick}>
          수정하기
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2" onClick={handleDeleteClick}>
          삭제하기
        </button>
      </td>
      <td>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleAnalysisClick}>
          분석하기
        </button>
      </td>
    </tr>
  );
};

const Boardlist = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [posts] = useState([
    { title: '제목을 몇글자로 만들어야 할까요', date: '2023-01-01' },
    { title: '게시글 2', date: '2023-01-02' }
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-2">
        <Link to="/Coverletter">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            글쓰기
          </button>
        </Link>
      </div>
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">제목</th>
            <th className="px-4 py-2">작성일</th>
            <th className="px-4 py-2">작업</th>
            <th className="px-4 py-2">분석</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <BoardItem
              key={index}
              index={index}
              title={post.title}
              date={post.date}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boardlist;