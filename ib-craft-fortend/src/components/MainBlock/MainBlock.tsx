import style from "./mainblock.module.css";

function MainBlock() {
    return (
        <div className={style.main}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.discription_block}>
                        <p className={style.discription_context}>
                            Ванильный <span>полу-РП сервер</span> Minecraft на версии 
                            1.20.1 для любителей классического выживания с парочкой небольших плагинов 
                        </p>
                    </div>
                    <div className={style.options_block}>
                        <p className={style.ip_server_context}>IP: mc.ibcraft.ru</p>
                        <ul className={style.option_button_items}>
                            <li className={style.item_main_btn}>
                                <a href="#!" className={style.main_btn}>Получить проходку<span id={style.user_ico}></span></a>
                            </li>
                            <li className={style.item_main_btn}>
                                <a href="#!" className={style.main_btn}>Скачать сборку<span id={style.download_ico}></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainBlock;