import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllEntries } from "../../redux/entries/entriesActions";
import axios from "axios";

const Chart = ({ displayMode }) => {
  const dispatch = useDispatch();
  const listOfEntries = useSelector((state) => state.entries.entries);

  useEffect(() => {
    dispatch(
      getAllEntries(
        `http://localhost:3005/entries?userId=${
          JSON.parse(localStorage.getItem("loginData")).googleId
        }`
      )
    );
    // eslint-disable-next-line
  }, []);

  const hoursOfSleep = (time1, time2) => {
    let hours = 0;
    if (time2 > time1) {
      hours = time2 - time1;
    } else {
      hours = time2 + 24 - time1;
    }

    return hours;
  };

  const latestData = [
    { day: "1", hours: 5 },
    { day: "2", hours: 4 },
    { day: "3", hours: 8 },
    { day: "4", hours: 6 },
    { day: "5", hours: 3 },
    { day: "6", hours: 7 },
    { day: "7", hours: 10 },
  ];

  const averageData = [
    { week: 1, avgHours: 2 },
    { week: 2, avgHours: 7 },
    { week: 3, avgHours: 3 },
    { week: 4, avgHours: 8 },
    { week: 5, avgHours: 4 },
  ];

  ////////////////////////////////////////////////

  switch (displayMode) {
    case "latest":
      return (
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis tickValues={[1, 2, 3, 4, 5]} />
          <VictoryAxis dependentAxis tickFormat={(y) => `${y} h`} />
          <VictoryBar
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={latestData}
            x="day"
            y="hours"
          />
        </VictoryChart>
      );
    case "average":
      return (
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis tickValues={[1, 2, 3, 4, 5]} />
          <VictoryAxis dependentAxis tickFormat={(y) => `${y} h`} />
          <VictoryLine
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={averageData}
            x="week"
            y="avgHours"
          />
        </VictoryChart>
      );
  }
};

export default Chart;
