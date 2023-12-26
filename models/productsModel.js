import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "title must be atleast 5 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "description must be atleast 5 characters"],
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      minLength: [5, "price must be atleast 1 character"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "category must be atleast 5 characters"],
    },
    image: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "imageURL must be atleast 5 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema);

export default Products;
