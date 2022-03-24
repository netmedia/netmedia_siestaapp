import { format } from 'date-fns';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEntries } from '../../redux/entries/entriesActions';

const LatestEntries = () => {
  const dispatch = useDispatch();
  const listOfEntries = useSelector((state) => state.entries.entries);

  useEffect(() => {
    dispatch(
      getAllEntries(
        `http://localhost:3005/entries?userId=${
          JSON.parse(localStorage.getItem('loginData')).googleId
        }`
      )
    );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='bg-siesta-grey-light rounded-3xl py-4'>
        <p className='text-center font-normal text-xs whitespace-nowrap'>
          Latest Entries
        </p>
      </div>
      {listOfEntries.slice(0, 2).map((value, key) => {
        return (
          <div key={key}>
            <div className='pl-5 flex flex-col gap-4'>
              <div className='pt-1'>
                <p>{value.title}</p>
                <p className='text-gray-400 font-light'>
                  {format(new Date(value.date), 'dd/MM/yyyy')}
                </p>
                <p className='text-gray-400 font-light'>{value.endTime}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LatestEntries;
