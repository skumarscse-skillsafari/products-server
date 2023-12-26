import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";
const router = express.Router();

// http://localhost:5000
// router.get("/", (req, res) => {
//   res.status(200).send(`
//           <h2>Welcome to products page</h2>
//           <a href="/api/v1/products">Go to products</a>
//       `);
// });

// GET
// http://localhost:5000/api/v1/products
router.get("/", getAllProducts);
// GET
// http://localhost:5000/api/v1/products/:id
router.get("/:id", getSingleProduct);

// POST
// http://loclhost:5000/api/v1/products/create
router.post("/create", createProduct);

// PUT
// id
// updatedData
// http://localhost:5000/api/v1/products/:id
router.put("/:id", updateProduct);

// Delete
// id
// http://localhost:5000/api/v1/products/:id
router.delete("/:id", deleteProduct);

export default router;
