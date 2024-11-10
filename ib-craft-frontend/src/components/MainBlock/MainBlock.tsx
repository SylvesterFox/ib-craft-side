import { useState } from "react";
import style from "./mainblock.module.css";
import BubbleBackground from "../EffectComponents/BubbleContainer";

function MainBlock() {
    const [copySuccess, setCopySuccess] = useState(false);

    const textIp = 'mc.ibcraft.ru';

    const hadleCopyClick = () => {
        navigator.clipboard.writeText(textIp)
            .then(() => {
                console.log("Text copied to clipboard!");
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 2000);
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            });
    };

    return (
        
        <div className={style.main}>
            <BubbleBackground />
            <div className="container">
                <div className={`${style.clip}  ${copySuccess ? style.active_clip : ""}`}>
                    <div className={`${style.clipboard}`}>
                        <div className={style.text_title}>
                            ✅ Скопировано!
                        </div>
                    </div>
                </div>
                    

                <div className={style.wrapper}>
                    <div className={style.discription_block}>
                        <p className={style.discription_context}>
                            Ванильный <span>полу-РП сервер</span> Minecraft на версии 
                            1.20.1 для любителей классического выживания с парочкой небольших плагинов 
                        </p>
                    </div>
                    <div className={style.options_block}>
                        <p className={style.ip_server_context} onClick={hadleCopyClick}>IP: {textIp}</p>
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