const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors')
const Product = require("./models/product");
console.log(process.env.MONGODB_URI);

app.use(cors());
app.use(express.json());

main()
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

//add product
app.post("/", async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: "Product details are empty" });
    }
    const { name, price, description } = req.body;
    //validation
    const product = new Product({ name, price, description });
    await product.save();
    res.status(201).json({ message: "product added", data: product });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required!" });
    }
    if (!req.body) {
      return res.status(400).json({ error: "Product details cannot be empty" });
    }
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Produvt id invalid" });
    }
    const product = await Product.findByIdAndUpdate(productId, req.body);
    res
      .status(200)
      .json({ message: "Product Updated", updatedProduct: product });
  } catch (error) {}
});

app.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required!" });
    }
    if (!req.body) {
      return res.status(400).json({ error: "Product details cannot be empty" });
    }
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Produvt id invalid" });
    }
    const product = await Product.findByIdAndDelete(productId, req.body);
    if (!product) {
      return res.status(200).json({ message: "Product not found" });
    } else {
      res.status(200).json({ message: "Product Deleted" });
    }
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
