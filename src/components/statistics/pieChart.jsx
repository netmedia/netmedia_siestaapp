import { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { getAllEntries } from '../../redux/entries/entriesActions';

const PieCharts = ({ displayMode }) => {
  const listOfEntries = useSelector((state) => state.entries.entries);
  listOfEntries.sort(sortFunction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllEntries(
        `http://localhost:3005/entries?userId=${
          JSON.parse(localStorage.getItem('loginData')).googleId
        }`
      )
    );

    //eslint-disable-next-line
  }, []);

  function sortFunction(a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  }

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
    return displayMode === 'this-year'
      ? format(new Date(value.date), 'dd/MM/yyyy').slice(6, 10)
      : format(new Date(value.date), 'dd/MM/yyyy');
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

  ChartJS.register(ArcElement, Tooltip, Legend);

  return <Pie data={data} />;
};

export default PieCharts;
