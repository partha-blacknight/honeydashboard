import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Russia', 'China', 'England', 'Germany', 'USA', 'India', 'France', 'Belgium', 'Turkey', 'Pakistan', 'IceLand', 'Greece',
    'Slovakia'],
  datasets: [
    {
      label: '# Live Attack By Country',
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
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const MostAttackByIPChart = () => (
  <Doughnut data={data}/>
);

export default MostAttackByIPChart;
