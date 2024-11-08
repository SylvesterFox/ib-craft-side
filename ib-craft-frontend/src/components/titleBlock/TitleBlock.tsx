import style from './titleblock.module.css'
import moderator_skin from "../../static/ib_craft_moderader.svg"
import ilyaskin from "../../static/ib_craft_owner.svg"

function TitleBlock () {
    return (
        <div className={style.main_title}>
            <div className={style.title_block}>
                
                <div className={style.text_container}>
                    <span className={`${style.character} ${style.creator}`}>
                            <img src={ilyaskin} alt="andery"/>
                    </span>
                   <div className={style.block_context_title}>
                        <p className={style.text}>
                            Вы устали от игры на серверах с модами или от игры на серверах,
                            созданных только для доната? Хочется спокойно поиграть в ванильный
                            Minecraft без лишней суеты с небольшим количеством РП в мультиплеере?
                            Тогда мы рады вам представить наш сервер на версии 1.20.1 - IB-Craft!
                        </p>
                    </div>
                    <span className={`${style.character} ${style.moderator}`}>
                        <img src={moderator_skin} alt="ilyabot"/>
                    </span>
                </div>
                
            </div>
        </div>
    ) 
}

export default TitleBlock;