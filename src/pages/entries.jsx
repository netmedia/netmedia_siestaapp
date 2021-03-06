import AddNewBtn from '../components/entries/addNewBtn';
import NewEntry from '../components/entries/newEntry';
import EntryList from '../components/entries/entryList';
import Sidebar from '../components/sidebar/sidebar';
import User from '../components/login/user';
import { useState } from 'react';
import EditEntry from '../components/entries/editEntry';

const Entries = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [itemToEditID, setItemToEditID] = useState('');

  return (
    <main className='flex flex-col items-start w-full md:w-8/12 h-screen md:ml-80 pt-6'>
      <Sidebar />
      <div className='pt-7 md:pt-20 flex flex-col'>
        <h2 className='font-normal text-xl px-5'>Entries</h2>
        <p className='font-light text-gray-400 text-sm px-5 py-2'>
          Home / Entries
        </p>
        <User />
      </div>
      {showForm ? (
        <NewEntry setShowForm={setShowForm} />
      ) : showEditForm ? (
        <EditEntry
          setShowEditForm={setShowEditForm}
          itemToEditID={itemToEditID}
        />
      ) : (
        <>
          <div className='flex flex-col'>
            <AddNewBtn setShowForm={setShowForm} />
            <EntryList
              setShowForm={setShowForm}
              setShowEditForm={setShowEditForm}
              setItemToEditID={setItemToEditID}
              itemToEditID={itemToEditID}
            />
          </div>
        </>
      )}
    </main>
  );
};

export default Entries;
