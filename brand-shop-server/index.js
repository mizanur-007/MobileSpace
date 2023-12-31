const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.37cjb7i.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



const productCollection = client.db("Products").collection("productCollection");
const cartCollection = client.db("Products").collection("cartCollection");

const dbConnect = async () => {
  try {
    await client.connect();
    console.log("Database Connected!");
  } catch (error) {
    console.log(error.name, error.message);
  }
};
dbConnect();

app.get("/", (req, res) => {
  res.send("app is running");
});

// insert a product
app.post("/products", async (req, res) => {
  const product = req.body;
  const result = await productCollection.insertOne(product);
  res.send(result);
});
// insert a product  to cart
app.post("/cart", async (req, res) => {
  const product = req.body;
  const result = await cartCollection.insertOne(product);
  res.send(result);
});

// get products
app.get("/products", async (req, res) => {
  const result = await productCollection.find().toArray();
  res.send(result);
});
// get products from cart
app.get("/cart/client/:client", async (req, res) => {
  const client = req.params.client;
  const query = { client: client };
  const result = await cartCollection.find(query).toArray();
  res.send(result);
});


//get products
app.get("/products/brand/:brand_name", async (req, res) => {
  const brand_name = req.params.brand_name;
  const query = { brand: brand_name };
  const result = await productCollection.find(query).toArray();
  res.send(result);
});

// read data  single
app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const query2 = { _id: new ObjectId(id) };
  const result2 = await productCollection.findOne(query2);
  res.send(result2);
});

//   update data
app.put("/products/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      name: updatedData.name,
      price: updatedData.price,
      type: updatedData.type,
      rating: updatedData.rating,
      brand: updatedData.brand,
      image: updatedData.image,
    },
  };

  const result = await productCollection.updateOne(filter, updateDoc, options);
  res.send(result);
});

// delete data 
app.delete('/cart/:id',async(req,res)=>{
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await cartCollection.deleteOne(filter);
  res.send(result);
})



app.listen(port);
