import { useEffect, useState } from "react";
import axios from "axios";

const EntryList = ({ setShowForm }) => {
  const [listOfEntries, setListOfEntries] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3005/entries?userId=${
          JSON.parse(localStorage.getItem("loginData")).googleId
        }`
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setListOfEntries(response.data);
        }
      });
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  return (
    <div className="flex flex-wrap gap-5 p-5">
      {listOfEntries.map((value, key) => {
        return (
          <div key={key} className="flex">
            <div className="flex flex-col gap-8 place-items-start justify-between bg-siesta-grey-light px-4 py-4 text-sm rounded-xl w-[250px]">
              <div>
                <p className="text-siesta-blue-light font-bold">
                  {value.title}
                </p>
              </div>
              <div>
                <p className="font-bold text-siesta-grey-dark">
                  {formatDate(value.date)}
                </p>
              </div>
              <div>
                <p className="font-bold text-siesta-grey-dark">
                  {value.startTime} - {value.endTime}
                </p>
              </div>
              <div>
                <p className="font-bold text-red-600">
                  {parseInt(value.endTime) - parseInt(value.startTime)} hours of
                  sleep
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntryList;
