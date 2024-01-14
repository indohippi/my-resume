// SkillMeter.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from '/styles/SkillMeter.module.css'; // Make sure the path to your CSS file is correct

const SkillMeter = ({ dataPoints, labels }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Years of Experience',
        data: dataPoints,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        grid: {
          circular: true,
          color: 'rgba(255, 255, 255, 0.5)',
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 16,
            family: "'Reactor7', sans-serif",
          },
        },
        ticks: {
          display: false,
          beginAtZero: true,
          max: 10 // Adjust the max value to ensure all data points fit well
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={styles.skillMeter}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillMeter;
