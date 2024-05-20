import { Schema, model } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchema = new Schema({
  name: {type: String, required: true, unique: true},
  isActive: {type: Boolean, default: true},
  isDeleted: {type: Boolean, default: false}
},
{timestamps: true})

export const Category = model<TCategory>('Category', categorySchema)