import React, {useState} from 'react';

import s from './header.module.scss';

import logo from './images/logo.svg';
import titleImg from './images/header_img.png';
import palm from './images/palm.png';
import eco from './images/icon-eco.png'
import meat from './images/myaso.png'

import Menu from './menu/Menu';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [

    {value: 'Главная', href: '/main', icons: 'forward'},
    {value: 'Услуги', href: '/service', icons: 'forward'},
    {value: 'Услуги', href: '/service', icons: 'forward'},
    {value: 'Услуги', href: '/service', icons: 'forward'},
    {value: 'Магазин', href: '/magazine', icons: 'forward'},
    {value: 'Магазин', href: '/magazine', icons: 'forward'},
    {value: 'Магазин', href: '/magazine', icons: 'forward'},
    {value: 'Магазин', href: '/magazine', icons: 'forward'},

  ];
  return (
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <img src={logo} alt="logo" className={s.logo}/>
            <div className={s.burgerBtn}
                 onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
          </nav>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} header={'Menu'}
              items={items}/>
        <div className={s.title}>
          <div className={s.titleContainer}>
            <img className={s.title_img} src={titleImg} alt=""/>
            <img src={palm} alt="" className={s.palm}/>
            <img src={eco} alt="" className={s.eco}/>
            <p>З ДОСТАВКОЮ ПО ПОЛТАВI</p>
          </div>
        </div>
        <div className={s.subTitle}>
          <img className={s.subTitle_img}  src={meat} alt=""/>
          <p className={s.subTitle_ph}>Всіх раді вітати на сторінках сайту нашої міні-ферми!</p>
        </div>
      </header>
  );
};
export default Header;