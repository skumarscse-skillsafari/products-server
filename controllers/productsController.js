import { products } from "../data.js";
import Products from "../models/productsModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find();
    // console.log(allProducts);
    res.status(200).json({ success: true, data: allProducts });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, error: `Something went wrong. Error: ${err}` });
  }
};

export const getSingleProduct = (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((product) => product.id === Number(id));
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    res.status(200).json({ success: true, data: findProduct });
  }
};

export const createProduct = (req, res) => {
  // console.log(req.body);
  new Products(req.body)
    .save()
    .then((product) => {
      return res.status(201).json({
        success: true,
        message: `Product added successfully and the id is : ${product._id} `,
      });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: `Something went wrong. Error: ${err}` });
    });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const findProduct = await Products.findById(id);
  if (!findProduct) {
    res
      .status(200)
      .json({ success: true, message: `Product with the id: ${id} not found` });
  } else {
    await Products.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      success: true,
      message: `Product with the id: ${id} updated successfully`,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findProduct = await Products.findById(id);
    // console.log(findProduct);
    if (!findProduct) {
      res.status(200).json({
        success: true,
        message: `Product with the id: ${id} not found`,
      });
    } else {
      await Products.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: `Product with the id: ${id} deleted successfully`,
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ success: false, error: `Something went wrong. Error: ${err}` });
  }
};
