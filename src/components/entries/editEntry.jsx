import { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { updateSingleEntry } from '../../redux/entries/entriesActions';
import { getFromLocal } from '../../utils/localStorage';
import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toastOptions';

const EditEntry = ({ itemToEditID, setShowEditForm }) => {
  const itemToEdit = useSelector((state) =>
    state.entries.entries.find((id) => id.id === itemToEditID)
  );

  const [formData, setFormData] = useState({
    title: itemToEdit.title || '',
    date: itemToEdit.date,
    startTime: itemToEdit.startTime || '',
    endTime: itemToEdit.endTime || '',
    userId: getFromLocal('loginData').googleId,
  });

  const [formErrorState, setFormErrorState] = useState({
    isError: false,
    errorMessage: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => setShowEditForm(false);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formErrorState.isError) {
      toast.error(formErrorState.errorMessage, toastOptions);
    }
  }, [formErrorState]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.startTime === '' || formData.endTime === '') {
      setFormErrorState({
        ...formErrorState,
        isError: true,
        errorMessage: 'please fill out all fields',
      });
    } else {
      dispatch(
        updateSingleEntry(
          `http://localhost:3005/entries/${itemToEdit.id}`,
          formData
        )
      );
      setShowEditForm(false);

      setFormErrorState({
        ...formErrorState,
        isError: false,
        errorMessage: '',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-10 justify-between w-full md:w-11/12 lg:w-2/3 bg-siesta-grey-light px-4 py-8 text-sm rounded-xl'
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
          disabled={true}
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
          onChange={(e) =>
            setFormData({ ...formData, endTime: e.target.value })
          }
          defaultValue={itemToEdit.endTime}
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
          role={'none'}
          onClick={() => {
            setShowEditForm(false);
          }}
          className='cursor:pointer bg-red-700 rounded-xl px-4 py-2 text-white font-normal flex items-center gap-2'
        >
          Cancel <ImCancelCircle className='fill-white w-7 h-7' />
        </button>
      </div>
    </form>
  );
};

export default EditEntry;
