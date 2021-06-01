import React from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = ({ initiative, motivation, procrastination }) => {
    const data = {
        labels: ['Procrastination', 'Initiative', 'Motivation'],
        datasets: [
            {
                label: '# of Votes',
                data: [procrastination, initiative, motivation],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Pie data={data} />;
};

export default PieChart;