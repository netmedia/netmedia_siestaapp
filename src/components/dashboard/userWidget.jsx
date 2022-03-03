const UserWidget = ({ items }) => {
  const { name, icon } = items;
  return (
    <div className="bg-siesta-grey-light px-14 py-8 rounded-3xl flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4 px-2">
        <p className="text-black font-light text-xl">{name}</p> {icon}
      </div>
    </div>
  );
};

export default UserWidget;
