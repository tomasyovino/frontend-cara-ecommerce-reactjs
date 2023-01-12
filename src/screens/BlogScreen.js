import { Header, PageHeader, BlogBox, Pagination, Newsletter, Footer } from "../components";
import blogs from "../data/blogs.json";

const BlogScreen = () => {
  const pageHeaderData = {
    id: "blog-hero",
    title: "leermas",
    text: "¡Lea todos los estudios de caso sobre nuestros productos!"
  };

  return (
    <>
        <Header />
        <PageHeader data={pageHeaderData} />
        <BlogBox data={blogs}/>
        <Pagination />
        <Newsletter />
        <Footer />
    </>
  );
};

export default BlogScreen;