import axios from "axios"
import { base_URL } from "../utils/constents"

// api categories
export const fetchCategories = async () => {
    let resp = await fetch(`${base_URL}categories/`,{
        method:'GET'
    })
    return resp.json()
}
// MARK ::: Product
export  const fetchProducts = async () =>{
    // show 12 == ?limit=12&offset=0
    let resp = await fetch(`${base_URL}products`)
    return resp.json()
}

// ::: time to make a big foucsing 
// MARK ::: Create a function to Insert Product
export const insertProduct = async(product) =>{
   let resp = await fetch(`${base_URL}products`,{
        // called for ask for permission
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        // convert insertProduct to json
        body: JSON.stringify(product)  
    })
    return resp.json()

}

// MARk ::: Function to insert file such as img PDF
// Noted  all insert  need to have headers
export const fileUpLoad = async(image) =>{
    // axios use for upload file 
    let resp = await axios({
        method: "P0ST",
        headers:{
            "Content-Type":"multipart/form-data"

        },
        url:`${base_URL}files/3697.jpg`,
        data:image
    })
    return resp.json()
}
