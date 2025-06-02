import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
  const [products,setProduct]=useState([])
  const [error,setError]=useState(null)
  useEffect(()=>{
    const fetchData = async()=>{
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response)
            if(response.status!=200){
              throw new Error("User retrieval failed")
            }
            setProduct(response.data)
        }
         catch (error)
        {
            console.log(error)
            setError(error.message)
        }
    }
    fetchData()
  },[])

    if(error) return (<p>Error: {error}</p>)

    return (
    <ul style={{display:"flex",flexDirection:"row"}}>
      {
      products.map((product)=>(
        <li key={product.id} >
        <div className='Products' style={{display:"flex",flexDirection:"column"}}>
          <img src={product.image} alt={product.title}  style={{width:"100px"}}/>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
        {/* {product.title} */}
        </li>
      ))
      }
    </ul>
    )
}
export default Products
