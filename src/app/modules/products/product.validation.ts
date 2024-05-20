import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    category: z.string(),
    images: z.array(z.string()),
    oldPrice: z.number(),
    currentPrice: z.number(),
    isFlashSale: z.boolean().optional(),
    isTrending: z.boolean().optional(),
    rating: z.number().optional(),
    description: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});


const updateProductValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    images: z.array(z.string()).optional(),
    oldPrice: z.number().optional(),
    currentPrice: z.number().optional(),
    isFlashSale: z.boolean().optional(),
    isTrending: z.boolean().optional(),
    rating: z.number().optional(),
    description: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema
};