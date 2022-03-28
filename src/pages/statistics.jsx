import Sidebar from '../components/sidebar/sidebar';
import BarCharts from '../components/dashboard/barChart';
import User from '../components/login/user';
import PieCharts from '../components/statistics/pieChart';

const Statistics = () => (
  <main className='flex flex-col items-center md:items-start md:ml-80 pt-6'>
    <div>
      <Sidebar />
      <div className='pt-7 md:pt-20'>
        <h2 className='font-normal text-xl px-5'>Statistics</h2>
        <p className='font-light text-gray-400 text-sm px-5 py-2'>
          Home / Statistics
        </p>
        <User />
      </div>
    </div>
    <div className='flex flex-col flex-wrap justify-center md:flex-row'>
      <div className='ml-0 md:ml-[30px] pt-10 flex flex-col'>
        <p className='text-sm font-medium uppercase flex justify-center pb-5'>
          Last 5 entries
        </p>
        <div className='md:pb-5'>
          <BarCharts displayMode={'latest'} />
        </div>
        <div className=''>
          <PieCharts displayMode={'latest'} />
        </div>
      </div>
      <div className='ml-0 md:ml-[30px] pt-10 flex flex-col md:pl-5'>
        <p className='text-sm font-medium uppercase flex justify-center md:pb-5'>
          This Year
        </p>
        <BarCharts displayMode={'this-year'} />
        {/* <PieCharts displayMode={'this-year'} /> */}
      </div>
    </div>
  </main>
);

export default Statistics;
