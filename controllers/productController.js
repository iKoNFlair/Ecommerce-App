import fs from "fs";
import productModel from "../models/productModel.js";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;

    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({
          message: "Name is required",
        });
      case !description:
        return res.status(500).send({
          message: "Description is required",
        });
      case !price:
        return res.status(500).send({
          message: "Price is required",
        });
      case !category:
        return res.status(500).send({
          message: "Category is required",
        });
      case !quantity:
        return res.status(500).send({
          message: "Quantity is required",
        });
      case !photo:
        return res.status(500).send({
          message: "Photo is required",
        });
      case !photo.size > 50000:
        return res.status(500).send({
          message: "Photo should be less than 1mb",
        });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();
    res.status(201).send({
      success: true,
      message: "Product created successfully!!",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating the product",
      error,
    });
  }
};

export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Getting all products",
      countTotal: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error,
    });
  }
};

export const getSingleProductController = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await productModel
      .findOne({ slug })
      .select("-photo")
      .populate("category");

    res.status(200).send({
      success: true,
      message: "Product fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting the product",
      error,
    });
  }
};
// get photo
export const getProductPhotoController = async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await productModel.findById(pid).select("photo");

    if (product.photo.data) res.set("Content-type", product.photo.contentType);

    res.status(200).send(product.photo.data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting the photo",
      error,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { name, slug, description, price, category, quantity, shipping } =
      req.fields;

    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({
          message: "Name is required",
        });
      case !description:
        return res.status(500).send({
          message: "Description is required",
        });
      case !price:
        return res.status(500).send({
          message: "Price is required",
        });
      case !category:
        return res.status(500).send({
          message: "Category is required",
        });
      case !quantity:
        return res.status(500).send({
          message: "Quantity is required",
        });
      case !photo:
        return res.status(500).send({
          message: "Photo is required",
        });
      case !photo.size > 1024:
        return res.status(500).send({
          message: "Photo should be less than 1mb",
        });
    }

    const { pid } = req.params;
    const product = await productModel.findByIdAndUpdate(
      pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );

    await product.save();
    res.status(201).send({
      success: true,
      message: "Product updated successfully!!",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in upating the product",
      error,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);

    if (!product)
      return res.status(500).send({
        success: false,
        message: "Product not found",
      });

    const name = product.name;
    res.status(200).send({
      success: true,
      message: "Product deleted successfully!!",
      name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting the product",
      error,
    });
  }
};
