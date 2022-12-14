import SideNav from './SideNav';

const Container = ({ children, title }) => {
  return (
    <div className="w-full flex">
      <SideNav />
      <div className="flex w-full p-11">
        <h1 className="mt-14 font-bold text-3xl h-fit">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Container;
