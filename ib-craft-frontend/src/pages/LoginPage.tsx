import Auth from "../components/BlockAuth/Auth";
import BubbleBackground from "../components/EffectComponents/BubbleContainer";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Login() {
    return (
        <>
            <BubbleBackground />
            <Header/>
            <Auth/>
            <Footer/>
        </>
    )
}

export default Login;