<<<<<<< HEAD
import UserWidget from "../components/dashboard/userWidget";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsFillCalculatorFill, BsAlarm } from "react-icons/bs";
import { useState } from "react";
import Chart from "../components/dashboard/chart";

const Dashboard = () => {
  const [displayMode, setDisplayMode] = useState("weekly");
  const widgetContent = [
    { name: "alarms", count: 10, icon: <BsAlarm className='w-10 h-10 fill-siesta-blue-light' /> },
    {
      name: "calculator",
      count: 3,
      icon: <BsFillCalculatorFill className='w-10 h-10 fill-siesta-blue-light' />,
    },
    {
      name: "statistics",
      count: 2,
      icon: <AiOutlineBarChart className='w-10 h-10 fill-siesta-blue-light' />,
    },
  ];

  const defaultMarkupClasses = {
    activeClass: `rounded-full bg-siesta-blue-light text-white px-8 py-3 cursor-pointer`,

    defaultClass: `cursor-pointer px-8 py-3`,
  };

  return (
    <main className='max-w-6xl flex flex-col gap-8'>
      <div className=''>
        <h2 className='font-normal text-xl px-5'>Dashboard</h2>
        <p className='font-light text-gray-400 text-sm px-5 py-2'>Home / Dashboard</p>
      </div>
      <div className='flex items-center justify-between gap-8 flex-wrap px-5 py-3'>
        {widgetContent.map((items, key) => {
          return <UserWidget items={items} key={key} />;
        })}
      </div>

      <div className='max-w-6xl px-5 flex flex-wrap gap-4  items-start justify-between'>
        <div>
          <h2 className='font-normal text-xl'>Sleep Entries</h2>
          <p className='font-light text-gray-400 text-sm py-2'>Activity</p>
          <Chart displayMode={displayMode} />
        </div>
        <div className='px-2 py-2 bg-siesta-grey-light rounded-full flex gap-4 place-items-center justify-between'>
          <p
            onClick={() => {
              setDisplayMode("weekly");
            }}
            className={
              displayMode === "weekly"
                ? defaultMarkupClasses.activeClass
                : defaultMarkupClasses.defaultClass
            }
          >
            Weekly
          </p>
          <p
            onClick={() => {
              setDisplayMode("monthly");
            }}
            className={
              displayMode === "monthly"
                ? defaultMarkupClasses.activeClass
                : defaultMarkupClasses.defaultClass
            }
          >
            Monthly
          </p>
        </div>
        <div className='flex flex-col gap-4 w-3/12 '>
          <div className='bg-siesta-grey-light rounded-3xl  px-14 py-4'>
            <p className='text-center font-normal text-xsm '>Upcoming alarms</p>
          </div>
          <div className='pl-5 flex flex-col gap-4'>
            <div className='pt-5'>
              <p>Medicine</p>
              <p className='text-gray-400 font-light'>05:00 AM</p>
            </div>
            <div className=''>
              <p>Workout</p>
              <p className='text-gray-400 font-light'>07:00 AM</p>
            </div>
            <div className=''>
              <p>Time for school</p>
              <p className='text-gray-400 font-light'>09:30 AM</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
=======
import React from "react";
import Sidebar from "../components/sidebar/sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      Dashboard
    </div>
  );
}
>>>>>>> 5c2c95f19692fc8ecca99ddac29c7428b85e6b51

export default Dashboard;
