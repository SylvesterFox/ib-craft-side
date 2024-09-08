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
                    <nav className={style.havbar}>
                        <ul className={style.navbar_items}>
                            <li className={style.list_nav}>
                                <a href="#!" className={style.nav_btn}>Карта</a>
                            </li>
                            <li className={style.list_nav}>
                                <a href="#!" className={style.nav_btn}>Правила</a>
                            </li>
                            <li className={style.list_nav}>
                                <a href="#!" className={style.nav_btn}>Наш вк</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
       </header>
    )
}

export default Header;