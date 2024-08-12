"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/brand:

const brand = require("../controllers/brand");

// URL: /brands

router.route("/").get(brand.list).post(brand.create);

router
  .route("/:id")
  .get(brand.read)
  .put(brand.update)
  .patch(brand.update)
  .delete(brand.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
