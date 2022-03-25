import SleepInfo from '../components/calculator/sleepInfo';
import Sidebar from '../components/sidebar/sidebar';
import User from '../components/login/user';
import { Image } from 'react-bootstrap';
import imgUrl from '../assets/shrek.png';

const Calculator = () => (
  <main className='flex flex-col items-start md:ml-80 pt-6'>
    <div>
      <Sidebar />
      <div className=' pt-7 md:pt-20'>
        <h2 className='font-normal text-xl px-5'>Calculator</h2>
        <p className='font-light text-gray-400 text-sm px-5 py-2'>
          Home / Calculator
        </p>
        <User />
      </div>
    </div>
    <div className='w-full pt-20 flex flex-col md:flex-row'>
      <SleepInfo />
      <div>
        <Image src={imgUrl} alt='shrek' />
      </div>
    </div>
  </main>
);

export default Calculator;
