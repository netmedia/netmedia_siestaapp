import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";

const SleepInfo = () => {
  const [timeSheet, setTimeSheet] = useState({
    hours: 0,
    idealHours: 0,
  });

  const sleepInfoToastOptions = { ...toastOptions, position: "top-center", theme: "light" };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateSleepDebt(timeSheet.hours, timeSheet.idealHours);
  };

  function calculateSleepDebt(hours, idealHours) {
    if (hours === idealHours) {
      return toast.success("You got the perfect amount of sleep!", sleepInfoToastOptions);
    } else if (hours > idealHours) {
      return toast.warn("You got more sleep than needed.", sleepInfoToastOptions);
    } else {
      return toast.error("You should get more rest.", sleepInfoToastOptions);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-10 justify-center md:justify-start w-full md:w-[500px] bg-siesta-grey-light py-8 text-sm rounded-xl'
    >
      <div className='flex flex-col w-full gap-4 px-4'>
        <label htmlFor='hours' className='text-siesta-blue-light'>
          How many hours of sleep did you get?
        </label>
        <input
          onChange={(e) => {
            setTimeSheet({ ...timeSheet, hours: Number(e.target.value) });
          }}
          value={timeSheet.hours}
          type='number'
          name='hours'
          id='hours'
          className='rounded-xl transition-all outline-1 p-2 focus:outline-1 outline-siesta-blue-light'
        />
      </div>

      <div className='flex flex-col w-full gap-4 px-4'>
        <label htmlFor='ideal' className='text-siesta-blue-light'>
          How much sleep is ideal per night?
        </label>
        <input
          onChange={(e) => {
            setTimeSheet({ ...timeSheet, idealHours: Number(e.target.value) });
          }}
          value={timeSheet.idealHours}
          type='number'
          name='ideal'
          id='ideal'
          className='rounded-xl p-2'
        />
      </div>

      <div className='flex gap-4 justify-center'>
        <button className='cursor:pointer bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light rounded-xl px-4 py-2 text-white font-normal flex items-center gap-2'>
          Calculate <AiFillPlusCircle className='fill-white w-8 h-8' />
        </button>
      </div>
    </form>
  );
};

export default SleepInfo;
