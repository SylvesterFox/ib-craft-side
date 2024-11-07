import { useEffect, useState } from "react";
import style from "./questions.module.css"

function QuestionsBlock () {


    return (
        <div className={style.questions_block}>
            <div className="container">
                <h1 className={style.qa_title}>Часто задаваемые<br/>вопросы</h1>
                <div className={style.questions_grid}>
                    <details className={style.question}>
                        <summary>Вы позиционируете себя как ванильный сервер Minecraft. Можно ли играть на сервере без сборки?</summary>
                        <div className={style.res_block}>
                            <p className={style.question_response}>Да. Если вам лень/сложно/нет возможности установить сборку, то можно играть на ванильной версии 1.20.1</p>
                        </div>
                    </details>
                    <details className={style.question}>
                        <summary>Обязательно ли нужен ресурспак или сборка сервера? </summary>
                        <div className={style.res_block}>
                            <p className={style.question_response}>Нет, но без него вы не будете видеть или слышать то, что видят/слышат другие игроки</p>
                        </div>
                    </details>
                    <details className={style.question}>
                        <summary>У вас написано что вы Полу-РП сервер, я не люблю РП, можно я просто буду выживать и проходить Minecraft 
                        живя вне города играя "ванильно"?</summary>
                        <div className={style.res_block}>
                            <p className={style.question_response}>Да. Несмотря на то что мы позиционируем себя в первую очередь как Полу-РП сервер, мы так же являемся SMP сервером (Survival MultiPlayer), поэтому вы можете отказаться жить в городах и участвовать в ролевой составляющей сервера, но тогда вы не сможете в полную насладиться атмосферой сервера. Впрочем, это ваш выбор.</p>
                        </div>
                    </details>
                    <details className={style.question}>
                        <summary>Можно ли зайти с версии выше/ниже? </summary>
                        <div className={style.res_block}>
                            <p className={style.question_response}>Нет. Только 1.20.1. Мы полностью отказались от плагина ViaVersion и особенно от ViaBackward, т.к. он ломал некоторые механики игры, например, карты клада превращались в обычные карты.</p>
                        </div>
                    </details>
                    <details className={style.question}>
                        <summary>Разрешены ли войны?</summary>
                        <div className={style.res_block}>
                            <p className={style.question_response}>Да. Обе стороны должны знать о проведении войны, так же, война является крайней мерой решения конфликтов в случае если двум сторонам не удалось договориться.</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default QuestionsBlock;