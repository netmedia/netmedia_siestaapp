import { useEffect, useState } from "react";
import axios from "axios";

const EntryList = ({ setShowForm }) => {
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

  return (
    <div className="flex flex-row gap-5 p-5">
      {listOfEntries.map((value, key) => {
        return (
          <div
            key={key}
            className="flex flex-col gap-10 place-items-start justify-between bg-siesta-grey-light px-4 py-8 text-sm rounded-xl"
          >
            <div>Title: {value.title}</div>
            <div>Date: {value.date}</div>
            <div>Sleep start time: {value.startTime}</div>
            <div>Sleep end time:{value.endTime}</div>
            <div>
              Hours of sleep:
              {parseInt(value.endTime) - parseInt(value.startTime)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntryList;