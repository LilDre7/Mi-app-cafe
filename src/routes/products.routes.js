const express = require("express");

const {
  findDelete,
  findPost,
  findGet,
  getFirstRoute,
  getPatch,
  getPut,
  helloFromProduct,
} = require("../controllers/products.controller");

/*
 * Luego pasarle a las rutas productControllers.El nombre de la funcion
 * const productControllers = require("../controllers/products.controller")
 */

const router = express.Router();

// Middleware
const validProduct = (req, res, next) => {
  const name = req.body.name;

  if (!name) {
    res.status(400).json({
      message: "Name is required",
    });
  }

  next();
};

router.get("/", getFirstRoute);

router.get("/:id", findGet);

router.post("/", helloFromProduct, findPost, validProduct);

router.put("/", getPut);

router.patch("/:id", helloFromProduct, getPatch);

router.delete("/:id", findDelete);

module.exports = router;
