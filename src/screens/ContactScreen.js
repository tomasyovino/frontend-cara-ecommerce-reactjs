import { Header, PageHeader, ContactDetails, ContactForm, Newsletter, Footer } from "../components";

const ContactScreen = () => {
  const pageHeaderData = {
    id: "contact-hero",
    title: "conócenos",
    text: "¡Lorem ipsum dolor sit amet, consectetur!"
  }

  return (
    <>
        <Header />
        <PageHeader data={pageHeaderData}/>
        <ContactDetails />
        <ContactForm />
        <Newsletter />
        <Footer />
    </>
  )
}

export default ContactScreen