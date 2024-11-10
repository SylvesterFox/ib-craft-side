import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"
import logo from "../../static/logo.svg"
import style from "./header.module.css"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen])

    return (
        <header className={`${style.header} ${style.fixed}`}>
            <canvas className={`${style.blur} ${isOpen ? style.blur_active : ""}`} onClick={toggleMenu}></canvas>
             <div className="container">
                     <div className={style.header__row}>
                      
                         <div className={style.logo}>
                             <Link to="/" className={style.header_logo_link}>
                                 <img src={logo} className={style.header__logo} alt="logo" />
                             </Link>
                         </div>
                         <div className={`${style.burger_menu} ${isOpen ? style.active : ""}`} onClick={toggleMenu}>
                             <span />
                             <span />
                             <span />
                         </div>
                         <nav className={`${style.navbar} ${isOpen ? style.open : ""}`}>
                             <ul className={style.navbar_items}>
                                 <li className={style.list_nav}>
                                     <a href="https://map.ibcraft.ru/" className={style.nav_btn}>
                                         <p>Карта</p>
                                         <span id={style.map_ico} className={style.btn_ico}></span>
                                     </a>
                                 </li>
                                 <li className={style.list_nav}>
                                     <a href="#!" className={style.nav_btn}>
                                         <p>Правила</p>
                                         <span id={style.rules_ico} className={style.btn_ico}></span>
                                     </a>
                                 </li>
                                 <li className={style.list_nav}>
                                     <a href="https://vk.com/ibcraft" className={style.nav_btn}>
                                         <p>Наш BK</p>
                                         <span id={style.vk_ico} className={style.btn_ico}></span>
                                     </a>
                                 </li>
                                 <li className={style.list_nav}>
                                     <a href="#!" className={style.nav_btn}>
                                         <p className={style.login}>Вход</p>
                                         <span id={style.login} className={style.btn_ico}></span>
                                     </a>
                                 </li>
                             </ul>
                         </nav>
                  
                 </div>
             </div>
        </header>
     )

    
}

export default Header;