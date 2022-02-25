import UserWidget from "../components/dashboard/userWidget";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsFillCalculatorFill, BsAlarm } from "react-icons/bs";

const Dashboard = () => {
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
    <main>
      <h2 className='font-normal text-xl px-5'>Dashboard</h2>
      <p className='font-light text-sm px-5'>Home / Dashboard</p>
      <div className='flex items-center justify-between gap-8 flex-wrap px-5 py-3'>
        {widgetContent.map((items, key) => {
          return <UserWidget items={items} key={key} />;
        })}
      </div>
    </main>
  );
};

export default Dashboard;
