import React from 'react'
import {Link}  from "react-router-dom"

const Success = ({id}) => {
  return (
      <div className="row bg-primary bg-gradient">
          <div className="col-md-12 text-center p-5">
              <h1>Completado!</h1>
              <p>La orden de compra se generó con el ID: <b>{id}</b></p>
              <Link to="/"><button className='btn btn-lg btn-light'>Volver al inicio</button></Link>
          </div>
      </div>
  )
}

export default Success