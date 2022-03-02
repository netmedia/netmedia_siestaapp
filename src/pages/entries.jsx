import AddNewBtn from "../components/entries/addNewBtn";
import NewEntry from "../components/entries/newEntry";
import EntryList from "../components/entries/entryList";
import Sidebar from "../components/sidebar/sidebar";
import { useState } from "react";

const Entries = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="flex flex-col items-center w-8/12 h-screen ml-80 pt-6 ">
      <Sidebar />
      {showForm ? (
        <NewEntry setShowForm={setShowForm} />
      ) : (
        <>
          <AddNewBtn setShowForm={setShowForm} />
          <EntryList setShowForm={setShowForm} />
        </>
      )}
    </main>
  );
};

export default Entries;
