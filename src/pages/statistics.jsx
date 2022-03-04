import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import Chart from "../components/dashboard/chart";
import User from "../components/login/user";
import HoursOfSleep from "../components/statistics/hoursOfSleep";

function Statistics() {
  return (
    <main className="flex flex-col items-start ml-80 pt-6">
      <div>
        <Sidebar />
        <div className="xl:pt-20">
          <h2 className="font-normal text-xl px-5">Statistics</h2>
          <p className="font-light text-gray-400 text-sm px-5 py-2">
            Home / Statistics
          </p>
          <User />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="ml-[20px] pt-10 flex flex-col">
          <p className="text-sm font-medium">Last 5 entries</p>
          <Chart displayMode={"latest"} />
          <p className="text-sm font-medium">Average sleep</p>
          <Chart displayMode={"average"} />
        </div>
        <div className="flex flex-col pt-10 pl-48">
          <div className="text-sm font-medium">Hours of sleep: </div>
          <div className="">
            <HoursOfSleep />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Statistics;
