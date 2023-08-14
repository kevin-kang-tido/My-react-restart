import React, { useEffect, useState } from 'react'
import { fetchCategories, insertProduct } from '../services/productAction'

export default function ProductForm() {
    const [categories,setCategories] = useState([])
    const [source, setSource]=useState("")
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: "",
        categoryId: 1,
        images: [
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        ]
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setProduct(prevState => {
            return {
                // ... mean copy prevState
                ...prevState,
                [name]: value
            }
        })
        console.log(product)
    }

    // handle insert data server.
    const handleOnSubmit = () =>{
        insertProduct(product)
        .then(res => console.log("Inserted!",res))

    }

    const onFileUpload = (e) =>{
        console.log(e.target.files)
        setSource(e.target.files[0])
    }
    

    useEffect(() =>{
        fetchCategories()
        .then(res => setCategories(res))
    },[])



  return (
    <main className='container'>

        <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input 
                type="text" 
                className="form-control" 
                name="title" 
                placeholder="Magic Mouse"
                onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3">
            <label for="price" className="form-label">Price $</label>
            <input 
                type="text" 
                className="form-control" 
                name="price" placeholder="300$" 
                onChange={onChangeHandler}
            />
        </div>
        <div className='mb-3'>
            <label for="category" className="form-label">Choose Category</label>
            <select 
                className="form-select" 
                aria-label="Default select example"
                onChange={onChangeHandler}
                name='categoryId'
            >
                <option selected>Choose Category</option>
                {
                    categories &&  categories.map( cate =>(
                        <option value={cate.id}>{cate.name}</option>
                    ))
                }

            </select>
        </div>
        <div className="mb-3">
        <label for="description" className="form-label">Description</label>
        <textarea 
            className="form-control" 
            name="description" 
            rows="3"
            onChange={onChangeHandler}
        ></textarea>
        <div className='mb-3'>
            <input type='file' onChange={onFileUpload} />
        </div>
        <div className='mb-3 Preview'>
            <img src={source && URL.createObjectURL(source)} style={{'width':'400px'}} alt='Preview-Image'/>
        </div>
        </div>
        <button 
        type="button" 
        class="btn btn-outline-primary"
        onClick={() => handleOnSubmit()}
        >
            Create Product</button>
    </main>
  )
}
