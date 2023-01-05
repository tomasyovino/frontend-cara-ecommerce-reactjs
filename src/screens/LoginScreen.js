import { Header, PageHeader, LoginForm, Newsletter, Footer } from "../components"

const LoginScreen = () => {
  const pageHeaderData = {
    id: "login-hero",
    title: "bienvenido",
    text: "¡Nos alegra verte de nuevo!"
}

return (
    <>
        <Header />
        <PageHeader data={pageHeaderData}/>
        <LoginForm />
        <Newsletter />
        <Footer />
    </>
)
}

export default LoginScreen