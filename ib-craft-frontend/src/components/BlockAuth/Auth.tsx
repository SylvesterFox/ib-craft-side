import AuthBlock from "./AuthBlock";
import style from "./auth.module.css"

function Auth() {
    return (
        <>
            <main className={style.main_auth}>
                <div className="container">
                    <AuthBlock/>
                </div>
            </main>
        </>
    )
}

export default Auth;