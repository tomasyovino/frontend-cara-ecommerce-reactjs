import { Link } from "react-router-dom"

const Pagination = () => {
  return (
    <section id="pagination" className="pagination section-p1">
        <Link to="/">1</Link>
        <Link to="/">2</Link>
        <Link to="/"><i className="fa fa-arrow-right"></i></Link>
    </section>
  )
}

export default Pagination