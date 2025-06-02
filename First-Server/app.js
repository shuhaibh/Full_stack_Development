const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const products = require('./products')
app.use(express.json())

//get All Products
app.get('/', (req, res) => {
  // res.send('Hello World!')
  // res.sendFile(path.join(__dirname,"/index.html"))
  res.status(200).json({Products:products})
})

//get products by id
app.get('/:id',(req,res)=>{
  try{
      const productID = parseInt(req.params.id)
      // console.log(productID)
      const product =products.find(prod=>prod.id===productID) 
      if(!product)
        res.status(400).json({"Message":"Invalid product id"})
      else
        res.status(200).json({Product:product})
  }catch(error){
    console.error(error)
    res.status(500).json({Error:error.message})
  }
})

//Add new product
app.post('/',(req,res)=>{
  if(!req.body) res.status(400)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

