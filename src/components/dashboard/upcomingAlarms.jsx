import { useEffect, useState } from "react";
import axios from "axios";

const UpcomingAlarms = ({ setShowForm }) => {
  const [listOfEntries, setListOfEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/entries").then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setListOfEntries(response.data);
      }
    });
  }, []);

  const currentTime = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();

    return h + ":" + m;
  };

  const compareDate = (d1, d2) => {
    const date1 = new Date(d1).toISOString().slice(0, 10);
    const date2 = new Date(d2).toISOString().slice(0, 10);
    return date1 >= date2;
  };

  const compareTime = (t) => {
    return t >= currentTime();
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  return (
    <>
      <div className="bg-siesta-grey-light rounded-3xl py-4">
        <p className="text-center font-normal text-xs whitespace-nowrap">
          Upcoming alarms
        </p>
      </div>
      {listOfEntries.map((value, key) => {
        return (
          <div key={key}>
            {compareDate(value.date, Date.now()) && compareTime(value.endTime) && (
              <div className="pl-5 flex flex-col gap-4">
                <div className="pt-1">
                  <p>{value.title}</p>
                  <p className="text-gray-400 font-light">
                    {formatDate(value.date)}
                  </p>
                  <p className="text-gray-400 font-light">{value.endTime}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default UpcomingAlarms;
