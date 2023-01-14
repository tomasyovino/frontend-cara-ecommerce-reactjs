import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageHeader, LoginForm, Newsletter } from "../components";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error} = useSelector((state) => state.user);

    const pageHeaderData = {
        id: "login-hero",
        title: "bienvenido",
        text: "¡Nos alegra verte de nuevo!"
    };

    return (
        <>
            <PageHeader data={pageHeaderData}/>
            <LoginForm 
                dispatch={dispatch}
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                isFetching={isFetching}
                error={error}
            />
            <Newsletter />
        </>
    );
};

export default LoginScreen