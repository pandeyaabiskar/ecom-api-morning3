const express = require("express");
const cors = require('cors');
const productRouter = require('./routes/productRoutes')
const connectDatabase = require('./database/connection')
const PORT = 3000;

const app = express();

//Connect to database
connectDatabase()

app.use( cors() );
//Required to access json data in post function
app.use(express.json());

//Use routes
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
