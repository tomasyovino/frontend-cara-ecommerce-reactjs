const Features = ({ data }) => {
  return (
    <section id="feature" className="feature section-p1">
      {
        data.map((box, index) => (
          <div className="fe-box" key={index}>
            <img src={box.img} alt="Imágen" />
            <h6>{box.text}</h6>
          </div>
        ))
      }
    </section>
  )
}

export default Features