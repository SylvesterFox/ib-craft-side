import style from './titleblock.module.css'

function TitleBlock () {
    return (
        <div className={style.main_title}>
            <div className={style.title_block}>
                <div className="container">
                    <p className={style.title_context}>
                        Вы устали от игры на серверах с модами или от игры на серверах, созданных только для доната? Хочется спокойно 
                        поиграть в ванильный Minecraft без лишней суеты с небольшим количеством РП в мультиплеере? Тогда мы рады вам 
                        представить наш сервер на версии 1.20.1 - IB-Craft!
                    </p>
                </div>
            </div>
        </div>
    ) 
}

export default TitleBlock;