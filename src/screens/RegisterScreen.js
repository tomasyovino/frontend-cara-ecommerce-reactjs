import { Header, PageHeader, RegisterForm, Newsletter, Footer } from "../components"

const RegisterScreen = () => {
    const pageHeaderData = {
        id: "register-hero",
        title: "regístrate",
        text: "¡Lorem ipsum dolor sit amet, consectetur!"
    }

    return (
        <>
            <Header />
            <PageHeader data={pageHeaderData}/>
            <RegisterForm />
            <Newsletter />
            <Footer />
        </>
    )
}

export default RegisterScreen