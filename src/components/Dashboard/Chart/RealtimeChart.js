import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of HTTP',
      data: [
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1
      ],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of FTP',
      data: [
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
      ],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of MODBUS',
      data: [
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
      ],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: '# of SSH',
      data: [
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
      ],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: '# of SNMP',
      data: [
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
      ],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: '# of TELNET',
      data: [
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
      ],
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  animations: {
    tension: {
      duration: 1000,
      easing: 'easeInQuad',
      from: 1,
      to: 0
    }
  },
};

const RealtimeChart = () => (
    <Bar data={data} options={options} />
);

export default RealtimeChart;