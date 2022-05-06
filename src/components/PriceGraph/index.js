import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './styles.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cost Per Request',
      },
    },
  };
  
  const requestCounts = [100, 1000, 10000, 100000, 1000000];
  const costCounts = ["$1", "$10", "$100", "$1000", "$10000"]

  export const data = {
    labels: costCounts,
    datasets: [
      {
        label: 'Requests',
        data: requestCounts,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

export default function PriceGraph() {
    return <section className={styles.priceGraph}>
      <div className="container">
        <div className="row">
         <Line options={options} data={data} />
        </div>
      </div>
    </section>
}