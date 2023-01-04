import { Header, PageHeader, BlogBox, Pagination, Newsletter, Footer } from "../components";
import b1 from "../assets/img/blog/b1.jpg";
import b2 from "../assets/img/blog/b2.jpg";
import b3 from "../assets/img/blog/b3.jpg";
import b4 from "../assets/img/blog/b4.jpg";
import b6 from "../assets/img/blog/b6.jpg";

const blogBox_Data = [
  {
    img: b1,
    title: "Sudadera de algodón con cremallera",
    text: "Kickstarter man braid godar coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
    slug: "/"
  },
  {
    img: b2,
    title: "Cómo peinar el Quiff",
    text: "Kickstarter man braid godar coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
    slug: "/"
  },
  {
    img: b3,
    title: "Artículos imprescindibles para chic@s skater",
    text: "Kickstarter man braid godar coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
    slug: "/"
  },
  {
    img: b4,
    title: "Tendencias Inspiradoras",
    text: "Kickstarter man braid godar coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
    slug: "/"
  },
  {
    img: b6,
    title: "Tendencias de ropa masculina AW20",
    text: "Kickstarter man braid godar coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
    slug: "/"
  },
]

const BlogScreen = () => {
  const pageHeaderData = {
    id: "blog-hero",
    title: "leermas",
    text: "¡Lea todos los estudios de caso sobre nuestros productos!"
  }

  return (
    <>
        <Header />
        <PageHeader data={pageHeaderData} />
        <BlogBox data={blogBox_Data}/>
        <Pagination />
        <Newsletter />
        <Footer />
    </>
  )
}

export default BlogScreen