import style from "./footer.module.css"

function Footer () {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.content}>
                    <p className={style.copyright}>Copyright © IB-Craft 2024. Все права защищены. Сервера IB-Craft не относятся к Mojang Studios.</p>
                    <div className={style.socal_btn}>
                        <span>
                            <a href="https://vk.com/ibcraft" id={style.vk} className={style.ico_socal}></a>
                        </span>
                        <span >
                            <a href="https://discord.gg/M2BWpZJRqG" id={style.discord} className={style.ico_socal}></a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;