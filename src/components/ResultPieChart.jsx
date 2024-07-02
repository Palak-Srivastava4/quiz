import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultPieChart = ({ correct, incorrect, unattempted }) => {
  const data = {
    labels: ['Correct', 'Incorrect', 'Unattempted'],
    datasets: [
      {
        label: '# of Answers',
        data: [correct, incorrect, unattempted],
        backgroundColor: ['#4caf50', '#f44336', '#ffeb3b'],
        hoverBackgroundColor: ['#45b649', '#e41e25', '#ffe155'],
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    layout: {
      padding: 0,
      height: 40,
    },
  };

  return (
    <div>
      
      <Pie data={data} options={options} />
    </div>
  );
};

export default ResultPieChart;
