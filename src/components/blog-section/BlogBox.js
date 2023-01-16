import { Link } from "react-router-dom";

const BlogBox = ({ data }) => {
  return (
    <section id="blog" className='blog'>
      {
        data.map((box, index) => (
          <div className='blog-box' key={index}>
            <div className='blog-img'>
              <img src={box.img} alt="blog-site" />
            </div>
            <div className='blog-details'>
              <h4>{box.title}</h4>
              <p>{box.text}</p>
              <Link to={box.slug}>SEGUIR LEYENDO</Link>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default BlogBox