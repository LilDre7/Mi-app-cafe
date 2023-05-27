// Este es mi controlador de prueba

// Middleware
exports.helloFromProduct = (req, res, next) => {
  console.log("Hello from the product route");
  next();
};

// GET RUOUTE FIRTS
exports.getFirstRoute = (req, res) => {
  const time = req.requestTime;

  res.status(200).json({
    requestTime: time,
    message: "Hello from the products route",
    product: req.body,
  });
};

// GET
exports.findGet = (req, res) => {
  const time = req.requestTime;

  res.json({
    requestTime: time,
    message: "Obtaining the products",
  });
};

// POST
exports.findPost = (req, res, next) => {
  const time = req.requestTime;

  res.json({
    requestTime: time,
    message: "Post request for the API",
  });

  next();
};

// PUT
exports.getPut = (req, res) => {
  const time = req.requestTime;

  res.json({
    requestTime: time,
    message: "Put request for the products",
  });
};

// PATCH
exports.getPatch = (req, res, next) => {
  const id = req.params.id;
  const time = req.requestTime;

  res.json({
    requestTime: time,
    message: "Patch request for the products",
    id,
  });
  next();
};

// DELETE
exports.findDelete = (req, res) => {
  const id = req.params.id;
  const time = req.requestTime;

  res.json({
    requestTime: time,
    message: "Deleting the products",
    id,
  });
};
