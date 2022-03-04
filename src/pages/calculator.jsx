import React from "react";
import SleepInfo from "../components/calculator/sleepInfo";
import Sidebar from "../components/sidebar/sidebar";
import User from "../components/login/user";

function Calculator() {
  return (
    <main className="flex flex-col items-start ml-80 pt-6">
      <div>
        <Sidebar />
        <div className="xl:pt-20">
          <h2 className="font-normal text-xl px-5">Calculator</h2>
          <p className="font-light text-gray-400 text-sm px-5 py-2">
            Home / Calculator
          </p>
          <User />
        </div>
      </div>
      <div className="ml-[300px] w-full pt-20">
        <SleepInfo />
      </div>
    </main>
  );
}

export default Calculator;