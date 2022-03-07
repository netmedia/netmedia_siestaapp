import { useSelector } from "react-redux";

const HoursOfSleep = () => {
  const listOfEntries = useSelector((state) => state.entries.entries);

  const hoursOfSleep = (time1, time2) => {
    let hours = 0;
    if (time2 > time1) {
      hours = time2 - time1;
    } else {
      hours = time2 + 24 - time1;
    }

    return hours;
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(options);
  };

  return (
    <div className='flex flex-col flex-wrap gap-5 p-5'>
      {listOfEntries.map((value, key) => {
        return (
          <div key={key} className=''>
            <div className='flex gap-8 place-items-start justify-between py-4 text-sm w-[250px]'>
              <div>
                <p className='font-bold text-siesta-grey-dark'>{formatDate(value.date)}</p>
                <p className='font-bold text-siesta-blue-light'>
                  {hoursOfSleep(parseInt(value.startTime), parseInt(value.endTime))} hours of sleep
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HoursOfSleep;
