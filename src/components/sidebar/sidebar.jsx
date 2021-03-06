import { useState, useEffect } from 'react';
import Navigation from './navigation';
import BurgerNavigation from './burgerNavigation';
import Logout from '../login/logout';
import { GiHamburgerMenu } from 'react-icons/gi';

const menuItems = ['Dashboard', 'Entries', 'Statistics', 'Calculator', 'About'];

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isClicked) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [isClicked]);
  return (
    <>
      <div className='pl-5 md:hidden'>
        <div className='top-2 flex justify-between items-center flex-row'>
          <div className='no-underline text-siesta-blue-light font-regular font-bold text-2xl'>
            Siesta.
          </div>
          <GiHamburgerMenu
            onClick={() => setIsClicked(!isClicked)}
            className={`fixed right-3 top-5 h-7 transform scale-75 cursor-pointer z-50 transition-all ease-linear duration-200 text-4xl text-siesta-blue-light ${
              isClicked ? 'transform rotate-90 fill-white' : ''
            }`}
          />
        </div>
        <div className='ml-[200px]'>
          <BurgerNavigation
            menuItems={menuItems}
            isOpen={isClicked}
            setIsOpen={setIsClicked}
            className='z-10'
          />
        </div>
      </div>
      <header className='hidden md:block p-5 top-5 left-5 bottom-5 w-[270px] overflow-x-hidden rounded-3xl bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light fixed z-1'>
        <main>
          <div className='z-10 flex justify-between items-center flex-col'>
            <div className='no-underline text-white font-regular font-bold text-xl pt-20'>
              Siesta.
            </div>
            <Navigation menuItems={menuItems} />
            <Logout />
          </div>
        </main>
      </header>
    </>
  );
};

export default Sidebar;
