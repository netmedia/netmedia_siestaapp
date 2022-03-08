import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import Chart from "../components/dashboard/chart";
import User from "../components/login/user";
import HoursOfSleep from "../components/statistics/hoursOfSleep";

const Statistics = () => (
  <main className="flex flex-col items-start md:ml-80 pt-6">
    <div>
      <Sidebar />
      <div className="pt-7 md:pt-20">
        <h2 className="font-normal text-xl px-5">Statistics</h2>
        <p className="font-light text-gray-400 text-sm px-5 py-2">
          Home / Statistics
        </p>
        <User />
      </div>
    </div>
    <div className="flex flex-col flex-wrap justify-center md:flex-row">
      <div className="ml-5 md:ml-[20px] pt-10 flex flex-col">
        <p className="text-sm font-medium uppercase flex justify-center">
          Last 5 entries
        </p>
        <Chart displayMode={"latest"} />
        <p className="text-sm font-medium uppercase flex justify-center">
          Average sleep
        </p>
        <Chart displayMode={"average"} />
      </div>
      <div className="flex flex-col justify-center pt-10 p-5 xl:pl-48">
        <div className="text-sm font-medium uppercase flex justify-center xl:justify-start">
          Hours of sleep{" "}
        </div>
        <div className="">
          <HoursOfSleep />
        </div>
      </div>
    </div>
  </main>
);

export default Statistics;
