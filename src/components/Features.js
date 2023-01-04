const Features = ({ data }) => {
  return (
    <section id="feature" class="feature section-p1">
      {
        data.map((box) => (
          <div className="fe-box">
            <img src={box.img} alt="Imágen" />
            <h6>{box.text}</h6>
          </div>
        ))
      }
    </section>
  )
}

export default Features