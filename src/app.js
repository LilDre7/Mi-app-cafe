const express = require("express");
const colors = require("colors");


// Create a new express app instance
const app = express();
// Este middleware es para que express sepa de mi
app.use(express.json());

// Routes para mis peticiones
const productsRoutes = require("./routes/products.routes");

// Realmente esto no se que es pero vamos a buscar que pedo Haha //
const { body } = require("express-validator");

// Los middleware
const helloMiddleware = (rep, res, next) => {
  console.log("Hello from de middleware");

  next();
};

// ** Escriendo en la mi localhost:3000/api/v1/products ** //
app.get("/", (req, res) => {
  res.send("Hola desde nodejs 🦄");
});

// Para saber el tiempo de la peticon
app.use((req, res, next) => {
  // Obtener tiempo
  const time = new Date().toLocaleString()
  req.requestTime = time
  console.log(time)

  next()
})  

app.use("/api/v1/products", productsRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000! 🐌 ".rainbow);
});
