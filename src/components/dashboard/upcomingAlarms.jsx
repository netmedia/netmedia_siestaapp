import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllEntries } from "../../redux/entries/entriesActions";
const UpcomingAlarms = () => {
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

  const currentTime = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();

    return h + ":" + m;
  };

  const compareDateTime = (d, t) => {
    const date1 = new Date(d).toISOString().slice(0, 10);
    const date2 = new Date(Date.now()).toISOString().slice(0, 10);

    return Date.parse(`${date1} ${t}`) >= Date.parse(`${date2} ${currentTime()}`);
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
      <div className='bg-siesta-grey-light rounded-3xl py-4'>
        <p className='text-center font-normal text-xs whitespace-nowrap'>Upcoming alarms</p>
      </div>
      {listOfEntries.map((value, key) => {
        return (
          <div key={key}>
            {compareDateTime(value.date, value.endTime) && (
              <div className='pl-5 flex flex-col gap-4'>
                <div className='pt-1'>
                  <p>{value.title}</p>
                  <p className='text-gray-400 font-light'>{formatDate(value.date)}</p>
                  <p className='text-gray-400 font-light'>{value.endTime}</p>
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
