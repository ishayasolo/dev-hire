import { nanoid } from "nanoid";
import { FavoriteIcon, SearchIcon } from "../components/Svgs";

export const PATHS = {
  home: 'Home',
  favorites: 'Favorites',
};

export const NAV_ITEMS = [
  {
		id: nanoid(),
    label: PATHS.home,
    path: '/',
    image: <SearchIcon />,
  },
  {
		id: nanoid(),
    label: PATHS.favorites,
    path: '/favorites',
    image: <FavoriteIcon />,
  },
];
