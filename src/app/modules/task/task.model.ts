import { Schema, model } from 'mongoose';
import { TTask } from './task.interface';


const taskSchema = new Schema<TTask>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    deadline: {
        type: String,
        required: true
    },
    needCertainTime:{
        type: Boolean,
        required: true
    },
    specificTime: {
        type: String,
        required: true,
        enum: {
            values: ['Morning', 'Midday', 'Afternoon', 'Evening'],
            message: '{VALUE} is not valid'
        }
    },
    isRemoval: {
        type: String,
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
    address: {
        type: String
    },
    movingItem: {
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
    taskDetails: {
        type: String,
    },
    suggestedBudget: {
        type: Number
    },
    recaptchaToken: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Task = model<TTask>('Task', taskSchema)