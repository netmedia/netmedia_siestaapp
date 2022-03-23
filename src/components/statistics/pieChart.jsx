import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const PieCharts = ({ displayMode }) => {
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

  const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
  };

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
        backgroundColor: listOfEntries.map(() => {
          return String(setBg());
        }),
        borderColor: '#ffffff',
      },
    ],
  };

  function sortFunction(a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  }

  ChartJS.register(ArcElement, Tooltip, Legend);

  return <Pie data={data} />;
};

export default PieCharts;
