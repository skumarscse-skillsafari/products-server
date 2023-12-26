import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();
// GET => Getting all the users
// url => req.url
// http://localhost:5000/api/v1/users
router.get("/", getAllUsers);

// GET => Get single user
// url => req.url
// id => req.params
// http://localhost:5000/api/v1/users/:id
router.get("/:id", getSingleUser);

// POST => Create user
// url => req.url
// data => req.body
// http://localhost:5000/api/v1/users
router.post("/", createUser);

// PUT => Update user
// url => req.url
// id => req.params
// data => req.data
// http://localhost:5000/api/v1/users/:id
router.put("/:id", updateUser);

// DELETE => Delete user
// url => req.url
// id => req.params
// http://localhost:5000/api/v1/users/:id
router.delete("/:id", deleteUser);

export default router;
