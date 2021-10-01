import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Russia', 'China', 'England', 'Germany', 'USA', 'India', 'France', 'Belgium', 'Turkey', 'Pakistan', 'IceLand', 'Greece',
    'Slovakia'],
  datasets: [
    {
      label: '# Live Attack By Country',
      data: [2400, 1900, 3000, 5000, 2050, 3500, 4500, 7000, 8500, 9000, 10500, 1500, 7900],
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

const MostAttackByCountryChart = () => (
  <Doughnut data={data}/>
);

export default MostAttackByCountryChart;
