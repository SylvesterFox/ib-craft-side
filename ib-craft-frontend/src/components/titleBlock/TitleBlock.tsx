import style from './titleblock.module.css'
import moderator_skin from "../../static/ib_craft_moderader.svg"
import ilyaskin from "../../static/ib_craft_owner.svg"

function TitleBlock () {
    return (
        <div className={style.main_title}>
            <div className={style.title_block}>
                <div className="container">
                   <div className={style.block_context_title}>
                        <p className={style.title_context}>
                            Вы устали от игры на серверах с модами или от игры на серверах, созданных только для<br/> доната? Хочется спокойно <br/> 
                            поиграть в ванильный Minecraft без лишней суеты с небольшим количеством РП в <br/> мультиплеере? Тогда мы рады вам <br/> 
                            представить наш сервер на версии 1.20.1 - IB-Craft!
                        </p>
                   </div>
                </div>
                <div className={style.admins_model_skins}>
                    <div className={style.moderator_skin_model}>
                        <img src={ilyaskin} alt="andery" className={style.model_skin_svg} id={style.andery} />
                    </div>
                    <div className={style.moderator_skin_model}>
                        <img src={moderator_skin} alt="ilyabot" className={style.model_skin_svg} />
                    </div>
                </div>
            </div>
            
        </div>
    ) 
}

export default TitleBlock;