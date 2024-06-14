

export type TTask = {
    title: string;
    deadline: string;
    needCertainTime: boolean;
    specificTime: 'Morning' | 'Midday' | 'Afternoon' | 'Evening';
    isRemoval: string;
    taskType?: 'In Person' | 'Online';
    pickupPoint?: string;
    dropOffPoint?: string;
    address?: string;
    movingItem?: 'A few items' | 'Apartment' | 'House';
    isStairs?: 'No' | 'At Pickup' | 'At Delivery' | 'Both Places';
    taskDetails: string;
    suggestedBudget: number;
    recaptchaToken: string;
}