import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateSingleEntry } from "../../redux/entries/entriesActions";
const EditEntry = ({ itemToEditID, setShowEditForm }) => {
  const itemToEdit = useSelector((state) =>
    state.entries.entries.find((id) => id.id === itemToEditID)
  );

  const dispatch = useDispatch();

  // cleanup //
  useEffect(() => {
    return () => setShowEditForm(false);
    //eslint-disable-next-line
  }, []);
  // cleanup //

  const [formData, setFormData] = useState({
    title: itemToEdit.title || "",
    date: itemToEdit.date || "",
    startTime: itemToEdit.startTime || "",
    endTime: itemToEdit.endTime || "",
  });

  const payloadData = {
    title: formData.title,
    date: formData.date,
    startTime: formData.startTime,
    endTime: formData.endTime,
    userId: JSON.parse(localStorage.getItem("loginData")).googleId,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEditForm(false);
    dispatch(updateSingleEntry(`http://localhost:3005/entries/${itemToEdit.id}`, payloadData));
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
          defaultValue={itemToEdit.title}
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
          type='date'
          name='date'
          id='date'
          defaultValue={itemToEdit.date}
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
          defaultValue={itemToEdit.startTime}
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
          defaultValue={itemToEdit.endTime}
          type='time'
          name='sleep-end'
          id='sleep-end'
          className='rounded-xl p-2'
        />
      </div>

      <div className='flex gap-4 place-items-center justify-between'>
        <button className='cursor:pointer bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light rounded-xl px-4 py-2 text-white font-normal flex items-center  gap-2'>
          Submit
          {/* Submit <AiFillPlusCircle className='fill-white w-8 h-8' /> */}
        </button>
        <button
          role={"none"}
          onClick={() => {
            setShowEditForm(false);
          }}
          className='cursor:pointer bg-red-600 rounded-xl px-4 py-2 text-white font-normal flex items-center  gap-2'
        >
          Cancel
          {/* Cancel <ImBin /> */}
        </button>
      </div>
    </form>
  );
};

export default EditEntry;
