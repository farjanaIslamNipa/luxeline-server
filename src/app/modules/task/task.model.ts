import { Schema, model } from 'mongoose';
import { TTask } from './task.interface';

const taskSchema = new Schema<TTask>({
    taskName: {
        type: String,
        required: true,
        trim: true
    },
    completionTime: {
        type: String,
        required: true,
        enum: {
            values: ['On Time', 'Before Date', 'I am Flexible'],
            message: '{VALUE} is not valid'
        }
    },
    specificTime: {
        type: String,
        required: true,
        enum: {
            values: ['Morning', 'Midday', 'Afternoon', 'Evening'],
            message: '{VALUE} is not valid'
        }
    },
    isRemovable: {
        type: Boolean,
        required: true,
    },
    pickupPoint: {
        type: String,
    },
    dropOffPoint: {
        type: String,
    },
    taskType: {
        type: String,
        enum: {
            values: ['In Person', 'Online'],
            message: '{VALUE} is not valid, should be in person | online'
        }
    },
    taskAddress: {
        type: String
    },
    movingType: {
        type: String,
        enum: {
            values: ['A few items', 'Apartment', 'House'],
            message: '{VALUE} is not valid'
        }
    },
    isStairs: {
       type: String,
       enum: {
        values: ['No', 'At Pickup', 'At Delivery', 'Both Places'],
        message: '{VALUE} is not a valid stair type'
       } 
    },
    movingItemDetails: {
        type: String,
    },
    offeredBudget: {
        type: Number
    }
}, {timestamps: true})

export const Task = model<TTask>('Task', taskSchema)