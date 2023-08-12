import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import LoadingView from '../components/LoadingView'

// rfc = react funcitonal component 
export default function Home() {
    // declear vatiable 
    // line for counting number by clicking
    const [count, setCount] = useState(0)

    // [] = called as array
    const [products, setProduct] = useState([])
    const fetchProducts = () =>{
        fetch('https://api.escuelajs.co/api/v1/products?limit=12&offset=0')
        .then(res => res.json())
        .then(resp =>{
          setProduct(resp)
          setLoading(false)
        } )
    }
    // const for loading
    const [isLoaing, setLoading] = useState(true)
  

    useEffect(() => {
        // called api
        fetchProducts()
    }, [])

    
  return (
    <>
    <div>
        <h1>YOU Clicked {count} times</h1>
        <button type="button" className="btn btn-primary" onClick={ () => setCount(count +1)}>Click Me!</button>
    </div>
    <h1>Products</h1>
    <div className='row g-4'>
            {
              isLoaing ?
              <>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView/>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView/>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView/>
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView/>
              </div>
              </>

                :products.map((api_product) => (
                 <div 
                  key={api_product.id}
                  className='col-12 col-sm-6 col-md-4 col-lg-3'
                  >
                    <Card  
                    URL={api_product.images[0]}
                    title={api_product.description}
                    />
                    </div>
                ))
            }
    </div>

    </>
  )
}
