import NavItem from './NavItem';
import { NAV_ITEMS } from '../utils/constants';
import logo from '../images/dev-hire.svg';

const SideNav = () => {
  return (
    <div className="min-w-[300px] max-w-[300px] h-[100vh] flex flex-col gap-10 items-center py-8 border-r">
      <img
        src={logo}
        alt=""
				className='w-36'
      />
      <nav className="flex flex-col gap-10 w-full">
        {NAV_ITEMS.map(({ id, path, label, image }) => (
          <NavItem
						key={id}
            path={path}
            label={label}
            image={image}
          />
        ))}
      </nav>
    </div>
  );
};
export default SideNav;
