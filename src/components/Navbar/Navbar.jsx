import { Suspense } from 'react';
import { Icon } from '../Icon';
import { ICONS, PROFILE_IMAGE_URL } from '../../utils/constants';
import './Navbar.css';

const icons = [
  {
    name: ICONS.HOME,
    title: 'Home',
  },
  {
    name: ICONS.SEARCH,
    title: 'Search',
    hideOnMobile: true,
  },
  {
    name: ICONS.EXPLORE,
    title: 'Explore',
  },

  {
    name: ICONS.HEART,
    title: 'Notification',
    hideOnMobile: true,
  },
  {
    name: ICONS.CREATE,
    title: 'New post',
  },
  {
    name: ICONS.BUBBLE_CHAT,
    title: 'Messages',
  },
];

export function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar--logo-container">
        <NavbarIcon name={ICONS.INSTAGRAM} />
      </div>
      <ul className="Navbar--icons-container">
        {icons.map((icon) => (
          <li
            className={`Navbar--icon-container ${
              icon.hideOnMobile ? 'hide-sm' : ''
            }`}
            key={icon.title}
          >
            <NavbarIcon name={icon.name} />
            <span className="Navbar--icon-title">{icon.title}</span>
          </li>
        ))}
        <li className="Navbar--icon-container">
          <a
            href="#"
            className="Navbar--icon-link"
          >
            <img
              alt="Profile"
              className="Navbar--profile-img"
              src={PROFILE_IMAGE_URL}
            />
          </a>
          <span className="Navbar--icon-title">Profile</span>
        </li>
      </ul>
      <div className="Navbar--more-icon-container">
        <span className="Navbar--more-icon-subcontainer">
          <NavbarIcon name={ICONS.MENU} />
        </span>
        <span className="Navbar--icon-title">More</span>
      </div>
    </nav>
  );
}

function NavbarIcon({ name }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <a
        href="#"
        className="Navbar--icon-link"
      >
        <Icon name={name} />
      </a>
    </Suspense>
  );
}
