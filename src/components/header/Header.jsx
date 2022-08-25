import React, {useState} from 'react';

import s from './header.module.scss';

import logo from './images/logo.svg';
import titleImg from './images/header_img.png';
import palm from './images/palm.png';
import eco from './images/icon-eco.png';
import meat from './images/myaso.png';
import agronomy from './images/agronomy.svg'

import Menu from './menu/Menu';

const Header = (props) => {
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
            <a className={s.link} href="#">За покупками</a>
          </div>
        </div>
        <div className={s.subTitle}>
          <img className={s.subTitle_img} src={meat} alt=""/>
          <p className={s.subTitle_ph}>Всіх раді вітати на сторінках сайту нашої
            міні-ферми!</p>
          <p>Ми займаємось вирощуванням домашнього бройлера, а також
            виготовленням продукції з власно вирощеної сировини. Бройлер - це
            будь-яка курка, отримана шляхом міжпородного схрещування, яку
            розмножують і вирощюють спеціально для виробництва м'яса.</p>
          <p>Наше вирощування повністю виключає антибіотики, гормони та
            стимулятори росту.</p>
          <p>Тушки мають найкращі смакові якості, а також найкращу поживну
            цінність. Курочки з нашого господарства несуть в Ваші домівки
            свіжість, натуральність і ситність!</p>
          <div className={s.sideBar}>
            <ul className={s.menu}>
              <li className={s.item}>
                <img className={s.image} src={agronomy} alt=""/>
                <p>Без антибіотиків</p>
              </li>
              <li className={s.item}>
                <img className={s.image} src={agronomy} alt=""/>
                <p>Натуральні корма</p>
              </li>
              <li className={s.item}>
                <img className={s.image} src={agronomy} alt=""/>
                <p>Домашнє мясо</p>
              </li>
            </ul>
          </div>
          <a className={s.link} href="#">Бiльше</a>

        </div>
      </header>
  );
};
export default Header;