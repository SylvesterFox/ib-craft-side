import lock from "../../static/3d-lock.png"
import style from "./auth.module.css"

function AuthBlock() {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.blockauth}>
                    <div className={style.title_auth}>
                        <img className={style.lock_img} src={lock} alt="" />
                        <h1>Вход и регистрация</h1>
                    </div>
                    <div className={style.buttons}>
                        <a href="!#" className={style.auth_discord}><span id={style.discord}></span><p>Discord</p></a>
                        <div>
                            <a href="!#" className={style.support_btn}>Восстановить доступ</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthBlock;