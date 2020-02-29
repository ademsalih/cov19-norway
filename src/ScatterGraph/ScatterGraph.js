import React from 'react'
import { Scatter } from 'react-chartjs-2';

const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Infections',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: "25.02.20", y: 0 },
        { x: "26.02.20", y: 1 },
        { x: "27.02.20", y: 3 },
        { x: "28.02.20", y: 3 },
        { x: "29.02.20", y: 8 },
      ]
    }
  ]
};

export const ScatterGraph = () => {
    return(
      <div>
        <h2>COVID-19 Norway</h2>
        <Scatter data={data} />
      </div>
    )
}