/* eslint-disable no-console */

import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.constant';
import { TProduct } from './product.interface';
import { Product } from './product.model';

//CREATE COURSE
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);

  return result;
};

// GET ALL COURSES
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    Product.find(),
    query,
  )
    .search(productSearchableFields)
    .filter()
    .sort()
    .fields();
  const result = await productQuery.modelQuery;

  return result;
};

// GET SINGLE COURSE
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id)

  return result;
};

// UPDATE COURSE
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
 console.log(id, payload)
 
};

// DELETE COURSE
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};


export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB
};
