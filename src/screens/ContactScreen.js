import { PageHeader, ContactDetails, ContactForm, Newsletter } from "../components";

const ContactScreen = () => {
  const pageHeaderData = {
    id: "contact-hero",
    title: "contáctanos",
    text: "¡Lorem ipsum dolor sit amet, consectetur!"
  }

  return (
    <>
        <PageHeader data={pageHeaderData}/>
        <ContactDetails />
        <ContactForm />
        <Newsletter />
    </>
  )
}

export default ContactScreen