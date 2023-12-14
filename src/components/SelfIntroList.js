import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SelfIntroList() {
  const [intros, setIntros] = useState([]);  // 자기소개서 목록을 저장할 상태
  const [page, setPage] = useState(1);       // 현재 페이지
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const pageSize = 10;                       // 페이지당 항목 수

  const user = useSelector(state => state.user.user);

  // 자기소개서 데이터를 가져오는 useEffect
  useEffect(() => {
    fetchIntros();
  }, [user.userid, page]);

  const fetchIntros = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}users/${user.userid}/selfintro/list`, {
        params: {
          page: page - 1,
          size: pageSize,
        }
      });
      const introData = response.data.content.map(selfIntro => ({
        introId: selfIntro.introId,
        introName: selfIntro.introName,
        lastUpdated: selfIntro.lastUpdated,
      }));
      setIntros(introData);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  };

  // 페이지 변경 처리 함수
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // 자기소개서 삭제 함수
  const handleDelete = async (introId) => {
    try {
      await axios.delete(`${API_BASE_URL}users/${user.userid}/selfintro/${introId}`);
      alert('삭제되었습니다.');
      fetchIntros();  // 목록을 다시 불러옵니다.
    } catch (error) {
      console.error('자기소개서 삭제 중 오류 발생:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 자기소개서 목록 렌더링 함수
  const renderIntros = () => {
    return intros.map((selfIntro, index) => (
      <tr key={selfIntro.introId} datanum={index}>
        <td className="border px-4 py-2">{selfIntro.introName}</td>
        <td className="border px-4 py-2">{selfIntro.lastUpdated}</td>
        <td className="border px-4 py-2">
          <a href={`/Mycoverletter/${selfIntro.introId}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              상세보기
            </button>
          </a>
        </td>
        <td className="border px-4 py-2">
          <button
            onClick={() => handleDelete(selfIntro.introId)}
            className="bg-red-500 hover.bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            삭제
          </button>
        </td>
        <td className="border px-4 py-2">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            분석시작
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-end mb-6">
        <Link to="/Newcoverletter">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            글쓰기
          </button>
        </Link>
      </div>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">제목</th>
            <th className="px-4 py-2">작성일</th>
            <th className="px-4 py-2">상세보기</th>
            <th className="px-4 py-2">삭제</th>
            <th className="px-4 py-2">분석시작</th>
          </tr>
        </thead>
        <tbody>
          {renderIntros()}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            이전
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}

export default SelfIntroList;