import React from 'react'

export default function LoadingView() {
  return (
    <>
        <div className="card" aria-hidden="true">
        <img src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
        </div>
        </div>
</>
  )
}
