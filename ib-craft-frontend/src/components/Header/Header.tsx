import { Link } from "react-router-dom";
import logo from "../../static/logo.svg"
import style from "./header.module.css"

function Header() {
    return (
       <header className={style.header}>
            <div className="container">
                <div className={style.header__row}>
                    <div className={style.logo}>
                        <Link to="/" className={style.header_logo_link}>
                            <img src={logo} className={style.header__logo} alt="logo" />
                        </Link>
                    </div>
                    <nav className={style.navbar}>
                        <ul className={style.navbar_items}>
                            <li className={style.list_nav}>
                                <a href="#!" className={style.nav_btn}>Карта<span id={style.map_ico}></span></a>
                            </li>
                            <li className={style.list_nav}>
                                <a href="#!" className={style.nav_btn}>Правила<span id={style.rules_ico}></span></a>
                            </li>
                            <li className={style.list_nav}>
                                <a href="#!" className={style.nav_btn}>Наш BK<span id={style.vk_ico}></span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
       </header>
    )
}

export default Header;