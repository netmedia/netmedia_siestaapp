import UserWidget from "../components/dashboard/userWidget";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsFillCalculatorFill } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";
import { useState } from "react";
import Chart from "../components/dashboard/chart";
import UpcomingAlarms from "../components/dashboard/upcomingAlarms";
import Sidebar from "../components/sidebar/sidebar";
import User from "../components/login/user";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  const [displayMode, setDisplayMode] = useState("latest");
  const widgetContent = [
    {
      name: "Entries",
      icon: <MdOutlineEventNote className="w-10 h-10 fill-siesta-blue-light" />,
    },
    {
      name: "Calculator",
      icon: (
        <BsFillCalculatorFill className="w-10 h-10 fill-siesta-blue-light" />
      ),
    },
    {
      name: "Statistics",
      icon: <AiOutlineBarChart className="w-10 h-10 fill-siesta-blue-light" />,
    },
  ];

  const defaultMarkupClasses = {
    activeClass: `rounded-full bg-siesta-blue-light text-white px-8 py-3 cursor-pointer`,

    defaultClass: `cursor-pointer px-8 py-3`,
  };

  return (
    <main className="flex flex-col items-start w-8/12 h-screen md:ml-80 pt-6">
      <div className="max-w-6xl flex flex-col gap-8 mr-0">
        <div>
          <Sidebar />
        </div>
        <div lg={6} className="md:pt-20">
          <div className="">
            <h2 className="font-normal text-xl px-5">Dashboard</h2>
            <p className="font-light text-gray-400 text-sm px-5 py-2">
              Home / Dashboard
            </p>
            <User />
          </div>
          <div className="flex flex-wrap items-center gap-5 px-5 py-3">
            {widgetContent.map((items, key) => {
              return <UserWidget items={items} key={key} />;
            })}
          </div>

          <div className="px-5 xl:pt-10 lg:pt-5 flex flex-wrap xl:gap-48 lg:gap-10 items-start">
            <div>
              <h2 className="font-normal text-xl">Sleep Entries</h2>
              <p className="font-light text-gray-400 text-sm py-2">Activity</p>
              <div className="text-xs px-5 py-2 bg-siesta-grey-light rounded-full flex place-items-center justify-between">
                <p
                  onClick={() => {
                    setDisplayMode("latest");
                  }}
                  className={
                    displayMode === "latest"
                      ? defaultMarkupClasses.activeClass
                      : defaultMarkupClasses.defaultClass
                  }
                >
                  Last 5 entries
                </p>
                <p
                  onClick={() => {
                    setDisplayMode("average");
                  }}
                  className={
                    displayMode === "average"
                      ? defaultMarkupClasses.activeClass
                      : defaultMarkupClasses.defaultClass
                  }
                >
                  Average
                </p>
              </div>
              <Chart displayMode={displayMode} />
            </div>
            <div className="flex flex-col w-[200px] lg:pt-24 md:pt-5">
              <UpcomingAlarms />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
