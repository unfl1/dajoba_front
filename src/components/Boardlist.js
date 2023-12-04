//자기소개서 목록 게시판

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({ title, date, index, selectedRows, setSelectedRows }) => {

  // 삭제 로직 추가
  // BoardItem 컴포넌트 안에 있는 handleDeleteClick 함수를 업데이트합니다.
  const handleDeleteClick = () => {
    // 삭제 요청을 보낼 URL과 요청 옵션을 설정합니다.
    const deleteUrl = `/api/posts/${index}`; // 예를 들어, '/api/posts/:id' 형태의 API 엔드포인트로 가정합니다.
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    // 삭제 요청을 보냅니다.
    fetch(deleteUrl, requestOptions)
      .then(response => {
        if (response.ok) {
          // 요청이 성공하면 클라이언트 상태를 업데이트하여 UI에서 해당 항목을 삭제합니다.
          setSelectedRows(selectedRows.filter(selectedIndex => selectedIndex !== index));
        } else {
          // 요청이 실패한 경우, 적절한 오류 처리를 수행합니다.
          console.error('삭제 요청이 실패하였습니다.');
        }
      })
      .catch(error => {
        console.error('삭제 요청 중 오류가 발생하였습니다.', error);
      });
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{date}</td>
      <td>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2" onClick={handleDeleteClick}>
          삭제
        </button>
      </td>
      <td>
        <Link to ="/Analyze"><button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2">
          분석 Start!
        </button></Link>
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
      <table className="table-auto w-full text-center whitespace-no-wrap">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">제목</th>
            <th className="px-4 py-2">작성일</th>
            <th className="px-4 py-2">삭제하기</th>
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