import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, PLAYS_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE } from '../../app/routes/config';
import { NavbarProps } from '../../interfaces';
import styled from 'styled-components';
import { Button } from 'antd';


const StyledButton = styled(Button)`
  &.ant-btn {
    background-color: #006400; 
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: #228B22;
    }
  }
`;


const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
  const handleLogout = () => setIsAuth(false);

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('light');

  const changeTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <nav className="navbar">
      <ul>
        <div className='nav_ul'>
          <li><Link to={HOME_ROUTE}>Главная</Link></li>
          {isAuth && <li><Link to={PLAYS_ROUTE}>Спектакли</Link></li>}
          <li><Link to={ABOUT_ROUTE}>О нас</Link></li>
          <li><Link to={CONTACT_ROUTE}>Контакты</Link></li>
        </div>
        <div className='nav_ul'>
          <li>
            {isAuth ? (
              <StyledButton onClick={handleLogout}>Выйти</StyledButton>
            ) : (
              <StyledButton onClick={() => setIsAuth(true)} className="button-login">Войти</StyledButton>
            )}
          </li>
          <li>
            <button onClick={changeTheme} className="button-theme">Сменить тему</button> 
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

