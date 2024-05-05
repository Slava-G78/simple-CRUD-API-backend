const express = require("express");
const mongoose = require("mongoose");

const productRouter = require("./routes/product.route")
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api/products", productRouter);

mongoose
  .connect("mongodb://localhost/Node-API")
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

//   https://www.youtube.com/watch?v=_7UQPve99r4&t=4908s node