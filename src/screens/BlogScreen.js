import { PageHeader, BlogBox, Pagination, Newsletter } from "../components";
import blogs from "../data/blogs.json";

const BlogScreen = () => {
  const pageHeaderData = {
    id: "blog-hero",
    title: "leermas",
    text: "¡Lea todos los estudios de caso sobre nuestros productos!"
  };

  return (
    <>
        <PageHeader data={pageHeaderData} />
        <BlogBox data={blogs}/>
        <Pagination />
        <Newsletter />
    </>
  );
};

export default BlogScreen;