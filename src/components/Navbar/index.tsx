import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, PLAYS_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE } from '../../app/routes/config';
import { NavbarProps } from '../../interfaces';

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
  const handleLogout = () => setIsAuth(false);

  return (
    <nav className="navbar">
      <ul>
        <div className='nav_ul'>
          <li><Link to={HOME_ROUTE}>Главная</Link></li>
          {isAuth && <li><Link to={PLAYS_ROUTE}>Спектакли</Link></li>}
          <li><Link to={ABOUT_ROUTE}>О нас</Link></li>
          <li><Link to={CONTACT_ROUTE}>Контакты</Link></li>
        </div>
        <div>
          <li>
            {isAuth ? (
              <button onClick={handleLogout} className="button-login">Выйти</button>
            ) : (
              <button onClick={() => setIsAuth(true)} className="button-login">Войти</button>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

