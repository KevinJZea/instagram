import { Suspense, lazy } from 'react';
import { ICONS } from '../../utils/constants';
import './Icon.css';

const BubbleChat = lazy(() => import('../../assets/svg/bubble_chat.svg?react'));
const Close = lazy(() => import('../../assets/svg/close.svg?react'));
const Create = lazy(() => import('../../assets/svg/create.svg?react'));
const Explore = lazy(() => import('../../assets/svg/explore.svg?react'));
const Heart = lazy(() => import('../../assets/svg/heart.svg?react'));
const HeartFilled = lazy(() => import('../../assets/svg/heart_filled.svg?react'));
const Home = lazy(() => import('../../assets/svg/home.svg?react'));
const Instagram = lazy(() => import('../../assets/svg/instagram.svg?react'));
const Menu = lazy(() => import('../../assets/svg/menu.svg?react'));
const Messenger = lazy(() => import('../../assets/svg/messenger.svg?react'));
const Search = lazy(() => import('../../assets/svg/search.svg?react'));
const Send = lazy(() => import('../../assets/svg/send.svg?react'));
const Verification = lazy(() => import('../../assets/svg/verification.svg?react'));

const icons = {
  [ICONS.BUBBLE_CHAT]: <BubbleChat />,
  [ICONS.CLOSE]: <Close />,
  [ICONS.CREATE]: <Create />,
  [ICONS.EXPLORE]: <Explore />,
  [ICONS.HEART]: <Heart />,
  [ICONS.HEART_FILLED]: <HeartFilled />,
  [ICONS.HOME]: <Home />,
  [ICONS.INSTAGRAM]: <Instagram />,
  [ICONS.MENU]: <Menu />,
  [ICONS.MESSENGER]: <Messenger />,
  [ICONS.SEARCH]: <Search />,
  [ICONS.SEND]: <Send />,
  [ICONS.VERIFICATION]: <Verification />,
};

export function Icon({ name }) {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div className={`Icon Icon--${name}`}>{icons[name]}</div>
    </Suspense>
  );
}
