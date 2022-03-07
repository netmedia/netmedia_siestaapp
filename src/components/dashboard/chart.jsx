import { VictoryBar, VictoryChart } from "victory";
import { useSelector } from "react-redux";
const Chart = ({ displayMode }) => {
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

  function sortFunction(a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  }

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  switch (displayMode) {
    case "latest":
      return (
        <VictoryChart domainPadding={20} width={450}>
          {listOfEntries
            .filter((value, key) => key < 6)
            .map((value, key) => {
              return (
                <VictoryBar
                  key={key}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                  data={[
                    {
                      x: formatDate(value.date),
                      y: hoursOfSleep(parseInt(value.startTime), parseInt(value.endTime)),
                    },
                  ]}
                  style={{
                    data: { stroke: "#166783", strokeWidth: 7 },
                  }}
                />
              );
            })}
        </VictoryChart>
      );

    case "average":
      return (
        <VictoryChart domainPadding={20} width={450}>
          {listOfEntries.map((value, key) => {
            return (
              <VictoryBar
                key={key}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                data={[
                  {
                    x: formatDate(value.date).slice(6, 10),
                    y: hoursOfSleep(parseInt(value.startTime), parseInt(value.endTime)),
                  },
                ]}
                style={{
                  data: { stroke: "#166783", strokeWidth: 7 },
                }}
              />
            );
          })}
        </VictoryChart>
      );

    default:
      return (
        <VictoryChart domainPadding={20} width={450}>
          {listOfEntries
            .filter((value, key) => key < 6)
            .map((value, key) => {
              return (
                <VictoryBar
                  key={key}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                  data={[
                    {
                      x: formatDate(value.date),
                      y: hoursOfSleep(parseInt(value.startTime), parseInt(value.endTime)),
                    },
                  ]}
                  style={{
                    data: {
                      stroke: "#166783",
                      strokeWidth: 7,
                    },
                  }}
                />
              );
            })}
        </VictoryChart>
      );
  }
};

export default Chart;
