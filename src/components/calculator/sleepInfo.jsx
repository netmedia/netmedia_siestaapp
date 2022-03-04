import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const SleepInfo = () => {
  const [hours, setHours] = useState(0);
  const [idealHours, setIdealHours] = useState(8);
  const handleSubmit = () => {
    alert(calculateSleepDebt(hours, idealHours));
  };

  function calculateSleepDebt(hours, idealHours) {
    if (hours === idealHours) {
      return "You got the perfect amount of sleep!";
    } else if (hours > idealHours) {
      return "You got more sleep than needed.";
    } else {
      return "You should get more rest.";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 place-items-center justify-between w-6/12 bg-siesta-grey-light px-4 py-8 text-sm rounded-xl"
    >
      <div className="flex flex-col w-full gap-4">
        <label htmlFor="hours" className="text-siesta-blue-light">
          How many hours of sleep did you get?
        </label>
        <input
          onChange={(e) => {
            setHours(e.target.value);
          }}
          value={hours}
          type="number"
          name="hours"
          id="hours"
          className="rounded-xl transition-all outline-1 p-2 focus:outline-1 outline-siesta-blue-light"
        />
      </div>

      <div className="flex flex-col w-full gap-4">
        <label htmlFor="ideal" className="text-siesta-blue-light">
          How much sleep is ideal per night?
        </label>
        <input
          onChange={(e) => setIdealHours(e.target.value)}
          value={idealHours}
          type="number"
          name="ideal"
          id="ideal"
          className="rounded-xl p-2"
        />
      </div>

      <div className="flex gap-4 place-items-center justify-between">
        <button className="cursor:pointer bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light rounded-xl px-4 py-2 text-white font-normal flex items-center  gap-2">
          Calculate <AiFillPlusCircle className="fill-white w-8 h-8" />
        </button>
      </div>
    </form>
  );
};

export default SleepInfo;
