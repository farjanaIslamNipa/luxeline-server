import { z } from "zod";

const categoryCreateValidation = z.object({
  body: z.object({
    name: z.string({  required_error: "Category name required",invalid_type_error: 'Category must be a string'})
  })
})

const categoryUpdateValidation = z.object({
  body: z.object({
    name: z.string({invalid_type_error: 'Category must be a string'}).optional()
  })
})

export const CategoryValidation = {
  categoryCreateValidation,
  categoryUpdateValidation
}