import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../Config'; // config.js에서 API_BASE_URL을 가져옵니다.


// 게시판 항목을 표시하는 컴포넌트입니다.
const BoardItem = ({ title, date, index, selectedRows, setSelectedRows }) => {
  const handleDeleteClick = () => {
    const deleteUrl = `${API_BASE_URL}/users/{userid}/self-intro/{introid}`; // API URL 구조에 맞게 수정해야 합니다.
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    // Axios를 사용하여 API 요청을 보냅니다.
    axios
      .delete(deleteUrl, requestOptions)
      .then(response => {
        if (response.status === 204) {
          setSelectedRows(selectedRows.filter(selectedIndex => selectedIndex !== index));
        } else {
          console.error('삭제 요청이 실패하였습니다.');
        }
      })
      .catch(error => {
        console.error('삭제 요청 중 오류가 발생하였습니다.', error);
      });
  };

  return (
    <tr className="hover:bg-gray-100 transition duration-200 ease-in-out">
      <td className="px-4 py-3">{title}</td>
      <td className="px-4 py-3">{date}</td>
      <td className="px-4 py-3">
        <Link to= '/Board3'>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded ml-2">
            상세보기
          </button>
        </Link>
      </td>
      <td className="px-4 py-3">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
          onClick={handleDeleteClick}
        >
          삭제
        </button>
      </td>
      <td className="px-4 py-3">
        <Link to="/Analyze">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded ml-2">
            분석 Start!
          </button>
        </Link>
      </td>
    </tr>
  );
};

// 게시판 목록 컴포넌트입니다.
const Boardlist = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [posts, setPosts] = useState([]);

  // useEffect를 사용하여 컴포넌트가 마운트될 때 API에서 데이터를 가져옵니다.
  useEffect(() => {
    // 백엔드 API에서 게시판 데이터를 가져옵니다.
    axios.get(`${API_BASE_URL}/users/{userid}/self-intro/{introid}`) // "your-api-endpoint-here"를 실제 API 엔드포인트로 교체해야 합니다.
      .then(response => {
        // API 응답이 객체 배열인 경우 "intro_name"을 제목(title)으로, "last_updated"를 작성일(date)로 사용합니다.
        setPosts(response.data);
      })
      .catch(error => {
        console.error('게시판 데이터를 불러오는 중 오류가 발생하였습니다.', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <Link to="/Newcoverletter">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            글쓰기
          </button>
        </Link>
      </div>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-3">제목</th>
            <th className="px-4 py-3">작성일</th>
            <th className="px-4 py-3">상세보기</th>
            <th className="px-4 py-3">삭제하기</th>
            <th className="px-4 py-3">분석</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <BoardItem
              key={index}
              index={post.userid} // "userid"가 데이터의 고유 식별자인 경우 사용합니다.
              title={post.intro_name}
              date={post.last_updated}
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