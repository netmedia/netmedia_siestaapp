import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllEntries } from "../../redux/entries/entriesActions";

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

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  const handleDelete = (entryID) => {
    axios
      .delete(`http://localhost:3005/entries/${entryID}`)
      .then((result) => console.log(result))
      .catch((error) => console.warn(error))
      .finally(
        dispatch(
          getAllEntries(
            `http://localhost:3005/entries?userId=${
              JSON.parse(localStorage.getItem("loginData")).googleId
            }`
          )
        )
      );
  };

  return (
    <div className='flex flex-wrap gap-5 p-5'>
      {listOfEntries.map((value, key) => {
        return (
          <div key={key} className='flex'>
            <div className='flex flex-col gap-8 place-items-start justify-between bg-siesta-grey-light px-4 py-4 text-sm rounded-xl w-[250px]'>
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
                <p className='font-bold text-red-600'>
                  {parseInt(value.endTime) - parseInt(value.startTime)} hours of sleep
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <button
                  onClick={() => {
                    setShowEditForm(true);
                    setItemToEditID(value.id);
                  }}
                >
                  Edit
                </button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EntryList;
