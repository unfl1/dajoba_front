import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';

// 필요한 Chart.js 구성 요소를 등록합니다.
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title
);

function Piechart({ matchScore }) {
  // matchScore 데이터를 기반으로 Pie Chart 데이터를 동적으로 생성합니다.
  const data = {
    labels: ['Match Score', 'Remaining'],
    datasets: [
      {
        label: 'Probability',
        data: [matchScore, 100 - matchScore], // matchScore와 나머지를 계산하여 데이터 설정
        backgroundColor: [
          'rgba(102, 0, 204, 0.2)', // 보라색
          'rgba(169, 169, 169, 0.2)', // 회색
        ],
        borderColor: [
          'rgba(102, 0, 204, 1)',
          'rgba(169, 169, 169, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default Piechart;