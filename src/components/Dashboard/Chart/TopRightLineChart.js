import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# HTTP',
      data: [
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1
      ],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: '# FTP',
      data: [
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1
      ],
      fill: false,
      backgroundColor: 'rgb(154, 162, 235)',
      borderColor: 'rgba(154, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
    {
      label: '# SSH',
      data: [
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1
      ],
      fill: false,
      backgroundColor: 'rgb(134, 224, 235)',
      borderColor: 'rgba(134, 224, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
    {
      label: '# MODBUS',
      data: [
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1
      ],
      fill: false,
      backgroundColor: 'rgb(254, 102, 219)',
      borderColor: 'rgba(254, 102, 219, 0.2)',
      yAxisID: 'y-axis-2',
    },
    {
      label: '# SNMP',
      data: [
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1
      ],
      fill: false,
      backgroundColor: 'rgb(126, 178, 201)',
      borderColor: 'rgba(126, 178, 201, 0.2)',
      yAxisID: 'y-axis-2',
    },
    {
      label: '# TELNET',
      data: [
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1,
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1, 
        Math.floor(Math.random() * 10000) + 1
      ],
      fill: false,
      backgroundColor: 'rgb(194, 240, 235)',
      borderColor: 'rgba(194, 240, 235, 0.2)',
      yAxisID: 'y-axis-2',
    }
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const TopRightLineChart = () => (
  <Line data={data} options={options}/>
);

export default TopRightLineChart;
