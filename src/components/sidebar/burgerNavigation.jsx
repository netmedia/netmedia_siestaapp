import Navigation from "./navigation";
import Logout from "../login/logout";

const BurgerNavigation = ({ isOpen, menuItems, setIsOpen }) => {
  return (
    <main
      className={`${
        !isOpen ? "translate-x-full" : "translate-x-0"
      } top-0 transform translate fixed left-0 m-0 p-0 bg-gradient-to-b from-siesta-blue-dark to-siesta-blue-light md:hidden w-screen transition duration-300 ease-in-out flex-col justify-center items-center h-screen z-40`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="pl-16 no-underline text-white font-regular font-bold text-lg pt-32">
        <div className="pl-10 text-3xl text-white">Siesta.</div>
        <Navigation
          menuItems={menuItems}
          classes="flex flex-col h-full w-full justify-center items-center"
        />
        <div className="pl-10">
          <Logout />
        </div>
      </div>
    </main>
  );
};

export default BurgerNavigation;
