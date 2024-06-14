import { z } from "zod";

const createTaskValidationSchema = z.object({
    body: z.object({
        title: z.string(),
        deadline: z.string(),
        needCertainTime: z.boolean(),
        specificTime: z.enum(['Morning', 'Midday', 'Afternoon', 'Evening']),
        isRemoval: z.string(),
        pickupPoint: z.string().optional(),
        dropOffPoint: z.string().optional(),
        movingType: z.enum(['In Person', 'Online']).optional(),
        address: z.string().optional(),
        movingItem: z.enum(['A few items', 'Apartment', 'House']).optional(),
        isStairs: z.enum(['No', 'At Pickup', 'At Delivery', 'Both Places']).optional(),
        taskDetails: z.string().optional(),
        offeredBudget: z.number().optional(),
        recaptchaToken: z.string()
    })
})

const updateTaskValidationSchema = z.object({
    body: z.object({
        title: z.string().optional(),
        deadline: z.string().optional(),
        needCertainTime: z.boolean().optional(),
        specificTime: z.enum(['Morning', 'Midday', 'Afternoon', 'Evening']).optional(),
        isRemoval: z.string().optional(),
        pickupPoint: z.string().optional(),
        dropOffPoint: z.string().optional(),
        movingType: z.enum(['In Person', 'Online']).optional(),
        address: z.string().optional(),
        movingItem: z.enum(['A few items', 'Apartment', 'House']).optional(),
        isStairs: z.enum(['No', 'At Pickup', 'At Delivery', 'Both Places']).optional(),
        taskDetails: z.string().optional(),
        suggestedBudget: z.number().optional(),
        recaptchaToken: z.string().optional()
    })
})

export const TaskValidations = {
    createTaskValidationSchema,
    updateTaskValidationSchema
}