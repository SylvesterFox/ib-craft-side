import QuestionsBlock from '../questionsBlock/QuestionsBlock';
import style from './cardblock.module.css'

function CardBlock() {
    return (
        <div className={style.card_blocks}>
            <div className="container">
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.title_card}>
                            <p>Ванильное<br/>выживание</p>
                            <span id={style.gamepad_ico} className={style.card_ico}></span>
                        </div>
                        <p className={style.context_card}>
                            Наш сервер - ванильный, т.е. 
                            без серверных модов. 
                            Сборка клиентских модов 
                            улучшает и украшает игру, 
                            но никак не меняет сам 
                            геймплей, вы можете играть 
                            и без нашей сборки модов.  
                        </p>
                    </div>
                    <div className={style.card}>
                        <div className={style.title_card}>
                            <p>Современные<br/>технологии</p>
                            <span id={style.pc_ico} className={style.card_ico}></span>
                        </div>
                        <ul className={style.context_list}>
                                <li>Онлайн карта мира SquareMap</li>
                                <li>Ядро Pufferfish последней версии</li>
                                <li>Синхронизация с Discord Rich Presence</li>
                                <li>Свой ресурс-пак сервера с кастомным контентом</li>
                                <li>Голосовой чат</li>
                                <li>Плагин CoreProtect для защиты от гриферства и как следствие 
                                отсутствие приватов</li>
                        </ul>
                    </div>
                    <div className={style.card}>
                        <div className={style.title_card}>
                            <p>Мощный<br/>сервер</p>
                            <span id={style.server_ico} className={style.card_ico}></span>
                        </div>
                        <p className={style.context_card}>
                            Мощностей нашего сервера 
                            хватает для комфортной игры 24 
                            игроков с прорисовкой в 12 чанков. 
                            Сервер находится в Донецке 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CardBlock;