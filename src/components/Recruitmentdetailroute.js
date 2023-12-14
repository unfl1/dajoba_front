import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../Config';

const Recruitmentdetailroute = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullIntro, setShowFullIntro] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}jobs/detail/${id}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // id가 변경될 때마다 fetchData 함수가 다시 실행됩니다.

  const toggleIntro = () => {
    setShowFullIntro(!showFullIntro);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <img src={data.titleImg} alt="Title" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <h1 className="text-2xl font-bold text-center mt-4">{data.title}</h1>
        <p className="text-gray-600">{data.recruitDeadline ? `채용마감: ${data.recruitDeadline}` : '상시 채용'}</p>
        <p className="italic text-gray-600">{data.workingArea}</p>

        <div className="bg-white shadow-md rounded-lg p-7 mt-10 w-1/2">
          <h2 className="font-semibold text-lg">주요업무</h2>
          <p className="whitespace-pre-line text-gray-700">{data.mainduties}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-7 mt-10 w-1/2">
          <h2 className="font-semibold text-lg">자격요건</h2>
          <p className="whitespace-pre-line text-gray-700">{data.qualification}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-7 mt-10 w-1/2">
          <h2 className="font-semibold text-lg">우대사항</h2>
          <p className="whitespace-pre-line text-gray-700">{data.preferential}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-7 mt-10 mb-6 w-1/2">
          <h2 className="font-semibold text-lg">혜택 및 복지</h2>
          <p className="whitespace-pre-line text-gray-700">{data.benefits}</p>




        </div>
        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center">
            {/* 회사 로고 및 소개 */}
            <img src={data.logoImg} alt="Company Logo" className="w-40 h-40 object-contain border-4 border-fuchsia-300 shadow-lg" />
            <h2 className="text-2xl font-bold  my-4 mb-50 text-black">{data.company}</h2>
            <div style={{
              textAlign: 'center',
              marginRight: '300px',
              marginLeft: '300px',
              
              
            }}>
              {showFullIntro ? (
                <span style={{ fontSize: '14px', fontFamily: 'inherit', color: 'black'}}>
                  {data.groupIntro}
                </span>
              ) : (
                data.groupIntro && (
                  <span style={{ fontSize: '14px', fontFamily: 'inherit', color: 'black'}}>
                    {`${data.groupIntro.substring(0, 100)}...`}
                  </span>
                )
              )}
            </div>


            <button onClick={toggleIntro} className="bg-fuchsia-700 text-white px-4 py-2 rounded hover:bg-fuchsia-300 transition duration-300 mb-20">
              {showFullIntro ? '간략히' : '더보기'}
            </button>
          </div>


          <a
            className="flex flex-col justify-center items-center my-4"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.workingArea)}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              className="shadow-lg rounded-lg mb-2"
              alt="Map with company address"
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(data.workingArea)}&zoom=15&size=700x254&markers=color:red%7C${encodeURIComponent(data.workingArea)}&key=AIzaSyCH64CuMn2UgThSCf0GNm_PYGy4k8bHe3k`}
            />
            <p className="italic text-gray-600">{data.workingArea}</p>
          </a>




        </div>
      </div>
    </div>

  );
};

export default Recruitmentdetailroute;







