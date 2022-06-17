import { useState } from "react";
import Message from "./Message";

function Login() {

    const [login, setLogin] = useState(false)

    const clickLogin = () => {
        setLogin(true)
    }

    const clickLogout = () => {
        setLogin(false)
    }

    if (login === false) {
        return (
            <>
                <Message msg="Login !!!😊😊😊" />
                <button style={{ padding: "15px" }} onClick={() => clickLogin()}>Login</button>
            </>
        )
    } else {
        return (
            <>
                <Message msg="Logout 🎯🎯🎯" />
                <button style={{ padding: "15px" }} onClick={() => clickLogout()}>Logout</button>
            </>
        );
    }
}

export default Login;