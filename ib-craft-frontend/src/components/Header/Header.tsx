import { Link } from "react-router-dom";
import React, { useState } from "react"
import logo from "../../static/logo.svg"
import style from "./header.module.css"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className={style.header}>
             <div className="container">
                     <div className={style.header__row}>
                      
                         <div className={style.logo}>
                             <Link to="/" className={style.header_logo_link}>
                                 <img src={logo} className={style.header__logo} alt="logo" />
                             </Link>
                         </div>
                         <div className={`${style.burger_menu}`} onClick={toggleMenu}>
                             <span />
                         </div>
                         <nav className={`${style.navbar} ${isOpen ? style.open : ""}`}>
                             <ul className={style.navbar_items}>
                                 <li className={style.list_nav}>
                                     <a href="#!" className={style.nav_btn}>
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
                                     <a href="#!" className={style.nav_btn}>
                                         <p>Наш BK</p>
                                         <span id={style.vk_ico} className={style.btn_ico}></span>
                                     </a>
                                 </li>
                                 <li className={style.list_nav}>
                                     <a href="#!" className={style.nav_btn}>
                                         <p className={style.login}>Вход</p>
                                         {/* <span id={style} className={style.btn_ico}></span> */}
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