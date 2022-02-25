import React from "react";

const UserWidget = ({ items }) => {
  const { name, count, icon } = items;
  return (
    <div className='bg-gray-200 px-7 py-8 rounded-xl flex flex-col gap-4'>
      <div className='flex items-center justify-between gap-4 px-2'>
        <p className='text-black font-light text-sm'>{name}</p> {icon}
      </div>

      <p className='px-2 text-siesta-blue-light text-base'>{count}</p>
    </div>
  );
};

export default UserWidget;
