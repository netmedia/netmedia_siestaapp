import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { addSingleEntry } from "../../redux/entries/entriesActions";
import { useDispatch } from "react-redux";

const NewEntry = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  // cleanup //
  useEffect(() => {
    return () => {
      setShowForm(false);
    };
    //eslint-disable-next-line
  }, []);
  // cleanup //

  const payloadData = {
    title: formData.title,
    date: formData.date,
    startTime: formData.startTime,
    endTime: formData.endTime,
    userId: JSON.parse(localStorage.getItem("loginData")).googleId,
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSingleEntry(`http://localhost:3005/entries`, payloadData));
    setShowForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-10 place-items-center justify-between w-6/12 bg-siesta-grey-light px-4 py-8 text-sm rounded-xl'
    >
      <div className='flex flex-col w-full gap-4'>
        <label htmlFor='title' className='text-siesta-blue-light'>
          Title:
        </label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
          value={formData.title}
          type='text'
          name='title'
          id='title'
          className='rounded-xl transition-all outline-1 p-2 focus:outline-1 outline-siesta-blue-light'
        />
      </div>

      <div className='flex flex-col w-full gap-4'>
        <label htmlFor='date' className='text-siesta-blue-light'>
          Date:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          value={formData.date}
          type='date'
          name='date'
          id='date'
          className='rounded-xl p-2'
        />
      </div>

      <div className='flex flex-col w-full gap-4 '>
        <label htmlFor='sleep-start' className='text-siesta-blue-light'>
          Sleep start
        </label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, startTime: e.target.value });
          }}
          value={formData.startTime}
          type='time'
          name='sleep-start'
          id='sleep-start'
          className='rounded-xl p-2'
        />
      </div>

      <div className='flex flex-col gap-4 w-full'>
        <label htmlFor='sleep-end' className='text-siesta-blue-light'>
          Sleep end
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
          value={formData.endTime}
          type='time'
          name='sleep-end'
          id='sleep-end'
          className='rounded-xl p-2'
        />
      </div>

      <div className='flex gap-4 place-items-center justify-between'>
        <button className='cursor:pointer bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light rounded-xl px-4 py-2 text-white font-normal flex items-center  gap-2'>
          Submit <AiFillPlusCircle className='fill-white w-8 h-8' />
        </button>
        <button
          role={"none"}
          onClick={() => {
            setShowForm(false);
          }}
          className='cursor:pointer bg-red-600 rounded-xl px-4 py-2 text-white font-normal flex items-center gap-2'
        >
          Cancel <ImBin />
        </button>
      </div>
    </form>
  );
};

export default NewEntry;
