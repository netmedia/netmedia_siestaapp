import { VictoryAxis } from "victory";
import { VictoryTheme } from "victory";
import { VictoryBar, VictoryChart } from "victory";

const Chart = ({ displayMode }) => {
  // Will get data from user info, hardcoded for now
  const weeklyData = [
    { day: "mon", hours: 5 },
    { day: "tue", hours: 4 },
    { day: "wed", hours: 8 },
    { day: "thu", hours: 6 },
    { day: "fri", hours: 6.5 },
  ];

  const monthlyData = [
    { week: 1, avgHours: 6 },
    { week: 2, avgHours: 7 },
    { week: 3, avgHours: 6.6 },
    { week: 4, avgHours: 8 },
  ];

  ////////////////////////////////////////////////

  switch (displayMode) {
    case "weekly":
      return (
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis tickValues={[1, 2, 3, 4, 5]} />
          <VictoryAxis dependentAxis tickFormat={(y) => `${y} hours`} />
          <VictoryBar data={weeklyData} x='day' y='hours' />
        </VictoryChart>
      );
    case "monthly":
      return (
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryBar data={monthlyData} x='week' y='avgHours' />
        </VictoryChart>
      );

    default:
      return (
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryBar data={weeklyData} x='day' y='hours' />
        </VictoryChart>
      );
  }
};

export default Chart;
