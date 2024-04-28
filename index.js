const express = require("express");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node  index api ");
});

//path
mongoose
  .connect(
    "mongodb+srv://admin:KizZs09snP5Z8d2J@backenddb.es1dvdo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )

  .then(() => {
    console.log("connected");
    app.listen(3000, () => {
      console.log("connect to the port");
    });
  })
  .catch(() => {
    console.log("not connected");
  });
