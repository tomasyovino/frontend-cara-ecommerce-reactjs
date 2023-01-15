import { useState } from "react";
import { PageHeader, RegisterForm, Newsletter } from "../components";

const RegisterScreen = () => {
    const [ registeredUser, setRegisteredUser ] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: ""
    });
    const [ fieldsAreEmpty, setFieldsAreEmpty ] = useState(false);
    const [ privacyPolicy, setPrivacyPolicy ] = useState(false);
    const pageHeaderData = {
        id: "register-hero",
        title: "regístrate",
        text: "¡Lorem ipsum dolor sit amet, consectetur!"
    };

    return (
        <>
            <PageHeader data={pageHeaderData}/>
            <RegisterForm  
                registeredUser={registeredUser} 
                setRegisteredUser={setRegisteredUser} 
                fieldsAreEmpty={fieldsAreEmpty} 
                setFieldsAreEmpty={setFieldsAreEmpty} 
                privacyPolicy={privacyPolicy}
                setPrivacyPolicy={setPrivacyPolicy}
            />
            <Newsletter />
        </>
    )
}

export default RegisterScreen