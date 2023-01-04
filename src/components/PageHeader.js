import React from 'react'

const PageHeader = ({ data }) => {
  return (
    <section id={data.id} className="page-header">
        <h2>#{data.title}</h2>
        <p>{data.text}</p>
    </section>
  )
}

export default PageHeader