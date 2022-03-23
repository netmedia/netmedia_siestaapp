import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { format, compareAsc } from 'date-fns';
const Charts = ({ displayMode }) => {
  const listOfEntries = useSelector((state) => state.entries.entries);

  listOfEntries.sort(compareAsc);

  const hoursOfSleep = (time1, time2) => {
    let hours = 0;
    if (time2 > time1) {
      hours = time2 - time1;
    } else {
      hours = time2 + 24 - time1;
    }

    return hours;
  };

  const labels = listOfEntries.map((value) => {
    return displayMode === 'average'
      ? format(new Date(value.date), 'dd/MM/yyyy').slice(6, 10)
      : format(new Date(value.date), 'dd/MM/yyyy');
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Display',
        data: listOfEntries.map((value) => {
          return hoursOfSleep(parseInt(value.startTime), parseInt(value.endTime));
        }),
        backgroundColor: '#013A87',
        barThickness: 15,
      },
    ],
  };

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  return <Bar data={data} />;
};

export default Charts;
