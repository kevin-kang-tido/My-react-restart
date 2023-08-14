import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/productAction';


// Need to downlaod libary => -- npm install react-data-table-component --
export default function Dashboard() {
    const [products,setProduct] = useState([])
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable:true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable:true
        },
        {
            name: 'Photo',
            selector: row => <img src={row.images[0]} alt="product-image" style={{'width':'55px'}}/>,
        },
        {
            name: 'Edit',
            selector: row => <button type="button" className="btn btn-info">Edit</button>,
        },
    ];
 
    
    useEffect(()=>{
        fetchProducts()
        .then(resp => setProduct(resp))
    })


  return (
    <main className='container'>
    <DataTable
        columns={columns}
        data={products}
        pagination
    />
    </main>

  )
}
