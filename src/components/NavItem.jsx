import { Link } from 'react-router-dom';

const NavItem = ({ path, label, image }) => {
  const isActive = window.location.pathname === path;

  return (
    <Link to={path}>
      <div className="flex items-center gap-10 transition">
        <div
          className={`rounded-lg w-2 h-7 ${
            isActive ? 'bg-customBlue' : 'bg-transparent'
          }`}
        ></div>
        <div className="flex items-center gap-5">
          <div
            className={`rounded-md h-8 w-8 flex justify-center items-center p-3 ${
              isActive ? 'bg-customBlue text-white' : 'bg-transparent'
            }`}
          >
            {image}
          </div>
          <p className={`font-bold text-xl ${!isActive ? 'opacity-40' : ''}`}>
            {label}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NavItem;
