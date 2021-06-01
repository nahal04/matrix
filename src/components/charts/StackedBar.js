import { Bar } from 'react-chartjs-2';
import useReport from '../../hooks/use-report';

const StackedBar = () => {
  const report = useReport();

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  const { total, finished, deadlineCrossed } = report;

  const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: '# of Tasks Failed',
        data: deadlineCrossed,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Tasks Created',
        data: total,
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Tasks Finished',
        data: finished,
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return <Bar height={220} data={data} options={options} />
};

export default StackedBar;