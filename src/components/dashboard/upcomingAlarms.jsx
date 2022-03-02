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

  const compareDateTime = (d, t) => {
    const date1 = new Date(d).toISOString().slice(0, 10);
    const date2 = new Date(Date.now()).toISOString().slice(0, 10);

    return (
      Date.parse(`${date1} ${t}`) >= Date.parse(`${date2} ${currentTime()}`)
    );
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
            {compareDateTime(value.date, value.endTime) && (
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
