import a6 from "../../assets/img/about/a6.jpg";

const AboutHead = () => {
  return (
    <section id="about-head" className="about-head section-p1">
        <img src={a6} alt="about" />
        <div>
            <h2>¿Quienes somos?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum recusandae quo corporis. Architecto exercitationem dolores enim nobis? Debitis nesciunt, voluptatibus provident quasi ea non cumque delectus voluptate obcaecati tempora.
            Ad magnam suscipit in, eos rerum ea debitis ut odit laborum omnis quam adipisci consectetur corrupti eligendi, voluptatibus dolorum deleniti vitae! Necessitatibus corrupti et fuga eos blanditiis eveniet corporis iste!</p>

            <abbr title="">Crea imágenes asombrosas con tanto o tan poco control como quieras gracias a la elección de los modos Básico y Creativo.</abbr>

            <br/><br/>
            
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Crea imágenes asombrosas con tanto o tan poco control como quieras gracias a la elección de los modos Básico y Creativo.</marquee>
        </div>
    </section>
  )
}

export default AboutHead