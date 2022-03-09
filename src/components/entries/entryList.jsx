import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSingleEntry, getAllEntries } from "../../redux/entries/entriesActions";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";

const EntryList = ({ setShowEditForm, setItemToEditID }) => {
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

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  const handleDelete = (entryID) => {
    dispatch(
      deleteSingleEntry(
        `http://localhost:3005/entries/${entryID}`,
        `http://localhost:3005/entries?userId=${
          JSON.parse(localStorage.getItem("loginData")).googleId
        }`
      )
    );
  };

  return (
    <div className='flex flex-wrap justify-center md:justify-start gap-5 p-5'>
      {listOfEntries.map((value, key) => {
        return (
          <div key={key} className='flex'>
            <div className='flex flex-col gap-8 place-items-start justify-between bg-siesta-grey-light px-4 py-4 text-sm rounded-xl w-[270px]'>
              <div>
                <p className='text-siesta-blue-light font-bold'>{value.title}</p>
              </div>
              <div>
                <p className='font-bold text-siesta-grey-dark'>{formatDate(value.date)}</p>
              </div>
              <div>
                <p className='font-bold text-siesta-grey-dark'>
                  {value.startTime} - {value.endTime}
                </p>
              </div>
              <div>
                <p
                  className={`${
                    hoursOfSleep(parseInt(value.startTime), parseInt(value.endTime)) < 8
                      ? "font-bold text-red-700"
                      : "font-bold text-green-700"
                  }`}
                >
                  {hoursOfSleep(parseInt(value.startTime), parseInt(value.endTime))} hours of sleep
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <button
                  className='cursor:pointer bg-siesta-blue-light rounded-xl px-4 py-2 text-white font-normal flex items-center gap-2'
                  onClick={() => {
                    setShowEditForm(true);
                    setItemToEditID(value.id);
                  }}
                >
                  Edit <FiEdit />
                </button>
                <button
                  className='cursor:pointer bg-red-700 rounded-xl px-4 py-2 text-white font-normal flex items-center gap-2'
                  onClick={() => {
                    handleDelete(value.id);
                  }}
                >
                  Delete <ImBin />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntryList;
