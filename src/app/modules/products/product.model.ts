import { Schema, model } from "mongoose";
import { TProduct} from "./product.interface";

const productSchema = new Schema<TProduct>({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    trim: true,
  },
  oldPrice: {
    type: Number,
    trim: true
  },
  currentPrice: {
    type: Number,
    trim: true,
    required: true,
  },
  isFlashSale: {
    type: Boolean,
    default: false
  },
  isTrending: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  rating: {
    type: Number
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});



export const Product =  model<TProduct>('Product', productSchema)