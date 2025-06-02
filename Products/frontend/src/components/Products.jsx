import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [dat,setData]=useState([])
    const [error,setError]=useState(null)
    const baseUrl = import.meta.env.VITE_API_BASE_URL
    console.log(baseUrl)
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get(`${baseUrl}`)
                console.log(response.data)
            } catch (error) {
                setError(error.message||"Server Interaction failed")
            }
        }
        fetchData()
    },[])
    if(error) return <p>Error:{error}</p>
    else{
        return (
        <div>
        Products
        </div>
    )}
}

export default Products
