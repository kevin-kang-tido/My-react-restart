
import React from 'react'
// props
export default function Card(props) {
  return (
    <>
        <div className="card">
            <img 
            src={props.URL} 
            className="card-img-top" alt="card-img"
            />
            <div className="card-body">
                <p className="card-text">{props.title}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
  )
}






// destructuring object (props)
export function Cardd(props) {
    const {URll,titlee} = props
    return (
      <>
          <div className="card">
              <img 
              src={URll} 
              className="card-img-top" alt="card img"
              />
              <div className="card-body">
                  <p className="card-text">{titlee}</p>
              </div>
          </div>
          {/* <h1>Hello</h1> */}
      </>
    )
  }

