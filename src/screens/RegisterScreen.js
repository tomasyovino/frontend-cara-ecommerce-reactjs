import { PageHeader, RegisterForm, Newsletter } from "../components"

const RegisterScreen = () => {
    const pageHeaderData = {
        id: "register-hero",
        title: "regístrate",
        text: "¡Lorem ipsum dolor sit amet, consectetur!"
    }

    return (
        <>
            <PageHeader data={pageHeaderData}/>
            <RegisterForm />
            <Newsletter />
        </>
    )
}

export default RegisterScreen