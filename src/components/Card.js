
import React from 'react'
// props
export default function Card(props) {
  return (
    <>
        <div class="card">
            <img 
            src={props.URL} 
            class="card-img-top" alt="card img"
            />
            <div class="card-body">
                <p class="card-text">{props.title}</p>
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
          <div class="card">
              <img 
              src={URll} 
              class="card-img-top" alt="card img"
              />
              <div class="card-body">
                  <p class="card-text">{titlee}</p>
              </div>
          </div>
          {/* <h1>Hello</h1> */}
      </>
    )
  }

