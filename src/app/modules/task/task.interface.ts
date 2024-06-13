

export type TTask = {
    taskName: string;
    completionTime: 'On Time' | 'Before Date' | 'I am Flexible';
    specificTime: 'Morning' | 'Midday' | 'Afternoon' | 'Evening';
    isRemovable: boolean;
    pickupPoint?: string;
    dropOffPoint?: string;
    taskType?: 'In Person' | 'Online';
    taskAddress?: string;
    movingType?: 'A few items' | 'Apartment' | 'House';
    isStairs?: 'No' | 'At Pickup' | 'At Delivery' | 'Both Places';
    movingItemDetails: string;
    offeredBudget: number;
}