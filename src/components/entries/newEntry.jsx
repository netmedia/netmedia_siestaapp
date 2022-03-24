import { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { addSingleEntry } from '../../redux/entries/entriesActions';
import { useDispatch, useSelector } from 'react-redux';
import { getFromLocal } from '../../utils/localStorage';
import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toastOptions';

const NewEntry = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    userId: getFromLocal('loginData').googleId,
  });

  const [formErrorState, setFormErrorState] = useState({
    isError: false,
    errorMessage: '',
  });

  const listOfEntries = useSelector((state) => state.entries.entries);

  const dateValidation = (dateInput) => {
    const dateIsPicked = listOfEntries.find((dateValue) => dateValue.date === dateInput);
    if (dateIsPicked) {
      setFormErrorState({
        ...formErrorState,
        isError: true,
        errorMessage: 'You have already submitted an entry on this date!',
      });
    } else {
      setFormData({ ...formData, date: dateInput });
      setFormErrorState({ ...formErrorState, isError: false, errorMessage: '' });
    }
  };

  const timeValidation = (timeInput) => {
    if (!timeInput) {
      setFormErrorState({
        ...formErrorState,
        isError: true,
        errorMessage: 'Please enter time',
      });
    } else {
      setFormErrorState({ ...formErrorState, isError: false, errorMessage: '' });
    }
  };

  useEffect(() => {
    return () => {
      setShowForm(false);
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formErrorState.isError) {
      toast.error(formErrorState.errorMessage, toastOptions);
    }
  }, [formErrorState]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formErrorState.isError) {
      toast.error(formErrorState.errorMessage, toastOptions);
    } else {
      dispatch(addSingleEntry('http://localhost:3005/entries', formData));
      setShowForm(false);
    }
  };

  const currentDate = () => {
    const date = new Date(Date.now()).toISOString().slice(0, 10);

    return date;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-10 justify-center w-full p-5 md:w-11/12 lg:w-2/3 bg-siesta-grey-light px-4 py-8 text-sm rounded-xl'
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
          required
          className='rounded-xl transition-all outline-1 p-2 focus:outline-1 outline-siesta-blue-light'
        />
      </div>

      <div className='flex flex-col w-full gap-4'>
        <label htmlFor='date' className='text-siesta-blue-light'>
          Date:
        </label>
        <input
          onBlur={(e) => {
            dateValidation(e.target.value);
          }}
          type='date'
          name='date'
          max={currentDate(Date.now())}
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
          onBlur={(e) => timeValidation(e.target.value)}
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
          onBlur={(e) => timeValidation(e.target.value)}
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
            setShowForm(false);
          }}
          className='cursor:pointer bg-red-700 rounded-xl px-4 py-2 text-white font-normal flex items-center gap-2'
        >
          Cancel <ImCancelCircle className='fill-white w-7 h-7' />
        </button>
      </div>
    </form>
  );
};

export default NewEntry;
