import { lazy } from 'react';
import { ICONS } from '../../utils/constants';
import './Icon.css';

const BubbleChat = lazy(() => import('../../assets/svg/bubble_chat.svg?react'));
const Create = lazy(() => import('../../assets/svg/create.svg?react'));
const Explore = lazy(() => import('../../assets/svg/explore.svg?react'));
const Heart = lazy(() => import('../../assets/svg/heart.svg?react'));
const Home = lazy(() => import('../../assets/svg/home.svg?react'));
const Instagram = lazy(() => import('../../assets/svg/instagram.svg?react'));
const Menu = lazy(() => import('../../assets/svg/menu.svg?react'));
const Search = lazy(() => import('../../assets/svg/search.svg?react'));

const icons = {
  [ICONS.BUBBLE_CHAT]: <BubbleChat />,
  [ICONS.CREATE]: <Create />,
  [ICONS.EXPLORE]: <Explore />,
  [ICONS.HEART]: <Heart />,
  [ICONS.HOME]: <Home />,
  [ICONS.INSTAGRAM]: <Instagram />,
  [ICONS.MENU]: <Menu />,
  [ICONS.SEARCH]: <Search />,
};

export function Icon({ name }) {
  return <div className={`Icon Icon--${name}`}>{icons[name]}</div>;
}
