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

  return (
    <main className='max-w-6xl flex flex-col gap-8'>
      <div className=''>
        <h2 className='font-normal text-xl px-5'>Dashboard</h2>
        <p className='font-normal text-gray-400 text-xsm px-5'>Home / Dashboard</p>
      </div>
      <div className='flex items-center justify-between gap-8 flex-wrap px-5 py-3'>
        {widgetContent.map((items, key) => {
          return <UserWidget items={items} key={key} />;
        })}
      </div>

      <div className='max-w-6xl px-5 flex flex-wrap gap-4  items-start justify-between'>
        <div>
          <h2 className='font-normal text-xl px-5'>Sleep Entries</h2>
          <p className='font-normal text-gray-400 text-xsm px-5'>Activity</p>
          <Chart displayMode={displayMode} />
        </div>
        <div className='px-2 py-2 bg-siesta-grey-light rounded-full flex gap-4 place-items-center justify-between'>
          <p
            onClick={() => {
              setDisplayMode("weekly");
            }}
            className={
              displayMode === "weekly"
                ? `rounded-full bg-siesta-blue-light text-white px-8 py-3 cursor-pointer`
                : `cursor-pointer px-8 py-3 `
            }
          >
            Weekly
          </p>
          <p
            className={
              displayMode === "monthly"
                ? `rounded-full bg-siesta-blue-light text-white px-8 py-3 cursor-pointer`
                : `cursor-pointer px-8 py-3`
            }
            onClick={() => {
              setDisplayMode("monthly");
            }}
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

export default Dashboard;
