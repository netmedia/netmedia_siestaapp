import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Charts = ({ displayMode }) => {
  const listOfEntries = useSelector((state) => state.entries.entries);
  listOfEntries.sort(sortFunction);

  const hoursOfSleep = (time1, time2) => {
    let hours = 0;
    if (time2 > time1) {
      hours = time2 - time1;
    } else {
      hours = time2 + 24 - time1;
    }

    return hours;
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  const labels = listOfEntries.map((value) => {
    return displayMode === 'average'
      ? formatDate(value.date).slice(6, 10)
      : formatDate(value.date);
  });

  console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: 'Display',
        data: listOfEntries.map((value) => {
          return hoursOfSleep(
            parseInt(value.startTime),
            parseInt(value.endTime)
          );
        }),
        backgroundColor: '#013A87',
        barThickness: 15,
      },
    ],
  };

  function sortFunction(a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  }

  console.log(data);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  return <Bar data={data} />;
};

export default Charts;
