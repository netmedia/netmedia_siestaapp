import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllEntries } from "../../redux/entries/entriesActions";

const EntryList = ({ setShowForm }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries("http://localhost:3005/entries"));
    // eslint-disable-next-line
  }, []);

  const listOfEntries = useSelector((state) => state.entries.entries);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  return (
    <div className='flex flex-row gap-5 p-5'>
      {listOfEntries.map((value, key) => {
        return (
          <div key={key}>
            {value.userId === JSON.parse(localStorage.getItem("loginData")).googleId && (
              <div className='flex flex-col gap-10 place-items-start justify-between bg-siesta-grey-light px-4 py-8 text-sm rounded-xl'>
                <div>Title: {value.title}</div>
                <div>Date: {formatDate(value.date)}</div>
                <div>Sleep start time: {value.startTime}</div>
                <div>Sleep end time:{value.endTime}</div>
                <div>
                  Hours of sleep:
                  {parseInt(value.endTime) - parseInt(value.startTime)}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EntryList;
