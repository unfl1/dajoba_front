import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['66%', '34%'],
  datasets: [
    {
      label: 'Probability',
      data: [66, 34],
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

function Piechart() {
  return <Pie data={data} />;
}

export default Piechart;