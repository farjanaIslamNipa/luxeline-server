import { z } from "zod";

const createTaskValidationSchema = z.object({
    body: z.object({
        taskName: z.string(),
        completionTime: z.enum(['On Time', 'Before Date', 'I am Flexible']),
        specificTime: z.enum(['Morning', 'Midday', 'Afternoon', 'Evening']),
        isRemovable: z.boolean(),
        pickupPoint: z.string().optional(),
        dropOffPoint: z.string().optional(),
        taskType: z.enum(['In Person', 'Online']).optional(),
        taskAddress: z.string().optional(),
        movingType: z.enum(['A few items', 'Apartment', 'House']).optional(),
        isStairs: z.enum(['No', 'At Pickup', 'At Delivery', 'Both Places']).optional(),
        movingItemDetails: z.string().optional(),
        offeredBudget: z.number().optional(),
    })
})

const updateTaskValidationSchema = z.object({
    body: z.object({
        taskName: z.string().optional(),
        completionTime: z.enum(['On Time', 'Before Date', 'I am Flexible']).optional(),
        specificTime: z.enum(['Morning', 'Midday', 'Afternoon', 'Evening']).optional(),
        isRemovable: z.boolean().optional(),
        pickupPoint: z.string().optional(),
        dropOffPoint: z.string().optional(),
        taskType: z.enum(['In Person', 'Online']).optional(),
        taskAddress: z.string().optional(),
        movingType: z.enum(['A few items', 'Apartment', 'House']).optional(),
        isStairs: z.enum(['No', 'At Pickup', 'At Delivery', 'Both Places']).optional(),
        movingItemDetails: z.string().optional(),
        offeredBudget: z.number().optional(),
    })
})

export const TaskValidations = {
    createTaskValidationSchema,
    updateTaskValidationSchema
}