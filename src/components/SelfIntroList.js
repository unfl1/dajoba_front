import React, { useState, useEffect, useCallback } from 'react'; // useCallback 추가
import axios from 'axios';
import API_BASE_URL from '../Config';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import detailImg from '../assets/상세.png'
import deleteImg from '../assets/삭제.png'
import analyzeImg from '../assets/분석.png'

function SelfIntroList() {
  const [intros, setIntros] = useState([]);  // 자기소개서 목록을 저장할 상태
  const [page, setPage] = useState(1);       // 현재 페이지
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const pageSize = 10;                       // 페이지당 항목 수

  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();

  const navigateToAnalyze = (introId) => {
    const analyzeRoute = `/Analyze/${introId}`;
    navigate(analyzeRoute); // 페이지 이동
  };

  // useCallback을 사용하여 fetchIntros 함수 메모이제이션
  const fetchIntros = useCallback(async () => {
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
  }, [user.userid, page]); // 의존성 배열에 user.userid와 page 추가

  // 자기소개서 데이터를 가져오는 useEffect
  useEffect(() => {
    fetchIntros();
  }, [fetchIntros]); // useEffect에서 fetchIntros 함수를 의존성으로 추가

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

  const handleDetail = (introId) => {
    navigate(`/Mycoverletter/${introId}`);
  };



  // 자기소개서 목록 렌더링 함수
  const renderIntros = () => {
    return intros.map((selfIntro, index) => (
      <tr key={selfIntro.introId} datanum={index}>
        <td className="border px-4 py-2">{selfIntro.introName}</td>
        <td className="border px-4 py-2">{selfIntro.lastUpdated}</td>
        <td className="border px-4 py-2">

          <div className="flex flex-row items-center justify-center">
            <button
              onClick={() => handleDetail(selfIntro.introId)}
              className=" hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <img src={detailImg} alt="상세보기" />

            </button>

            <button
              onClick={() => handleDelete(selfIntro.introId)}
              className=" hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
              <img src={deleteImg} alt="삭제" />
            </button>

            <button
              onClick={() => navigateToAnalyze(selfIntro.introId)}
              className=" hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
            >
              <img src={analyzeImg} alt=" " />

            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto p-4" style={{
      width: '70%',

      justifyContent: 'center'
    }}
    >
      <div className="flex items-center justify-end mb-6">
        <Link to="/Newcoverletter">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            자기소개서 작성
          </button>
        </Link>
      </div>
      <table className="table-auto " style={{
        width: '90%',

        justifyContent: 'center'
      }}>
        <thead>
          <tr>
            <th className="px-4 py-2">제목</th>
            <th className="px-4 py-2">작성일</th>
            <th className="px-4 py-2 ">
              <span className="text-blue-500">상세보기</span>
              <span className="mx-2"> </span>
              <span className="text-red-500">삭제</span>
              <span className="mx-2"> </span>
              <span className="text-green-500">분석시작</span>
            </th>
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